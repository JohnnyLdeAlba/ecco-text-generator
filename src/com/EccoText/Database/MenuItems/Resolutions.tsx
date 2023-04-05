import { MenuItems } from "./Root";

export const Resolutions = container => {

  let node = null;

  node = container.addNode("resUltraHigh",
    MenuItems.ResolutionsId);
  node.orderId = 1;
  node.type = "resolutions";
  node.name = "Ultra High";
  node.icon = "/icons/settings.png";

  node = container.addNode("resHigh",
    MenuItems.ResolutionsId);
  node.orderId = 2;
  node.type = "resolutions";
  node.name = "High";
  node.icon = "/icons/settings.png";

  node = container.addNode("resMedium",
    MenuItems.ResolutionsId);
  node.orderId = 3;
  node.type = "resolutions";
  node.name = "Medium";
  node.icon = "/icons/settings.png";

  node = container.addNode("resLow",
    MenuItems.ResolutionsId);
  node.orderId = 4;
  node.type = "resolutions";
  node.name = "Low";
  node.icon = "/icons/settings.png";

  return container;
}
