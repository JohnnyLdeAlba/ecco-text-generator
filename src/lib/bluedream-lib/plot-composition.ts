import { t_rgba, t_plot_state } from "./plot-state";

export const plot_composition = com => {

  let vAlign = 0;

  if (com.vAlign == "bottom")
    vAlign = com.height - com.blockHeight;
  else if (com.vAlign == "middle")
    vAlign = (com.height - com.blockHeight)/2;

  let width = 0;
  let height = com.padding + vAlign;

  let psArray = [];
  let charIndex = 0;

  for (const line of com.lineArray) {

    let align = 0;

    if (com.align == "right")
      align = com.width - line.width;
    else if (com.align == "center")
      align = (com.width - line.width)/2;

    if (width == 0)
      width+= align;

    width+= com.padding;

    if (line.type == "newline") {

      width = 0;
      charIndex++;
      continue; 
    }

    for (let index = 0; index < line.totalWords; index++) {

      const word = com.wordArray[line.startIndex + index];

      if (word.type == "space") {
 
        width+= word.width;
	charIndex++;
        continue;
      }

      for (let index = 0; index < word.totalChars; index++) {

        const hash = com.text.charAt(word.startIndex + index);
        const char = com.font.get(hash);
        if (!char)
          continue;

        const ps = new t_plot_state();

	if (char.type == "animated") {

          const frameIndex = char.getFrame();
          ps.index = com.font.animated.bitmapIndex + char.bitmapIndex + frameIndex;
	   
	  char.updateFrame();
	}
	else
          ps.index = com.font.bitmapIndex + char.bitmapIndex;

        let offsetY = 0;

        if (char.height != line.height) {

          if (com.baseline == "middle")
            offsetY = (line.height - char.height)/2;
          else if (com.baseline == "bottom")
            offsetY = line.height - char.height;
        } 

        ps.x = char.offsetX + width;

        if (com.cursorPosition == charIndex) {

          ps.y = char.offsetY + height + offsetY + com.selectSpacing;
	  ps.colorFilter = com.cursorFilter;
	}
        else
          ps.y = char.offsetY + height + offsetY;

        psArray.push(ps);

        width+= char.width + com.letterSpacing;
	charIndex++
      }
    }

    width = 0;
    height+= line.height + com.lineHeight;
  }

  com.font.updateAnimated();
  return psArray;
}
