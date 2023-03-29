import { createContext, useEffect, useContext, useState, useRef } from "react";

import { ThemeContext } from "../../com/theme";
import FolderIcon from '@mui/icons-material/Folder';

import GIF from "gif.js";

import { Menu } from "../../com/PanelMenu/Menu";
import { Backdrop } from "../../com/Backdrop";
import { Card } from "../../com/Card";
import { Layout } from "../../com/Layout/Layout";
import { useCanvas, Canvas } from "../../com/EccoText/Canvas";

import { useRequestStatic } from "../../com/Request/RequestStatic";
import { ProgmaContext, useProgma } from "../../com/Progma";

import { container } from "../../com/EccoText/menuItemsDB";
import { Toolbar } from "../../com/EccoText/Toolbar";
import { Keyboard } from "../../com/EccoText/Keyboard";
import { t_node } from "../../lib/node-lib";
import { t_hook } from "../../com/lib/hook";

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GifIcon from '@mui/icons-material/Gif';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Slider from '@mui/material/Slider';

export const Container = ({ children }) => {

  return (
    <div className={`
      mx-0 xl:mx-auto 
      w-full 2xl:w-[900px]
      px-0 sm:px-4 2xl:px-0
      py-0 sm:py-4
      flex-1 flex flex-col
      overflow-y-auto sm:overflow-y-visible
    `}>
      { children }
    </div>
  );
}

class t_ecco_text extends t_hook {

  keyboardLayout;

  constructor() {

    super();

    this.state = "init";
    this.keyboardLayout = '';
  }

  set(params) {

    const { refresh } = params;
    this.refresh = refresh;
  }

  initialize(params) {

    const { progma } = params;

    progma.set("keyboardLayouts",
      galleryItem => this.onKBLayoutChange(galleryItem));

    this.progma = progma;

    this.setKBLayout("engKeyboard");

    this.state = "ready";
    this.commit();
  }

  process(params) {

    switch (this.state) {

      case "init": {
        this.initialize(params);
        break;
      }
    }
  }

  setKBLayout(keyboardLayout) {

    if (this.keyboardLayout == keyboardLayout)
      return;

    this.progma.removeAllSelectedItems("keyboardLayouts")
    this.progma.addSelectedItem("keyboardLayouts", keyboardLayout);    

    this.keyboardLayout = keyboardLayout;
    this.refresh();
  }

  onKBLayoutChange(galleryItem) {
    this.setKBLayout(galleryItem.hash);
  }
}

const EccoTextContext = createContext(new t_ecco_text());

export const useEccoText = ({ progma }) => {

  const eccoText = useContext(EccoTextContext);
  const [ serial, setSerial ] = useState(0);

  eccoText.set({ refresh: () => setSerial(serial + 1) });

  useEffect(() => {
    eccoText.process({ progma: progma })
  });

  return eccoText;
}

export const Index = () => {

  const theme = useContext(ThemeContext);

  const progma = useProgma();
  const canvas = useCanvas({ progma: progma });
  const eccoText = useEccoText({ progma: progma });


  const request = useRequestStatic({
    progma: progma,
    container: container,
    parentHash: "home" 
  });

  return (
    <Layout>
      <Container>

        <div className={`flex flex-col overflow-y-auto`}>
          <div className={`flex flex-row overflow-y-auto`}>

            <div className={`flex-1 flex flex-col`}>
              <Canvas />
            </div>

            <div className={`
              sm:h-[425px] 2xl:h-[500px]
              hidden md:flex
              flex-col overflow-y-auto
              pl-4 w-[240px]`}>

              <div className={`
                flex-1 flex flex-col
                overflow-y-auto
                rounded-lg h-full
                ${ theme.card }`}>

                <div className={`
                  flex flex-col
                  px-3 py-2
                  font-medium text-sm
                  ${ theme.cardHeader }`}>
                  { request.parentNode.name }
                </div>

                <div className={`
                  flex-1 flex flex-col
                  overflow-y-auto h-full
                  ${ theme.scrollbars }`}>

                  <Menu
                    forceDetailsVisible={ true }
                    page={ request.page == -1 ? -1 : request.page + 1 }

                    onPrevPage={ request.page > 0 ? () => request.onPrevPage() : null }
                    onNextPage={ request.nextPage ? () => request.onNextPage() : null }

                    galleryItems={ request.getGalleryItems() }
                    onGoBack={ request.parentNode.parentId > 0 ? () => request.onGoBack() : null }
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        <Toolbar />
        <Keyboard layout={ eccoText.keyboardLayout } />

      <div className={`hidden px-4 w-full`}> 
        <Slider classes={{ root: "mui-darksea" }} aria-label="Volume" value={ canvas.waveformIndex } max={ 255 } onChange={ (event, value) => canvas.setWaveformIndex(value) } />
      </div>

      </Container>
    </Layout>
  )
}

export default Index;
