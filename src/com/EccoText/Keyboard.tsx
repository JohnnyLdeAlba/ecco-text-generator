import { useContext, useState } from "react";

import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { t_node } from "../../lib/node-lib";
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
    "12345",
    "67890",
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
    "ŇÇÐÞÆ"
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

const HiraganaLayout = () => {

  const [ visible, show ] = useState("hiraganaB");

  const hiraganaA = [
    "あぁかさたな",
    "いぃきしちに",
    "うぅくすつぬ",
    "えぇけせてね",
    "おぉこそとの",
    "ゔっん"
  ];

  const hiraganaB = [
    "はまやゃら",
    "ひみり",
    "ふむゆゅる",
    "へめれ",
    "ほもよょろ",
    "ーゝゞ" 
  ];

  const hiraganaC = [
    "わがざだばぱ",
    "ゐぎじぢびぴ",
    "ぐずづぶぷ",
    "ゑげぜでべぺ",
    "をごぞどぼぽ",
    "、。"
  ];

  return (
    <div className={`flex flex-col`}>
      <div className={`
        flex-row justify-center
        mx-auto w-fit
        ${ visible == "hiraganaA" ? "flex" : "hidden" }
        `}>
        <KeyboardRow charRows={ hiraganaA } />
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("hiraganaB") }>
          はま → 
        </ControlKey>
      </div>

      <div className={`
        flex-row justify-center
        mx-auto w-fit
        ${ visible == "hiraganaB" ? "flex" : "hidden" }
        `}>
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("hiraganaA") }>
          ← あぁ
        </ControlKey>
        <KeyboardRow charRows={ hiraganaB } />
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("hiraganaC") }>
          わが → 
        </ControlKey>
      </div>

      <div className={`
        flex-row justify-center
        mx-auto w-fit
        ${ visible == "hiraganaC" ? "flex" : "hidden" }
        `}>
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("hiraganaB") }>
          ← わが
        </ControlKey>
        <KeyboardRow charRows={ hiraganaC } />
      </div>

      <ControlRow />       
    </div>
  );
}

const KatakanaLayout = () => {

  const [ visible, show ] = useState("katakanaB");

  const katakanaA = [
    "アァカサタナ",
    "イィキシチニ",
    "ウゥクスツヌ",
    "エェケセテネ",
    "オォコソトノ",
    "ヴッン"
  ];

  const katakanaB = [
    "ハマヤャラ",
    "ヒミリ",
    "フムユュル",
    "ヘメレ",
    "ホモヨョロ",
    "・ーヽヾ" 
  ];

  const katakanaC = [
    "ワガザダバパ",
    "ヰギジヂビピ",
    "グズヅブプ",
    "ヱゲゼデベペ",
    "ヲゴゾドボポ",
    "、。"
  ];

  return (
    <div className={`flex flex-col`}>
      <div className={`
        flex-row justify-center
        mx-auto w-fit
        ${ visible == "katakanaA" ? "flex" : "hidden" }
        `}>
        <KeyboardRow charRows={ katakanaA } />
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("katakanaB") }>
          ハマ → 
        </ControlKey>
      </div>

      <div className={`
        flex-row justify-center
        mx-auto w-fit
        ${ visible == "katakanaB" ? "flex" : "hidden" }
        `}>
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("katakanaA") }>
          ← アァ
        </ControlKey>
        <KeyboardRow charRows={ katakanaB } />
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("katakanaC") }>
          ワガ → 
        </ControlKey>
      </div>

      <div className={`
        flex-row justify-center
        mx-auto w-fit
        ${ visible == "katakanaC" ? "flex" : "hidden" }
        `}>
        <ControlKey
          width="stretch"
          className={`m-[3px]`}
          onClick={ () => show("katakanaB") }>
          ← ハマ
        </ControlKey>
        <KeyboardRow charRows={ katakanaC } />
      </div>

      <ControlRow />       
    </div>
  );
}

const ControlKey = ({ width, onClick, className, children }) => {

  const theme = useContext(ThemeContext);

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
      font-medium
      text-xs
      ${ width }
      ${ className }
      ${ theme.eccoText.keyboardItem }
      `} onClick={ onClick }>
      { children }
    </div>
  );
}

const ControlRow = () => {

  return (
    <div className={`
      flex flex-row
      items-center justify-center
      py-[3px]`}>
      <ControlKey>
        <ArrowLeftIcon />
      </ControlKey>

      <ControlKey width="stretch">
        <BackspaceIcon fontSize="small" />
      </ControlKey>

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

      <ControlKey width="stretch">
        <KeyboardReturnIcon fontSize="small" />
      </ControlKey>

      <ControlKey>
        <ArrowRightIcon />
      </ControlKey>
    </div>
  );
}

const KeyboardItem = ({ galleryItem = null }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      w-[30px] xs:w-[40px] sm:w-[50px]
      h-[30px] xs:h-[35px] sm:h-[40px]
      button
      flex flex-row
      items-center justify-center
      mx-[3px]
      rounded-md
      font-medium
      text-lg
      ${ theme.eccoText.keyboardItem }
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

const KeyboardRow = ({  charRows = [], onClick }) => {

  const galleryRows = [];

  for (const charRow of charRows) {

    const galleryItems = [];

    for (let index = 0; index < charRow.length; index++) {

      const galleryItem = new t_node();

      galleryItem.name = charRow.charAt(index);
      galleryItem.onClick = onClick;

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
