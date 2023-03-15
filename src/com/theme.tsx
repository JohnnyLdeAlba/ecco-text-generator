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

  footer: `
    bg-[#111a28]
  `,

  menuBar: `
    bg-[#111a28]
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
    bg-[#132239]
  `,

  card: `
    bg-[rgba(4,6,12,0.92)]
  `,

  toolbar: `bg-[#111a28]`,
  tooltip: `mui-darksea`,

  scrollbars: `
    scrollbar-thin
    scrollbar-track-[#111a28]
    scrollbar-thumb-rounded-full
    scrollbar-thumb-[#1e355a]
  `
}

export const seaOfGreenTheme = {

  background: `
    background-seaofgreen
    z-[8]
    bg-[#000000]
  `,

  navigation: `
    z-[9]
    bg-[rgba(0,7,26,0.92)]
  `,

  logo: "seaofgreen/ecco-io-logo.svg",

  footer: `
    bg-[#141c2f]
  `,

  menuBar: `
    bg-[#141c2f]
  `,

  menuBarNav: `
    hover:bg-[#004492]
  `,

  menuBarItem: `
    hover:bg-[#004492]
    text-[#007cda]
  `,

  menuItem: `
    hover:bg-[#004492]
    text-[#007cda]
  `, 

  menuCategory: `
    text-[#007cda]
  `, 

  cardHeader: `
    bg-[#162544]
  `,

  card: `
    bg-[rgba(0,7,26,0.92)]
  `,

  scrollbars: `
    scrollbar-thin
    scrollbar-track-[#002249]
    scrollbar-thumb-rounded-full
    scrollbar-thumb-[#004492]
  `
}

export const ThemeContext = createContext(darkSeaTheme);
