import { useEffect, createContext, useContext, useState } from "react";
import { t_hook } from "../lib/hook";

class t_ecco_text extends t_hook {

  font;
  keyboardLayout;
  menuVisible;

  constructor() {

    super();

    this.state = "init";

    this.font = null;
    this.keyboardLayout = '';
    this.menuVisible = false;
  }

  set(params) {

    const { refresh } = params;
    this.refresh = refresh;
  }

  initialize(params) {

    const { progma } = params;

    progma.set("keyboardLayouts",
      galleryItem => this.onKBLayoutChange(galleryItem));

    this.progma = progma;
    this.setKBLayout("engKeyboard");

    this.state = "ready";
    this.commit();
  }

  process(params) {

    switch (this.state) {

      case "init": {
        this.initialize(params);
        break;
      }
    }
  }

  onFontChange(font) {

    if (font == this.font)
      return;
    
    if (this.font == null || font.type != this.font.type)
      this.setKBLayout("engKeyboard");

    this.font = font;
    this.commit();
  }

  showMenu() {

    this.menuVisible = true;
    this.commit();
  }

  onMenuClose() {

    this.menuVisible = false;
    this.commit();
  }

  setKBLayout(keyboardLayout) {

    if (this.keyboardLayout == keyboardLayout)
      return;

    this.progma.removeAllSelectedItems("keyboardLayouts")
    this.progma.addSelectedItem("keyboardLayouts", keyboardLayout);    

    this.keyboardLayout = keyboardLayout;
    this.commit();
  }

  onKBLayoutChange(galleryItem) {
    this.setKBLayout(galleryItem.hash);
  }
}

export const EccoTextContext = createContext(new t_ecco_text());

export const useEccoText = ({ progma }) => {

  const eccoText = useContext(EccoTextContext);
  const [ serial, setSerial ] = useState(0);

  eccoText.set({ refresh: () => setSerial(serial + 1) });

  useEffect(() => {
    eccoText.process({ progma: progma })
  });

  return eccoText;
}
