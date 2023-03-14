import { useContext } from "react";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Layout } from "../../com/Layout/Layout";
import { ThemeContext } from "../../com/theme";

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

export const Index = ({
  icon,
  title,
  subTitle,
  menuItems,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <Layout>

      <div className={`
        mx-0 xl:mx-auto 
        w-full 3xl:w-[1000px]
        px-0 sm:px-4 3xl:px-0
        py-0 sm:py-4
        flex flex-col
        h-full
        `}>
        <div className={`
          rounded-none sm:rounded-lg
          h-full sm:h-fit
          ${ theme.card }        
        `}>
          <CardHeader
            icon={ <MoreHorizIcon /> }
            title={ "Ecco the Dolphin" }
            subTitle={ "Description" }
            menuItems={ menuItems }
          />
          { children }  
        </div>
      </div>

    </Layout>
  )
}

export default Index;
