import { t_rgba } from "./plot-state";
import { t_font } from "./composition";

const font_system = () => {

  const font = new t_font();

  font.hash = "systemFont";
  font.name = "System";
  font.imageHash = "systemFont";
  font.imageURI = "/eccotext/theme/fonts/system.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 4;
  font.selectSpacing = -2;
  font.cursorFilter = new t_rgba(1, 0.6);

  font.bitmapIndex = 0;
  font.width = 8;
  font.height = 8;

  font.add(' ',  0,  8, 0); 
  font.add('\n', 0,  0, 0); 
  font.add('a',  0,  8, 8); 
  font.add('b',  1,  8, 8); 
  font.add('c',  2,  8, 8); 
  font.add('d',  3,  8, 8); 
  font.add('e',  4,  8, 8); 
  font.add('f',  5,  8, 8); 
  font.add('g',  6,  8, 8); 
  font.add('h',  7,  8, 8); 
  font.add('i',  8,  8, 8); 
  font.add('j',  9,  8, 8); 
  font.add('k',  10, 8, 8); 
  font.add('l',  11, 8, 8); 
  font.add('m',  12, 8, 8); 
  font.add('n',  13, 8, 8); 
  font.add('o',  14, 8, 8); 
  font.add('p',  15, 8, 8); 
  font.add('q',  16, 8, 8); 
  font.add('r',  17, 8, 8); 
  font.add('s',  18, 8, 8); 
  font.add('t',  19, 8, 8); 
  font.add('u',  20, 8, 8); 
  font.add('v',  21, 8, 8); 
  font.add('w',  22, 8, 8); 
  font.add('x',  23, 8, 8); 
  font.add('y',  24, 8, 8); 
  font.add('z',  25, 8, 8);
  font.add('0',  26, 8, 8);
  font.add('1',  27, 8, 8);
  font.add('2',  28, 8, 8);
  font.add('3',  29, 8, 8);
  font.add('4',  30, 8, 8);
  font.add('5',  31, 8, 8);
  font.add('6',  32, 8, 8);
  font.add('7',  33, 8, 8);
  font.add('8',  34, 8, 8);
  font.add('9',  35, 8, 8);
  font.add('!',  36, 8, 8);
  font.add('¡',  37, 8, 8);
  font.add('?',  38, 8, 8);
  font.add('¿',  39, 8, 8);
  font.add(',',  40, 8, 8);
  font.add('.',  41, 8, 8);
  font.add('\'', 42, 8, 8);
  font.add('"',  43, 8, 8);
  font.add('"',  44, 8, 8);
  font.add(';',  45, 8, 8);
  font.add(':',  46, 8, 8);
  font.add('*',  47, 8, 8);
  font.add('©',  48, 8, 8);

  return font; 
}

