import {
  useEffect,
  createContext, useContext,
  useRef, useState } from "react";

import { ThemeContext } from "../../com/theme";

import { t_hook } from "../../com/lib/hook";
import { t_plot_state } from "../../lib/bluedream-lib/plot-state";
import { t_plotter } from "../../lib/bluedream-lib/plotter";

import { RippleTableId } from "../../lib/bluedream-lib/ecco-wave-generator";
import { ps_process_wave } from "../../lib/bluedream-lib/processes";

import { t_frame_rate } from "../../lib/bluedream-lib/frame-rate";
import { extract_canvas_array } from "../../lib/bluedream-lib/sprite-sheet";

import { t_font, t_composition } from "../../lib/bluedream-lib/composition";
import { plot_composition } from "../../lib/bluedream-lib/plot-composition";
import Fonts from "./fonts";

class t_canvas extends t_hook {

  frameRate;
  frameIndex;

  canvas;
  plotter;
  com;

  text;
  waveformIndex;
  align;
  vAlign;
  baseline;
  trimSpaces;
  letterSpacing;
  lineHeight;
  selectSpacing;
  cursorPosition;

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

    // this.waveformIndex = RippleTableId;
    this.text = '';
    this.waveformIndex = 1;
    this.align = '';
    this.vAlign = '';
    this.baseline = "bottom";
    this.trimSpaces = true;
    this.letterSpacing = 0;
    this.lineHeight = 0;
    this.selectSpacing = 0;
    this.cursorPosition = -1;
    this.cursorFilter = null;

    this.font = null;
    this.background = 0;
    this.theme = '';

    this.fontMap = new Map();
    this.backgroundMap = new Map();
    this.uriMap = new Map();
    this.themeMap = new Map();
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

    font.bitmapIndex+= this.plotter
      .addCanvasArray(canvasArray);

    this.fontMap.set(font.hash, font);
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

    this.setFont(theme.font);
    this.setBackground(theme.background);
  }

  setFont(hash) {

    const font = this.fontMap.get(hash);

    if (!font)
      return;
    else if (font == this.font)
      return;

    this.align = font.align;
    this.vAlign = font.vAlign;
    this.baseline = font.baseline;
    this.trimSpaces = font.trimSpaces;

    this.letterSpacing = font.letterSpacing;
    this.lineHeight = font.lineHeight;
    this.selectSpacing = font.selectSpacing;
    this.cursorFilter = font.cursorFilter;

    this.font = font;
    this.commit();
  }
 
  setBackground(hash) {

    const bitmapIndex = this.backgroundMap.get(hash);
    if (!bitmapIndex)
      return;

    this.background = bitmapIndex;
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

    const psArray = plot_composition(com);
    this.plotter.addPSArray(psArray);
  }

  updateViewport() {

    const ps = this.plotter.createPS();

    ps.index = this.background;
    ps.process = () => ps_process_wave(
      this.plotter, ps,
      this.waveformIndex,
      this.frameIndex);

    this.frameIndex = this.frameIndex > 255 ?
      0 : this.frameIndex + 1;

    this.plotter.addPS(ps);
    this.updateComposition();

    this.plotter.fill();
    this.plotter.process();
  }

  setWaveformIndex(value) {

    this.waveformIndex = value;
    this.commit();
  }

  render() {

    this.plotter.render();
  }

  handleInput(key) {

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

          const startText = this.text.slice(0, this.cursorPosition + 1);
          const endText = this.text.slice(this.cursorPosition + 1);

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

    await this.addFont(Fonts.font_crimson());
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

    this.progma.set("backgrounds", galleryItem => this.onBackgroundChange(galleryItem));
    this.progma.set("fonts", galleryItem => this.onFontChange(galleryItem));
    this.progma.set("themes", galleryItem => this.onThemeChange(galleryItem));

    this.frameRate.process = () => this.updateViewport();
    this.frameRate.render = () => this.render();
    this.frameRate.updateFrame();

    this.disableLoading();
    this.state = "ready";
    this.refresh();
  }

  onThemeChange(galleryItem) {

    this.progma.removeSelectedItemsByParentId(galleryItem.parentId);
    this.progma.addSelectedItem(galleryItem);

    this.setTheme(galleryItem.hash);
  }

  onBackgroundChange(galleryItem) {

    this.progma.removeSelectedItemsByParentId(galleryItem.parentId);
    this.progma.addSelectedItem(galleryItem);

    this.setBackground(galleryItem.hash);
  }

  onFontChange(galleryItem) {

    this.progma.removeSelectedItemsByParentId(galleryItem.parentId);
    this.progma.addSelectedItem(galleryItem);

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

export const Canvas = () => {

  const ref = useRef();
  const canvas = useContext(CanvasContext);

  useEffect(() => {
    canvas.process({ canvas: ref.current });
  });

  return (
    <div className={`sm:rounded-lg overflow-hidden`}>
    <canvas
      width={ 320 } height={ 240 }
      ref={ ref }
      className={`pixelated w-full`} />
    </div>
  );
}

