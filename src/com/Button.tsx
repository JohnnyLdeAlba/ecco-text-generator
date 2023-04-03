import { forwardRef, useContext } from "react";
import Tooltip from '@mui/material/Tooltip';

import { ThemeContext } from "./theme";

export const Button = ({
  disabled,
  icon,
  title,
  rounded,
  closed = false,
  skin = "light",
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
      items-center
      px-3 py-2 w-fit
      font-medium text-sm
      ${ disabled ? "disabled" : '' }
      ${ !disabled && !closed && onClick ? "button" : '' }
      ${ !disabled && closed && onClick ? "buttonClosed" : '' }
      ${ skin == '' && closed ? `${ theme.smallButtonClosed }` : `${ theme.smallButton }` }
      ${ skin == "light" && closed ? `${ theme.smallButtonLightClosed }` : `${ theme.smallButtonLight }` }
      ${ rounded }
      ${ className }
      `} onClick={ onClick }>
      { icon ? icon : null }
      { title }
    </div>
  )
}

export const SmallButton = ({
  disabled,
  icon,
  title,
  rounded,
  closed = false,
  skin = "light",
  onClick,
  className
}) => {

  const theme = useContext(ThemeContext);

  let padding = "p-1.5";

  switch (rounded) {

    case "left": {
      rounded = "rounded-l-full mr-[1px]";
      padding+= " pl-3";
      break;
    }

    case "right": {
      rounded = "rounded-r-full";
      padding+= " pr-3";
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
      items-center
      font-medium text-xs
      ${ disabled ? "disabled" : '' }
      ${ !disabled && !closed && onClick ? "button" : '' }
      ${ !disabled && closed && onClick ? "buttonClosed" : '' }
      ${ skin == '' ? (closed ? `${ theme.smallButtonClosed }` : `${ theme.smallButton }`) : '' }
      ${ skin == "light" ? (closed ? `${ theme.smallButtonLightClosed }` : `${ theme.smallButtonLight }`) : '' }
      ${ padding }
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

WSmallButton.displayName = "WSmallButton";

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
