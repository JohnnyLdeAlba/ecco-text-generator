import { forwardRef, useContext } from "react";
import Tooltip from '@mui/material/Tooltip';

import { MicroButton } from "./MicroButton";
import { ThemeContext } from "../theme";

const WMicroButton = forwardRef((props, ref) => {

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
      <MicroButton
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

WMicroButton.displayName = "WMicroButton";

export const MicroTipButton = ({
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
      <WMicroButton
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

export default MicroTipButton;
