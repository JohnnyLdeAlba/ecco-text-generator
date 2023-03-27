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

  let index = 0;

  font.add('a', index,   14, 16); 
  font.add('b', ++index, 14, 16); 
  font.add('c', ++index, 14, 16); 
  font.add('d', ++index, 14, 16); 
  font.add('e', ++index, 14, 16); 
  font.add('f', ++index, 13, 16); 
  font.add('g', ++index, 14, 16); 
  font.add('h', ++index, 14, 16); 
  font.add('i', ++index,  6, 16); 
  font.add('j', ++index, 14, 16); 
  font.add('k', ++index, 14, 16); 
  font.add('l', ++index, 14, 16); 
  font.add('m', ++index, 22, 16); 
  font.add('n', ++index, 14, 16); 
  font.add('o', ++index, 14, 16); 
  font.add('p', ++index, 14, 16); 
  font.add('q', ++index, 14, 16); 
  font.add('r', ++index, 14, 16); 
  font.add('s', ++index, 14, 16); 
  font.add('t', ++index, 14, 16); 
  font.add('u', ++index, 14, 16); 
  font.add('v', ++index, 14, 16); 
  font.add('w', ++index, 22, 16); 
  font.add('x', ++index, 16, 16); 
  font.add('y', ++index, 14, 16); 
  font.add('z', ++index, 14, 16);

  index = 26 * 1;

  font.add('0', index, 14, 16);
  font.add('1', ++index, 14, 16);
  font.add('2', ++index, 14, 16);
  font.add('3', ++index, 14, 16);
  font.add('4', ++index, 14, 16);
  font.add('5', ++index, 14, 16);
  font.add('6', ++index, 14, 16);
  font.add('7', ++index, 14, 16);
  font.add('8', ++index, 14, 16);
  font.add('9', ++index, 14, 16);

  index = 26 * 2;

  font.add('à', index, 14, 23, 0, -1);
  font.add('è', ++index, 14, 23, 0, -1);
  font.add('ì', ++index,  6, 23, 0, -1);
  font.add('ò', ++index, 14, 23, 0, -1);
  font.add('ù', ++index, 14, 23, 0, -1);
  font.add('á', ++index, 14, 23, 0, -1);
  font.add('é', ++index, 14, 23, 0, -1);
  font.add('í', ++index,  6, 23, 0, -1);
  font.add('ó', ++index, 14, 23, 0, -1);
  font.add('ú', ++index, 14, 23, 0, -1);
  font.add('ȁ', ++index, 14, 23, 0, -1);
  font.add('ȅ', ++index, 14, 23, 0, -1);
  font.add('ȉ', ++index, 12, 23, 0, -1);
  font.add('ȍ', ++index, 14, 23, 0, -1);
  font.add('ȕ', ++index, 14, 23, 0, -1);
  font.add('ä', ++index, 14, 22, 0, -1);
  font.add('ë', ++index, 14, 22, 0, -1);
  font.add('ï', ++index, 11, 22, 0, -1);
  font.add('ö', ++index, 14, 22, 0, -1);
  font.add('ü', ++index, 14, 22, 0, -1);
  font.add('ã', ++index, 14, 20, 0, -1);
  font.add('ẽ', ++index, 14, 20, 0, -1);
  font.add('ĩ', ++index,  8, 20, 0, -1);
  font.add('õ', ++index, 14, 20, 0, -1);
  font.add('ũ', ++index, 14, 20, 0, -1);
  font.add('ñ', ++index, 14, 20, 0, -1);
  font.add('â', ++index, 14, 21);
  font.add('ê', ++index, 14, 21);
  font.add('î', ++index,  8, 21);
  font.add('ô', ++index, 14, 21);
  font.add('û', ++index, 14, 21);
  font.add('ň', ++index, 14, 21);
  font.add('ç', ++index, 14, 22);
  font.add('ð', ++index, 17, 16);
  font.add('þ', ++index, 14, 16);
  font.add('æ', ++index, 21, 16);

  index = 26 * 4;

  font.add('а', 0, 14, 16);
  font.add('б', index, 14, 16);
  font.add('в', 1, 14, 16);
  font.add('г', ++index, 13, 16);
  font.add('д', ++index, 14, 16);
  font.add('е', 4, 14, 16);
  font.add('ё', 68, 14, 22, 0, -1);
  font.add('ж', ++index, 21, 16);
  font.add('з', 29, 14, 23);
  font.add('и', ++index, 14, 16);
  font.add('й', ++index, 14, 20);
  font.add('к', 10, 14, 23);
  font.add('л', ++index, 14, 16);
  font.add('м', 12, 22, 16);
  font.add('н', 7, 14, 16);
  font.add('о', 14, 14, 16);
  font.add('п', ++index, 14, 16);
  font.add('р', 15, 14, 16);
  font.add('с', 2, 14, 16);
  font.add('т', 19, 14, 16);
  font.add('у', ++index, 14, 16);
  font.add('ф', ++index, 19, 16);
  font.add('х', 23, 16, 16);
  font.add('ц', ++index, 14, 16);
  font.add('ч', ++index, 14, 16);
  font.add('ш', ++index, 19, 16);
  font.add('щ', ++index, 19, 16);
  font.add('ъ', ++index, 19, 16, -2);
  font.add('ы', ++index, 20, 16);
  font.add('ь', ++index, 14, 16);
  font.add('э', ++index, 14, 16);
  font.add('ю', ++index, 20, 16);
  font.add('я', ++index, 14, 16);

  // Hiragana
  // Panel 1
  
  index = 26 * 5;
  font.add('あ', index, 15, 15);
  font.add('ぁ', ++index, 14, 16);
  font.add('か', ++index, 14, 16);
  font.add('さ', ++index, 14, 16);
  font.add('た', ++index, 14, 16);
  font.add('な', ++index, 14, 16);

  index = 26 * 6;
  font.add('い', index, 14, 16);
  font.add('ぃ', ++index, 14, 16);
  font.add('き', ++index, 14, 16);
  font.add('し', ++index, 14, 16);
  font.add('ち', ++index, 14, 16);
  font.add('に', ++index, 14, 16);

  index = 26 * 7;
  font.add('う', index, 14, 16);
  font.add('ぅ', ++index, 14, 16);
  font.add('く', ++index, 14, 16);
  font.add('す', ++index, 14, 16);
  font.add('つ', ++index, 14, 16);
  font.add('ぬ', ++index, 14, 16);

  index = 26 * 8;
  font.add('え', index, 14, 16);
  font.add('ぇ', ++index, 14, 16);
  font.add('け', ++index, 14, 16);
  font.add('せ', ++index, 14, 16);
  font.add('て', ++index, 14, 16);
  font.add('ね', ++index, 14, 16);

  index = 26 * 9;
  font.add('お', index, 14, 16);
  font.add('ぉ', ++index, 14, 16);
  font.add('こ', ++index, 14, 16);
  font.add('そ', ++index, 14, 16);
  font.add('と', ++index, 14, 16);
  font.add('の', ++index, 14, 16);

  // Panel 2

  index = 26 * 5 + 6;
  font.add('は', index, 14, 16);
  font.add('ま', ++index, 14, 16);
  font.add('や', ++index, 14, 16);
  font.add('ゃ', ++index, 14, 16);
  font.add('ら', ++index, 14, 16);

  index = 26 * 6 + 6;
  font.add('ひ', index, 14, 16);
  font.add('み', ++index, 14, 16);
  font.add('り', index+= 3, 14, 16);

  index = 26 * 7 + 6;
  font.add('ふ', index, 14, 16);
  font.add('む', ++index, 14, 16);
  font.add('ゆ', ++index, 14, 16);
  font.add('ゅ', ++index, 14, 16);
  font.add('る', ++index, 14, 16);

  index = 26 * 8 + 6;
  font.add('へ', index, 14, 16);
  font.add('め', ++index, 14, 16);
  font.add('れ', index+= 3, 14, 16);

  index = 26 * 9 + 6;
  font.add('ほ', index, 14, 16);
  font.add('も', ++index, 14, 16);
  font.add('よ', ++index, 14, 16);
  font.add('ょ', ++index, 14, 16);
  font.add('ろ', ++index, 14, 16);

  // Panel 3

  index = 26 * 5 + 6 + 5;
  font.add('わ', index, 14, 16);
  font.add('が', ++index, 14, 16);
  font.add('ざ', ++index, 14, 16);
  font.add('だ', ++index, 14, 16);
  font.add('ば', ++index, 14, 16);
  font.add('ぱ', ++index, 14, 16);

  index = 26 * 6 + 6 + 5;
  font.add('ゐ', index, 14, 16);
  font.add('ぎ', ++index, 14, 16);
  font.add('じ', ++index, 14, 16);
  font.add('ぢ', ++index, 14, 16);
  font.add('び', ++index, 14, 16);
  font.add('ぴ', ++index, 14, 16);

  index = 26 * 7 + 6 + 5;
  font.add('ぐ', ++index, 14, 16);
  font.add('ず', ++index, 14, 16);
  font.add('づ', ++index, 14, 16);
  font.add('ぶ', ++index, 14, 16);
  font.add('ぷ', ++index, 14, 16);

  index = 26 * 8 + 6 + 5;
  font.add('ゑ', index, 14, 16);
  font.add('げ', ++index, 14, 16);
  font.add('ぜ', ++index, 14, 16);
  font.add('で', ++index, 14, 16);
  font.add('べ', ++index, 14, 16);
  font.add('ぺ', ++index, 14, 16);

  index = 26 * 9 + 6 + 5;
  font.add('を', index, 14, 16);
  font.add('ご', ++index, 14, 16);
  font.add('ぞ', ++index, 14, 16);
  font.add('ど', ++index, 14, 16);
  font.add('ぼ', ++index, 14, 16);
  font.add('ぽ', ++index, 14, 16);

  // Panel 4

  index = 26 * 5 + 6 + 5 + 6;
  font.add('ゔ', index, 14, 16);
  font.add('っ', ++index, 14, 16);
  font.add('ん', ++index, 14, 16);
  font.add('ゝ', ++index, 14, 16);
  font.add('ゞ', ++index, 14, 16);

  // Katakana
  // Panel 1

  index = 26 * 10;
  font.add('ア', index, 14, 16);
  font.add('ァ', ++index, 14, 16);
  font.add('カ', ++index, 14, 16);
  font.add('サ', ++index, 14, 16);
  font.add('タ', ++index, 14, 16);
  font.add('ナ', ++index, 14, 16);

  index = 26 * 11;
  font.add('イ', index, 14, 16);
  font.add('ィ', ++index, 14, 16);
  font.add('キ', ++index, 14, 16);
  font.add('シ', ++index, 14, 16);
  font.add('チ', ++index, 14, 16);
  font.add('ニ', ++index, 14, 16);

  index = 26 * 12;
  font.add('ウ', index, 14, 16);
  font.add('ゥ', ++index, 14, 16);
  font.add('ク', ++index, 14, 16);
  font.add('ス', ++index, 14, 16);
  font.add('ツ', ++index, 14, 16);
  font.add('ヌ', ++index, 14, 16);

  index = 26 * 13;
  font.add('エ', index, 14, 16);
  font.add('ェ', ++index, 14, 16);
  font.add('ケ', ++index, 14, 16);
  font.add('セ', ++index, 14, 16);
  font.add('テ', ++index, 14, 16);
  font.add('ネ', ++index, 14, 16);

  index = 26 * 14;
  font.add('オ', index, 14, 16);
  font.add('ォ', ++index, 14, 16);
  font.add('コ', ++index, 14, 16);
  font.add('ソ', ++index, 14, 16);
  font.add('ト', ++index, 14, 16);
  font.add('ノ', ++index, 14, 16);

  // Panel 2

  index = 26 * 10 + 6;
  font.add('ハ', index, 14, 16);
  font.add('マ', ++index, 14, 16);
  font.add('ヤ', ++index, 14, 16);
  font.add('ャ', ++index, 14, 16);
  font.add('ラ', ++index, 14, 16);

  index = 26 * 11 + 6;
  font.add('ヒ', index, 14, 16);
  font.add('ミ', ++index, 14, 16);
  font.add('リ', index+= 2, 14, 16);

  index = 26 * 12 + 6;
  font.add('フ', index, 14, 16);
  font.add('ム', ++index, 14, 16);
  font.add('ユ', ++index, 14, 16);
  font.add('ュ', ++index, 14, 16);
  font.add('ル', ++index, 14, 16);

  index = 26 * 13 + 6;
  font.add('ヘ', index, 14, 16);
  font.add('メ', ++index, 14, 16);
  font.add('レ', index+= 2, 14, 16);

  index = 26 * 14 + 6;
  font.add('ホ', index, 14, 16);
  font.add('モ', ++index, 14, 16);
  font.add('ヨ', ++index, 14, 16);
  font.add('ョ', ++index, 14, 16);
  font.add('ロ', ++index, 14, 16);

  // Panel 3

  index = 26 * 10 + 6 + 5;
  font.add('ワ', index, 14, 16);
  font.add('ガ', ++index, 14, 16);
  font.add('ザ', ++index, 14, 16);
  font.add('ダ', ++index, 14, 16);
  font.add('バ', ++index, 14, 16);
  font.add('パ', ++index, 14, 16);

  index = 26 * 11 + 6 + 5;
  font.add('ヰ', index, 14, 16);
  font.add('ギ', ++index, 14, 16);
  font.add('ジ', ++index, 14, 16);
  font.add('ヂ', ++index, 14, 16);
  font.add('ビ', ++index, 14, 16);
  font.add('ピ', ++index, 14, 16);

  index = 26 * 12 + 6 + 5;
  font.add('グ', ++index, 14, 16);
  font.add('ズ', ++index, 14, 16);
  font.add('ヅ', ++index, 14, 16);
  font.add('ブ', ++index, 14, 16);
  font.add('プ', ++index, 14, 16);

  index = 26 * 13 + 6 + 5;
  font.add('ヱ', index, 14, 16);
  font.add('ゲ', ++index, 14, 16);
  font.add('ゼ', ++index, 14, 16);
  font.add('デ', ++index, 14, 16);
  font.add('ベ', ++index, 14, 16);
  font.add('ペ', ++index, 14, 16);

  index = 26 * 14 + 6 + 5;
  font.add('ヲ', index, 14, 16);
  font.add('ゴ', ++index, 14, 16);
  font.add('ゾ', ++index, 14, 16);
  font.add('ド', ++index, 14, 16);
  font.add('ボ', ++index, 14, 16);
  font.add('ポ', ++index, 14, 16);

  // Panel 4

  index = 26 * 10 + 6 + 5 + 6;
  font.add('ヴ', index, 14, 16);
  font.add('ッ', ++index, 14, 16);
  font.add('ン', ++index, 14, 16);
  font.add('ヽ', ++index, 14, 16);
  font.add('ヾ', ++index, 14, 16);

  index = 26 * 11 + 6 + 5 + 6;
  font.add('ー', index, 14, 16);
  font.add('・', ++index, 14, 16);
  font.add('。', ++index, 14, 16);

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
