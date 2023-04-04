import { forwardRef, useContext } from "react";
import Tooltip from '@mui/material/Tooltip';

import { ThemeContext } from "../theme";

export const SmallButton = ({
  disabled = false,
  icon = '',
  title = '',
  rounded = '',
  closed = false,
  color = '',
  onClick = null,
  className = ''
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
      ${ color == '' ? (closed ? `${ theme.buttonClosed }` : `${ theme.button }`) : '' }
      ${ color == "light" ? (closed ? `${ theme.buttonLightClosed }` : `${ theme.buttonLight }`) : '' }
      ${ padding }
      ${ rounded }
      ${ className } 
      `} onClick={ onClick }>
      { icon ? icon : null }
      { title }
    </div>
  )
}

export default SmallButton;
