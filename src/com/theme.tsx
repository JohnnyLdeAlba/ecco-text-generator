import { createContext } from "react";

export const darkSeaTheme = {

  background: `
    darkSea-background
    z-[8]
    bg-[#000000]
  `,

  navigation: `
    z-[9]
    bg-[rgba(4,6,12,0.92)]
  `,

  logo: "darksea/ecco-io-logo.svg",

  footer: `
    bg-[#0e1d35]
  `,

  menuBar: `
    bg-[#0e1d35]
  `,

  menuBarNav: `
    hover:bg-[#005471]
  `,

  menuBarItem: `
    hover:bg-[#005471]
    text-[#0087b5]
  `,

  menuItem: `
    hover:bg-[#005471]
    text-[#0087b5]
  `, 

  menuCategory: `
    text-[#0087b5]
  `, 

  cardHeader: `
    bg-[#0b1c38]
  `,

  card: `
    bg-[rgba(4,6,12,0.92)]
  `,
  
  cardSolid: `bg-[#0b1c38]`,
 
  button: `bg-[#18325c]`,
  buttonClosed: `bg-[#13284a]`,

  buttonLight: `bg-[#1d468a]`,
  buttonLightClosed: `bg-[#102d5f]`,

  galleryItem: `bg-[#1e355a]`,
  galleryItemSelected: `bg-[#102549]`,
  toolbar: `bg-[#0e1d35]`,

  hr: `border-[#0087b5] text-[#0087b5]`, 
  tooltip: `darkSea-Tooltip`,

  circularProgress: "text-[#2e58a0]",
  linearProgress: {

    backgroundColor: "#081021",
    bar: "#2e58a0"
  },

  eccoText: {
    toolbar: `bg-[#0b1c38] sm:bg-transparent`,
    keyboard: `bg-[#0b1c38]`,
    keyboardItem: `bg-[#1d468a]`
  },

  menu: {

    item: `bg-[#1e355a]`,
    itemSelected: `bg-[#102549]`,

    scrollbars: `
      scrollbar-thin
      scrollbar-track-[#081021]
      scrollbar-thumb-rounded-full
      scrollbar-thumb-[#2e58a0]
    `
  },

  scrollbars: `
    scrollbar-thin
    scrollbar-track-[#081021]
    scrollbar-thumb-rounded-full
    scrollbar-thumb-[#2e58a0]
  `
}

export const ThemeContext = createContext(darkSeaTheme);
