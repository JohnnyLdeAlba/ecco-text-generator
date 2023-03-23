import { t_rgba } from "./plot-state";

export class t_char {

  id;
  hash;
  bitmapIndex;

  offsetX;
  offsetY;

  width;
  height;

  constructor() {

    this.id = 0;
    this.hash = '';
    this.bitmapIndex = 0;

    this.offsetX = 0;
    this.offsetY = 0;
   
    this.width = 0;
    this.height = 0;
  }
}

export class t_word {

  type;

  startIndex;
  totalChars;
  totalWords;

  width;
  height;

  constructor() {

    this.type = '';

    this.startIndex = 0;
    this.totalChars = 0;
    this.totalWords = 0;

    this.width = 0;
    this.height = 0;
  }
}

export class t_font {

  hash;
  name;
  imageURI;
  imageHash;
  bitmapIndex;
  bitmapOffset;
  charMap;

  align;
  vAlign;
  trimSpaces;
  letterSpacing;
  lineHeight;
  selectSpacing;
  cursorFilter;

  constructor() {

    this.hash = '';
    this.name = '';
    this.imageURI = '';
    this.imageHash = '';
    this.bitmapIndex = 0;
    this.bitmapOffset = 0;
    this.charMap = new Map();

    this.align = '';
    this.vAlign = '';
    this.trimSpaces = 0;
    this.letterSpacing = 0;
    this.lineHeight = 0;
    this.selectSpacing = 0;
    this.cursorFilter = new t_rgba(1, 1, 1, 1);
  }

  add(
    hash,
    bitmapIndex,
    width,
    height,
    offsetX = 0,
    offsetY = 0) {

    const char = new t_char();

    char.hash = hash;
    char.bitmapIndex = bitmapIndex;

    char.offsetX = offsetX;
    char.offsetY = offsetY;

    char.width = width;
    char.height = height; 

    this.charMap.set(char.hash, char);
  }

  get(hash) {
    return this.charMap.get(hash);
  }
}

export class t_composition {

  font;
  width;
  height;
  blockHeight;
  padding;

  text;
  align;
  vAlign;
  baseline;
  trimSpaces;

  letterSpacing;
  lineHeight;
  selectSpacing;

  cursorPosition;
  cursorFilter;

  wordArray;
  lineArray;

  constructor() {

    this.font = new t_font();
    this.width = 320;
    this.height = 240;
    this.blockHeight = 0;
    this.padding = 8;

    this.text = '';
    this.align = '';
    this.vAlign = '';
    this.baseline = "bottom";
    this.trimSpaces = true;

    this.letterSpacing = 0;
    this.lineHeight = 0;
    this.selectSpacing = 0;

    this.cursorPosition = -1;
    this.cursorFilter = new t_rgba(1,1,1,1);

    this.wordArray = [];
    this.lineArray = [];
  }

  setAlign(align) {

    if ("right" || "center")
      this.align = align;
    else
      this.align = '';
  }

  setVAlign(vAlign) {

    if ("bottom" || "middle")
      this.vAlign = vAlign;
    else
      this.vAlign = '';
  }

  setBaseline(baseline) {

    if ("bottom" || "middle")
      this.baseline = baseline;
    else
      this.baseline = '';
  }

  setFont(font) {

    if (font == this.font)
      return;

    this.align = font.align;
    this.vAlign = font.vAlign;
    this.baseline = font.baseline;
    this.trimSpaces = font.trimSpaces;

    this.letterSpacing = font.letterSpacing;
    this.lineHeight = font.lineHeight;
    this.selectSpacing = font.selectSpacing;
    this.cursorFilter = font.cursorFilter;

    this.font = font;
  }

  setSize(width, height) {

    this.width = width - (this.padding * 2);
    this.height = height - (this.padding * 2);
  }

  setText(text) {

    if (text == this.text)
      return;

    this.text = text;
  }

  generate(width, height, text) {

    this.setSize(width, height);
    this.setText(text);

    let wordArray = this.wordCount(text);

    wordArray.forEach(word => this.wordDimensions(word, text));
    wordArray = this.breakWords(wordArray, text);
    wordArray.forEach(word => this.wordDimensions(word, text));

    let lineArray = this.lineCount(wordArray);

    if (this.trimSpaces)
      this.trimAllLineSpaces(lineArray, wordArray);

    lineArray.forEach(line => this.lineDimensions(line, wordArray));
    this.calcBlockHeight(lineArray);

    this.wordArray = wordArray;
    this.lineArray = lineArray;
  }

  trimBeginSpaces(line, wordArray) {

    let startIndex = 0;
    for (let index = 0; index < line.totalWords; index++) {

      const word = wordArray[line.startIndex + index];
      if (word.type != "space")
        break;

      startIndex++;
    }

    let totalWords = line.totalWords - startIndex;

    line.startIndex+= startIndex;
    line.totalWords = totalWords;
  }

