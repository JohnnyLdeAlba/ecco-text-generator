import { createContext, useEffect, useContext, useState, useRef } from "react";

import { ThemeContext } from "../../com/theme";
import FolderIcon from '@mui/icons-material/Folder';

import GIF from "gif.js";

import { Menu } from "../../com/Menu/Menu";
import { DialogMenu } from "../../com/Menu/DialogMenu";
import { ProgressDialog, DownloadDialog } from "../../com/ProgressDialog";
import { Layout } from "../../com/Layout/Layout";
import { useCanvas, Canvas } from "../../com/EccoText/Canvas";

import { useRequestStatic } from "../../com/Request/RequestStatic";
import { ProgmaContext, useProgma } from "../../com/Progma";

import { container } from "../../com/EccoText/menuItemsDB";
import { Toolbar } from "../../com/EccoText/Toolbar";
import { Keyboard } from "../../com/EccoText/Keyboard";
import { useEccoText } from "../../com/EccoText/EccoText";
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

export const Index = () => {

  const theme = useContext(ThemeContext);

  const progma = useProgma();
  const eccoText = useEccoText({ progma: progma });
  const canvas = useCanvas({ progma: progma, onFontChange: font => eccoText.onFontChange(font) });

  const request = useRequestStatic({
    tokens: canvas.tokens,
    progma: progma,
    container: container,
    parentHash: "home" 
  });

  return (<>

    <DialogMenu
      show={ eccoText.menuVisible }
      onClose={ () => eccoText.onMenuClose() } />

    <DownloadDialog
      show={ canvas.downloadVisible }
      type={ canvas.downloadType }
      resolution={ canvas.resolution }
      blob={ canvas.downloadBlob }
      onClose={ () => canvas.closeDownload() }/>

    <ProgressDialog
      show={ canvas.progressVisible }
      title="Generating GIF"
      progressIndex={ canvas.progressIndex }
      onAbort={ () => canvas.abort() }/>

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
  </>)
}

export default Index;
