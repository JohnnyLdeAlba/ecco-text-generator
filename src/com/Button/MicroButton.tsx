import { useContext } from "react";
import { ThemeContext } from "../theme";

export const MicroButton = ({
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
      p-0.5
      font-medium text-xs
      ${ disabled ? "disabled" : '' }
      ${ !disabled && !closed && onClick ? "button" : '' }
      ${ !disabled && closed && onClick ? "buttonClosed" : '' }
      ${ closed ? `${ theme.buttonClosed }` : `${ theme.button }` }
      ${ rounded }
      ${ className }
      `} onClick={ onClick }>
      { icon ? icon : null }
      { title }
    </div>
  )
}

export default MicroButton;