const font_system_yellow = () => {

  const font = new t_font();

  font.hash = "systemFontYellow";
  font.name = "System Yellow";
  font.imageHash = "systemFont";
  font.imageURI = "/eccotext/theme/fonts/system.png";
  font.cursorFilter = new t_rgba(1, 0.6);

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 4;
  font.selectSpacing = -2;
  font.cursorFilter = new t_rgba(1.8, 0.6);

  font.bitmapIndex = 49;
  font.width = 8;
  font.height = 8;

  font.add(' ',  0,  8, 0); 
  font.add('\n', 0,  0, 0); 
  font.add('a',  0,  8, 8); 
  font.add('b',  1,  8, 8); 
  font.add('c',  2,  8, 8); 
  font.add('d',  3,  8, 8); 
  font.add('e',  4,  8, 8); 
  font.add('f',  5,  8, 8); 
  font.add('g',  6,  8, 8); 
  font.add('h',  7,  8, 8); 
  font.add('i',  8,  8, 8); 
  font.add('j',  9,  8, 8); 
  font.add('k',  10, 8, 8); 
  font.add('l',  11, 8, 8); 
  font.add('m',  12, 8, 8); 
  font.add('n',  13, 8, 8); 
  font.add('o',  14, 8, 8); 
  font.add('p',  15, 8, 8); 
  font.add('q',  16, 8, 8); 
  font.add('r',  17, 8, 8); 
  font.add('s',  18, 8, 8); 
  font.add('t',  19, 8, 8); 
  font.add('u',  20, 8, 8); 
  font.add('v',  21, 8, 8); 
  font.add('w',  22, 8, 8); 
  font.add('x',  23, 8, 8); 
  font.add('y',  24, 8, 8); 
  font.add('z',  25, 8, 8);
  font.add('0',  26, 8, 8);
  font.add('1',  27, 8, 8);
  font.add('2',  28, 8, 8);
  font.add('3',  29, 8, 8);
  font.add('4',  30, 8, 8);
  font.add('5',  31, 8, 8);
  font.add('6',  32, 8, 8);
  font.add('7',  33, 8, 8);
  font.add('8',  34, 8, 8);
  font.add('9',  35, 8, 8);
  font.add('!',  36, 8, 8);
  font.add('¡',  37, 8, 8);
  font.add('?',  38, 8, 8);
  font.add('¿',  39, 8, 8);
  font.add(',',  40, 8, 8);
  font.add('.',  41, 8, 8);
  font.add('\'', 42, 8, 8);
  font.add('"',  43, 8, 8);
  font.add('"',  44, 8, 8);
  font.add(';',  45, 8, 8);
  font.add(':',  46, 8, 8);
  font.add('*',  47, 8, 8);
  font.add('©',  48, 8, 8);

  return font; 
}

const font_system_red = () => {

  const font = new t_font();

  font.hash = "systemFontRed";
  font.name = "System Red";
  font.imageHash = "systemFont";
  font.imageURI = "/eccotext/theme/fonts/system.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 4;
  font.selectSpacing = -2;
  font.cursorFilter = new t_rgba(2.8, 2.8, 0.2);

  font.bitmapIndex = 49 * 2;
  font.width = 8;
  font.height = 8;

  font.add(' ',  0,  8, 0); 
  font.add('\n', 0,  0, 0); 
  font.add('a',  0,  8, 8); 
  font.add('b',  1,  8, 8); 
  font.add('c',  2,  8, 8); 
  font.add('d',  3,  8, 8); 
  font.add('e',  4,  8, 8); 
  font.add('f',  5,  8, 8); 
  font.add('g',  6,  8, 8); 
  font.add('h',  7,  8, 8); 
  font.add('i',  8,  8, 8); 
  font.add('j',  9,  8, 8); 
  font.add('k',  10, 8, 8); 
  font.add('l',  11, 8, 8); 
  font.add('m',  12, 8, 8); 
  font.add('n',  13, 8, 8); 
  font.add('o',  14, 8, 8); 
  font.add('p',  15, 8, 8); 
  font.add('q',  16, 8, 8); 
  font.add('r',  17, 8, 8); 
  font.add('s',  18, 8, 8); 
  font.add('t',  19, 8, 8); 
  font.add('u',  20, 8, 8); 
  font.add('v',  21, 8, 8); 
  font.add('w',  22, 8, 8); 
  font.add('x',  23, 8, 8); 
  font.add('y',  24, 8, 8); 
  font.add('z',  25, 8, 8);
  font.add('0',  26, 8, 8);
  font.add('1',  27, 8, 8);
  font.add('2',  28, 8, 8);
  font.add('3',  29, 8, 8);
  font.add('4',  30, 8, 8);
  font.add('5',  31, 8, 8);
  font.add('6',  32, 8, 8);
  font.add('7',  33, 8, 8);
  font.add('8',  34, 8, 8);
  font.add('9',  35, 8, 8);
  font.add('!',  36, 8, 8);
  font.add('¡',  37, 8, 8);
  font.add('?',  38, 8, 8);
  font.add('¿',  39, 8, 8);
  font.add(',',  40, 8, 8);
  font.add('.',  41, 8, 8);
  font.add('\'', 42, 8, 8);
  font.add('"',  43, 8, 8);
  font.add('"',  44, 8, 8);
  font.add(';',  45, 8, 8);
  font.add(':',  46, 8, 8);
  font.add('*',  47, 8, 8);
  font.add('©',  48, 8, 8);

  return font; 
}

