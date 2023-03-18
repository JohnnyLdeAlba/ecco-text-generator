import { t_bitmap, t_bitmaps } from "./bitmap-lib";
import { t_plot_state } from "./plot-state-lib";

export class t_rgba {

  red;
  green;
  blue;
  alpha;

  constructor(
    r = 0,
    g = 0,
    b = 0,
    a = 1) {

    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
  }
}

const filter_color = (canvas, color) => {

  const context = canvas.getContext("2d");

  const ImageData = context.getImageData(
    0, 0, canvas.width, canvas.height);

  for (let index = 0; index < ImageData.data.length / 4; index++) {

    let r = ImageData.data[index * 4];
    let g = ImageData.data[index * 4 + 1];
    let b = ImageData.data[index * 4 + 2];
    let a = ImageData.data[index * 4 + 3];

    r = r * color.red;
    g = g * color.green;
    b = b * color.blue;
    a = a * color.alpha

    ImageData.data[index * 4] = parseInt(r);
    ImageData.data[index * 4 + 1] = parseInt(g);
    ImageData.data[index * 4 + 2] = parseInt(b);
    ImageData.data[index * 4 + 3] = parseInt(a);
  }

  context.putImageData(ImageData, 0, 0);
  return canvas;
}

// change plotstate to this.

export function ps_process(plotter) {

  const colorFilter = plotState.colorFilter;
  const bitmap = plotter.getBitmap(plotState.index);
  if (!bitmap)
    return;

  const source = bitmap.source;

  const width = source.width;
  const height = source.height;

  const viewport = plotter.viewport;
  const context = viewport.getContext("2d");

  context.imageSmoothingEnabled = false;
  // context.imageSmoothingQuality = "high";

  context.translate(plotState.x, plotState.y);

  switch (plotState.flip) {

    case PlotState.HFlip: {

      context.translate(plotState.scale * width/2, 0);
      context.scale(-1, 1);
      context.translate(-plotState.scale * width/2, 0);

      break;
    }

    case PlotState.VFlip: {

      context.translate(0, plotState.scale * height/2);
      context.scale(1, -1);
      context.translate(0, -plotState.scale * height/2);

      break;
    }

    case PlotState.HFlip: {

      context.translate(
        plotState.scale * width/2,
        plotState.scale * bitmap.height/2
      );

      context.scale(-1, -1);

      context.translate(
        -plotState.scale * width/2,
        -plotState.scale * bitmap.height/2
      );

      break;
    }
  }
    
  if (plotState.scale != 0)
    context.scale(plotState.scale, plotState.scale);

  if (plotState.rotate != 0) {

    context.translate(width/2, height/2);
    context.rotate(plotState.rotate * Math.PI/180);
    context.translate(-width/2, -height/2);
  }

  const canvas = (color_filter => {

    if (!color_filter)
      return null;
     
    const ps = plotter.createPS();
    ps.index = plotState.index;

    const canvas = plotter.createProcessedBitmap(
      width, height, [ ps ]
    );

    filterColor(canvas, colorFilter);
    return canvas;

  })(colorFilter);

  if (canvas)
    context.drawImage(canvas, 0, 0, width, height);
  else
    context.drawImage(source, 0, 0, width, height);

  context.setTransform(1, 0, 0, 1, 0, 0);
}

export class t_plotter {

  canvas;
  viewport;

  width;
  height;

  bitmaps;
  psArray;
  
  constructor() {

    this.canvas = null;
    this.viewport = null;

    this.width = 0;
    this.height = 0;

    this.bitmaps = new t_bitmaps();
    this.psArray = [];
  }

  initialize(w = 0, h = 0) {

    this.createViewport(w, h);
    this.createLayers(
      config.plotterTotalLayers);
  }

  createViewport(width, height) {

    this.width = width;
    this.height = height;

    const viewport = create_canvas(width, height);
    this.viewport = viewport;
  }

  addLayer() {
    this.psArray.push([]);
  }

  createLayers(total_layers) {

    for (let index = 0; index < total_layers; index++)
      this.add_layer();
  }

  setCanvas(canvas) { this.canvas = canvas; }

  async addBitmap(bitmapURI, serial) {
    return await this.bitmaps.add_bitmap(bitmapURI, serial);
  }

  async addCanvasArray(canvas_array = []) {
    return await this.bitmaps.addCanvasArray(canvas_array);
  }

  removeBitmap(id) { this.bitmaps.removeBitmap(id); }

  getBitmap(id) { return this.bitmaps.getBitmap(id); }

  createProcessedBitmap(
    w, h, psArray) {

    const plotter = new t_plotter();

    plotter.initialize(w, h);
    plotter.bitmaps = this.bitmaps;

    plotter.reset();   

    plotter.addPSArray(psArray);
    plotter.clear();
    plotter.process();

    return plotter.viewport;
  }

  createPS() {
    return new t_plot_state()
  }

  addPS(plotState) {

    const _plotState = plotState.copy();

    if (_plotState.process == null)
      _plotState.process = ps_process(this, plotState);

    this.psArray[_plotState.layer].push(_plotState);
  }

  addPSArray(psArray) {

    for (const ps of psArray)
      this.add_ps(ps, ps.process);
  }

  reset() {

    for (let index = 0; index < this.psArray.length; index++) {

      this.psArray[index] = null;
      this.psArray[index] = [];
    }

  }

  process(reset = false) {

    let x = 0, y = 0;
    for (x = 0; x < this.psArray.length; x++) {

      for (y = 0; y < this.psArray[x].length; y++)
        this.psArray[x][y].process();

      if (reset)
        this.psArray[x] = [];
    }
  }

  clear() {

    const context = this.viewport.getContext("2d");
    context.clearRect(
      0, 0,
      this.width,
      this.height
    );
  }

  fill() {

    const context = this.viewport.getContext("2d");

    context.fillStyle = "#000000";
    context.fillRect(
      0, 0,
      this.width,
      this.height
    );
  }

  render() {

    if (this.canvas == null)
      return;

    const context = this.canvas.getContext("2d");

    context.drawImage(
      this.viewport,
      0, 0,
      this.width,
      this.height
    );
  }
}

export class t_frame_rate {

  refresh;
  run_logic;

  cycle;
  frames_per_second;
  frame_counter;
  delay;

  process;
  render;

  constructor() {

    this.refresh = 1;
    this.run_logic = false;

    this.cycle = 0;
    this.frames_per_second = 60;
    this.frame_counter = 0;
    this.delay = 0;

    this.process = () => {};
    this.render = () => {};
  }

  exit() { this.refresh = -1; }

  update_frame() {

    if (this.refresh == -1)
      return;

    if (this.refresh == 1) {

      this.refresh = 0;

      if (this.frame_counter != this.frames_per_second)
        this.delay = this.cycle/this.frames_per_second;

      this.cycle = 0;
      this.frame_counter = 0;

      setTimeout(() => this.refresh = 1, 1000);
    }

    if (this.update_logic) {

      this.process();
      this.update_logic = false;
    }

    this.cycle++;

    if (this.cycle >= (this.frame_counter * this.delay)) {

      this.render();

      this.frame_counter++;
      this.update_logic = true;
    }
    
    requestAnimationFrame(() => this.update_frame() );
  }
}

export default t_plotter;
