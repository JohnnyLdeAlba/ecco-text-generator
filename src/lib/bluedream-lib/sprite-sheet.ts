import { load_image, create_canvas } from "./bitmap";

export class t_sprite_sheet {

  width;
  height;

  totalRows;
  totalColumns;
  totalFrames;

  frameWidth;
  frameHeight;

  canvas;

  constructor() {

    this.width = 0;
    this.height = 0;

    this.totalRows = 0;
    this.totalColumns = 0;
    this.totalFrames = 0;

    this.frameWidth = 0;
    this.frameHeight = 0;

    this.canvas = null;
  }

  extractFrame(index) {

    const row = parseInt(index / this.totalColumns);

    const column = index - (row * this.totalColumns);
    const x = column * this.frameWidth;
    const y = row * this.frameHeight;

    const canvas = create_canvas(
     this.frameWidth,
     this.frameHeight
    );

    const context = canvas.getContext("2d");

    context.drawImage(
      this.canvas,
      x, y,
      this.frameWidth,
      this.frameHeight,
      0, 0,
      this.frameWidth,
      this.frameHeight);

    return canvas;
  }

  extractAllFrames(spriteSheet) {

    const frames = new Array();

    for (let index = 0; index < this.totalFrames; index++)
      frames[index] = this.extractFrame(index);

    return frames;
  }

}

export const create_sprite_sheet = async (
  filename,
  cellWidth,
  cellHeight) => {

  const spriteSheet = new t_sprite_sheet();

  const bitmap = await load_image(filename)
    .catch(err => null);

  if (bitmap == null) { 

    console.log("Error: Unable to load sprite sheet.");	  
    return null;
  }

  const width = bitmap.width;
  const height = bitmap.height;

  const canvas = create_canvas(width, height);
  const context = canvas.getContext("2d");

  context.drawImage(bitmap, 0, 0, width, height);
  spriteSheet.canvas = canvas;

  spriteSheet.width = width;
  spriteSheet.height = height;

  const totalColumns = Math.ceil(width/cellWidth);
  const totalRows = Math.ceil(height/cellHeight);

  spriteSheet.totalColumns = totalColumns;
  spriteSheet.totalRows = totalRows;

  spriteSheet.frameWidth = width / totalColumns;
  spriteSheet.frameHeight = height / totalRows;
  spriteSheet.totalFrames = totalColumns * totalRows;

  return spriteSheet;
}

export const extract_canvas_array = async (
    filename,
    cellWidth,
    cellHeight
  ) => {

  const spriteSheet = await create_sprite_sheet(
    filename, cellWidth, cellHeight);

  if (spriteSheet == null)
    return [];

  return spriteSheet.extractAllFrames(spriteSheet);
}

export default extract_canvas_array;
