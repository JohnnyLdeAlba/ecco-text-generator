import { useContext, useState } from "react";

import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';


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
    // "あぁかさたな",
    "あ*かさたな",
    "いぃきしちに",
    // "うぅくすつぬ",
    "う*くすつぬ",
    // "えぇけせてね",
    "え*けせてね",
    // "おぉこそとの",
    "お*こそとの",
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
    // "ゐぎじぢびぴ",
    "*ぎじぢびぴ",
    "*ぐずづぶぷ",
    // "ゑげぜでべぺ",
    "*げぜでべぺ",
    "をごぞどぼぽ",
  ];

  const hiraganaD = [
    // "ゔっんゝゞ",
    "*っん",
    "ー・。",
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
            dimensions="stretchWidth"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaA") }>
            あぁか 
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "hiraganaB" }
            dimensions="stretchWidth"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaB") }>
            はまや
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "hiraganaC" }
            dimensions="stretchWidth"
            className={`m-[3px]`}
            onClick={ () => show("hiraganaC") }>
            わがざ
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "hiraganaD" }
            dimensions="stretchWidth"
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
    // "アァカサタナ",
    "ア*カサタナ",
    "イィキシチニ",
    // "ウゥクスツヌ",
    "ウ*クスツヌ",
    // "エェケセテネ",
    "エ*ケセテネ",
    // "オォコソトノ"
    "オ*コソトノ"
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
    // "ヰギジヂビピ",
    "*ギジヂビピ",
    "*グズヅブプ",
    // "ヱゲゼデベペ",
    "*ゲゼデベペ",
    "ヲゴゾドボポ"
  ];

  const katakanaD = [
    // "ヴッンヽヾ",
    "*ッン**",
    // "ー・。、",
    "ー・。*",
    "*",
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
            dimensions="stretchWidth"
            className={`m-[3px]`}
            onClick={ () => show("katakanaA") }>
            アァカ 
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "katakanaB" }
            dimensions="stretchWidth"
            className={`m-[3px]`}
            onClick={ () => show("katakanaB") }>
            ハマヤ
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "katakanaC" }
            dimensions="stretchWidth"
            className={`m-[3px]`}
            onClick={ () => show("katakanaC") }>
            ワガザ
          </ControlKey>

          <ControlKey
            disabled={ disabled || visible == "katakanaD" }
            dimensions="stretchWidth"
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

const AnimationsLayout = ({ disabled = false }) => {

  const canvas = useContext(CanvasContext);

  return (
    <>
    <div className={`
      w-full
      flex flex-row
      items-center justify-center
      py-[3px]`}>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1004') }>
        <img src="/eccotext/icons/keyboard/amoeba.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1013') }>
        <img src="/eccotext/icons/keyboard/crab.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1007') }>
        <img src="/eccotext/icons/keyboard/dolphin.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1008') }>
        <img src="/eccotext/icons/keyboard/glyph.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1000') }>
        <img src="/eccotext/icons/keyboard/jellyfish.png" alt="" />
      </ControlKey>

    </div>
    <div className={`
      w-full
      flex flex-row
      items-center justify-center
      py-[3px]`}>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1001') }>
        <img src="/eccotext/icons/keyboard/metasphere.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1005') }>
        <img src="/eccotext/icons/keyboard/seagull.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1014') }>
        <img src="/eccotext/icons/keyboard/shield-crab.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1006') }>
        <img src="/eccotext/icons/keyboard/small-orca.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1012') }>
        <img src="/eccotext/icons/keyboard/starfish.png" alt="" />
      </ControlKey>

    </div>
    <div className={`
      w-full
      flex flex-row
      items-center justify-center
      py-[3px]`}>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1010') }>
        <img src="/eccotext/icons/keyboard/turtle.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1009') }>
        <img src="/eccotext/icons/keyboard/vortex-future-dolphin.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1003') }>
        <img src="/eccotext/icons/keyboard/vortex-globe.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1002') }>
        <img src="/eccotext/icons/keyboard/vortex-jellyfish.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1011') }>
        <img src="/eccotext/icons/keyboard/stingray.png" alt="" />
      </ControlKey>

    </div>
    <div className={`
      w-full
      flex flex-row
      items-center justify-center
      py-[3px]`}>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1015') }>
        <img src="/eccotext/icons/keyboard/fish-1.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1016') }>
        <img src="/eccotext/icons/keyboard/fish-2.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1017') }>
        <img src="/eccotext/icons/keyboard/fish-3.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1018') }>
        <img src="/eccotext/icons/keyboard/fish-4.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1019') }>
        <img src="/eccotext/icons/keyboard/fish-5.png" alt="" />
      </ControlKey>

    </div>
    <div className={`
      w-full
      flex flex-row
      items-center justify-center
      py-[3px]`}>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1020') }>
        <img src="/eccotext/icons/keyboard/fish-6.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1021') }>
        <img src="/eccotext/icons/keyboard/fish-7.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1022') }>
        <img src="/eccotext/icons/keyboard/fish-8.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1023') }>
        <img src="/eccotext/icons/keyboard/fish-9.png" alt="" />
      </ControlKey>

      <ControlKey disabled={ disabled } dimensions="stretch"
        onClick={ () => canvas.handleInput('\u1024') }>
        <img src="/eccotext/icons/keyboard/fish-10.png" alt="" />
      </ControlKey>

    </div>
    </>
  );
}

