import { useContext, useState } from "react";

import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { t_node } from "../../lib/node-lib";
import { CanvasContext } from "./Canvas";
import { ThemeContext } from "../../com/theme";

const EnglishLayout = ({ disabled = false }) => {

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
        <KeyboardRow disabled={ disabled } charRows={ alpha } />
        <ControlRow disabled={ disabled } />       
      </div>
      <div className={`hidden xl:block ml-1`}>
        <KeyboardRow disabled={ disabled } charRows={ numeric } />
      </div>
    </div>
  );
}

const NumbersLayout = ({ disabled = false }) => {

  const numeric = [
    "123",
    "456",
    "789",
    "0"
  ];

  return (
    <div className={`flex flex-col`}>
      <KeyboardRow disabled={ disabled } charRows={ numeric } />
      <ControlRow disabled={ disabled } />       
    </div>
  );
}

const IntlLayout = ({ disabled = false }) => {

  const international = [
    "ÀÈÌÒÙÁÉÍÓÚ",
    "ȀȄȈȌȔÄËÏÖÜ",
    "ÃẼĨÕŨÂÊÎÔÛ",
    "ÑŇÇÐÞÆ"
  ];

  return (
    <div className={`flex flex-col`}>
      <KeyboardRow disabled={ disabled } charRows={ international } />
      <ControlRow disabled={ disabled } />       
    </div>
  );
}

const RussianLayout = ({ disabled = false }) => {

  const russian = [
    "АБВГДЕЁЖЗ",
    "ИЙКЛМНОПР",
    "СТУФХЦЧШЩ",
    "ЪЫЬЭЮЯ"
  ];

  return (
    <div className={`flex flex-col`}>
      <KeyboardRow disabled={ disabled } charRows={ russian } />
      <ControlRow disabled={ disabled } />       
    </div>
  );
}

const HiraganaLayout = ({ disabled = false }) => {

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
    // "ゔっんゝゞ",
    "*っん",
    "ー*。",
    "*",
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
          <KeyboardRow disabled={ disabled }  charRows={ getLayout(visible) } />
        </div>

        <div className={`flex-1 flex flex-col items-end`}>
          <ControlKey
            disabled={ disabled || visible == "hiraganaA" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaA") }>
            あぁか 
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "hiraganaB" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaB") }>
            はまや
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "hiraganaC" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaC") }>
            わがざ
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "hiraganaD" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaD") }>
            ゔっん
          </ControlKey>
        </div>
      </div>

      <ControlRow disabled={ disabled } />       
    </div>
  );
}

const KatakanaLayout = ({ disabled = false }) => {

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
          <KeyboardRow disabled={ disabled } charRows={ getLayout(visible) } />
        </div>

        <div className={`flex-1 flex flex-col items-end`}>
          <ControlKey
            disabled={ disabled || visible == "katakanaA" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaA") }>
            アァカ 
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "katakanaB" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaB") }>
            ハマヤ
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "katakanaC" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaC") }>
            ワガザ
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "katakanaD" }
            width="stretch"
            className={`m-[3px]`}
            onClick={ () => show("katakanaD") }>
            ヴッン
          </ControlKey>
        </div>
      </div>

      <ControlRow disabled={ disabled } />       
    </div>
  );
}

const ControlKey = ({
  disabled = false,
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
      ${ disabled ? "disabled" : "button" }
      ${ width }
      ${ className }
      ${ theme.eccoText.keyboardItem }
      `} onClick={ disabled ? null : onClick }>
      { children }
    </div>
  );
}

const ControlRow = ({ disabled = false }) => {

  const canvas = useContext(CanvasContext);

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-[3px]`}>
      <ControlKey disabled={ disabled }
        onClick={ () => canvas.handleInput("ArrowLeft") }>
        <ArrowLeftIcon />
      </ControlKey>

      <ControlKey disabled={ disabled } width="stretch">
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
        ${ disabled ? "disabled" : "button" }
      `} onClick={ () => canvas.handleInput(' ') } />

      <ControlKey disabled={ disabled } width="stretch">
        <KeyboardReturnIcon fontSize="small"
          onClick={ () => canvas.handleInput("Enter") } />
      </ControlKey>

      <ControlKey disabled={ disabled }
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

const KeyboardItem = ({ disabled = false, galleryItem = null }) => {

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
      ${ disabled ? "disabled" : "button" }
      ${ theme.eccoText.keyboardItem }
    `} onClick={ galleryItem.onClick }>
     { galleryItem.name }
    </div>
  );
}

const KeyboardGroup = ({ disabled = false, galleryItems = [] }) => {

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-[3px]`}>
      { galleryItems.map(galleryItem =>
          <KeyboardItem
            key={ galleryItem.uniqueId }
            disabled={ disabled }
            galleryItem={ galleryItem } />
      )}
    </div>
  );
}

const KeyboardRow = ({ disabled = false, charRows = [] }) => {

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
          disabled={ disabled }
          galleryItems={ galleryItems } />) }
    </div>
  );
}

export const Keyboard = ({ disabled = false, layout = "engKeyboard" }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      disabled-selection
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
        { layout == "engKeyboard" ? <EnglishLayout disabled={ disabled } /> : null }
        { layout == "numKeyboard" ? <NumbersLayout disabled={ disabled } /> : null }
        { layout == "intlKeyboard" ? <IntlLayout disabled={ disabled } /> : null }
        { layout == "rusKeyboard" ? <RussianLayout disabled={ disabled } /> : null }
        { layout == "hiraKeyboard" ? <HiraganaLayout disabled={ disabled } /> : null }
        { layout == "kataKeyboard" ? <KatakanaLayout disabled={ disabled } /> : null }
      </div>
    </div>
  )
}
