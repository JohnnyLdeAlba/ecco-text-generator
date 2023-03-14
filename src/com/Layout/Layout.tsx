import { useContext } from "react";

import { MenuBar, Footer } from "./MenuBar"
import { Navigation, useNavigation } from "./Navigation";

import { ThemeContext } from "../theme";

export const Layout = ({ children }) => {

  const theme = useContext(ThemeContext);
  const navigation = useNavigation();

  return (
    <div className={`
      background
      flex flex-row
      h-screen
      ${ theme.background }
    `}>

      <Navigation
        open={ navigation.open }
        setOpen={ () => navigation.setOpen() }
      />

      <div className={`
        ml-0 lg:ml-[280px]
        w-full lg:w-[calc(100%-280px)]
        absolute
        flex-1 flex flex-col
        h-full
      `}>
        <MenuBar toggleNav={ () => navigation.toggle() } />
        <div className={`flex-1 flex flex-col`}>
          { children }
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
