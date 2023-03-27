import { t_node_container } from "../../lib/node-lib";

export const container = new t_node_container()
let id = 1000;

let node = null;

const RootId = ++id;

node = container.addNode("home", 0, RootId);
node.name = "Menu";

const ThemesId = ++id;
node = container.addNode("themes", RootId, ThemesId);
node.name = "Themes";
node.icon = "/icons/paint.png";
node.orderId = 1;

const FontsId = ++id;
node = container.addNode("fonts", RootId, FontsId);
node.name = "Fonts";
node.description = "Where do you want to go?";
node.icon = "/icons/fonts.png";
node.orderId = 1;

const BackgroundsId = ++id;
node = container.addNode("backgrounds", RootId, BackgroundsId);
node.name = "Backgrounds";
node.icon = "/icons/backgrounds.png";
node.orderId = 1;

node = container.addNode("effects", RootId);
node.name = "Effects";
node.icon = "/icons/wave.png";
node.orderId = 1;

node = container.addNode("resolutions", RootId);
node.name = "Resolutions";
node.icon = "/icons/wave.png";
node.orderId = 1;

node = container.addNode('', RootId);
node.name = "Layouts";
node.orderId = 2;
node.icon = "/icons/wave.png";
node.properties.placeholder = true;

node = container.addNode("aniKeyboard", RootId);
node.name = "Animations";
node.icon = "/icons/settings.png";
node.orderId = 4;

node = container.addNode("setKeyboard", RootId);
node.name = "Settings";
node.icon = "/icons/settings.png";
node.orderId = 3;

node = container.addNode("engKeyboard", RootId);
node.type = "keyboardLayout";
node.name = "English";
node.icon = "/icons/settings.png";
node.orderId = 4;

node = container.addNode("numKeyboard", RootId);
node.type = "keyboardLayout";
node.name = "Numbers";
node.icon = "/icons/settings.png";
node.orderId = 4;

node = container.addNode("rusKeyboard", RootId);
node.type = "keyboardLayout";
node.name = "Russian";
node.icon = "/icons/settings.png";
node.orderId = 7;

node = container.addNode("intlKeyboard", RootId);
node.type = "keyboardLayout";
node.name = "International";
node.icon = "/icons/settings.png";
node.orderId = 6;

node = container.addNode("hiraKeyboard", RootId);
node.type = "keyboardLayout";
node.name = "Hiragana";
node.icon = "/icons/settings.png";
node.orderId = 8;

node = container.addNode("kataKeyboard", RootId);
node.type = "keyboardLayout";
node.name = "Katakana";
node.icon = "/icons/settings.png";
node.orderId = 8;



/*
node = container.addNode('', RootId);
node.name = "Resolution";
node.orderId = 2;
node.properties.placeholder = true;

node = container.addNode("ultraHigh", RootId);
node.name = "640x480 Ultra High";
node.icon = "/icons/settings.png";
node.orderId = 3;

node = container.addNode("high", RootId);
node.name = "640x480 High";
node.icon = "/icons/settings.png";
node.orderId = 3;

node = container.addNode("mediumHigh", RootId);
node.name = "320x240 Medium High";
node.icon = "/icons/settings.png";
node.orderId = 3;

node = container.addNode("medium", RootId);
node.name = "320x240 Medium";
node.icon = "/icons/settings.png";
node.orderId = 3;

node = container.addNode("low", RootId);
node.name = "320x240 Low";
node.icon = "/icons/settings.png";
node.orderId = 3;

node = container.addNode("low1", RootId);
node.name = "320x240 Low";
node.icon = "/icons/settings.png";
node.orderId = 3;
*/

// Backgrounds

node = container.addNode("jurassicBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Jurassic Beach";
node.icon = "/eccotext/icons/backgrounds/jurassic-beach.png";

node = container.addNode("vaporwaveBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Vaporwave";
node.icon = "/eccotext/icons/backgrounds/vaporwave.png";

node = container.addNode("homeBayBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Home Bay";
node.icon = "/eccotext/icons/backgrounds/home-bay.png";

node = container.addNode("thanosBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Thanos";
node.icon = "/eccotext/icons/backgrounds/thanos.png";

node = container.addNode("nightBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Night";
node.icon = "/eccotext/icons/backgrounds/night.png";

node = container.addNode("theMachineBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "The Machine";
node.icon = "/eccotext/icons/backgrounds/the-machine.png";

node = container.addNode("lastFightBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "The Last Fight";
node.icon = "/eccotext/icons/backgrounds/the-last-fight.png";

node = container.addNode("volcanoBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Volcano";
node.icon = "/eccotext/icons/backgrounds/volcano.png";

// Themes

node = container.addNode("jurassicTheme", ThemesId);
node.type = "themes";
node.name = "Jurassic Beach";
node.icon = "/eccotext/icons/jurassic-beach.png";

node = container.addNode("lastFightTheme", ThemesId);
node.type = "themes";
node.name = "The Last Fight";
node.icon = "/eccotext/icons/the-last-fight.png";

node = container.addNode("theMachineTheme", ThemesId);
node.type = "themes";
node.name = "The Machine";
node.icon = "/eccotext/icons/the-machine.png";

node = container.addNode("homeBayTheme", ThemesId);
node.type = "themes";
node.name = "Home Bay";
node.icon = "/eccotext/icons/home-bay.png";

node = container.addNode("thanosTheme", ThemesId);
node.type = "themes";
node.name = "Thanos";
node.icon = "/eccotext/icons/thanos.jpg";

node = container.addNode("vaporwaveTheme", ThemesId);
node.type = "themes";
node.name = "Vaporwave";
node.icon = "/eccotext/icons/vaporwave.jpg";

// Fonts

node = container.addNode("homeBayFont", FontsId);
node.type = "fonts";
node.name = "Home Bay";
node.icon = "/eccotext/icons/fonts/home-bay.png";

node = container.addNode("vaporwaveFont", FontsId);
node.type = "fonts";
node.name = "Vaporwave";
node.icon = "/eccotext/icons/fonts/vaporwave.png";

node = container.addNode("jurassicFont", FontsId);
node.type = "fonts";
node.name = "Jurassic Beach";
node.icon = "/eccotext/icons/fonts/vaporwave.png";

node = container.addNode("volcanoFont", FontsId);
node.type = "fonts";
node.name = "Volcano";
node.icon = "/eccotext/icons/fonts/vaporwave.png";



node = container.addNode("systemFont", FontsId);
node.orderId = 1;
node.type = "fonts";
node.name = "System";
node.icon = "/eccotext/icons/fonts/system.png";

node = container.addNode("systemFontRed", FontsId);
node.orderId = 1;
node.type = "fonts";
node.name = "System Red";
node.icon = "/eccotext/icons/fonts/system-red.png";

node = container.addNode("systemFontYellow", FontsId);
node.orderId = 1;
node.type = "fonts";
node.name = "System Yellow";
node.icon = "/eccotext/icons/fonts/system-yellow.png";



export default container;
