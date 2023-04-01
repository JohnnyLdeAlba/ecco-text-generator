import { useEffect, useContext, useState } from "react";
import Link from "next/link";

import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ExploreIcon from '@mui/icons-material/Explore';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';

import Icons from "../Icons";
import { t_hook } from "../lib/hook";
import { MenuBar, Footer } from "./MenuBar"

import { config } from "../config";
import { ThemeContext } from "../theme";

export const Backdrop = ({
  show = false,
  onClick,
  children
}) => {

  return (
    <div className={`
      lg:z-0
      lg:opacity-0

      backdrop
      absolute
      flex
      w-full h-screen
      bg-[rgba(0,0,0,0.6)]

      ${ show ? "z-[8]" : "z-0" } 
      ${ show ? "opacity-100" : "opacity-0" } 
      ${ onClick ? "cursor-pointer" : '' }
    `}
     onClick={ onClick }>
      { children }
    </div>
  );
}

export const MenuCategory = ({
  className,
  children
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex flex-row
      items-center
      p-4
      uppercase font-medium
      text-xs
      ${ theme.menuCategory }
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
      px-4 py-2
      font-medium text-sm
      ${ theme.menuItem }
      ${ className }
      `}>
      { children }
    </Link>
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
      px-4 py-2
      font-medium text-sm
      ${ onClick ? theme.menuItem : '' }
      ${ onClick ? "cursor-pointer" : '' }
      ${ className }
      `}>
      { children }
    </div>
  );
}

export const Navigation = ({
  open = false,
  setOpen = null
}) => {

  const theme = useContext(ThemeContext);

  return (
    <>
    <Backdrop
      show={ open }
      onClick={ setOpen }
    />
      <div className={`
        lg:ml-0
        navigation
        absolute
        z-[9]
        flex-1 flex flex-col
        w-[280px] h-screen
        overflow-x-none
        overflow-y-auto

        ${ open ? "ml-0" : "ml-[-280px]" }
        ${ theme.navigation }
        ${ theme.scrollbars } 
      `}>

        <MenuCategory>
          <img
            src={`/theme/${theme.logo}`}
            className={`w-[160px]`}
            alt='' />
        </MenuCategory>

        <MenuItem onClick={ () => {} }>
          <HomeIcon className={`mr-2`} />
          <span className={`text-white`}>Home</span>
        </MenuItem>

        <MenuItem onClick={ () => {} }>
          <HelpOutlineIcon className={`mr-2`} />
          <span className={`text-white`}>About</span>
        </MenuItem>

        <MenuItem onClick={ () => {} }>
          <ExploreIcon className={`mr-2`} />
          <span className={`text-white`}>Explore</span>
        </MenuItem>

        <MenuItem onClick={ () => {} }>
          <SettingsIcon className={`mr-2`} />
          <span className={`text-white`}>Settings</span>
        </MenuItem>

        <MenuCategory>
          Generators
        </MenuCategory>

        <MenuItem onClick={ () => {} }>
          <FontDownloadIcon className={`mr-2`} />
          <span className={`text-white`}>Ecco Text Generator</span>
        </MenuItem>

        <MenuItem onClick={ () => {} }>
          <KeyIcon className={`mr-2`}/>
          <span className={`text-white`}>Ecco Password Generator</span>
        </MenuItem>

        <MenuCategory>
          Social
        </MenuCategory>

        <MenuLink href="https://twitter.com/hectortelloc">
          <Icons.TwitterIcon className={`mr-2`}/>
          <span className={`text-white`}>Founder's Twitter</span>
        </MenuLink>

        <MenuCategory>
          Partner's Social
        </MenuCategory>

        <MenuLink href="https://twitter.com/eccoonline">
          <Icons.TwitterIcon className={`mr-2`}/>
          <span className={`text-white`}>Ecco Online's Twitter</span>
        </MenuLink>

        <MenuLink href="">
          <Icons.DiscordIcon className={`mr-2`}/>
          <span className={`text-white`}>Ecco Online's Discord</span>
        </MenuLink>

      </div>
    </>
  );
}

export class t_navigation extends t_hook {

  mobileView;
  matchMedia;

  visible;

  constructor() {

    super();

    this.mobileView = false;
    this.matchMedia = null;

    this.visible = false;
  }

  setOpen(open) {

    this.open = open;
    this.refresh();
  }

  toggle() {
    this.setOpen(!this.open);
  }

  enableMobileView(mobileView = true) {

    this.mobileView = mobileView;

    if (mobileView)
      this.setOpen(false);
    else
      this.setOpen(true);
  }

  mountMobileView() {

    if (this.matchMedia)
      return;

    const matchMedia = window.matchMedia("(min-width: 1024px");;
    const mediaQuery = event => this.enableMobileView(!event.matches);

    matchMedia.addEventListener("change", mediaQuery);

    this.matchMedia = matchMedia;
    this.enableMobileView(!matchMedia.matches);
  }

  set(params) {

    const { refresh } = params;
    this.refresh = refresh;
  }

  process() {

    switch (this.state) {

      case "ready": {

        this.mountMobileView();
        break;
      }
    }
  }
}

export const useNavigation = () => {

  const [ navigation ] = useState(new t_navigation());
  const [ serial, setSerial ] = useState(0);

  navigation.set({
    refresh: () => setSerial(serial + 1)
  });

  useEffect(() => {

    navigation.process();

  });

  return navigation;
}
