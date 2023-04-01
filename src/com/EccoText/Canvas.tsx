import {
  useEffect,
  createContext, useContext,
  useRef, useState } from "react";

import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

import GIF from "gif.js";

import { ThemeContext } from "../../com/theme";

import { t_hook } from "../../com/lib/hook";
import { Button } from "../../com/Button";
import { Card } from "../../com/Card";
import { Backdrop } from "../../com/Backdrop";
import { t_plot_state } from "../../lib/bluedream-lib/plot-state";
import { t_plotter } from "../../lib/bluedream-lib/plotter";

import { RippleTableId } from "../../lib/bluedream-lib/ecco-wave-generator";
import { ps_process_wave } from "../../lib/bluedream-lib/processes";

import { t_frame_rate } from "../../lib/bluedream-lib/frame-rate";
import { extract_canvas_array } from "../../lib/bluedream-lib/sprite-sheet";

import { t_font, t_composition } from "../../lib/bluedream-lib/composition";
import { plot_composition } from "../../lib/bluedream-lib/plot-composition";
import Fonts from "./fonts";

function copy_canvas(canvas, width = 0, height = 0) {

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

class t_gif_generator {

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
        delay: parseInt(1000/60),
        dispose: -2
       });
    }

    gen.render();
  }
}

class t_canvas extends t_hook {

  frameRate;
  frameIndex;

  canvas;
  plotter;
  com;
  tokens;

  resolution;
  width;
  height;
  frameSkip;

  text;
  align;
  vAlign;
  baseline;
  trimSpaces;
  letterSpacing;
  lineHeight;
  selectSpacing;
  cursorPosition;
  waveformIndex;

  font;
  background;
  theme;

  fontMap;
  backgroundMap;
  uriMap;
  themeMap;

  constructor() {

    super();

    this.state = "init";

    this.frameIndex = 0;
    this.frameRate = new t_frame_rate();
    this.canvas = null;
    this.plotter = null;
    this.com = null;
    this.tokens = new Map();

    this.resolution = '';
    this.width = 0;
    this.height = 0;
    this.frameSkip = false;

    this.text = '';
    this.align = '';
    this.vAlign = '';
    this.baseline = "bottom";
    this.trimSpaces = true;
    this.letterSpacing = 0;
    this.lineHeight = 0;
    this.selectSpacing = 0;
    this.cursorPosition = -1;
    this.cursorFilter = null;
    this.waveformIndex = RippleTableId;

    this.font = null;
    this.fontType = '';
    this.background = 0;
    this.theme = '';

    this.fontMap = new Map();
    this.backgroundMap = new Map();
    this.uriMap = new Map();
    this.themeMap = new Map();

    this.progressVisible = false;;
    this.progressIndex = 0;

    this.downloadVisible = false;
    this.downloadBlob = null;
    this.downloadType = '';
  }

  showProgress(visible) {

    if (this.progressVisible == visible)
      return;

    this.progressVisible = visible;
    this.commit();
  }

  setProgressIndex(progressIndex) {

    if (this.progressIndex == progressIndex)
      return;

    progressIndex = Math.ceil(progressIndex * 100);

    this.progressIndex = progressIndex;
    this.commit();
  }

  setBlob(blob) {

    this.setProgressIndex(0);
    this.showProgress(false);

    this.downloadVisible = true;
    this.downloadBlob = blob;
    this.downloadType = "gif";
  }

  closeDownload() {

    this.downloadVisible = false;
    this.downloadBlob = null;
    this.downloadType = '';

    this.commit();
  }

  setAlign(align) {
    
    if (align == this.align)
      return;

    this.align = align;
    this.commit();
  }

  setVAlign(vAlign) {
    
    if (vAlign == this.vAlign)
      return;

    this.vAlign = vAlign;
    this.commit();
  }

  setBaseline(baseline) {
    
    if (baseline == this.baseline)
      return;

    this.baseline = baseline;
    this.commit();
  }

  setCanvas(canvas) {

    if (canvas == this.canvas)
      return;

    this.canvas = canvas;
    this.commit();
  }

  toggleTrimSpaces() {

    this.trimSpaces = !this.trimSpaces;
    this.commit();
  }

  addTheme(hash, font, background) {

    this.themeMap.set(hash,
      { font: font, background: background }
    );
  }

