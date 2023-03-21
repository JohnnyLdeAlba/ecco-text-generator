import { useEffect, useContext, useState, useRef } from "react";

import FolderIcon from '@mui/icons-material/Folder';

import { useRequestStatic } from "../../com/Request/RequestStatic";

import { Gallery } from "../../com/Gallery/Gallery";
import { Card } from "../../com/Card";
import { Layout } from "../../com/Layout/Layout";
import { ThemeContext } from "../../com/theme";

import { container } from "../../static-database";

import { t_hook } from "../../com/lib/hook";
import { t_plot_state } from "../../lib/bluedream-lib/plot-state";
import { ps_process_wave } from "../../lib/bluedream-lib/processes";
import { t_plotter } from "../../lib/bluedream-lib/plotter";
import { t_frame_rate } from "../../lib/bluedream-lib/frame-rate";
import { extract_canvas_array } from "../../lib/bluedream-lib/sprite-sheet";
import { t_font, t_composition } from "../../lib/bluedream-lib/composition";
import { plot_composition } from "../../lib/bluedream-lib/plot-composition";
import Fonts from "../../lib/bluedream-lib/fonts";

export const Container = ({ children }) => {

  return (
    <div className={`
      mx-0 xl:mx-auto 
      w-full 3xl:w-[1000px]
      px-0 sm:px-4 3xl:px-0
      py-0 sm:py-4
      flex-1 flex flex-col
      overflow-y-auto sm:overflow-y-visible
    `}>
      { children }
    </div>
  );
}

class t_canvas extends t_hook {

  frameRate;
  canvas;
  plotter;
  com;

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

  fontMap;
  backgroundMap;
  uriMap;

  constructor() {

    super();

    this.state = "init";

    this.frameRate = new t_frame_rate();
    this.canvas = null;
    this.plotter = null;
    this.com = null;

    this.align = '';
    this.vAlign = '';
    this.baseline = '';
    this.trimSpaces = true;
    this.letterSpacing = 0;
    this.lineHeight = 0;
    this.selectSpacing = 0;
    this.cursorPosition = -1;
    this.cursorFilter = null;

    this.font = null;
    this.background = 0;

    this.fontMap = new Map();
    this.backgroundMap = new Map();
    this.uriMap = new Map();
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
    com.setBaseline(this.Baseline);
    com.cursorPosition = this.cursorPosition;
    
    com.generate(
      320, 240, 
      "hello world"
    );

    // can validate here...

    this.com = com;

    const psArray = plot_composition(com);
    this.plotter.addPSArray(psArray);
  }

  render() {

    this.plotter.render();
  }

  async initialize(canvas) {

    this.state = "initPending";
    this.enableLoading();

    this.canvas = canvas;
    this.plotter = new t_plotter();

    this.plotter.initialize(320, 240);    
    this.plotter.setCanvas(canvas);

    await this.addFont(Fonts.font_system());
    await this.addFont(Fonts.font_system_yellow());
    await this.addFont(Fonts.font_system_red());
    await this.addFont(Fonts.font_home_bay());

    await this.addBackground(
      "homeBayBackground",
      "/eccotext/theme/backgrounds/home-bay.png"
    );

    await this.addBackground(
      "jurassicBackground",
      "/eccotext/theme/backgrounds/jurassic-beach.png"
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

    this.setFont("systemFont");
    this.setBackground("homeBayBackground");

    this.frameRate.process = () => {

      const ps = this.plotter.createPS();

      ps.index = this.background;
      ps.process = () => ps_process_wave(this.plotter, ps);

      this.plotter.addPS(ps);
      this.updateComposition();

      this.plotter.fill();
      this.plotter.process();
    }

    this.frameRate.render = () => this.render();
    this.frameRate.updateFrame();

    this.disableLoading();
    this.state = "ready";
    this.refresh();
  }

  set(params) {

    const { refresh } = params;
    this.refresh = refresh;
  }

  async process(params) {

    const {
      canvas
    } = params;

    switch (this.state) {

      case "init": {

        await this.initialize(canvas);
        break;
      }
    }
  }
}

export const Canvas = () => {

  const ref = useRef();
  
  const [ canvas ] = useState(new t_canvas());
  const [ serial, setSerial ] = useState(0);

  canvas.set({ refresh: () => setSerial(serial + 1) });

  useEffect(() => {
    canvas.process({ canvas: ref.current });
  });

  return (
    <div className={`mx-auto my-4 w-[640px]`}>
      <canvas
        width={ 320 } height={ 240 }
        ref={ ref }
        className={`pixelated w-full`} />
    </div>
  );
}

export const Index = () => {

  const theme = useContext(ThemeContext);

  return (
    <Layout>
      <Container>
        <Card 
          icon={ <FolderIcon /> }
          title=""
          subTitle="">
          <Canvas />
        </Card>
      </Container>
    </Layout>
  )
}

export default Index;
