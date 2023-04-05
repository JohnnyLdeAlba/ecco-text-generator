import { MenuItems } from "./Root";

export const Fonts = container => {

  let node = null;

  node = container.addNode("crimsonFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Crimson";
  node.icon = "/eccotext/icons/fonts/crimson.png";

  node = container.addNode("deepBlueFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Deep Blue";
  node.icon = "/eccotext/icons/fonts/deep-blue.png";

  node = container.addNode("elvishFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Elvish";
  node.icon = "/eccotext/icons/fonts/elvish.png";

  node = container.addNode("homeBayFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Home Bay";
  node.icon = "/eccotext/icons/fonts/home-bay.png";

  node = container.addNode("jurassicFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Jurassic Beach";
  node.icon = "/eccotext/icons/fonts/jurassic.png";

  node = container.addNode("mordorFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Mordor";
  node.icon = "/eccotext/icons/fonts/mordor.png";

  node = container.addNode("nightFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Night";
  node.icon = "/eccotext/icons/fonts/night.png";

  node = container.addNode("systemFont",
    MenuItems.FontsId);
  node.orderId = 1;
  node.type = "fonts";
  node.name = "System";
  node.icon = "/eccotext/icons/fonts/system.png";

  node = container.addNode("systemFontRed",
    MenuItems.FontsId);
  node.orderId = 1;
  node.type = "fonts";
  node.name = "System Red";
  node.icon = "/eccotext/icons/fonts/system-red.png";

  node = container.addNode("systemFontYellow",
    MenuItems.FontsId);
  node.orderId = 1;
  node.type = "fonts";
  node.name = "System Yellow";
  node.icon = "/eccotext/icons/fonts/system-yellow.png";

  node = container.addNode("lastFightFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "The Last Fight";
  node.icon = "/eccotext/icons/fonts/the-last-fight.png";

  node = container.addNode("theMachineFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "The Machine";
  node.icon = "/eccotext/icons/fonts/the-machine.png";

  node = container.addNode("vaporwaveFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Vaporwave";
  node.icon = "/eccotext/icons/fonts/vaporwave.png";

  node = container.addNode("volcanoFont",
    MenuItems.FontsId);
  node.type = "fonts";
  node.name = "Volcano";
  node.icon = "/eccotext/icons/fonts/volcano.png";

  return container;
}
