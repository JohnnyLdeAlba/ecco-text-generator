import { createContext, useContext, useState } from "react";
import { t_hook } from "./lib/hook";

export class t_clipboard extends t_hook {

  constructor() {
    super();
  }

  _clipboardCopy(value) {

    const textInput = document.createElement("input");
    
    textInput.type = "text";
    textInput.value = value;
    textInput.focus();

    document.execCommand("paste");
    textInput.remove();
  }

  _clipboardPaste() {

    const textInput = document.createElement("input");

    textInput.type = "text";
    textInput.focus();
    textInput.select();

    document.execCommand("paste");
    const value = textInput.value;

    textInput.remove();
    return value;
  }

  clipboardCopy(value) {

    if (navigator.clipboard)
      navigator.clipboard.writeText(value);
    else this._clipboardCopy(value);

    this.commit();
  }

  async clipboardPaste() {

    let value = '';

    if (navigator.clipboard)
      value = await navigator.clipboard.readText();
    else
      value = this._clipboardPaste();

    this.commit();
    return value;
  }

  set(params) {

    const { refresh } = params;
    this.refresh = refresh;
  }
}

export const ClipboardContext = createContext(new t_clipboard());

export const useClipboard = () => {

  const [ serial, setSerial ] = useState(0);
  const clipboard = useContext(ClipboardContext);

  clipboard.set({
    refresh: () => setSerial(serial + 1)
  });

  return clipboard;
}
