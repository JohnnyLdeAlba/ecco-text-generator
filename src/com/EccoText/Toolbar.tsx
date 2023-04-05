import { useContext } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UndoIcon from '@mui/icons-material/Undo';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Tooltip from '@mui/material/Tooltip';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';

import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import GifIcon from '@mui/icons-material/Gif';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SettingsIcon from '@mui/icons-material/Settings';

import { SmallButton, SmallTipButton } from "../Button"; 
import { CanvasContext } from "./Canvas";
import { EccoTextContext } from "./useEccoText";
import { ThemeContext } from "../theme";

export const Toolbar = ({
  disabled = false,
  onGoBack
}) => {

  const canvas = useContext(CanvasContext);
  const eccoText = useContext(EccoTextContext);
  const theme = useContext(ThemeContext);

  return (
    <div className={`
      sm:flex-row p-2 sm:p-4
      flex flex-col justify-center
      ${ theme.eccoText.toolbar }
    `}>
      <div className={`flex flex-row`}>

        <div className={`flex-1 sm:flex-none flex flex-row`}>
          <SmallTipButton
            disabled={ disabled }
            tip={ "Open Menu" }
            icon={ <LibraryAddIcon fontSize="small" /> }
            color="light"
            rounded={ "left" }
            className={`flex md:hidden w-fit`}
            onClick={ () => eccoText.showMenu() } />

          <SmallTipButton
            disabled={ disabled }
            tip={ "Take Snapshot" }
            icon={ <CameraAltIcon fontSize="small" /> }
            color="light"
            className={`flex md:hidden w-fit`}
            onClick={ () => canvas.generatePNG() } />

          <SmallTipButton
            disabled={ disabled }
            tip={ "Take Snapshot" }
            icon={ <CameraAltIcon fontSize="small" /> }
            color="light"
            rounded={ "left" }
            className={`hidden md:flex w-fit`}
            onClick={ () => canvas.generatePNG() } />

          <SmallTipButton
            disabled={ disabled }
            tip={ "Generate GIF" }
            icon={ <GifIcon fontSize="small" /> }
            color="light"
            rounded={ "right" }
            className={`mr-4 w-fit`}
            onClick={ () => canvas.generate() } />
        </div>

        <div className={`flex flex-row`}>
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.align == "left" }
            tip={ "Align Left" }
            icon={ <FormatAlignLeftIcon fontSize="small" /> }
            color="light"
            rounded={ "left" }
            onClick={ () => canvas.setAlign("left") } />
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.align == "center" }
            tip={ "Align Center" }
            color="light"
            icon={ <FormatAlignCenterIcon fontSize="small" /> }
            onClick={ () => canvas.setAlign("center") } />
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.align == "right" }
            tip={ "Align Right" }
            color="light"
            icon={ <FormatAlignRightIcon fontSize="small" /> }
            onClick={ () => canvas.setAlign("right") } />

          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.vAlign == "top" }
            tip={ "Align Top" }
            color="light"
            icon={ <VerticalAlignTopIcon fontSize="small" /> }
            onClick={ () => canvas.setVAlign("top") } />
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.vAlign == "middle" }
            tip={ "Align Middle" }
            color="light"
            icon={ <VerticalAlignCenterIcon fontSize="small" /> }
            onClick={ () => canvas.setVAlign("middle") } />
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.vAlign == "bottom" }
            tip={ "Align Bottom" }
            color="light"
            icon={ <VerticalAlignBottomIcon fontSize="small" /> }
            rounded={ "right" }
            className={`mr-0 sm:mr-4`}
            onClick={ () => canvas.setVAlign("bottom") } />
        </div>
      </div>

      <div className={`flex flex-row pt-2 sm:pt-0`}>
        <div className={`flex-1 flex flex-row`}>
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.baseline == "bottom" }
            tip={ "Bottom Baseline" }
            icon={ <AlignVerticalBottomIcon fontSize="small" /> }
            color="light"
            rounded={ "left" }
            onClick={ () => canvas.setBaseline("bottom") } />
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.baseline == "middle" }
            tip={ "Middle Baseline" }
            color="light"
            icon={ <AlignVerticalCenterIcon fontSize="small" /> }
            onClick={ () => canvas.setBaseline("middle") } />
          <SmallTipButton
            disabled={ disabled }
            closed={ canvas.baseline == "top" }
            tip={ "Top Baseline" }
            icon={ <AlignVerticalTopIcon fontSize="small" /> }
            color="light"
            rounded={ "right" }
            className={`mr-4`}
            onClick={ () => canvas.setBaseline("top") } />
          </div>

        <SmallTipButton
          disabled={ disabled }
          tip={ "Copy to Clipboard" }
          icon={ <CopyAllIcon fontSize="small" /> }
          color="light"
          rounded={ "left" }
          className={`w-fit`}
          onClick={ () => canvas.clipboardCopy() } />

        <SmallTipButton
          disabled={ disabled }
          tip={ "Paste from Clipboard" }
          icon={ <ContentPasteIcon fontSize="small" /> }
          color="light"
          rounded={ "right" }
          className={`w-fit`}
          onClick={ () => canvas.clipboardPaste() } />

      </div>
    </div>
  );
}

export default Toolbar;
