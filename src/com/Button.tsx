import { forwardRef, useContext } from "react";
import Tooltip from '@mui/material/Tooltip';

import { ThemeContext } from "./theme";

export const SmallButton = ({
  disabled,
  icon,
  title,
  rounded,
  closed = false,
  onClick,
  className
}) => {

  const theme = useContext(ThemeContext);

  switch (rounded) {

    case "left": {
      rounded = "rounded-l-full mr-[1px]";
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
      rounded = "mr-[1px]";
      break;
    }
  }

  return (
    <div className={`
      flex flex-row
      p-1.5
      font-medium text-xs
      ${ disabled ? "disabled" : '' }
      ${ !disabled && !closed && onClick ? "button" : '' }
      ${ !disabled && closed && onClick ? "buttonClosed" : '' }
      ${ closed ? `${ theme.smallButtonClosed }` : `${ theme.smallButton }` }
      ${ rounded }
      ${ className }
      `} onClick={ onClick }>
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
    wClosed,
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
        closed={ wClosed }
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
  closed,
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
        wClosed={ closed } 
        wOnClick={ onClick }
        className={ className }
      />
    </Tooltip>
  );
}
