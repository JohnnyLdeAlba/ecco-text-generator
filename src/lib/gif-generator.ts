import GIF from "gif.js";

import { t_plotter } from "./bluedream-lib/plotter";
import { ps_process_wave } from "./bluedream-lib/processes";
import { plot_composition } from "./bluedream-lib/plot-composition";

export const copy_canvas = (canvas, width = 0, height = 0) => {

  width = width ? width : canvas.width;
  height = height ? height : canvas.height;

  const _canvas = document.createElement('canvas');

  _canvas.width = width;
  _canvas.height = height;

  let context = _canvas.getContext('2d');

  context.imageSmoothingEnabled = false;
  context.drawImage(canvas, 0, 0, width, height);

  return _canvas;
} 

export class t_gif_generator {

  gen;
  plotter;
  bitmaps;
  background;

  resolution;
  width;
  height;
  frameSkip;
  waveformIndex;

  abort;
  setProgressIndex;
  setBlob;

  constructor() {

    this.gen = null;
    this.plotter = null;
    this.bitmaps = null;
    this.background = 0;

    this.resolution = '';
    this.width = 0;
    this.height = 0;
    this.frameSkip = false;
    this.waveformIndex = 0;

    this.abort = () => {};
    this.setProgressIndex = progress => {};
    this.setBlob = blob => {}
  }

  initialize(resolution) {

    this.plotter = new t_plotter();
    this.plotter.initialize(
      320, 240);   
    this.plotter.bitmaps = this.bitmaps;

    this.com.font.resetAnimated();

    const gen = new GIF({
      quality: 0,
      workers: 64,
      transparent: null
    });

    gen.on("progress", progressIndex =>
      this.setProgressIndex(progressIndex));
    gen.on('finished', blob => this.setBlob(blob));

    this.abort = () => gen.abort();
    this.gen = gen;
  }

  plotBackground(frameIndex) {

    const ps = this.plotter.createPS();

    ps.index = this.background;
    ps.process = () => ps_process_wave(
      this.plotter, ps,
      this.waveformIndex,
      frameIndex);

    this.plotter.addPS(ps);
  }

  plotComposition(com) {

    const psArray = plot_composition(com);
    this.plotter.addPSArray(psArray);
  }

  render() {

    this.plotter.fill();
    this.plotter.process();
  }

  generate() {

    const gen = this.gen;
    const delay = this.frameSkip ?
      parseInt(1000/30) : parseInt(1000/60);

    for (let index = 0; index < 255; index++) {

      if (this.frameSkip && ((index % 2) == 1))
        continue;

      this.plotBackground(index);
      this.plotComposition(this.com);
      this.render();

      const canvas = copy_canvas(
        this.plotter.viewport,
        this.width, this.height
      );

      gen.addFrame(canvas, { 
        delay: delay,
        dispose: -2
       });
    }

    gen.render();
  }
}

export default t_gif_generator;
