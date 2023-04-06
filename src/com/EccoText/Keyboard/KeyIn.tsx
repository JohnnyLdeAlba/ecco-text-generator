import { forwardRef, useContext, useState } from "react";

import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

import { ThemeContext } from "../../theme";

const NullItem = () => {

  return (
    <div className={`
      w-[30px] xs:w-[40px] sm:w-[50px]
      h-[30px] xs:h-[35px] sm:h-[40px]
      mx-[3px]
    `}/>
  );
}

export const KeyIn = ({
  disabled = false,
  galleryItem = null,
  onClick }) => {

  const theme = useContext(ThemeContext);

  const _onClick = () => {

    onClick();
    galleryItem.onClick();
  }

  if (galleryItem.hash == '*')
    return <NullItem />

  return (
    <div className={`
      disable-select
      w-[30px] 2xs:w-[35px] xs:w-[40px] sm:w-[50px]
      h-[30px] 2xs:h-[35px] sm:h-[40px]
      flex flex-row
      items-center justify-center
      mx-[3px]
      rounded-md
      font-medium
      text-lg
      ${ disabled ? "disabled" : "button" }
      ${ theme.eccoText.keyboardItem }
    `}
     onClick={ () => _onClick() }>
     { galleryItem.name }
    </div>
  );
}



export const WKeyIn = forwardRef((props, ref) => {

  let {
    wDisabled,
    wGalleryItem,
    wOnClick,
    ...wProps
  } = props;

  return (
    <div { ...wProps } ref={ ref }>
      <KeyIn
        disabled={ wDisabled }
        galleryItem={ wGalleryItem }
        onClick={ wOnClick }
      />
    </div>
  );
});

WKeyIn.displayName = "WKeyIn";

export const TipKeyIn = ({
  disabled = false,
  galleryItem = null
}) => {

  const theme = useContext(ThemeContext);
  const [ toolTipVisible, _showToolTip ] = useState(false);

  const showToolTip = () => {

    _showToolTip(true);
    setTimeout(() => _showToolTip(false), 200);
  }

  return (
    <Tooltip
      open={ toolTipVisible }
      title={ galleryItem.name }
      arrow={ true }
      placement="top"
      disableFocusListener
      disableHoverListener
      disableTouchListener
      classes={{ popper: theme.eccoText.keyInTip }}>
      <WKeyIn
        wDisabled={ disabled }
        wGalleryItem={ galleryItem }
        wOnClick={ () => showToolTip() }
      />
    </Tooltip>
  );
}

export default TipKeyIn;