  async addFont(font) {

    this.uriMap.set(font.imageHash, font.imageURI);

    const canvasArray = await extract_canvas_array(
      font.imageURI,
      font.width,
      font.height
    );

    font.bitmapIndex = this.plotter
      .addCanvasArray(canvasArray);

    this.fontMap.set(font.hash, font);

    if (font.animated.imageHash != '') {

      if (this.uriMap.get(font.animated.imageHash))
        return;

      this.uriMap.set(
        font.animated.imageHash,
        font.animated.imageURI);

      const canvasArray = await extract_canvas_array(
        font.animated.imageURI,
        font.animated.width,
        font.animated.height
      );

      font.animated.bitmapIndex = this.plotter
        .addCanvasArray(canvasArray);
    }
  }

  async addBackground(hash, imageURI) {
    
    if (this.uriMap.get(hash))
      return;

    this.uriMap.set(hash, imageURI);

    const response = await this.plotter
      .addBitmap(imageURI);
 
    const bitmapIndex = response.payload;
    this.backgroundMap.set(hash, bitmapIndex);
  }

  setTheme(hash) {

    const theme = this.themeMap.get(hash);
  
    if (!theme)
      return;
    else if (theme == this.theme)
      return;

    this.progma.removeAllSelectedItems("themes");
    this.progma.addSelectedItem("themes", hash);

    this.setFont(theme.font);
    this.setBackground(theme.background);
  }

  setFont(hash) {

    const font = this.fontMap.get(hash);

    if (!font)
      return;
    else if (font == this.font)
      return;

    if (font.type != this.fontType)
      this.text = '';

    this.align = font.align;
    this.vAlign = font.vAlign;
    this.baseline = font.baseline;
    this.trimSpaces = font.trimSpaces;

    this.letterSpacing = font.letterSpacing;
    this.lineHeight = font.lineHeight;
    this.selectSpacing = font.selectSpacing;
    this.cursorFilter = font.cursorFilter;

    this.progma.removeAllSelectedItems("fonts");
    this.progma.addSelectedItem("fonts", hash);

    this.tokens.set("fontType", font.type);

    this.font = font;
    this.fontType = font.type;
    this.commit();
  }
 
  setBackground(hash) {

    const bitmapIndex = this.backgroundMap.get(hash);
    if (!bitmapIndex)
      return;

    this.progma.removeAllSelectedItems("backgrounds");
    this.progma.addSelectedItem("backgrounds", hash);

    this.background = bitmapIndex;
    this.commit();
  }

  setResolution(resolution) {

    switch (resolution) {

      case "resUltraHigh": {

        this.resolution = resolution;
        this.width = 640;
        this.height = 480;
        this.frameSkip = false;

        break;
      }

      case "resHigh": {

        this.resolution = resolution;
        this.width = 640;
        this.height = 480;
        this.frameSkip = true;

        break;
      }

      case "resLow": {

        this.resolution = resolution;
        this.width = 320;
        this.height = 240;
        this.frameSkip = true;

        break;
      }

      default: {

        this.resolution = "resMedium";
        this.width = 320;
        this.height = 240;
        this.frameSkip = false;

        break;
      }
    }

    this.progma.removeAllSelectedItems("resolutions");
    this.progma.addSelectedItem("resolutions", resolution);

    this.commit();
  }

  updateComposition() {

    const com = new t_composition();

    com.setFont(this.font);
    com.setAlign(this.align);
    com.setVAlign(this.vAlign);
    com.setBaseline(this.baseline);
    com.trimSpaces = this.trimSpaces;
    com.cursorPosition = this.cursorPosition;
    
    com.generate(
      320, 240, 
      this.text
    );

    return com;
  }

  updateFrame() {

    this.frameIndex = this.frameIndex > 255 ?
      0 : this.frameIndex + 1;
  }

  plotBackground(frameIndex) {

    const ps = this.plotter.createPS();

    ps.index = this.background;
    ps.process = () => ps_process_wave(
      this.plotter, ps,
      this.waveformIndex,
      frameIndex);

    this.plotter.addPS(ps);
    this.updateComposition();

  }

  plotComposition(com) {

    const psArray = plot_composition(com);
    this.plotter.addPSArray(psArray);
  }

  plot() {

    this.plotter.fill();
    this.plotter.process();
  }

  updateViewport() {

    const com = this.updateComposition();

    this.plotBackground(this.frameIndex);
    this.plotComposition(com);
    this.plot();
    this.updateFrame();
  }

