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
        icon={ <ArrowBackIcon fontSize="small" /> }
        rounded="left"
        onClick={ onGoBack } />

      { onUnselect ? <SmallTipButton
        icon={ <div className={`mr-2`}><UndoIcon fontSize="small" /></div> }
        title="Unselect"
        tip="Unselect Items"
        onClick={ onUnselect } /> : null }

      { onRemoveSelected ? <SmallTipButton
        icon={ <RemoveCircleIcon fontSize="small" /> }
        title="Remove" tip="Remove Selected Items"
        onClick={ onRemoveSelected } /> : null }

      { onShowDetails ? <SmallTipButton
        icon={ <ArtTrackIcon fontSize="small" /> }
        tip="Show Details"
        closed={ showDetailsClosed }
        onClick={ onShowDetails } /> : null }

      { onToggleHidden ? <SmallTipButton
        icon={ <VisibilityOffIcon fontSize="small" /> }
        rounded="right" tip="Toggle Hidden"
        onClick={ onToggleHidden } /> : null }

      { page > 0 ? 
        <div className={`flex-1 flex flex-row justify-end`}>

          <SmallTipButton
            disabled={ onPrevPage ? false : true }
            tip={ onPrevPage ? "Previous Page" : '' }
            icon={ <ArrowLeftIcon fontSize="small" /> }
            rounded="left" 
            onClick={ onPrevPage } /> 

          { page == -1 ? null : <SmallButton title={ <div className={`px-2`}>{ page }</div> } /> }

          <SmallTipButton
            disabled={ onNextPage ? false : true }
            tip={ onNextPage ? "Next Page" : '' }
            icon={ <ArrowRightIcon fontSize="small" /> }
            rounded="right" 
            onClick={ onNextPage } />

        </div> : null
      }
    </div>
  );
}

export default Toolbar;
