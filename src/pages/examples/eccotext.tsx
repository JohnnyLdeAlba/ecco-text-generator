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

          <div className={`hidden md:flex flex-col overflow-y-auto pl-4 w-[240px] sm:h-[450px] 2xl:h-[500px]`}>

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

<div className={`flex-1 sm:mx-auto sm:w-[600px] flex flex-row sm:items-start items-end sm:rounded-lg bg-[#0e1d35]`}>

  <div className={`p-2 flex justify-end flex-col`}>

    <div className={`px-4`}> 
    <Slider classes={{ root: "mui-darksea" }} aria-label="Volume" value={ canvas.waveformIndex } max={ 255 } onChange={ (event, value) => canvas.setWaveformIndex(value) } />
    </div>
    <KeyboardRow galleryItems={ [] } /> 
  </div>
  <div>...</div>


</div>
      </Container>
    </Layout>
  )
}

const KeyboardItem = ({ galleryItem = null }) => {

  return (
    <div className={`
      button
      flex flex-row
      items-center justify-center
      mx-1 w-[30px] h-[30px]
      rounded-md
      bg-[#1d468a]
      font-medium
      text-lg
    `}>
     { galleryItem.name }
    </div>
  );
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
    <div className={`p-2 flex-1 flex justify-end flex-col`}>
      { galleryRows.map(galleryItems =>
        <KeyboardGroup galleryItems={ galleryItems } />) }
    </div>
  );
}



const KeyboardGroup = ({  galleryItems = [] }) => {

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-1`}>
      { galleryItems.map(galleryItem =>
          <KeyboardItem galleryItem={ galleryItem } />
      )}
    </div>
  );
}

export default Index;
