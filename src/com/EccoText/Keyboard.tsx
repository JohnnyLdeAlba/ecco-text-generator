import { useContext, useState } from "react";

import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { t_node } from "../../lib/node-lib";
import { CanvasContext } from "./Canvas";
import { ThemeContext } from "../../com/theme";

const EnglishLayout = () => {

  const alpha = [
    "!¡?¿\'“”;:-",
    "QWERTYUIOP",
    "ASDFGHJKL",
    ",ZXCVBNM.",
  ];

  const numeric = [
    "123",
    "456",
    "789",
    "0"
  ];

  return (
    <div className={`flex flex-row`}>
      <div>
        <KeyboardRow charRows={ alpha } />
        <ControlRow />       
      </div>
      <div className={`hidden xl:block ml-1`}>
        <KeyboardRow charRows={ numeric } />
      </div>
    </div>
  );
}

const NumbersLayout = () => {

  const numeric = [
    "123",
    "456",
    "789",
    "0"
  ];

  return (
    <div className={`flex flex-col`}>
      <KeyboardRow charRows={ numeric } />
      <ControlRow />       
    </div>
  );
}

const IntlLayout = () => {

  const international = [
    "ÀÈÌÒÙÁÉÍÓÚ",
    "ȀȄȈȌȔÄËÏÖÜ",
    "ÃẼĨÕŨÂÊÎÔÛ",
    "ÑŇÇÐÞÆ"
  ];

  return (
    <div className={`flex flex-col`}>
      <KeyboardRow charRows={ international } />
      <ControlRow />       
    </div>
  );
}

const RussianLayout = () => {

  const russian = [
    "АБВГДЕЁЖЗ",
    "ИЙКЛМНОПР",
    "СТУФХЦЧШЩ",
    "ЪЫЬЭЮЯ"
  ];

  return (
    <div className={`flex flex-col`}>
      <KeyboardRow charRows={ russian } />
      <ControlRow />       
    </div>
  );
}

