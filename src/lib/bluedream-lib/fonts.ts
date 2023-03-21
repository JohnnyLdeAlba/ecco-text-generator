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
  font.add('0',  25, 8, 8);
  font.add('1',  25, 8, 8);
  font.add('2',  25, 8, 8);
  font.add('3',  25, 8, 8);
  font.add('4',  25, 8, 8);
  font.add('5',  25, 8, 8);
  font.add('6',  25, 8, 8);
  font.add('7',  25, 8, 8);
  font.add('8',  25, 8, 8);
  font.add('9',  25, 8, 8);
  font.add('!',  25, 8, 8);
  font.add('¡',  25, 8, 8);
  font.add('?',  25, 8, 8);
  font.add('¿',  25, 8, 8);
  font.add(',',  25, 8, 8);
  font.add('.',  25, 8, 8);
  font.add('\'',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add(';',  25, 8, 8);
  font.add(':',  25, 8, 8);
  font.add('*',  25, 8, 8);
  font.add('©',  25, 8, 8);

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
  font.add('0',  25, 8, 8);
  font.add('1',  25, 8, 8);
  font.add('2',  25, 8, 8);
  font.add('3',  25, 8, 8);
  font.add('4',  25, 8, 8);
  font.add('5',  25, 8, 8);
  font.add('6',  25, 8, 8);
  font.add('7',  25, 8, 8);
  font.add('8',  25, 8, 8);
  font.add('9',  25, 8, 8);
  font.add('!',  25, 8, 8);
  font.add('¡',  25, 8, 8);
  font.add('?',  25, 8, 8);
  font.add('¿',  25, 8, 8);
  font.add(',',  25, 8, 8);
  font.add('.',  25, 8, 8);
  font.add('\'',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add(';',  25, 8, 8);
  font.add(':',  25, 8, 8);
  font.add('*',  25, 8, 8);
  font.add('©',  25, 8, 8);

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
  font.add('0',  25, 8, 8);
  font.add('1',  25, 8, 8);
  font.add('2',  25, 8, 8);
  font.add('3',  25, 8, 8);
  font.add('4',  25, 8, 8);
  font.add('5',  25, 8, 8);
  font.add('6',  25, 8, 8);
  font.add('7',  25, 8, 8);
  font.add('8',  25, 8, 8);
  font.add('9',  25, 8, 8);
  font.add('!',  25, 8, 8);
  font.add('¡',  25, 8, 8);
  font.add('?',  25, 8, 8);
  font.add('¿',  25, 8, 8);
  font.add(',',  25, 8, 8);
  font.add('.',  25, 8, 8);
  font.add('\'',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add('"',  25, 8, 8);
  font.add(';',  25, 8, 8);
  font.add(':',  25, 8, 8);
  font.add('*',  25, 8, 8);
  font.add('©',  25, 8, 8);

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

  font.add(' ',  0,  14,  0,   0,  0); 
  font.add('\n', 0,   0,  0,   0,  0); 
  font.add('a',  0,  14, 16,  -7, -6); 
  font.add('b',  1,  14, 16,  -7, -6); 
  font.add('c',  2,  14, 16,  -7, -6); 
  font.add('d',  3,  14, 16,  -7, -6); 
  font.add('e',  4,  14, 16,  -7, -6); 
  font.add('f',  5,  13, 16,  -8, -6); 
  font.add('g',  6,  14, 16,  -7, -6); 
  font.add('h',  7,  14, 16,  -7, -6); 
  font.add('i',  8,   6, 16, -11, -6); 
  font.add('j',  9,  14, 16,  -7, -6); 
  font.add('k',  10, 14, 16,  -7, -6); 
  font.add('l',  11, 14, 16,  -7, -6); 
  font.add('m',  12, 22, 16,  -3, -6); 
  font.add('n',  13, 14, 16,  -7, -6); 
  font.add('o',  14, 14, 16,  -7, -6); 
  font.add('p',  15, 14, 16,  -7, -6); 
  font.add('q',  16, 14, 16,  -7, -6); 
  font.add('r',  17, 14, 16,  -7, -6); 
  font.add('s',  18, 14, 16,  -7, -6); 
  font.add('t',  19, 14, 16,  -7, -6); 
  font.add('u',  20, 14, 16,  -7, -6); 
  font.add('v',  21, 14, 16,  -7, -6); 
  font.add('w',  22, 22, 16,  -3, -6); 
  font.add('x',  23, 16, 16,  -6, -6); 
  font.add('y',  24, 14, 16,  -7, -6); 
  font.add('z',  25, 14, 16,  -7, -6);

  return font; 
}

export const Fonts = {

  font_system: font_system,
  font_system_yellow: font_system_yellow,
  font_system_red: font_system_red,
  font_home_bay: font_home_bay
}

export default Fonts;
