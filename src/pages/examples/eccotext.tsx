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

const default_font = () => {

  const font = new t_font();

  font.add(' ',  0,  28,  0,  0,  0); 
  font.add('\n', 0,   0, 28,  0,  0); 
  font.add('a',  0,  14, 16, -7, -6); 
  font.add('b',  1,  14, 16, -7, -6); 
  font.add('c',  2,  14, 16, -7, -6); 
  font.add('d',  3,  14, 16, -7, -6); 
  font.add('e',  4,  14, 16, -7, -6); 
  font.add('f',  5,  13, 16, -8, -6); 
  font.add('g',  6,  14, 16, -7, -6); 
  font.add('h',  7,  14, 16, -7, -6); 
  font.add('i',  8,  6,  16, -11, -6); 
  font.add('j',  9,  14, 16, -7, -6); 
  font.add('k',  10, 14, 16, -7, -6); 
  font.add('l',  11, 14, 16, -7, -6); 
  font.add('m',  12, 22, 16, -3, -6); 
  font.add('n',  13, 14, 16, -7, -6); 
  font.add('o',  14, 14, 16, -7, -6); 
  font.add('p',  15, 14, 16, -7, -6); 
  font.add('q',  16, 14, 16, -7, -6); 
  font.add('r',  17, 14, 16, -7, -6); 
  font.add('s',  18, 14, 16, -7, -6); 
  font.add('t',  19, 14, 16, -7, -6); 
  font.add('u',  20, 14, 16, -7, -6); 
  font.add('v',  21, 14, 16, -7, -6); 
  font.add('w',  22, 22, 16, -3, -6); 
  font.add('x',  23, 16, 16, -6, -6); 
  font.add('y',  24, 14, 16, -7, -6); 
  font.add('z',  25, 14, 16, -7, -6);

  return font; 
}

const com = new t_composition();

com.generate(
  default_font(),
  320, 240,
  "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
);

const ps_generate = com => {

    let width = 0;
    let height = 0;

    let psArray = [];

    for (const line of com.lineArray) {

      for (let index = 0; index < line.totalWords; index++) {

        const word = com.wordArray[line.startIndex + index];

        for (let index = 0; index < word.totalChars; index++) {

          const hash = com.text.charAt(word.startIndex + index);
          const char = com.font.get(hash);
 
          const ps = new t_plot_state();

          ps.index = char.bitmapIndex;

          ps.x = char.offsetX + width;
          ps.y = char.offsetY + height;

          psArray.push(ps);
          width+= char.width;
        }

      }

      width = 0;
      height+= line.height; 
    }

    return psArray;
  }

const psArray = ps_generate(com);

console.log(psArray);

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

  font;

  constructor() {

    super();

    this.state = "init";

    this.canvas = null;
    this.plotter = null;

    this.font = null;
  }

  async initialize(canvas) {

    this.state = "initPending";

    this.canvas = canvas;
    this.plotter = new t_plotter();

    this.plotter.initialize(320, 240);    
    this.plotter.setCanvas(canvas);

    this.font = await extract_canvas_array(
      "/eccotext/theme/default/font.png",
      28, 28
    );

    this.plotter.addCanvasArray(this.font);

    const ps = this.plotter.createPS();
    ps.index = 1;

    this.plotter.addPSArray(psArray);

    this.plotter.fill();
    this.plotter.process();

    this.plotter.render();

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
