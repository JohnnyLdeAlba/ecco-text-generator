import { useContext } from "react";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu"
import ExploreIcon from '@mui/icons-material/Explore';

import Icons from "../Icons";
import { config } from "../config";
import { ThemeContext } from "../theme"

export const MenuNav = ({
  onClick,
  className
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div onClick={ onClick } className={`
      lg:hidden
      menuItem
      flex flex-row
      items-center
      p-4 h-full
      font-medium
      ${ onClick ? theme.menuBarNav : '' }
      ${ onClick ? "cursor-pointer" : '' }
      ${ className }
      `}>
      <MenuIcon />
    </div>
  );
}

export const MenuItem = ({
  className,
  onClick,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div onClick={ onClick } className={`
      menuItem
      flex flex-row
      items-center
      p-4 h-full
      font-medium
      ${ onClick ? theme.menuBarItem : '' }
      ${ onClick ? "cursor-pointer" : '' }
      ${ className }
      `}>
      { children }
    </div>
  );
}

export const MenuLink = ({
  href="/",
  className,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <Link href={ href } className={`
      menuItem
      cursor-pointer
      flex flex-row
      items-center
      p-4 h-full
      font-medium
      ${ theme.menuBarItem }
      ${ className }
      `}>
      { children }
    </Link>
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

      <MenuNav onClick={ toggleNav } />

      <div className={`flex-1 flex flex-row justify-end h-full`}>

        <MenuLink href="/explore">
          <ExploreIcon className={`mr-2`} />
          <span className={`text-white`}>Explore</span>
        </MenuLink>

        <MenuLink href="https://twitter.com/hectortelloc">
          <Icons.TwitterIcon className={`mr-2`} />
          <span className={`text-white`}>Twitter</span>
        </MenuLink>

      </div>

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
      ${ theme.footer }
    `}>
      <div className={`flex-1`}>
        <MenuItem>Version { config.version }</MenuItem>
      </div>
      <MenuItem>{ config.copyright }</MenuItem>
    </div>
  );
}