  trimEndSpaces(line, wordArray) {

    let endIndex = 0;
    const startIndex = line.startIndex + (line.totalWords - 1);

    for (let index = 0; index < line.totalWords; index++) {

      const word = wordArray[startIndex - index];
      if (word.type != "space")
        break;

      endIndex++;
    }

    line.totalWords = line.totalWords - endIndex;
  }

  trimLineSpaces(line, wordArray) {

    this.trimBeginSpaces(line, wordArray);
    this.trimEndSpaces(line, wordArray);
  }

  trimAllLineSpaces(lineArray, wordArray) {

    lineArray.forEach(line =>
      this.trimLineSpaces(line, wordArray)
    );
  }

  wordDimensions(word, text) {

    let width = 0;
    let height = 0;

    for (let index = 0; index < word.totalChars; index++) {

      const hash = text.charAt(word.startIndex + index);
      const char = this.font.get(hash);
      if (!char)
        continue;

      width+= char.width + this.letterSpacing;
      if (char.height > height)
        height = char.height;
    }

    word.width = width;
    word.height = height;
  }

  lineDimensions(line, wordArray) {

    let width = 0;
    let height = 0;

    for (let index = 0; index < line.totalWords; index++) {

      const word = wordArray[line.startIndex + index];

      width+= word.width;
      if (word.height > height)
        height = word.height;
    }

    line.width = width;

    if (line.type != "newline")
      line.height = height;
  }

  breakWord(word, text) {

    if (word.width <= this.width ||
      word.type == "newline")
        return [ word ];

    const words = [];

    let _word = new t_word();
    _word.startIndex = word.startIndex;

    let totalChars = 0;
    let width = 0;
    let height = 0;

    for (let index = 0; index < word.totalChars; index++) {

      const hash = text.charAt(word.startIndex + index);
      const char = this.font.get(hash);
      if (!char)
        continue;
        
      if (char.width + width > this.width) {

        _word.width = width;
        _word.height = height; 
        _word.totalChars = totalChars;

        words.push(_word);

        _word = new t_word();
        _word.startIndex = word.startIndex + index;

        totalChars = 0;
        width = 0;
        height = 0;
      }

      totalChars++;

      width+= char.width + this.letterSpacing;
      if (char.height > height)
        height = char.height;
    }
 
    if (totalChars > 0) {

      _word.width = width;
      _word.height = height; 
      _word.totalChars = totalChars;

      words.push(_word);  
    }

    return words;
  }

  breakWords(wordArray, text) {

    const _wordArray = [];

    wordArray.forEach(word => {

      this.breakWord(word, text)
        .forEach(word => _wordArray.push(word));
    });

    return _wordArray;
  }

  wordCount(text) {

    let word = null;
    let totalChars = 0;

    const wordArray = [];

    for (let index = 0; index < text.length; index++) {

      const char = text.charAt(index);
      const charFont = this.font.get(char);
      if (!charFont)
        continue;

      if (word == null) {

        totalChars = 0;
 
        word = new t_word();
        word.startIndex = index;
      }

      if (char == ' ' || char == '\n') {

        if (totalChars > 0) {

          word.totalChars = totalChars;
          wordArray.push(word);
        }

        word = new t_word();

	if (char == ' ')
          word.type = "space";
	else if (char == '\n')
          word.type = "newline"

        word.startIndex = index;
        word.totalChars = 1;

        wordArray.push(word);
        word = null;
 
        continue;
      } 

      totalChars++;
    }

    if (word && totalChars > 0) {

      word.totalChars = totalChars;
      wordArray.push(word);
    }

    return wordArray;
  }

  calcBlockHeight(lineArray) {

    this.blockHeight = 0;

    lineArray.forEach(line => {

      if (line.type != "newline")
        this.blockHeight+= line.height + this.lineHeight;

    });
  }

  lineCount(wordArray) {

    let line = null;
    let totalWords = 0;

    let width = 0;
    let height = 0;

    const lineArray = [];

    for (let index = 0; index < wordArray.length; index++) {

      const word = wordArray[index];

      if (!line) {

        line = new t_word();
        line.startIndex = index;

        width = 0;
        height = 0;
        totalWords = 0;
      }

      if (word.type == "newline") {

        if (totalWords > 0) {

          line.totalWords = totalWords;
          lineArray.push(line);
	}

        line = new t_word();
	line.type = "newline";
        line.startIndex = index;
        line.totalWords = 1;

        lineArray.push(line);

        line = null;
        continue;
      }

      if (width + word.width > this.width) {

        if (totalWords > 0) {

          line.totalWords = totalWords;
          lineArray.push(line);
	}

        line = new t_word();
        line.startIndex = index;

        width = 0;
        height = 0;
        totalWords = 0;
      }

      totalWords++;
      width+= word.width;

      if (word.height > height)
        height = word.height;
    }

    if (line && totalWords > 0) {

      line.totalWords = totalWords;
      lineArray.push(line);;
    }

    return lineArray;
  }
}
