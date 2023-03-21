import { create_canvas, t_bitmap, t_bitmaps } from "./bitmap";
import { t_plot_state } from "./plot-state";
import { ps_process_default } from "./processes";

export const Plotter = {
  totalLayers: 7
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
      Plotter.totalLayers);
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

  createLayers(totalLayers) {

    for (let index = 0; index < totalLayers; index++)
      this.addLayer();
  }

  setCanvas(canvas) { this.canvas = canvas; }

  async addBitmap(bitmapURI, hash = '', serial = 0) {
    return await this.bitmaps.addBitmap(bitmapURI, hash, serial);
  }

  async addURIArray(uriArray) {
    return await this.bitmaps.addURIArray(uriArray);
  }

  addCanvasArray(canvasArray = []) {
    return this.bitmaps.addCanvasArray(canvasArray);
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
      _plotState.process = () => { ps_process_default(this, plotState) }

    this.psArray[_plotState.layer].push(_plotState);
  }

  addPSArray(psArray) {
    psArray.forEach(ps => this.addPS(ps));
  }

  reset() {
    this.psArray = [];
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

export default t_plotter;
