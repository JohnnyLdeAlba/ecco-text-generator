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
import GifBoxIcon from '@mui/icons-material/GifBox';

import { SmallButton, SmallTipButton } from "../Button"; 
import { ThemeContext } from "../theme";

export const Toolbar = ({
  page = 0,
  showDetailsClosed = false,
  onGoBack = true,
  onUnselect,
  onRemoveSelected,
  onShowDetails,
  onToggleHidden,
  onNextPage,
  onPrevPage
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row p-4
    `}>

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <FormatAlignLeftIcon fontSize="small" /> }
        rounded={ "left" }
        className={`pl-3`}
        onClick={ onGoBack } />

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <FormatAlignCenterIcon fontSize="small" /> }
        onClick={ onGoBack } />

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <FormatAlignRightIcon fontSize="small" /> }
        onClick={ onGoBack } />

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <VerticalAlignTopIcon fontSize="small" /> }
        onClick={ onGoBack } />
      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <VerticalAlignCenterIcon fontSize="small" /> }
        onClick={ onGoBack } />
      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <VerticalAlignBottomIcon fontSize="small" /> }
        rounded={ "right" }
        className={`mr-8 pr-3`}
        onClick={ onGoBack } />

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
        className={`mr-8 pr-3`}
        onClick={ onGoBack } />

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <ContentCutIcon fontSize="small" /> }
        rounded={ "full" }
        className={`px-3`}
        onClick={ onGoBack } />

        <div className={`flex-1 flex flex-row justify-end`}>

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        title="Take Snapshot"
        icon={ <div className={`mr-2`}><CameraAltIcon fontSize="small" /></div> }
        rounded={ "left" }
        className={`pl-3`}
        onClick={ onGoBack } />

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        title="Generate GIF"
        icon={ <div className={`mr-2`}><GifBoxIcon fontSize="small" /></div> }
        rounded={ "right" }
        className={`pr-3`}
        onClick={ onGoBack } />



        </div>
    </div>
  );
}

export default Toolbar;
