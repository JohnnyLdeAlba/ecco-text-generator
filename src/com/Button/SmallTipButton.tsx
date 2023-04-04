import { forwardRef, useContext } from "react";
import Tooltip from '@mui/material/Tooltip';

import { SmallButton } from "./SmallButton"
import { ThemeContext } from "../theme";

export const WSmallButton = forwardRef((props, ref) => {

  let {
    wDisabled,
    wIcon,
    wTitle,
    wColor,
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
        color={ wColor }
        rounded={ wRounded }
        closed={ wClosed }
        onClick={ wOnClick }
        className={ className } />
    </div>
  );
});

WSmallButton.displayName = "WSmallButton";

export const SmallTipButton = ({
  disabled = false,
  icon = '',
  title = '',
  tip = '',
  color = '',
  rounded = '',
  closed = false,
  onClick = null,
  className = ''
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
        wColor={ color } 
        wRounded={ rounded }
        wClosed={ closed } 
        wOnClick={ onClick }
        className={ className }
      />
    </Tooltip>
  );
}

export default SmallTipButton;
