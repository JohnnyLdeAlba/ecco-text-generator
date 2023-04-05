import { MenuItems } from "./Root";

export const Backgrounds = container => {

  let node = null;

  node = container.addNode("crimsonBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Crimson";
  node.icon = "/eccotext/icons/backgrounds/crimson.png";

  node = container.addNode("deepBlueBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Deep Blue";
  node.icon = "/eccotext/icons/backgrounds/deep-blue.png";

  node = container.addNode("elvishBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Elvish";
  node.icon = "/eccotext/icons/backgrounds/elvish.png";

  node = container.addNode("homeBayBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Home Bay";
  node.icon = "/eccotext/icons/backgrounds/home-bay.png";

  node = container.addNode("jurassicBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Jurassic Beach";
  node.icon = "/eccotext/icons/backgrounds/jurassic-beach.png";

  node = container.addNode("mordorBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Mordor";
  node.icon = "/eccotext/icons/backgrounds/mordor.png";

  node = container.addNode("nightBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Night";
  node.icon = "/eccotext/icons/backgrounds/night.png";

  node = container.addNode("thanosBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Thanos";
  node.icon = "/eccotext/icons/backgrounds/thanos.png";

  node = container.addNode("theMachineBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "The Machine";
  node.icon = "/eccotext/icons/backgrounds/the-machine.png";

  node = container.addNode("lastFightBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "The Last Fight";
  node.icon = "/eccotext/icons/backgrounds/the-last-fight.png";

  node = container.addNode("vaporwaveBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Vaporwave";
  node.icon = "/eccotext/icons/backgrounds/vaporwave.png";

  node = container.addNode("volcanoBackground",
    MenuItems.BackgroundsId);
  node.type = "backgrounds";
  node.name = "Volcano";
  node.icon = "/eccotext/icons/backgrounds/volcano.png";

  return container;
}
