import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu"

import { config } from "../config";
import { ThemeContext } from "../theme"

export const MenuItem = ({ onClick, className, children }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row
      items-center
      h-full
      p-4
      font-medium
      ${ theme.menuBarItem }
      ${ onClick ? "menuItem cursor-pointer" : '' }
      ${ className }
      `}
      onClick={ onClick }>
      { children }
    </div>
  );
}

export const MenuBar = ({
  toggleNav
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row
      items-center
      h-[60px]
      ${ theme.menuBar }
    `}>
      <MenuItem
        className={`lg:hidden`}
        onClick={ toggleNav }>
        <MenuIcon />
      </MenuItem>
    </div>
  );
}

export const Footer = () => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      hidden lg:flex
      flex-row
      items-center
      h-[60px]
      ${ theme.menuBar }
    `}>
      <div className={`flex-1`}>
        <MenuItem>Version { config.version }</MenuItem>
      </div>
      <MenuItem>{ config.copyright }</MenuItem>
    </div>
  );
}

