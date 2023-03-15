import { forwardRef, useContext } from "react";

import AcUnitIcon from '@mui/icons-material/AcUnit';

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import UndoIcon from '@mui/icons-material/Undo';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { ThemeContext } from "../../com/theme";

export const SmallButton = ({
  disabled,
  icon,
  title,
  rounded,
  onClick,
  className
}) => {

  switch (rounded) {

    case "left": {
      rounded = "rounded-l-full";
      break;
    }

    case "right": {
      rounded = "rounded-r-full";
      break;
    }

     case "full": {
      rounded = "rounded-full";
      break;
    }

    default: {
      rounded = '';
      break;
    }
  }

  return (
    <div className={`
      flex flex-row
      p-1.5
      bg-[#1e355a]
      font-medium text-xs
      ${ disabled ? "disabled" : '' }
      ${ !disabled && onClick ? "button" : '' }
      ${ rounded }
      ${ className }
      `}>
      { icon ? icon : null }
      { title }
    </div>
  )
}

export const WSmallButton = forwardRef((props, ref) => {

  let {
    wDisabled,
    wIcon,
    wTitle,
    wRounded,
    wOnClick,
    className,
    ...wProps
  } = props;

  return (
    <div { ...wProps } ref={ ref }>
      <SmallButton
        disabled={ wDisabled }
        icon={ wIcon }
        title={ wTitle }
        rounded={ wRounded }
        onClick={ wOnClick }
        className={ className } />
    </div>
  );
});

export const SmallTipButton = ({
  disabled,
  icon,
  title,
  tip,
  rounded,
  onClick,
  className
}) => {

  const theme = useContext(ThemeContext);

  return (
    <Tooltip
      title={ tip }
      arrow={ true }
      placement="bottom"
      classes={{ popper: theme.tooltip }}>
      <WSmallButton
        wDisabled={ disabled }
        wIcon={ icon }
        wTitle={ title }
        wRounded={ rounded }
        wOnClick={ onClick }
        classname={ className }
      />
    </Tooltip>
  );
}

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

      { onGoBack ? <SmallTipButton icon={ <ArrowBackIcon fontSize="small" />  } rounded="left" tip="Go Back" onClick={ onGoBack } /> : null }
      { onUnselect ? <SmallTipButton icon={ <div className={`mr-2`}><UndoIcon fontSize="small" /></div> } title="Unselect" tip="Unselect Items" onClick={ onUnselect } /> : null }
      { onRemoveSelected ? <SmallTipButton icon={ <div className={`mr-2`}><RemoveCircleIcon fontSize="small" /></div> } title="Remove" tip="Remove Selected Items" onClick={ onRemoveSelected } /> : null }
      { onToggleHidden ? <SmallTipButton icon={ <VisibilityOffIcon fontSize="small" />  } rounded="right" tip="Toggle Hidden" onClick={ onToggleHidden } /> : null }

      { page > 0 ? 
        <div className={`flex-1 flex flex-row justify-end`}>
          { onPrevPage ? <SmallTipButton icon={ <ArrowLeftIcon fontSize="small" />  } rounded="left" tip="Previous Page" onClick={ onPrevPage } /> : null }
          { page == -1 ? null : <SmallButton title={ page } /> }
          { onNextPage ? <SmallTipButton icon={ <ArrowRightIcon fontSize="small" />  } rounded="right" tip="Next Page" onClick={ onNextPage } /> : null }
        </div> : null
      }
    </div>
  );
}

export const Index = () => {

  return (
    <Toolbar />
  );
}

export default Index;
