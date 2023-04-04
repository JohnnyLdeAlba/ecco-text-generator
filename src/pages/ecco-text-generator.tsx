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
import { Keyboard } from "../com/EccoText/Keyboard/Keyboard";
import { useEccoText } from "../com/EccoText/EccoText";
import { AboutDialog } from "../com/EccoText/AboutDialog";
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

      <link rel="icon" href="sigil-purple.svg" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Ecco the Dolphin IO" />
      <meta property="og:title" content="Ecco Text Generator" />
      <meta property="og:description" content="An animated Ecco the Dolphin Generator that can produce GIFs and static images." />
      <meta property="og:image" content="card.jpg" />
      <meta property="og:url" content="https://eccothedolphin.io/ecco-text-generator" />
      <meta property="twitter:card" content="summary_large_image" />

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
                <Card
                  title={ request.parentNode.name }
                  size="small"
                  color="solid"
                  rounded="full"
                  className={`h-full`}>
                  <Menu
                    disabled={ loading }
                    forceDetailsVisible={ true }
                    page={ request.page == -1 ? -1 : request.page + 1 }

                    onPrevPage={ request.page > 0 ? () => request.onPrevPage() : null }
                    onNextPage={ request.nextPage ? () => request.onNextPage() : null }

                    galleryItems={ request.getGalleryItems() }
                    onGoBack={ request.parentNode.parentId > 0 ? () => request.onGoBack() : null }
                  />
               </Card>
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