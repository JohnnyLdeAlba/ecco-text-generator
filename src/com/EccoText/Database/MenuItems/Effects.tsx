import { MenuItems } from "./Root";

export const Effects = container => {

  let node = null;

  node = container.addNode("noEffect",
    MenuItems.EffectsId);
  node.orderId = 1;
  node.type = "effects";
  node.name = "None";
  node.icon = "/icons/settings.png";
  node.value = 0;

  node = container.addNode("rippleEffect",
    MenuItems.EffectsId);
  node.orderId = 2;
  node.type = "effects";
  node.name = "Ripple";
  node.icon = "/icons/settings.png";
  node.value = -998;

  node = container.addNode("doubleEffect",
    MenuItems.EffectsId);
  node.orderId = 3;
  node.type = "effects";
  node.name = "Double Wave";
  node.icon = "/icons/settings.png";
  node.value = -999;

  node = container.addNode("waveEffect",
    MenuItems.EffectsId);
  node.orderId = 4;
  node.type = "effects";
  node.name = "Wave";
  node.icon = "/icons/settings.png";
  node.value = 1;

  node = container.addNode("waveX2Effect",
    MenuItems.EffectsId);
  node.orderId = 5;
  node.type = "effects";
  node.name = "Wave x2";
  node.icon = "/icons/settings.png";
  node.value = 2;

  node = container.addNode("waveX4Effect",
    MenuItems.EffectsId);
  node.orderId = 6;
  node.type = "effects";
  node.name = "Wave x4";
  node.icon = "/icons/settings.png";
  node.value = 4;

  node = container.addNode("waveX6Effect",
    MenuItems.EffectsId);
  node.orderId = 7;
  node.type = "effects";
  node.name = "Wave x6";
  node.icon = "/icons/settings.png";
  node.value = 6;

  node = container.addNode("waveX8Effect",
    MenuItems.EffectsId);
  node.orderId = 8;
  node.type = "effects";
  node.name = "Wave x8";
  node.icon = "/icons/settings.png";
  node.value = 8;

  node = container.addNode("halEffect",
    MenuItems.EffectsId);
  node.orderId = 9;
  node.type = "effects";
  node.name = "Hallucination";
  node.icon = "/icons/settings.png";
  node.value = 129;

  node = container.addNode("flamesEffect",
    MenuItems.EffectsId);
  node.orderId = 10;
  node.type = "effects";
  node.name = "Flames";
  node.icon = "/icons/settings.png";
  node.value = 130;

  node = container.addNode("distEffect",
    MenuItems.EffectsId);
  node.orderId = 11;
  node.type = "effects";
  node.name = "Distortion";
  node.icon = "/icons/settings.png";
  node.value = 132;

  return container;
}
