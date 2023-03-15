import { forwardRef, useContext } from "react";
import Tooltip from '@mui/material/Tooltip';

import { ThemeContext } from "./theme";

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
        className={ className }
      />
    </Tooltip>
  );
}
