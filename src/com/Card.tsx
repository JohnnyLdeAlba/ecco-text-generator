import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useContext } from "react";
import { ThemeContext } from "./theme";

export const CardIcon = ({ children }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`mr-4`}>
      { children }
    </div>
  );
}

export const CardTitle = ({ children }) => {

  return (
    <div className={`font-medium md:text-lg`}>
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

export const CardMenu = ({}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      button
      cursor-pointer
      p-1
      rounded-full
      ${ theme.cardHeader }
    `}>
      <MoreHorizIcon />
    </div>
  );
}

export const CardClose = ({ onClose }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      button
      cursor-pointer
      p-1
      rounded-full
      ${ theme.cardHeader }
      `} onClick={ onClose } >
      <CloseIcon fontSize="small" />
    </div>
  );
}

export const CardHeader = ({
  icon,
  title,
  subTitle,
  menuItems,
  onClose,
  rounded
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row
      px-4 py-2
      ${ rounded ? "rounded-t-lg" : "rounded-t-none sm:rounded-t-lg" }
      ${ theme.cardHeader }        
    `}>
      { icon ? <CardIcon>{ icon }</CardIcon> : null }
      <div className={`
        flex-1 flex flex-col
      `}>
        <CardTitle >{ title }</CardTitle>
        { subTitle ? <CardSubTitle >{ subTitle }</CardSubTitle> : null }
      </div>
      { menuItems ? <CardMenu /> : null }
      { onClose ? <CardClose onClose={ onClose } /> : null }
    </div>
  );
}

export const Card = ({
  icon,
  title,
  subTitle,
  menuItems,
  rounded,
  onClose,
  className,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      rounded-none sm:rounded-t-lg
      overflow-y-auto sm:overflow-y-visible
      flex-1 flex flex-col
      ${ theme.card }
      ${ className }
    `}>
      <CardHeader
        icon={ icon }
        title={ title }
        subTitle={ subTitle }
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
