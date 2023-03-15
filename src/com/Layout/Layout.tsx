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
      flex flex-col
      h-screen
      ${ theme.background }
    `}>

      <Navigation
        open={ navigation.open }
        setOpen={ () => navigation.setOpen() }
      />

      <div className={`
        ml-0 lg:ml-[280px]
        absolute
        flex flex-col
        w-full lg:w-[calc(100%-280px)]
        h-screen
        overflow-y-auto
      `}>
        <MenuBar toggleNav={ () => navigation.toggle() } />
        { children }
        <Footer />
      </div>
    </div>
  )
}

export default Layout;
