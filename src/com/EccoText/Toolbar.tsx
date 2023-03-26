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
import { ThemeContext } from "../theme";

export const Toolbar = ({
  disabled = false,
  onGoBack
}) => {

  const canvas = useContext(CanvasContext);
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
            rounded={ "left" }
            className={`flex md:hidden pl-3 w-fit`}
            onClick={ () => {} } />

          <SmallTipButton
            disabled={ disabled }
            tip={ "Take Snapshot" }
            icon={ <CameraAltIcon fontSize="small" /> }
            className={`flex md:hidden w-fit`}
            onClick={ () => {} } />

          <SmallTipButton
            disabled={ disabled }
            tip={ "Take Snapshot" }
            icon={ <CameraAltIcon fontSize="small" /> }
            rounded={ "left" }
            className={`hidden md:flex pl-3 w-fit`}
            onClick={ () => {} } />

          <SmallTipButton
            disabled={ disabled }
            tip={ "Generate GIF" }
            icon={ <GifIcon fontSize="small" /> }
            rounded={ "right" }
            className={`mr-4 pr-3 w-fit`}
            onClick={ () => {} } />
        </div>

        <div className={`flex flex-row`}>
          <SmallTipButton
            disabled={ disabled }
            tip={ "Align Left" }
            icon={ <FormatAlignLeftIcon fontSize="small" /> }
            rounded={ "left" }
            className={`pl-3`}
            onClick={ () => canvas.setAlign("left") } />
          <SmallTipButton
            disabled={ disabled }
            tip={ "Align Center" }
            icon={ <FormatAlignCenterIcon fontSize="small" /> }
            onClick={ () => canvas.setAlign("center") } />
          <SmallTipButton
            disabled={ disabled }
            tip={ "Align Right" }
            icon={ <FormatAlignRightIcon fontSize="small" /> }
            onClick={ () => canvas.setAlign("right") } />

          <SmallTipButton
            disabled={ disabled }
            tip={ "Align Top" }
            icon={ <VerticalAlignTopIcon fontSize="small" /> }
            onClick={ () => canvas.setVAlign("top") } />
          <SmallTipButton
            disabled={ disabled }
            tip={ "Align Middle" }
            icon={ <VerticalAlignCenterIcon fontSize="small" /> }
            onClick={ () => canvas.setVAlign("middle") } />
          <SmallTipButton
            disabled={ disabled }
            tip={ "Align Bottom" }
            icon={ <VerticalAlignBottomIcon fontSize="small" /> }
            rounded={ "right" }
            className={`mr-0 sm:mr-4 pr-3`}
            onClick={ () => canvas.setVAlign("bottom") } />
        </div>
      </div>

      <div className={`flex flex-row pt-2 sm:pt-0`}>
      <div className={`flex-1 flex flex-row`}>
      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <AlignVerticalBottomIcon fontSize="small" /> }
        rounded={ "left" }
        className={`pl-3`}
        onClick={ onGoBack } />
      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <AlignVerticalCenterIcon fontSize="small" /> }
        onClick={ onGoBack } />
      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <AlignVerticalTopIcon fontSize="small" /> }
        rounded={ "right" }
        className={`mr-4 pr-3`}
        onClick={ onGoBack } />
      </div>

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <CopyAllIcon fontSize="small" /> }
        rounded={ "left" }
        className={`pl-3 w-fit`}
        onClick={ onGoBack } />

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <ContentPasteIcon fontSize="small" /> }
        rounded={ "right" }
        className={`pr-3 w-fit`}
        onClick={ onGoBack } />

      </div>
    </div>
  );
}

export default Toolbar;
