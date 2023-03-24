import { createContext, useEffect, useContext, useState, useRef } from "react";

import { ThemeContext } from "../../com/theme";
import FolderIcon from '@mui/icons-material/Folder';

import { Gallery } from "../../com/MiniGallery/Gallery";
import { Card } from "../../com/Card";
import { Layout } from "../../com/Layout/Layout";
import { useCanvas, Canvas } from "../../com/EccoText/Canvas";

import { useRequestStatic } from "../../com/Request/RequestStatic";
import { ProgmaContext, useProgma } from "../../com/Progma";

import { container } from "../../com/EccoText/menuItemsDB";
import { Toolbar } from "../../com/EccoText/Toolbar";
import { t_node } from "../../lib/node-lib";

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
  const canvas = useCanvas({ progma: progma });

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

          <div className={`hidden md:flex flex-col overflow-y-auto pl-4 w-[240px] sm:h-[425px] 2xl:h-[500px]`}>

            <div className={`flex-1 flex flex-col overflow-y-auto rounded-lg h-full ${ theme.card }`}>
              <div className={`flex flex-col px-3 py-2 font-medium text-sm ${ theme.cardHeader }`}>
                { request.parentNode.name }
              </div>
              <div className={`flex-1 flex flex-col overflow-y-auto h-full ${ theme.scrollbars }`}>
                <Gallery
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


    <div className={`hidden px-4 w-full`}> 
    <Slider classes={{ root: "mui-darksea" }} aria-label="Volume" value={ canvas.waveformIndex } max={ 255 } onChange={ (event, value) => canvas.setWaveformIndex(value) } />
    </div>

    <Keyboard />

      </Container>
    </Layout>
  )
}

const Keyboard = () => {

  return (
    <div className={`
      disable-selection
      flex-1 sm:flex-none
      items-center sm:items-start
      sm:mx-auto sm:w-fit
      sm:rounded-lg
      flex flex-row
      justify-center
      p-[3px]
      bg-[#0e1d35]`}>
      <div className={`
        flex flex-col
        items-center justify-center
        py-[3px]`}>
        <KeyboardRow galleryItems={ [] } />
        <CommandRow />       
      </div>
    </div>
  )

}

const KeyboardRow = ({  galleryItems = [] }) => {

  galleryItems = [];
  const galleryRows = [];

  let rows = [
    "!¡?¿\'“”;:-",
    "QWERTYUIOP",
    "ASDFGHJKL",
    ",ZXCVBNM.",
  ];

/*
  rows = [
    "123",
    "456",
    "789",
    "0"
  ];

  rows = [
    "あぁかさたな",
    "いぃきしちに",
    "うぅくすつぬ",
    "えぇけせてね",
    "おぉこそとの",
    "ゔっん"
  ];

  rows = [
    "はまやゃら",
    "ひみり",
    "ふむゆゅる",
    "へめれ",
    "ほもよょろ",
    "ーゝゞ、。" 
  ];

  rows = [
    "わがざだばぱ",
    "ゐぎじぢびぴ",
    "ぐずづぶぷ",
    "ゑげぜでべぺ",
    "をごぞどぼぽ"
  ];

  rows = [
    "アァカサタナ",
    "イィキシチニ",
    "ウゥクスツヌ",
    "エェケセテネ",
    "オォコソトノ",
    "ヴッン"
  ];

  rows = [
    "ハマヤャラ",
    "ヒミリ",
    "フムユュル",
    "ヘメレ",
    "ホモヨョロ",
    "・ーヽヾ、。" 
  ];

  rows = [
    "ワガザダバパ",
    "ヰギジヂビピ",
    "グズヅブプ",
    "ヱゲゼデベペ",
    "ヲゴゾドボポ"
  ];

  rows = [
    "ÀÈÌÒÙÁÉÍÓÚ",
    "ȀȄȈȌȔÄËÏÖÜ",
    "ÃẼĨÕŨÂÊÎÔÛ",
    "ŇÇÐÞÆ"
  ];

  rows = [
    "АБВГДЕЁЖЗ",
    "ИЙКЛМНОПР",
    "СТУФХЦЧШЩ",
    "ЪЫЬЭЮЯ"
  ];
*/

  for (const row of rows) {

    const galleryItems = [];

    for (let index = 0; index < row.length; index++) {

      const galleryItem = new t_node();

      galleryItem.name = row.charAt(index);
      galleryItems.push(galleryItem);
    }

    galleryRows.push(galleryItems);
  }

  return (
    <div className={`flex-1 flex justify-end flex-col`}>
      { galleryRows.map(galleryItems =>
        <KeyboardGroup galleryItems={ galleryItems } />) }
    </div>
  );
}

const KeyboardItem = ({ galleryItem = null }) => {

  return (
    <div className={`
      w-[30px] xs:w-[40px] sm:w-[50px]
      h-[30px] xs:h-[35px] sm:h-[40px]
      button
      flex flex-row
      items-center justify-center
      mx-[3px]
      rounded-md
      bg-[#1d468a]
      font-medium
      text-lg
    `}>
     { galleryItem.name }
    </div>
  );
}

const KeyboardGroup = ({  galleryItems = [] }) => {

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-[3px]`}>
      { galleryItems.map(galleryItem =>
          <KeyboardItem galleryItem={ galleryItem } />
      )}
    </div>
  );
}

const CommandButton = ({ width,  children }) => {

  if (width == "stretch")
    width = '';
  else
    width = "w-[30px] xs:w-[40px] sm:w-[50px]"; 

  return (
    <div className={`
      h-[30px] xs:h-[35px] sm:h-[40px]
      button
      flex flex-row
      items-center justify-center
      mx-[3px] px-3
      rounded-md
      bg-[#1d468a]
      font-medium
      text-xs
      ${ width }
    `}>
      { children }
    </div>
  );
}

const CommandRow = () => {

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-[3px]`}>
      <CommandButton>
        <ArrowLeftIcon />
      </CommandButton>

      <CommandButton width="stretch">
        <BackspaceIcon fontSize="small" />
      </CommandButton>

      <div className={`
        w-[140px] xs:w-[180px] sm:w-[200px]
        h-[30px] xs:h-[35px] sm:h-[40px]
        button
        flex flex-row
        items-center justify-center
        mx-[3px]
        rounded-md
        bg-[#1d468a]
        font-medium
        text-lg
      `} />

      <CommandButton width="stretch">
        <KeyboardReturnIcon fontSize="small" />
      </CommandButton>

      <CommandButton>
        <ArrowRightIcon />
      </CommandButton>
    </div>
  );
}

export default Index;