const font_home_bay = () => {

  const font = new t_font();

  font.hash = "homeBayFont";
  font.name = "Home Bay";
  font.imageHash = "defaultFont"
  font.imageURI = "/eccotext/theme/fonts/home-bay.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 5;
  font.selectSpacing = -3;
  font.cursorFilter = new t_rgba(1.5, 1.2);

  font.bitmapIndex = 0;
  font.width = 28;
  font.height = 28;

  font.add(' ',  0,  14,  0); 
  font.add('\n', 0,   0,  0); 
  font.add('a',  0,  14, 16); 
  font.add('b',  1,  14, 16); 
  font.add('c',  2,  14, 16); 
  font.add('d',  3,  14, 16); 
  font.add('e',  4,  14, 16); 
  font.add('f',  5,  13, 16); 
  font.add('g',  6,  14, 16); 
  font.add('h',  7,  14, 16); 
  font.add('i',  8,   6, 16); 
  font.add('j',  9,  14, 16); 
  font.add('k',  10, 14, 16); 
  font.add('l',  11, 14, 16); 
  font.add('m',  12, 22, 16); 
  font.add('n',  13, 14, 16); 
  font.add('o',  14, 14, 16); 
  font.add('p',  15, 14, 16); 
  font.add('q',  16, 14, 16); 
  font.add('r',  17, 14, 16); 
  font.add('s',  18, 14, 16); 
  font.add('t',  19, 14, 16); 
  font.add('u',  20, 14, 16); 
  font.add('v',  21, 14, 16); 
  font.add('w',  22, 22, 16); 
  font.add('x',  23, 16, 16); 
  font.add('y',  24, 14, 16); 
  font.add('z',  25, 14, 16);

  return font; 
}

const font_vaporwave = () => {

  const font = new t_font();

  font.hash = "vaporwaveFont";
  font.name = "Vaporwave";
  font.imageHash = "vaporwaveFont"
  font.imageURI = "/eccotext/theme/fonts/vaporwave.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 5;
  font.selectSpacing = -3;
  font.cursorFilter = new t_rgba(1.5, 1.2);

  font.bitmapIndex = 0;
  font.width = 28;
  font.height = 28;

  font.add(' ',  0,  14,  0); 
  font.add('\n', 0,   0,  0); 
  font.add('a',  0,  14, 16); 
  font.add('b',  1,  14, 16); 
  font.add('c',  2,  14, 16); 
  font.add('d',  3,  14, 16); 
  font.add('e',  4,  14, 16); 
  font.add('f',  5,  13, 16); 
  font.add('g',  6,  14, 16); 
  font.add('h',  7,  14, 16); 
  font.add('i',  8,   6, 16); 
  font.add('j',  9,  14, 16); 
  font.add('k',  10, 14, 16); 
  font.add('l',  11, 14, 16); 
  font.add('m',  12, 22, 16); 
  font.add('n',  13, 14, 16); 
  font.add('o',  14, 14, 16); 
  font.add('p',  15, 14, 16); 
  font.add('q',  16, 14, 16); 
  font.add('r',  17, 14, 16); 
  font.add('s',  18, 14, 16); 
  font.add('t',  19, 14, 16); 
  font.add('u',  20, 14, 16); 
  font.add('v',  21, 14, 16); 
  font.add('w',  22, 22, 16); 
  font.add('x',  23, 16, 16); 
  font.add('y',  24, 14, 16); 
  font.add('z',  25, 14, 16);

  return font; 
}

