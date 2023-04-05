let id = 1000;

export const MenuItems = {

  RootId: ++id,
  ThemesId: ++id,
  FontsId: ++id,
  BackgroundsId: ++id,
  EffectsId: ++id,
  ResolutionsId: ++id
}

export const Root = container => {

  let node = null;

  node = container.addNode("home", 0,
    MenuItems.RootId);
  node.name = "Menu";

  node = container.addNode("about",
    MenuItems.RootId);
  node.type = "aboutVisible";
  node.name = "About";
  node.icon = "/icons/about.png";
  node.orderId = 1;

  node = container.addNode("themes",
    MenuItems.RootId, MenuItems.ThemesId);
  node.name = "Themes";
  node.icon = "/icons/paint.png";
  node.orderId = 2;

  node = container.addNode("fonts",
    MenuItems.RootId, MenuItems.FontsId);
  node.name = "Fonts";
  node.icon = "/icons/fonts.png";
  node.orderId = 3;

  node = container.addNode("backgrounds",
    MenuItems.RootId, MenuItems.BackgroundsId);
  node.name = "Backgrounds";
  node.icon = "/icons/backgrounds.png";
  node.orderId = 4;

  node = container.addNode("effects",
    MenuItems.RootId, MenuItems.EffectsId);
  node.name = "Effects";
  node.icon = "/icons/wave.png";
  node.orderId = 5;

  node = container.addNode("resolutions",
  MenuItems.RootId, MenuItems.ResolutionsId);

  node.name = "Resolutions";
  node.icon = "/icons/resolutions.png";
  node.orderId = 6;

  return container;
}
