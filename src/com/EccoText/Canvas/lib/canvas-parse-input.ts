export const canvas_parse_input = (canvas, key) => {

  if (canvas.state != "ready")
    return;

  if (canvas.cursorPosition < 0)
    canvas.cursorPosition = canvas.text.length;

  switch (key) {

    case "ArrowLeft": {
 
      if (canvas.cursorPosition > 0)
        canvas.cursorPosition--;

      break;
    }

    case "ArrowRight": {
 
      if (canvas.cursorPosition < canvas.text.length)
        canvas.cursorPosition++;

      break;
    }

    case "Delete": {

      const startText = canvas.text.slice(0, canvas.cursorPosition);
      const endText = canvas.text.slice(canvas.cursorPosition + 1);

      canvas.text = startText + endText;
      break;
    }

    case "Backspace": {

      if (canvas.cursorPosition == 0) {

        const startText = canvas.text.slice(0, canvas.cursorPosition);
        const endText = canvas.text.slice(canvas.cursorPosition + 1);

        canvas.text = startText + endText;
        break;
      }

      const startText = canvas.text.slice(0, canvas.cursorPosition - 1);
      const endText = canvas.text.slice(canvas.cursorPosition);

      canvas.text = startText + endText;

      if (canvas.cursorPosition > 0)
        canvas.cursorPosition--;

      break;
    }

    default: {

      const char = canvas.font.get(
        key == "Enter" ? '\n' : key.toLowerCase() );

      if (!char)
        return;

      if (canvas.cursorPosition < canvas.text.length) {

        const startText = canvas.text.slice(0, canvas.cursorPosition);
        const endText = canvas.text.slice(canvas.cursorPosition);

        canvas.text = startText + char.hash + endText;
        canvas.cursorPosition++;
      }
      else {

        canvas.text+= char.hash;
        canvas.cursorPosition = canvas.text.length;
      }

      break;
    }
  }
}
