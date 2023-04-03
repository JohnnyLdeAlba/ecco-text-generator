import { createContext, useEffect, useContext, useState, useRef } from "react";
import Head from 'next/head'


import { ThemeContext } from "../com/theme";
import FolderIcon from '@mui/icons-material/Folder';

import GIF from "gif.js";

import { Menu } from "../com/Menu/Menu";
import { DialogMenu } from "../com/Menu/DialogMenu";
import { ProgressDialog, DownloadDialog } from "../com/ProgressDialog";
import { Layout } from "../com/Layout/Layout";
import { useCanvas, Canvas } from "../com/EccoText/Canvas";

import { useRequestStatic } from "../com/Request/RequestStatic";
import { ProgmaContext, useProgma } from "../com/Progma";

import { container } from "../com/EccoText/menuItemsDB";
import { Toolbar } from "../com/EccoText/Toolbar";

import { Backdrop } from "../com/Backdrop";
import { Card } from "../com/Card";
import { Keyboard } from "../com/EccoText/Keyboard";
import { useEccoText } from "../com/EccoText/EccoText";
import { t_node } from "../lib/node-lib";
import { t_hook } from "../com/lib/hook";

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

export const AboutText = () => {

  return (<>
    <div className={`font-medium text-xl text-center`}>
      Ecco Text Generator, Version 2.0
    </div>
    <div className={`text-center`}>
      Created By  Johnny L. de Alba, 2023
    </div>

    <br />
    <p className={`mb-2 font-medium`}>
      What is this?
    </p>

    <p>
      This is an Ecco the Dolphin Text Generator that creates animated gifs and static images using the
      ripple generating algorythm from Ecco 2: The Tides of Time.
    </p>

    <br />
    <p className={`mb-2 font-medium`}>
      Special Thanks
    </p>

    <p className={`mb-2`}>
      Jake ( Twitter: <a href="https://twitter.com/fiuefey">@fiuefey</a> ) for providing numbers and Icelandic character support.
    </p>
    <p>
      Brad Corrupts ( YouTube: <a href="https://www.youtube.com/@BradCorrupts/videos">@BradCorrupts</a> ) who discovered that additional
      effects that could be done with the ripple generator.
    </p>
  </>)
}

export const AboutDialog = ({ show = false, onClose }) => {

  return (
    <Backdrop show={ show }>
      <div className={`
        flex-1 sm:flex-none
        sm:mx-4 md:mx-auto
        sm:my-8
        md:w-[600px]`}>
        <Card title="About" onClose={ onClose } className={`
          flex-1 sm:flex-none
          h-full sm:h-fit`}>
          <div className={`flex-1 px-4 py-6 h-full`}>
            <AboutText />
          </div>
        </Card>
      </div>
    </Backdrop>
  );
}

export const Index = ({ loading }) => {

  const theme = useContext(ThemeContext);

  const progma = useProgma();
  const eccoText = useEccoText({ progma: progma });
  const canvas = useCanvas({ progma: progma, onFontChange: font => eccoText.onFontChange(font) });
  loading = loading ? loading : canvas.loading;

  const request = useRequestStatic({
    tokens: canvas.tokens,
    progma: progma,
    container: container,
    parentHash: "home" 
  });

  return (<>

    <Head>
      <title>Ecco Text Generator</title>
    </Head>

    <AboutDialog
      show={ eccoText.aboutVisible }
      onClose={ () => eccoText.showAbout(false) } />

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
              <Canvas loading={ loading } />
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
                ${ loading ? "disabled" : '' }
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
                    disabled={ loading }
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

        <Toolbar disabled={ loading } />
        <Keyboard disabled={ loading } layout={ eccoText.keyboardLayout } />
      </Container>
    </Layout>
  </>)
}

export default Index;
