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
    <div className={`font-medium text-lg`}>
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
      p-1 h-fit
      rounded-full
      ${ theme.cardHeader }
    `}>
      <MoreHorizIcon />
    </div>
  );
}

export const CardHeader = ({
  icon,
  title,
  subTitle,
  menuItems
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      rounded-t-none sm:rounded-t-lg
      flex flex-row
      px-4 py-2
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
    </div>
  );
}

export const Card = ({
  icon,
  title,
  subTitle,
  menuItems,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      rounded-none sm:rounded-t-lg
      flex-1 flex flex-col
      overflow-y-auto sm:overflow-y-visible
      ${ theme.card }        
    `}>
      <CardHeader
        icon={ icon }
        title={ title }
        subTitle={ subTitle }
        menuItems={ menuItems }
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
