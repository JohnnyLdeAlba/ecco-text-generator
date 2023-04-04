import { forwardRef, useContext } from "react";
import Tooltip from '@mui/material/Tooltip';

import { ThemeContext } from "../theme";

export const Button = ({
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
      ${ color == '' && closed ? `${ theme.buttonClosed }` : `${ theme.button }` }
      ${ color == "light" && closed ? `${ theme.buttonLightClosed }` : `${ theme.buttonLight }` }
      ${ rounded }
      ${ className }
      `} onClick={ onClick }>
      { icon ? icon : null }
      { title }
    </div>
  )
}

export default Button;
