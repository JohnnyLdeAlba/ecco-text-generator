import { useContext } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UndoIcon from '@mui/icons-material/Undo';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Tooltip from '@mui/material/Tooltip';

import { SmallButton, SmallTipButton } from "../Button"; 
import { ThemeContext } from "../theme";

export const Toolbar = ({
  page = 0,
  showDetailsClosed = false,
  onGoBack,
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
      flex flex-row px-4 py-2
      ${ theme.toolbar }
    `}>

      <SmallTipButton
        disabled={ onGoBack ? false : true }
        tip={ onGoBack ? "Go Back" : '' }
        icon={ <div className={`ml-2`}><ArrowBackIcon fontSize="small" /></div> }
        rounded="left"
        onClick={ onGoBack } />

      { onUnselect ? <SmallTipButton
        icon={ <div className={`mr-2`}><UndoIcon fontSize="small" /></div> }
        title="Unselect"
        tip="Unselect Items"
        onClick={ onUnselect } /> : null }

      { onRemoveSelected ? <SmallTipButton
        icon={ <div className={`mr-2`}><RemoveCircleIcon fontSize="small" /></div> }
        title="Remove" tip="Remove Selected Items"
        onClick={ onRemoveSelected } /> : null }

      { onShowDetails ? <SmallTipButton
        icon={ <ArtTrackIcon fontSize="small" /> }
        tip="Show Details" closed={ showDetailsClosed }
        onClick={ onShowDetails } /> : null }

      { onToggleHidden ? <SmallTipButton
        icon={ <div className={`mr-2`}><VisibilityOffIcon fontSize="small" /></div> }
        rounded="right" tip="Toggle Hidden"
        onClick={ onToggleHidden } /> : null }

      { page > 0 ? 
        <div className={`flex-1 flex flex-row justify-end`}>

          <SmallTipButton
            disabled={ onPrevPage ? false : true }
            tip={ onPrevPage ? "Previous Page" : '' }
            icon={ <div className={`ml-1`}><ArrowLeftIcon fontSize="small" /></div> }
            rounded="left" 
            onClick={ onPrevPage } /> 

          { page == -1 ? null : <SmallButton title={ <div className={`px-2`}>{ page }</div> } /> }

          <SmallTipButton
            disabled={ onNextPage ? false : true }
            tip={ onNextPage ? "Next Page" : '' }
            icon={ <div className={`mr-1`}><ArrowRightIcon fontSize="small" /></div> }
            rounded="right" 
            onClick={ onNextPage } />

        </div> : null
      }
    </div>
  );
}

export default Toolbar;