const ControlKey = ({
  disabled = false,
  dimensions,
  className,
  onClick,
  children }) => {

  const theme = useContext(ThemeContext);

  if (dimensions == "stretch")
    dimensions = '';
  else if (dimensions == "stretchWidth")
    dimensions = `h-[30px] xs:h-[35px] sm:h-[40px]`; 
  else
    dimensions = `w-[30px] xs:w-[40px] sm:w-[50px]
      h-[30px] xs:h-[35px] sm:h-[40px]`; 

  return (
    <div className={`
      disable-select
      flex flex-row
      items-center justify-center
      mx-[3px] px-3
      rounded-md
      font-medium
      text-xs
      ${ disabled ? "disabled" : "button" }
      ${ dimensions }
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

      <ControlKey disabled={ disabled } dimensions="stretchWidth">
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

      <ControlKey disabled={ disabled } dimensions="stretchWidth">
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

const MiniCard = ({
  disabled = false,
  icon,
  title,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex-1 flex flex-col
      overflow-y-auto
      sm:rounded-lg h-full
      ${ disabled ? "disabled" : '' }
      ${ theme.card }`}>

      <div className={`
        flex flex-row
        px-3 py-2
        font-medium text-sm
        ${ theme.cardHeader }`}>
        { icon ? <div className={`mr-2`}>{ icon }</div> : '' }
        { title }
      </div>

      <div className={`
        flex-1 flex flex-col
        overflow-y-auto h-full
        ${ theme.scrollbars }`}>
        { children }
      </div>
    </div>
  );
}


const SettingsLayout = ({ disabled = false }) => {

  const canvas = useContext(CanvasContext);

  return (
    <div className={`
      flex-1 sm:flex-none
      w-full sm:w-[500px]
      flex flex-row
      mx-auto
    `}>
      <MiniCard
        icon={ <img
          src="/icons/settings.png"
          alt='' className={`w-[24px]`} /> }
        title="Settings">

      <div className={`flex flex-row items-center px-4 py-2`}>
        <div className={`flex-1 font-medium text-sm`}>Trim Spaces</div> 
        <div>
          <Switch color="default"
            classes={{ root: "mui-darksea-Switch" }}
            checked={ canvas.trimSpaces }
            onChange={ () => canvas.toggleTrimSpaces() } />
        </div> 
        <div className={`pl-2 w-20 font-medium text-sm text-center`}>
          { canvas.trimSpaces ? "Enabled" : "Disabled" }
        </div> 
      </div>

      <div className={`flex flex-col px-4 py-2`}>
        <div className={`font-medium text-sm`}>Effect</div>
        <div className={`flex flex-row`}> 
          <div className={`flex-1 px-8 font-medium`}>

            <Slider classes={{ root: "mui-darksea" }}
              value={ canvas.waveformIndex } max={ 255 }
              onChange={ (event, value) => canvas.setWaveformIndex(value) }
            />

          </div>
          <div className={`w-6 font-medium text-right`}>
            { canvas.waveformIndex < 0 ? 0 : canvas.waveformIndex }
          </div> 
        </div>
      </div>

      </MiniCard>
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
      disable-select
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

  if (layout == "setKeyboard")
    return <SettingsLayout disabled={ disabled } />

  return (
    <div className={`
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
        { layout == "aniKeyboard" ? <AnimationsLayout disabled={ disabled } /> : null }
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
