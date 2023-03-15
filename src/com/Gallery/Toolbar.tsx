import { useContext } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UndoIcon from '@mui/icons-material/Undo';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Tooltip from '@mui/material/Tooltip';

import { SmallButton, SmallTipButton } from "../Button"; 
import { ThemeContext } from "../theme";

export const Toolbar = ({
  page = 1,
  onGoBack = true,
  onUnselect = true,
  onRemoveSelected = true,
  onToggleHidden = true,
  onNextPage = true,
  onPrevPage = true
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row px-4 py-2
      ${ theme.toolbar }
    `}>

      { onGoBack ? <SmallTipButton
        icon={ <ArrowBackIcon fontSize="small" />  }
        rounded="left" tip="Go Back"
        onClick={ onGoBack } /> : null }

      { onUnselect ? <SmallTipButton
        icon={ <div className={`mr-2`}><UndoIcon fontSize="small" /></div> }
        title="Unselect"
        tip="Unselect Items"
        onClick={ onUnselect } /> : null }

      { onRemoveSelected ? <SmallTipButton
        icon={ <div className={`mr-2`}><RemoveCircleIcon fontSize="small" /></div> }
        title="Remove" tip="Remove Selected Items"
        onClick={ onRemoveSelected } /> : null }

      { onToggleHidden ? <SmallTipButton
        icon={ <VisibilityOffIcon fontSize="small" />  }
        rounded="right" tip="Toggle Hidden"
        onClick={ onToggleHidden } /> : null }

      { page > 0 ? 
        <div className={`flex-1 flex flex-row justify-end`}>

          { onPrevPage ? <SmallTipButton
            icon={ <ArrowLeftIcon fontSize="small" />  }
            rounded="left" tip="Previous Page"
            onClick={ onPrevPage } /> : null }
          { page == -1 ? null : <SmallButton title={ page } /> }
          { onNextPage ? <SmallTipButton
            icon={ <ArrowRightIcon fontSize="small" />  }
            rounded="right" tip="Next Page"
            onClick={ onNextPage } /> : null }

        </div> : null
      }
    </div>
  );
}

export default Toolbar;
