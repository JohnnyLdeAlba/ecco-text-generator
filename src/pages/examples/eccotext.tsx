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
import { t_plotter } from "../../lib/bluedream-lib/plotter";
import { extract_canvas_array } from "../../lib/bluedream-lib/sprite-sheet";
import { t_font, t_composition } from "../../lib/bluedream-lib/composition";
import { plot_composition } from "../../lib/bluedream-lib/plot-composition";

const font_system = () => {

  const font = new t_font();

  font.hash = "systemFont";
  font.name = "System";
  font.imageHash = "systemFont";
  font.imageURI = "/eccotext/theme/fonts/system.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 4;

  font.bitmapIndex = 0;
  font.width = 8;
  font.height = 8;

  font.add(' ',  0,  8, 0); 
  font.add('\n', 0,  0, 0); 
  font.add('a',  0,  8, 8); 
  font.add('b',  1,  8, 8); 
  font.add('c',  2,  8, 8); 
  font.add('d',  3,  8, 8); 
  font.add('e',  4,  8, 8); 
  font.add('f',  5,  8, 8); 
  font.add('g',  6,  8, 8); 
  font.add('h',  7,  8, 8); 
  font.add('i',  8,  8, 8); 
  font.add('j',  9,  8, 8); 
  font.add('k',  10, 8, 8); 
  font.add('l',  11, 8, 8); 
  font.add('m',  12, 8, 8); 
  font.add('n',  13, 8, 8); 
  font.add('o',  14, 8, 8); 
  font.add('p',  15, 8, 8); 
  font.add('q',  16, 8, 8); 
  font.add('r',  17, 8, 8); 
  font.add('s',  18, 8, 8); 
  font.add('t',  19, 8, 8); 
  font.add('u',  20, 8, 8); 
  font.add('v',  21, 8, 8); 
  font.add('w',  22, 8, 8); 
  font.add('x',  23, 8, 8); 
  font.add('y',  24, 8, 8); 
  font.add('z',  25, 8, 8);
  font.add('0',  25, 8, 8);
  font.add('1',  25, 8, 8);
  font.add('2',  25, 8, 8);
  font.add('3',  25, 8, 8);
  font.add('4',  25, 8, 8);
  font.add('5',  25, 8, 8);
  font.add('6',  25, 8, 8);
  font.add('7',  25, 8, 8);
  font.add('8',  25, 8, 8);
  font.add('9',  25, 8, 8);
  font.add('!',  25, 8, 8);
  font.add('¡',  25, 8, 8);
  font.add('?',  25, 8, 8);
  font.add('¿',  25, 8, 8);
  font.add(',',  25, 8, 8);
  font.add('.',  25, 8, 8);
  font.add('\'',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add(';',  25, 8, 8);
  font.add(':',  25, 8, 8);
  font.add('*',  25, 8, 8);
  font.add('©',  25, 8, 8);

  return font; 
}

const font_system_yellow = () => {

  const font = new t_font();

  font.hash = "systemFontYellow";
  font.name = "System Yellow";
  font.imageHash = "systemFont";
  font.imageURI = "/eccotext/theme/fonts/system.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 4;

  font.bitmapIndex = 49;
  font.width = 8;
  font.height = 8;

  font.add(' ',  0,  8, 0); 
  font.add('\n', 0,  0, 0); 
  font.add('a',  0,  8, 8); 
  font.add('b',  1,  8, 8); 
  font.add('c',  2,  8, 8); 
  font.add('d',  3,  8, 8); 
  font.add('e',  4,  8, 8); 
  font.add('f',  5,  8, 8); 
  font.add('g',  6,  8, 8); 
  font.add('h',  7,  8, 8); 
  font.add('i',  8,  8, 8); 
  font.add('j',  9,  8, 8); 
  font.add('k',  10, 8, 8); 
  font.add('l',  11, 8, 8); 
  font.add('m',  12, 8, 8); 
  font.add('n',  13, 8, 8); 
  font.add('o',  14, 8, 8); 
  font.add('p',  15, 8, 8); 
  font.add('q',  16, 8, 8); 
  font.add('r',  17, 8, 8); 
  font.add('s',  18, 8, 8); 
  font.add('t',  19, 8, 8); 
  font.add('u',  20, 8, 8); 
  font.add('v',  21, 8, 8); 
  font.add('w',  22, 8, 8); 
  font.add('x',  23, 8, 8); 
  font.add('y',  24, 8, 8); 
  font.add('z',  25, 8, 8);
  font.add('0',  25, 8, 8);
  font.add('1',  25, 8, 8);
  font.add('2',  25, 8, 8);
  font.add('3',  25, 8, 8);
  font.add('4',  25, 8, 8);
  font.add('5',  25, 8, 8);
  font.add('6',  25, 8, 8);
  font.add('7',  25, 8, 8);
  font.add('8',  25, 8, 8);
  font.add('9',  25, 8, 8);
  font.add('!',  25, 8, 8);
  font.add('¡',  25, 8, 8);
  font.add('?',  25, 8, 8);
  font.add('¿',  25, 8, 8);
  font.add(',',  25, 8, 8);
  font.add('.',  25, 8, 8);
  font.add('\'',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add(';',  25, 8, 8);
  font.add(':',  25, 8, 8);
  font.add('*',  25, 8, 8);
  font.add('©',  25, 8, 8);

  return font; 
}

const font_system_red = () => {

  const font = new t_font();

  font.hash = "systemFontRed";
  font.name = "System Red";
  font.imageHash = "systemFont";
  font.imageURI = "/eccotext/theme/fonts/system.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 4;

  font.bitmapIndex = 49 * 2;
  font.width = 8;
  font.height = 8;

  font.add(' ',  0,  8, 0); 
  font.add('\n', 0,  0, 0); 
  font.add('a',  0,  8, 8); 
  font.add('b',  1,  8, 8); 
  font.add('c',  2,  8, 8); 
  font.add('d',  3,  8, 8); 
  font.add('e',  4,  8, 8); 
  font.add('f',  5,  8, 8); 
  font.add('g',  6,  8, 8); 
  font.add('h',  7,  8, 8); 
  font.add('i',  8,  8, 8); 
  font.add('j',  9,  8, 8); 
  font.add('k',  10, 8, 8); 
  font.add('l',  11, 8, 8); 
  font.add('m',  12, 8, 8); 
  font.add('n',  13, 8, 8); 
  font.add('o',  14, 8, 8); 
  font.add('p',  15, 8, 8); 
  font.add('q',  16, 8, 8); 
  font.add('r',  17, 8, 8); 
  font.add('s',  18, 8, 8); 
  font.add('t',  19, 8, 8); 
  font.add('u',  20, 8, 8); 
  font.add('v',  21, 8, 8); 
  font.add('w',  22, 8, 8); 
  font.add('x',  23, 8, 8); 
  font.add('y',  24, 8, 8); 
  font.add('z',  25, 8, 8);
  font.add('0',  25, 8, 8);
  font.add('1',  25, 8, 8);
  font.add('2',  25, 8, 8);
  font.add('3',  25, 8, 8);
  font.add('4',  25, 8, 8);
  font.add('5',  25, 8, 8);
  font.add('6',  25, 8, 8);
  font.add('7',  25, 8, 8);
  font.add('8',  25, 8, 8);
  font.add('9',  25, 8, 8);
  font.add('!',  25, 8, 8);
  font.add('¡',  25, 8, 8);
  font.add('?',  25, 8, 8);
  font.add('¿',  25, 8, 8);
  font.add(',',  25, 8, 8);
  font.add('.',  25, 8, 8);
  font.add('\'',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add(';',  25, 8, 8);
  font.add(':',  25, 8, 8);
  font.add('*',  25, 8, 8);
  font.add('©',  25, 8, 8);

  return font; 
}

const font_home_bay = () => {

  const font = new t_font();

  font.hash = "homeBayFont";
  font.name = "Home Bay";
  font.imageHash = "defaultFont"
  font.imageURI = "/eccotext/theme/fonts/home-bay.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 5;

  font.bitmapIndex = 0;
  font.width = 28;
  font.height = 28;

  font.add(' ',  0,  14,  0,   0,  0); 
  font.add('\n', 0,   0,  0,   0,  0); 
  font.add('a',  0,  14, 16,  -7, -6); 
  font.add('b',  1,  14, 16,  -7, -6); 
  font.add('c',  2,  14, 16,  -7, -6); 
  font.add('d',  3,  14, 16,  -7, -6); 
  font.add('e',  4,  14, 16,  -7, -6); 
  font.add('f',  5,  13, 16,  -8, -6); 
  font.add('g',  6,  14, 16,  -7, -6); 
  font.add('h',  7,  14, 16,  -7, -6); 
  font.add('i',  8,   6, 16, -11, -6); 
  font.add('j',  9,  14, 16,  -7, -6); 
  font.add('k',  10, 14, 16,  -7, -6); 
  font.add('l',  11, 14, 16,  -7, -6); 
  font.add('m',  12, 22, 16,  -3, -6); 
  font.add('n',  13, 14, 16,  -7, -6); 
  font.add('o',  14, 14, 16,  -7, -6); 
  font.add('p',  15, 14, 16,  -7, -6); 
  font.add('q',  16, 14, 16,  -7, -6); 
  font.add('r',  17, 14, 16,  -7, -6); 
  font.add('s',  18, 14, 16,  -7, -6); 
  font.add('t',  19, 14, 16,  -7, -6); 
  font.add('u',  20, 14, 16,  -7, -6); 
  font.add('v',  21, 14, 16,  -7, -6); 
  font.add('w',  22, 22, 16,  -3, -6); 
  font.add('x',  23, 16, 16,  -6, -6); 
  font.add('y',  24, 14, 16,  -7, -6); 
  font.add('z',  25, 14, 16,  -7, -6);

  return font; 
}

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

  canvas;
  plotter;
  com;

  align;
  vAlign;
  baseline;
  trimSpaces;
  letterSpacing;
  lineHeight;

  font;
  background;

  fontMap;
  backgroundMap;
  uriMap;

  constructor() {

    super();

    this.state = "init";

    this.canvas = null;
    this.plotter = null;
    this.com = null;

    this.align = '';
    this.vAlign = '';
    this.baseline = '';
    this.trimSpaces = 0;
    this.letterSpacing = 0;
    this.lineHeight = 0;

    this.font = null;
    this.background = null;

    this.fontMap = new Map();
    this.backgroundMap = new Map();
    this.uriMap = new Map();
  }

  async addFont(font) {

    this.fontMap.set(font.hash, font);

    if (this.uriMap.get(font.imageHash))
      return;

    this.uriMap.set(font.imageHash, font.imageURI);

    const canvasArray = await extract_canvas_array(
      font.imageURI,
      font.width,
      font.height
    );

    font.bitmapIndex+= this.plotter
      .addCanvasArray(canvasArray);
  }

  async addBackground(background) {

    this.backgroundMap(background.hash, background);
    
    if (this.uriMap.get(background.imageHash))
      return;

    background.bitmapIndex = await this.plotter
      .addBitmap(background.imageURI); 
  }

  setFont(hash) {

    const font = this.fontMap.get(hash);
    if (!font)
      return;

    console.log(font);

    this.align = font.align;
    this.vAlign = font.vAlign;
    this.baseline = font.baseline;
    this.trimSpaces = font.trimSpaces;
    this.letterSpacing = font.letterSpacing;
    this.lineHeight = font.lineHeight;

    this.font = font;
    this.commit();
  }
 
  setBackground(hash) {

    const background = this.backgroundMap.get(hash);
    if (!background)
      return;

    this.background = background;
    this.commit();
  }

  updateComposition() {

    const com = new t_composition();

    com.setAlign(this.align);
    com.setVAlign(this.vAlign);
    com.setBaseline(this.baseline);
    com.trimSpaces = this.trimSpaces;
    com.letterSpacing = this.letterSpacing;
    com.lineHeight = this.lineHeight;

    com.generate(
      this.font,
      320, 240,
      "ecco the dolphin is the best\nrain cloud"
    );

    // can validate here...

    this.com = com;

    const psArray = plot_composition(com);
    this.plotter.addPSArray(psArray);
  }

  render() {

    this.plotter.fill();
    this.plotter.process();
    this.plotter.render();
  }

  async initialize(canvas) {

    this.state = "initPending";
    this.enableLoading();

    this.canvas = canvas;
    this.plotter = new t_plotter();

    this.plotter.initialize(320, 240);    
    this.plotter.setCanvas(canvas);

    await this.addFont(font_system());
    await this.addFont(font_system_yellow());
    await this.addFont(font_system_red());
    await this.addFont(font_home_bay());

    this.setFont("systemFont");

    this.updateComposition();
    this.render();

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
