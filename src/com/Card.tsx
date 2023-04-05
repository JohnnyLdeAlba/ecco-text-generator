import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useContext } from "react";
import { ThemeContext } from "./theme";

export const CardIcon = ({ size, children }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`${ size ? "mr-1" : "mr-4" }`}>
      { children }
    </div>
  );
}

export const CardTitle = ({ size, children }) => {

  return (
    <div className={`
      font-medium
      ${ size == "small" ? "text-sm" : "md:text-lg" }`}>
      { children }
    </div>
  );
}

export const CardSubTitle = ({ children }) => {

  return (
    <div className={`text-sm`}>
      { children }
    </div>
  );
}

export const CardMenu = ({ size }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      button
      cursor-pointer
      rounded-full
      ${ size == "small" ? "pb-1 px-1" : "p-1" }
      ${ theme.cardHeader }
    `}>
      { small ?
          <MoreHorizIcon fontSize="small" /> :
          <MoreHorizIcon /> }
    </div>
  );
}

export const CardClose = ({ size, onClose }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      button
      cursor-pointer
      rounded-full
      ${ size == "small" ? "pb-1 px-1" : "p-1" }
      ${ theme.cardHeader }
      `}
      onClick={ onClose }>
      { size == "small" ?
        <CloseIcon fontSize="small" /> : <CloseIcon /> }
    </div>
  );
}

export const CardHeader = ({
  icon,
  title,
  subTitle,
  size, 
  rounded,
  menuItems,
  onClose
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row
      justify-center
      ${ size ? "px-2 py-1" : "px-4 py-2" }
      ${ rounded ? "rounded-lg" : "rounded-t-none sm:rounded-t-lg" }
      ${ theme.cardHeader }
    `}>

      { icon ? <CardIcon size={ size }>{ icon }</CardIcon> : null }

      <div className={`flex-1 flex flex-col justify-center`}>
        <CardTitle size={ size }>{ title }</CardTitle>
        { subTitle ? <CardSubTitle size={ size }>{ subTitle }</CardSubTitle> : null }
      </div>

      { menuItems ? <CardMenu size={ size } /> : null }
      { onClose ? <CardClose size={ size } onClose={ onClose } /> : null }

    </div>
  );
}

export const Card = ({
  disabled,
  icon,
  title,
  subTitle,
  size,
  menuItems,
  rounded,
  color,
  onClose,
  className = '',
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      overflow-y-auto sm:overflow-y-visible
      flex-1 flex flex-col
      ${ disabled ? "disabled" : '' }
      ${ rounded ? "rounded-lg" : "rounded-none sm:rounded-t-lg" }
      ${ color ? theme.cardSolid : theme.card }
      ${ className }
    `}>
      <CardHeader
        icon={ icon }
        title={ title }
        subTitle={ subTitle }
        size={ size }
        menuItems={ menuItems }
        rounded={ rounded }
        onClose={ onClose }
      />
        <div className={`
          flex-1 flex flex-col
          overflow-y-auto
          ${ theme.scrollbars }
        `}>
          { children }  
        </div>
    </div>
  )
}

export default Card;
