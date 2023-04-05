import { MenuItems } from "./Root";

export const Themes = container => {

  let node = null;

  node = container.addNode("crimsonTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Crimson";
  node.icon = "/eccotext/icons/crimson.jpg";

  node = container.addNode("deepBlueTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Deep Blue";
  node.icon = "/eccotext/icons/deep-blue.png";

  node = container.addNode("elvishTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Elvish";
  node.icon = "/eccotext/icons/elvish.jpg";

  node = container.addNode("homeBayTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Home Bay";
  node.icon = "/eccotext/icons/home-bay.png";

  node = container.addNode("jurassicTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Jurassic Beach";
  node.icon = "/eccotext/icons/jurassic-beach.png";

  node = container.addNode("mordorTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Mordor";
  node.icon = "/eccotext/icons/mordor.jpg";

  node = container.addNode("nightTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Night";
  node.icon = "/eccotext/icons/night.jpg";

  node = container.addNode("thanosTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Thanos";
  node.icon = "/eccotext/icons/thanos.jpg";

  node = container.addNode("lastFightTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "The Last Fight";
  node.icon = "/eccotext/icons/the-last-fight.png";

  node = container.addNode("theMachineTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "The Machine";
  node.icon = "/eccotext/icons/the-machine.png";

  node = container.addNode("vaporwaveTheme", MenuItems.ThemesId);
  node.type = "themes";
  node.name = "Vaporwave";
  node.icon = "/eccotext/icons/vaporwave.png";

  return container;
}