  generate() {

    this.showProgress(true);

    const gen = new t_gif_generator();

    gen.bitmaps = this.plotter.bitmaps;
    gen.background = this.background;

    gen.resolution = this.resolution;
    gen.width = this.width;
    gen.height = this.height;
    gen.frameSkip = this.frameSkip;
    gen.waveformIndex = this.waveformIndex;
    gen.com = this.updateComposition();

    gen.setProgressIndex = progressIndex =>
      this.setProgressIndex(progressIndex);
    gen.setBlob = blob => this.setBlob(blob);
    
    gen.initialize();

    this.abort = () => {

      gen.abort();
      this.setProgressIndex(0);
      this.showProgress(false);
    }

    gen.generate();
  }

  setWaveformIndex(value) {
    this.waveformIndex = value;
    this.commit();
  }

  render() {
    this.plotter.render();
  }

  handleInput(key) {

    if (this.state != "ready")
      return;

    if (this.cursorPosition < 0)
      this.cursorPosition = this.text.length;

    switch (key) {

      case "ArrowLeft": {
 
        if (this.cursorPosition > 0)
          this.cursorPosition--;

        break;
      }

      case "ArrowRight": {
 
        if (this.cursorPosition < this.text.length)
          this.cursorPosition++;

        break;
      }

      case "Delete": {

        const startText = this.text.slice(0, this.cursorPosition);
        const endText = this.text.slice(this.cursorPosition + 1);

        this.text = startText + endText;
        break;
      }

      case "Backspace": {

        if (this.cursorPosition == 0) {

          const startText = this.text.slice(0, this.cursorPosition);
          const endText = this.text.slice(this.cursorPosition + 1);

          this.text = startText + endText;
          break;
        }

        const startText = this.text.slice(0, this.cursorPosition - 1);
        const endText = this.text.slice(this.cursorPosition);

        this.text = startText + endText;

        if (this.cursorPosition > 0)
          this.cursorPosition--;

        break;
      }

      default: {

        const char = this.font.get(
          key == "Enter" ? '\n' : key.toLowerCase() );

        if (!char)
          return;

        if (this.cursorPosition < this.text.length) {

          const startText = this.text.slice(0, this.cursorPosition);
          const endText = this.text.slice(this.cursorPosition);

          this.text = startText + char.hash + endText;
          this.cursorPosition++;
        }
        else {

          this.text+= char.hash;
          this.cursorPosition = this.text.length;
        }

        break;
      }
    }
  }