const HiraganaLayout = ({ disable = false }) => {

  const [ visible, show ] = useState("hiraganaA");

  const hiraganaA = [
    "あぁかさたな",
    "いぃきしちに",
    "うぅくすつぬ",
    "えぇけせてね",
    "おぉこそとの",
  ];

  const hiraganaB = [
    "はまやゃら",
    "ひみ**り",
    "ふむゆゅる",
    "へめ**れ",
    "ほもよょろ",
  ];

  const hiraganaC = [
    "わがざだばぱ",
    "ゐぎじぢびぴ",
    "*ぐずづぶぷ",
    "ゑげぜでべぺ",
    "をごぞどぼぽ",
  ];

  const hiraganaD = [
    "ゔっん",
    "ーゝゞ",
    "、。*",
    "*",
    "*"
  ];

  const getLayout = layout => {

    switch (layout) {

      case "hiraganaA":
        return hiraganaA;

      case "hiraganaB":
        return hiraganaB;

      case "hiraganaC":
        return hiraganaC;

      case "hiraganaD":
        return hiraganaD;
    }

    return  [];
  }

  return (
    <div className={`flex flex-col`}>

      <div className={`flex flex-row`}>
        <div className={`flex flex-row items-start`}>
          <KeyboardRow charRows={ getLayout(visible) } />
        </div>

        <div className={`flex-1 flex flex-col items-end`}>
          <ControlKey
            disable={ disable || visible == "hiraganaA" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaA") }>
            あぁか 
          </ControlKey>

          <ControlKey
            disable={ disable || visible == "hiraganaB" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaB") }>
            はまや
          </ControlKey>

          <ControlKey
            disable={ disable || visible == "hiraganaC" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaC") }>
            わがざ
          </ControlKey>

          <ControlKey
            disable={ disable || visible == "hiraganaD" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaD") }>
            ゔっん
          </ControlKey>
        </div>
      </div>

      <ControlRow />       
    </div>
  );
}

const KatakanaLayout = ({ disable = false }) => {

  const [ visible, show ] = useState("katakanaA");

  const katakanaA = [
    "アァカサタナ",
    "イィキシチニ",
    "ウゥクスツヌ",
    "エェケセテネ",
    "オォコソトノ"
  ];

  const katakanaB = [
    "ハマヤャラ",
    "ヒミ**リ",
    "フムユュル",
    "ヘメ**レ",
    "ホモヨョロ"
  ];

  const katakanaC = [
    "ワガザダバパ",
    "ヰギジヂビピ",
    "*グズヅブプ",
    "ヱゲゼデベペ",
    "ヲゴゾドボポ"
  ];

  const katakanaD = [
    "ヴッン*",
    "・ーヽヾ",
    "、。**",
    "*",
    "*"
  ];

  const getLayout = layout => {

    switch (layout) {

      case "katakanaA":
        return katakanaA;

      case "katakanaB":
        return katakanaB;

      case "katakanaC":
        return katakanaC;

      case "katakanaD":
        return katakanaD;
    }

    return  [];
  }

  return (
    <div className={`flex flex-col`}>

      <div className={`flex flex-row`}>
        <div className={`flex flex-row items-start`}>
          <KeyboardRow disable={ disable } charRows={ getLayout(visible) } />
        </div>

        <div className={`flex-1 flex flex-col items-end`}>
          <ControlKey
            disable={ disable || visible == "katakanaA" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaA") }>
            アァカ 
          </ControlKey>

          <ControlKey
            disable={ disable || visible == "katakanaB" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaB") }>
            ハマヤ
          </ControlKey>

          <ControlKey
            disable={ disable || visible == "katakanaC" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaC") }>
            ワガザ
          </ControlKey>

          <ControlKey
            disable={ disable || visible == "katakanaD" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaD") }>
            ヴッン
          </ControlKey>
        </div>
      </div>

      <ControlRow disable={ disable } />       
    </div>
  );
}

const ControlKey = ({
  disable = false,
  width,
  className,
  onClick,
  children }) => {

  const theme = useContext(ThemeContext);

  if (width == "stretch")
    width = '';
  else
    width = "w-[30px] xs:w-[40px] sm:w-[50px]"; 

  return (
    <div className={`
      h-[30px] xs:h-[35px] sm:h-[40px]
      flex flex-row
      items-center justify-center
      mx-[3px] px-3
      rounded-md
      font-medium
      text-xs
      ${ disable ? "disabled" : "button" }
      ${ width }
      ${ className }
      ${ theme.eccoText.keyboardItem }
      `} onClick={ disable ? null : onClick }>
      { children }
    </div>
  );
}

const ControlRow = ({ disable = false }) => {

  const canvas = useContext(CanvasContext);

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-[3px]`}>
      <ControlKey disable={ disable }
        onClick={ () => canvas.handleInput("ArrowLeft") }>
        <ArrowLeftIcon />
      </ControlKey>

      <ControlKey disable={ disable } width="stretch">
        <BackspaceIcon fontSize="small"
          onClick={ () => canvas.handleInput("Backspace") }/>
      </ControlKey>

      <div className={`
        w-[140px] xs:w-[180px] sm:w-[200px]
        h-[30px] xs:h-[35px] sm:h-[40px]
        flex flex-row
        items-center justify-center
        mx-[3px]
        rounded-md
        bg-[#1d468a]
        font-medium
        text-lg
        ${ disable ? "disabled" : "button" }
      `} onClick={ () => canvas.handleInput(' ') } />

      <ControlKey disable={ disable } width="stretch">
        <KeyboardReturnIcon fontSize="small"
          onClick={ () => canvas.handleInput("Enter") } />
      </ControlKey>

      <ControlKey disable={ disable }
        onClick={ () => canvas.handleInput("ArrowRight") }>
        <ArrowRightIcon />
      </ControlKey>
    </div>
  );
}

const NullItem = () => {

  return (
    <div className={`
      w-[30px] xs:w-[40px] sm:w-[50px]
      h-[30px] xs:h-[35px] sm:h-[40px]
      mx-[3px]
    `}/>
  );
}

const KeyboardItem = ({ disable = false, galleryItem = null }) => {

  const theme = useContext(ThemeContext);

  if (galleryItem.hash == '*')
    return <NullItem />

  return (
    <div className={`
      w-[30px] xs:w-[40px] sm:w-[50px]
      h-[30px] xs:h-[35px] sm:h-[40px]
      flex flex-row
      items-center justify-center
      mx-[3px]
      rounded-md
      font-medium
      text-lg
      ${ disable ? "disabled" : "button" }
      ${ theme.eccoText.keyboardItem }
    `} onClick={ galleryItem.onClick }>
     { galleryItem.name }
    </div>
  );
}

const KeyboardGroup = ({ disable = false, galleryItems = [] }) => {

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-[3px]`}>
      { galleryItems.map(galleryItem =>
          <KeyboardItem
            key={ galleryItem.uniqueId }
            disable={ disable }
            galleryItem={ galleryItem } />
      )}
    </div>
  );
}

const KeyboardRow = ({ disable = false, charRows = [] }) => {

  let uniqueId = 9000;

  const canvas = useContext(CanvasContext);
  const galleryRows = [];

  for (const charRow of charRows) {

    const galleryItems = [];

    for (let index = 0; index < charRow.length; index++) {

      const galleryItem = new t_node();
      const hash = charRow.charAt(index);

      galleryItem.uniqueId = uniqueId++; 
      galleryItem.name = hash;
      galleryItem.hash = hash;
      galleryItem.onClick = () => canvas.handleInput(galleryItem.hash);

      galleryItems.push(galleryItem);
    }

    galleryRows.push(galleryItems);
  }

  return (
    <div className={`flex-1 flex justify-end flex-col`}>
      { galleryRows.map(galleryItems =>
        <KeyboardGroup
          key={ uniqueId++ }
          disable={ disable }
          galleryItems={ galleryItems } />) }
    </div>
  );
}

export const Keyboard = ({ layout = "engKeyboard" }) => {

  const theme = useContext(ThemeContext);

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
      ${ theme.eccoText.keyboard }
      `}>
      <div className={`
        flex flex-col
        items-center justify-center
        py-[3px]`}>
        { layout == "engKeyboard" ? <EnglishLayout /> : null }
        { layout == "numKeyboard" ? <NumbersLayout /> : null }
        { layout == "intlKeyboard" ? <IntlLayout /> : null }
        { layout == "rusKeyboard" ? <RussianLayout /> : null }
        { layout == "hiraKeyboard" ? <HiraganaLayout /> : null }
        { layout == "kataKeyboard" ? <KatakanaLayout /> : null }
      </div>
    </div>
  )
}
