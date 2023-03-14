import { createContext } from "react";

export const darkSeaTheme = {

  background: `
    background-darksea
    z-[8]
    bg-[#000000]
  `,

  navigation: `
    z-[9]
    bg-[rgba(4,6,12,0.92)]
  `,

  logo: "darksea/ecco-io-logo.svg",

  menuBar: `
    bg-[#111a28]
  `,

  menuBarItem: `
    hover:bg-[#005471]
  `,

  menuItem: `
    hover:bg-[#005471]
    text-[#0087b5]
  `, 

  menuCategory: `
    text-[#0087b5]
  `, 

  scrollbars: `
    scrollbar-thin
    scrollbar-track-[#002a39]
    scrollbar-thumb-rounded-full
    scrollbar-thumb-[#005471]
  `
}

export const ThemeContext = createContext(darkSeaTheme);
