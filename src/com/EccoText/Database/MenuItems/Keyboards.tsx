import { MenuItems } from "./Root";

export const Keyboards = container => {

  let node = null;

  node = container.addNode('',
    MenuItems.RootId);
  node.name = "Layouts";
  node.orderId = 11;
  node.properties.placeholder = true;

  node = container.addNode("noneKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "None";
  node.icon = "/icons/hide.png";
  node.orderId = 12;

  node = container.addNode("aniKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "Animations";
  node.icon = "/icons/animation.png";
  node.orderId = 13;

  node = container.addNode("setKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "Settings";
  node.icon = "/icons/settings.png";
  node.orderId = 14;

  node = container.addNode("engKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "English";
  node.icon = "/icons/english.png";
  node.orderId = 15;

  node = container.addNode("numKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "Numbers";
  node.icon = "/icons/numbers.png";
  node.orderId = 16;

  node = container.addNode("rusKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "Cyrillic";
  node.icon = "/icons/russian.png";
  node.orderId = 17;
  node.filters.set("homeBayFont", true);

  node = container.addNode("intlKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "International";
  node.icon = "/icons/international.png";
  node.orderId = 18;
  node.filters.set("homeBayFont", true);

  node = container.addNode("hiraKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "Hiragana";
  node.icon = "/icons/japanese.png";
  node.orderId = 19;
  node.filters.set("homeBayFont", true);

  node = container.addNode("kataKeyboard",
    MenuItems.RootId);
  node.type = "keyboardLayouts";
  node.name = "Katakana";
  node.icon = "/icons/japanese.png";
  node.orderId = 20;
  node.filters.set("homeBayFont", true);

  return container;
}