const font_jurassic = () => {

  const font = new t_font();

  font.hash = "jurassicFont";
  font.name = "Jurassic Beach";
  font.imageHash = "jurassicFont"
  font.imageURI = "/eccotext/theme/fonts/jurassic-beach.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 5;
  font.selectSpacing = -3;
  font.cursorFilter = new t_rgba(1.5, 1.2);

  font.bitmapIndex = 0;
  font.width = 28;
  font.height = 28;

  font.add(' ',  0,  14,  0); 
  font.add('\n', 0,   0,  0); 
  font.add('a',  0,  14, 16); 
  font.add('b',  1,  14, 16); 
  font.add('c',  2,  14, 16); 
  font.add('d',  3,  14, 16); 
  font.add('e',  4,  14, 16); 
  font.add('f',  5,  13, 16); 
  font.add('g',  6,  14, 16); 
  font.add('h',  7,  14, 16); 
  font.add('i',  8,   6, 16); 
  font.add('j',  9,  14, 16); 
  font.add('k',  10, 14, 16); 
  font.add('l',  11, 14, 16); 
  font.add('m',  12, 22, 16); 
  font.add('n',  13, 14, 16); 
  font.add('o',  14, 14, 16); 
  font.add('p',  15, 14, 16); 
  font.add('q',  16, 14, 16); 
  font.add('r',  17, 14, 16); 
  font.add('s',  18, 14, 16); 
  font.add('t',  19, 14, 16); 
  font.add('u',  20, 14, 16); 
  font.add('v',  21, 14, 16); 
  font.add('w',  22, 22, 16); 
  font.add('x',  23, 16, 16); 
  font.add('y',  24, 14, 16); 
  font.add('z',  25, 14, 16);

  return font; 
}

const font_volcano = () => {

  const font = new t_font();

  font.hash = "volcanoFont";
  font.name = "Volcano";
  font.imageHash = "volcanoFont"
  font.imageURI = "/eccotext/theme/fonts/volcano.png";

  font.align = "center";
  font.vAlign = "middle";
  font.trimSpaces = true;
  font.letterSpacing = 2;
  font.lineHeight = 5;
  font.selectSpacing = -3;
  font.cursorFilter = new t_rgba(1.5, 1.2);

  font.bitmapIndex = 0;
  font.width = 28;
  font.height = 28;

  font.add(' ',  0,  14,  0); 
  font.add('\n', 0,   0,  0); 
  font.add('a',  0,  14, 16); 
  font.add('b',  1,  14, 16); 
  font.add('c',  2,  14, 16); 
  font.add('d',  3,  14, 16); 
  font.add('e',  4,  14, 16); 
  font.add('f',  5,  13, 16); 
  font.add('g',  6,  14, 16); 
  font.add('h',  7,  14, 16); 
  font.add('i',  8,   6, 16); 
  font.add('j',  9,  14, 16); 
  font.add('k',  10, 14, 16); 
  font.add('l',  11, 14, 16); 
  font.add('m',  12, 22, 16); 
  font.add('n',  13, 14, 16); 
  font.add('o',  14, 14, 16); 
  font.add('p',  15, 14, 16); 
  font.add('q',  16, 14, 16); 
  font.add('r',  17, 14, 16); 
  font.add('s',  18, 14, 16); 
  font.add('t',  19, 14, 16); 
  font.add('u',  20, 14, 16); 
  font.add('v',  21, 14, 16); 
  font.add('w',  22, 22, 16); 
  font.add('x',  23, 16, 16); 
  font.add('y',  24, 14, 16); 
  font.add('z',  25, 14, 16);

  return font; 
}



export const Fonts = {

  font_system: font_system,
  font_system_yellow: font_system_yellow,
  font_system_red: font_system_red,
  font_home_bay: font_home_bay,
  font_vaporwave: font_vaporwave,
  font_volcano: font_volcano,
  font_jurassic: font_jurassic,
}

export default Fonts;
