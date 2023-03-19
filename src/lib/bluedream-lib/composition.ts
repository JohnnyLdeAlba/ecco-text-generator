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

  charMap;

  constructor() {
    this.charMap = new Map();
  }

  add(
    hash,
    bitmapIndex,
    width,
    height,
    offsetX,
    offsetY) {

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

  text;
  wordArray;
  lineArray;

  constructor() {

    this.font = new t_font();
    this.width = 320;
    this.height = 240;

    this.text = '';
    this.wordArray = [];
    this.lineArray = [];
  }

  setFont(font) {

    if (font == this.font)
      return;

    this.font = font;
  }

  setSize(width, height) {

    this.width = width;
    this.height = height;
  }

  setText(text) {

    if (text == this.text)
      return;

    this.text = text;
  }

  generate(font, width, height, text) {

    this.setFont(font);
    this.setSize(width, height);
    this.setText(text);

    let wordArray = this.wordCount(text);

    wordArray.forEach(word => this.wordDimensions(word, text));
    wordArray = this.breakWords(wordArray, text);
    wordArray.forEach(word => this.wordDimensions(word, text));

    const lineArray = this.lineCount(wordArray);

    this.wordArray = wordArray;
    this.lineArray = lineArray;

    console.log(lineArray);
  }

  wordDimensions(word, text) {

    let width = 0;
    let height = 0;

    for (let index = 0; index < word.totalChars; index++) {

      const hash = text.charAt(word.startIndex + index);
      const char = this.font.get(hash);
      if (!char)
        continue;

      width+= char.width;
      if (char.height > height)
        height = char.height;
    }

    word.width = width;
    word.height = height;
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

      width+= char.width;
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

        if (char == '\n')
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
        line.startIndex = index; // fix

        width = 0;
        height = 0;
        totalWords = 0;
      }

      if (word.type == "newline") {

        if (totalWords > 0) {

          line.totalWords = totalWords;
          line.width = width;
          line.height = height;

          lineArray.push(line);
	}

        line = new t_word();
	line.type = "newline";
        line.startIndex = index;

        line.totalWords = 1;
        line.width = word.width;
        line.height = word.height;

        lineArray.push(line);

        line = null;
        continue;
      }

      if (width + word.width > this.width) {

        if (totalWords > 0) {

          line.totalWords = totalWords;
          line.width = width;
          line.height = height;

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

    if (totalWords > 0) {

      line.totalWords = totalWords;
      line.width = width;
      line.height = height;

      lineArray.push(line);;
    }

    return lineArray;
  }
}
