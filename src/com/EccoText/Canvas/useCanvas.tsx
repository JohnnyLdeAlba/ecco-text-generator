import {
  useEffect,
  createContext, useContext,
  useRef, useState } from "react";

import { t_gif_generator } from "../../../lib/gif-generator";
import { RippleTableId } from "../../../lib/bluedream-lib/ecco-wave-generator";

import { ps_process_wave } from "../../../lib/bluedream-lib/processes";
import { extract_canvas_array } from "../../../lib/bluedream-lib/sprite-sheet";
import { t_frame_rate } from "../../../lib/bluedream-lib/frame-rate";

import { t_font, t_composition } from "../../../lib/bluedream-lib/composition";
import { plot_composition } from "../../../lib/bluedream-lib/plot-composition";

import { canvas_parse_input } from "./lib/canvas-parse-input";
import { canvas_initialize } from "./lib/canvas-initialize";

import { t_hook } from "../../../com/lib/hook";
import { useClipboard } from "../../Clipboard";

import { ThemeContext } from "../../../com/theme";

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
  cursorPosition;
  waveformIndex;

  font;
  background;
  theme;

  fontMap;
  backgroundMap;
  uriMap;
  themeMap;

  onFontChange;

  constructor() {

    super();

    this.state = "init";

    this.frameIndex = 0;
    this.frameRate = new t_frame_rate();
    this.canvas = null;
    this.plotter = null;
    this.tokens = new Map();

    this.com = new t_composition();
    this.com.align = "center";
    this.com.vAlign = "middle"
    this.com.baseline = "bottom";

    this.resolution = '';
    this.width = 0;
    this.height = 0;
    this.frameSkip = false;

    this.text = '';
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

    this.onFontChange = null;

    this.disableAutoCommit();
    this.enableLoading();
  }

  clipboardCopy() {

    let text = '';

    for (let index = 0; index < this.text.length; index++) {

      const charCode = this.text.charCodeAt(index);

      // Reserved for animated characters.
      if (charCode < 4096 || charCode >= 4196)
        text+= this.text.charAt(index);
    }

    this.clipboard.clipboardCopy(text);
  }

  async clipboardPaste() {

    let text = await this.clipboard.clipboardPaste();

    for (let index = 0; index < text.length; index++) {

      const hash = text.charAt(index);
      const char = this.font.get(hash);

      if (char)
        this.text+= hash;
    }

    this.cursorPosition = this.text.length;
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
    
    if (align == this.com.align)
      return;

    this.com.align = align;
    this.commit();
  }

  setVAlign(vAlign) {
    
    if (vAlign == this.com.vAlign)
      return;

    this.com.vAlign = vAlign;
    this.commit();
  }

  setBaseline(baseline) {
    
    if (baseline == this.com.baseline)
      return;

    this.com.baseline = baseline;
    this.commit();
  }

  setCanvas(canvas) {

    if (canvas == this.canvas)
      return;

    this.canvas = canvas;
    this.commit();
  }

  toggleTrimSpaces() {

    this.com.trimSpaces = !this.com.trimSpaces;
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

    this.com.letterSpacing = font.letterSpacing;
    this.com.lineHeight = font.lineHeight;
    this.com.selectSpacing = font.selectSpacing;

    this.cursorFilter = font.cursorFilter;

    this.progma.removeAllSelectedItems("fonts");
    this.progma.addSelectedItem("fonts", hash);

    this.tokens.set("fontType", font.type);

    this.font = font;
    this.fontType = font.type;

    if (this.onFontChange)
      this.onFontChange(font);

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

  setWaveformIndex(value, hash = "custom") {

    this.waveformIndex = value;

    this.progma.removeAllSelectedItems("effects");
    this.progma.addSelectedItem("effects", hash);

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

  updateComposition(disableTrimSpaces = false) {

    const com = new t_composition();

    com.setFont(this.font);
    com.setAlign(this.com.align);
    com.setVAlign(this.com.vAlign);
    com.setBaseline(this.com.baseline);
    com.trimSpaces = disableTrimSpaces ? false : this.com.trimSpaces;
    com.cursorPosition = this.cursorPosition;
    
    com.generate(
      320, 240, 
      this.text
    );

    return com;
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

  updateFrame() {

    this.frameIndex = this.frameIndex > 255 ?
      0 : this.frameIndex + 1;
  }

  updateViewport(disableTrimSpaces = true) {

    const com = this.updateComposition(disableTrimSpaces);

    this.plotBackground(this.frameIndex);
    this.plotComposition(com);
    this.plot();
    this.updateFrame();
  }

  render() {
    this.plotter.render();
  }

  generatePNG() {

    this.updateViewport(false);
    this.render();

    this.canvas.toBlob(blob => {

      this.downloadVisible = true;
      this.downloadBlob = blob;
      this.downloadType = "png";
      this.commit();
    });

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

  handleInput(key) {
    canvas_parse_input(this, key);
  }

  onReady() {

    this.pushUpdate();
    this.update();
  }

  onThemeChange(galleryItem) {
    this.setTheme(galleryItem.hash);
  }

  onBackgroundChange(galleryItem) {
    this.setBackground(galleryItem.hash);
  }

  set(params) {

    const { progma, refresh, clipboard, onFontChange } = params;

    this.progma = progma;
    this.refresh = refresh;
    this.clipboard = clipboard;
    this.onFontChange = onFontChange;

    progma.set("backgrounds", galleryItem => this.onBackgroundChange(galleryItem));
    progma.set("effects", galleryItem => this.setWaveformIndex(galleryItem.value, galleryItem.hash));
    progma.set("fonts", galleryItem => this.setFont(galleryItem.hash));
    progma.set("themes", galleryItem => this.onThemeChange(galleryItem));
    progma.set("resolutions", galleryItem => this.setResolution(galleryItem.hash));
  }

  async process(params) {

    const { canvas } = params;

    switch (this.state) {

      case "init": {

        await canvas_initialize(this, canvas);
        break;
      }
    }
  }
}

export const CanvasContext = createContext(new t_canvas());

export const useCanvas  = ({ progma = null, onFontChange }) => {
 
  const clipboard = useClipboard(); 
  const canvas  = useContext(CanvasContext);
  const [ serial, setSerial ] = useState(0);

  canvas.set({
    progma: progma,
    refresh: () => setSerial(serial + 1),
    clipboard: clipboard,
    onFontChange: onFontChange
  });

  return canvas;
}
