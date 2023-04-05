import { forwardRef, useContext, useState } from "react";
import Tooltip from '@mui/material/Tooltip';

import { SmallTipButton } from "./SmallTipButton"
import { ThemeContext } from "../theme";

export const WSmallTipButton = forwardRef((props, ref) => {

  let {
    wDisabled,
    wIcon,
    wTitle,
    wTip,
    wColor,
    wRounded,
    wClosed,
    wOnClick,
    className,
    ...wProps
  } = props;

  return (
    <div { ...wProps } ref={ ref }>
      <SmallTipButton
        disabled={ wDisabled }
        icon={ wIcon }
        title={ wTitle }
        tip={ wTip }
        color={ wColor }
        rounded={ wRounded }
        closed={ wClosed }
        onClick={ wOnClick }
        className={ className } />
    </div>
  );
});

WSmallTipButton.displayName = "WSmallTipButton";

export const SmallPopUpButton = ({
  disabled = false,
  icon = '',
  title = '',
  tip = '',  
  notification = '',
  color = '',
  rounded = '',
  closed = false,
  onClick = null,
  className = ''
}) => {

  const theme = useContext(ThemeContext);
  const [ toolTipVisible, _showToolTip ] = useState(false);

  const showToolTip = () => {

    _showToolTip(true);
    setTimeout(() => _showToolTip(false), 1250);
  }

  const _onClick = () => {

    showToolTip();
    onClick();
  }

  return (
    <Tooltip
      open={ toolTipVisible }
      title={ notification }
      arrow={ true }
      placement="top"
      disableFocusListener
      disableHoverListener
      disableTouchListener
      classes={{ popper: theme.tooltip }}>
      <WSmallTipButton
        wDisabled={ disabled }
        wIcon={ icon }
        wTitle={ title }
        wTip={ tip }
        wColor={ color } 
        wRounded={ rounded }
        wClosed={ closed } 
        wOnClick={ _onClick }
        className={ className }
      />
    </Tooltip>
  );
}

export default SmallPopUpButton;