  async initialize(canvas) {

    if (!canvas)
      return;

    window.addEventListener("keydown", event => {

      this.handleInput(event.key);
      event.preventDefault();
    });

    this.state = "initPending";
    this.enableLoading();

    this.canvas = canvas;
    this.plotter = new t_plotter();

    this.plotter.initialize(320, 240);    
    this.plotter.setCanvas(canvas);

    const primaryFont = Fonts.font_crimson();
    await this.addFont(primaryFont);
    await this.addFont(Fonts.font_deep_blue());
    await this.addFont(Fonts.font_elvish());
    await this.addFont(Fonts.font_home_bay());
    await this.addFont(Fonts.font_jurassic());
    await this.addFont(Fonts.font_last_fight());
    await this.addFont(Fonts.font_mordor());
    await this.addFont(Fonts.font_night());
    await this.addFont(Fonts.font_system());
    await this.addFont(Fonts.font_system_yellow());
    await this.addFont(Fonts.font_system_red());
    await this.addFont(Fonts.font_thanos());
    await this.addFont(Fonts.font_the_machine());
    await this.addFont(Fonts.font_vaporwave());
    await this.addFont(Fonts.font_volcano());

    this.fontMap.forEach(font => font.animated = primaryFont.animated);

    await this.addBackground(
      "crimsonBackground",
      "/eccotext/theme/backgrounds/crimson.png"
    );

    await this.addBackground(
      "deepBlueBackground",
      "/eccotext/theme/backgrounds/deep-blue.png"
    );

    await this.addBackground(
      "elvishBackground",
      "/eccotext/theme/backgrounds/elvish.png"
    );

    await this.addBackground(
      "homeBayBackground",
      "/eccotext/theme/backgrounds/home-bay.png"
    );

    await this.addBackground(
      "jurassicBackground",
      "/eccotext/theme/backgrounds/jurassic-beach.png"
    );

    await this.addBackground(
      "mordorBackground",
      "/eccotext/theme/backgrounds/mordor.png"
    );

    await this.addBackground(
      "nightBackground",
      "/eccotext/theme/backgrounds/night.png"
    );

    await this.addBackground(
      "thanosBackground",
      "/eccotext/theme/backgrounds/thanos.png"
    );

    await this.addBackground(
      "lastFightBackground",
      "/eccotext/theme/backgrounds/the-last-fight.png"
    );

    await this.addBackground(
      "theMachineBackground",
      "/eccotext/theme/backgrounds/the-machine.png"
    );

    await this.addBackground(
      "vaporwaveBackground",
      "/eccotext/theme/backgrounds/vaporwave.png"
    );

    await this.addBackground(
      "volcanoBackground",
      "/eccotext/theme/backgrounds/volcano.png"
    );

    this.addTheme("crimsonTheme", "crimsonFont", "crimsonBackground");
    this.addTheme("deepBlueTheme", "deepBlueFont", "deepBlueBackground");
    this.addTheme("elvishTheme", "elvishFont", "elvishBackground");
    this.addTheme("homeBayTheme", "homeBayFont", "homeBayBackground");
    this.addTheme("jurassicTheme", "jurassicFont", "jurassicBackground");
    this.addTheme("lastFightTheme", "lastFightFont", "lastFightBackground");
    this.addTheme("mordorTheme", "mordorFont", "mordorBackground");
    this.addTheme("nightTheme", "nightFont", "nightBackground");
    this.addTheme("thanosTheme", "thanosFont", "thanosBackground");
    this.addTheme("theMachineTheme", "theMachineFont", "theMachineBackground");
    this.addTheme("vaporwaveTheme", "vaporwaveFont", "vaporwaveBackground");
    this.addTheme("volcanoTheme", "volcanoFont", "volcanoBackground");

    this.setTheme("homeBayTheme");
    this.setResolution("resMedium");

    this.progma.set("backgrounds", galleryItem => this.onBackgroundChange(galleryItem));
    this.progma.set("fonts", galleryItem => this.onFontChange(galleryItem));
    this.progma.set("themes", galleryItem => this.onThemeChange(galleryItem));
    this.progma.set("resolutions", galleryItem => this.setResolution(galleryItem.hash));

    this.frameRate.process = () => this.updateViewport();
    this.frameRate.render = () => this.render();
    this.frameRate.updateFrame();

    this.disableLoading();
    this.state = "ready";

    this.refresh();
  }

  onThemeChange(galleryItem) {
    this.setTheme(galleryItem.hash);
  }

  onBackgroundChange(galleryItem) {
    this.setBackground(galleryItem.hash);
  }

  onFontChange(galleryItem) {
    this.setFont(galleryItem.hash);
  }

  set(params) {

    const { progma, refresh } = params;

    this.progma = progma;
    this.refresh = refresh;
  }

  async process(params) {

    const { canvas } = params;

    switch (this.state) {

      case "init": {

        await this.initialize(canvas);
        break;
      }
    }
  }
}

export const CanvasContext = createContext(new t_canvas());

export const useCanvas  = ({ progma = null }) => {
  
  const canvas  = useContext(CanvasContext);
  const [ serial, setSerial ] = useState(0);

  canvas.set({
    progma: progma,
    refresh: () => setSerial(serial + 1)
  });

  return canvas;
}

export const ProgressDialog = ({
  title = '',
  show = false,
  progressIndex = 0,
  onAbort
}) => {

  show = true;
  progressIndex = 50;

  return (
    <Backdrop show={ show }>
      <div className={`
        sm:mx-auto sm:my-4
        w-full sm:w-[500px]
        flex-1 h-full`}>
        <Card title={ title }
          className={`h-full sm:h-fit`}>
          <div className={`flex flex-col items-end m-4`}>
            <div className={`w-full mb-2`}>
              <LinearProgress
                variant="determinate"
                value={ progressIndex }
                classes={{ root: "mui-darksea-LinearProgress" }} />
            </div>
            <div className={`mb-4 font-medium text-lg`}>
              { progressIndex }%
            </div>
            <Button
              title="Cancel"
              rounded="full"
              onClick={ onAbort } />
          </div>
        </Card>
      </div>
    </Backdrop>
  );
}

export const Canvas = () => {

  const ref = useRef();
  const canvas = useContext(CanvasContext);

  useEffect(() => {
    canvas.process({ canvas: ref.current });
  });

  return (<>
    <div className={`sm:rounded-lg overflow-hidden`}>
    <canvas
      width={ 320 } height={ 240 }
      ref={ ref }
      className={`pixelated w-full`} />
    </div>
  </>);
}

