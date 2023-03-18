export const create_response = (code, message, payload = null) => {

  return { 
    code: code,
    message: message,
    payload: payload
  }
}

export const create_canvas = (w, h) => {

  const canvas = document.createElement('canvas');

  canvas.width = w;
  canvas.height = h;

  return canvas;
}

export const load_image = async (bitmapURI) => {

  return new Promise((resolve, reject) => {

    const image = new Image();
    image.src = bitmapURI;

    image.addEventListener(
      'load',
      () => resolve(image)
    );

    image.addEventListener(
      'error',
      () => reject(null)
    );
  });
};

export class t_bitmap {

  serial;
  id;
  hash;
  source;

  constructor() {

    this.id = 0;
    this.hash = '';
    this.source = null;
  }

  async load(bitmapURI) {

    const source = await load_image(bitmapURI)
      .catch(error => null);

    this.source = source;
    return source;
  }
};

export class t_bitmaps {

  serial;
  bitmapMap;
  hashMap;
  bitmapArray;

  constructor() {

    this.serial = 0;

    this.bitmapMap = new Map();
    this.hashMap = new Map();
    this.bitmapArray = [];
  }

  async addBitmap(bitmapURI, hash = '', serial = -1) {

    if (hash != '') {

      const bitmap = this.bitmapMap.get(hash);
      if (bitmap)
        return create_response(0, '', bitmap.id);
    }

    if (await bitmap.load(bitmapURI) == null)
      return create_response(-1, "loadBitmapFailed", -1);

    const bitmap = new t_bitmap();  

    if (serial == -1)
      serial = ++this.serial;

    bitmap.id = serial;
    bitmap.hash = hash = hash == '' ? serial : hash;

    this.bitmapMap.set(bitmap.id, bitmap);
    this.hashMap.set(hash, bitmap);
    this.bitmapArray.push(bitmap);

    return create_response(0, '', bitmap.id);
  }

  addCanvas(canvas, hash = '', serial = -1) {

    if (hash != '') {

      const bitmap = this.bitmapMap.get(hash);
      if (bitmap)
        return create_response(0, '', bitmap.id);
    }

    const bitmap = new t_bitmap();

    if (serial == -1)
      serial = ++this.serial;

    bitmap.id = serial;
    bitmap.hash = hash = hash == '' ? serial : hash;
    bitmap.source = canvas;

    this.bitmapMap.set(bitmap.id, bitmap);
    this.hashMap.set(hash, bitmap);
    this.bitmapArray.push(bitmap);

    return create_response(0, '', bitmap.id);
  }

  async addBitmapURIs(uriArray) {
    uriArray.forEach(
      async uri => await this.addBitmap(uri)
    );
  }

  addCanvasArray(canvasArray) {
    canvasArray.forEach(
      canvas => this.addCanvas(canvas)
    );
  }

  removeBitmap(bitmapId) {

    const bitmap = this.bitmapMap.get(bitmapId);
    if (!bitmap)
      return;

    this.bitmapMap.delete(bitmap.id);
    this.hashMap.delete(bitmap.hash);

    let index = 0;
    for (const bitmap of this.bitmaps) {

      if (bitmapId == bitmap.id) {

	const lastIndex = this.bitmaps.length - 1;

        this.bitmaps[index] = this.bitmaps[lastIndex];
        this.bitmaps.pop();

	break;
      }

      index++;
    }
  }

  getBitmap(bitmapId) {
    return this.bitmapMap.get(bitmapId);
  }

  getBitmapByHash(hash) {
    return this.hashMap.get(hash);
  }
};
