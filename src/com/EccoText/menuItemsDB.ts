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
node.icon = "/icons/fonts.png";
node.orderId = 1;

const BackgroundsId = ++id;
node = container.addNode("backgrounds", RootId, BackgroundsId);
node.name = "Backgrounds";
node.icon = "/icons/backgrounds.png";
node.orderId = 1;

const EffectsId = ++id;
node = container.addNode("effects", RootId, EffectsId);
node.name = "Effects";
node.icon = "/icons/wave.png";
node.orderId = 1;

const ResolutionsId = ++id;
node = container.addNode("resolutions", RootId, ResolutionsId);
node.name = "Resolutions";
node.icon = "/icons/resolutions.png";
node.orderId = 1;

// Keyboard Layouts

node = container.addNode('', RootId);
node.name = "Layouts";
node.orderId = 2;
node.icon = "/icons/wave.png";
node.properties.placeholder = true;

node = container.addNode("noneKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "None";
node.icon = "/icons/settings.png";
node.orderId = 5;

node = container.addNode("aniKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "Animations";
node.icon = "/icons/animation.png";
node.orderId = 6;

node = container.addNode("setKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "Settings";
node.icon = "/icons/settings.png";
node.orderId = 7;

node = container.addNode("engKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "English";
node.icon = "/icons/english.png";
node.orderId = 8;

node = container.addNode("numKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "Numbers";
node.icon = "/icons/numbers.png";
node.orderId = 9;

node = container.addNode("rusKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "Russian";
node.icon = "/icons/russian.png";
node.orderId = 10;
node.filters.set("homeBayFont", true);

node = container.addNode("intlKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "International";
node.icon = "/icons/international.png";
node.orderId = 11;
node.filters.set("homeBayFont", true);

node = container.addNode("hiraKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "Hiragana";
node.icon = "/icons/japanese.png";
node.orderId = 12;
node.filters.set("homeBayFont", true);

node = container.addNode("kataKeyboard", RootId);
node.type = "keyboardLayouts";
node.name = "Katakana";
node.icon = "/icons/japanese.png";
node.orderId = 13;
node.filters.set("homeBayFont", true);

// Backgrounds

node = container.addNode("crimsonBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Crimson";
node.icon = "/eccotext/icons/backgrounds/crimson.png";

node = container.addNode("deepBlueBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Deep Blue";
node.icon = "/eccotext/icons/backgrounds/deep-blue.png";

node = container.addNode("elvishBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Elvish";
node.icon = "/eccotext/icons/backgrounds/elvish.png";

node = container.addNode("homeBayBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Home Bay";
node.icon = "/eccotext/icons/backgrounds/home-bay.png";

node = container.addNode("jurassicBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Jurassic Beach";
node.icon = "/eccotext/icons/backgrounds/jurassic-beach.png";

node = container.addNode("mordorBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Mordor";
node.icon = "/eccotext/icons/backgrounds/mordor.png";

node = container.addNode("nightBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Night";
node.icon = "/eccotext/icons/backgrounds/night.png";

node = container.addNode("thanosBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Thanos";
node.icon = "/eccotext/icons/backgrounds/thanos.png";

node = container.addNode("theMachineBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "The Machine";
node.icon = "/eccotext/icons/backgrounds/the-machine.png";

node = container.addNode("lastFightBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "The Last Fight";
node.icon = "/eccotext/icons/backgrounds/the-last-fight.png";

node = container.addNode("vaporwaveBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Vaporwave";
node.icon = "/eccotext/icons/backgrounds/vaporwave.png";

node = container.addNode("volcanoBackground", BackgroundsId);
node.type = "backgrounds";
node.name = "Volcano";
node.icon = "/eccotext/icons/backgrounds/volcano.png";

// Effects

node = container.addNode("noEffect", EffectsId);
node.orderId = 1;
node.type = "effects";
node.name = "None";
node.icon = "/icons/settings.png";
node.value = 0;

node = container.addNode("rippleEffect", EffectsId);
node.orderId = 2;
node.type = "effects";
node.name = "Ripple";
node.icon = "/icons/settings.png";
node.value = -998;

node = container.addNode("doubleEffect", EffectsId);
node.orderId = 3;
node.type = "effects";
node.name = "Double Wave";
node.icon = "/icons/settings.png";
node.value = -999;

node = container.addNode("waveEffect", EffectsId);
node.orderId = 4;
node.type = "effects";
node.name = "Wave";
node.icon = "/icons/settings.png";
node.value = 1;

node = container.addNode("waveX2Effect", EffectsId);
node.orderId = 5;
node.type = "effects";
node.name = "Wave x2";
node.icon = "/icons/settings.png";
node.value = 2;

node = container.addNode("waveX4Effect", EffectsId);
node.orderId = 6;
node.type = "effects";
node.name = "Wave x4";
node.icon = "/icons/settings.png";
node.value = 4;

node = container.addNode("waveX8Effect", EffectsId);
node.orderId = 7;
node.type = "effects";
node.name = "Wave x8";
node.icon = "/icons/settings.png";
node.value = 6;

node = container.addNode("halEffect", EffectsId);
node.orderId = 8;
node.type = "effects";
node.name = "Hallucination";
node.icon = "/icons/settings.png";
node.value = -129;

node = container.addNode("flamesEffect", EffectsId);
node.orderId = 9;
node.type = "effects";
node.name = "Flames";
node.icon = "/icons/settings.png";
node.value = -130;

node = container.addNode("distEffect", EffectsId);
node.orderId = 10;
node.type = "effects";
node.name = "Distortion";
node.icon = "/icons/settings.png";
node.value = -132;

// Themes

node = container.addNode("crimsonTheme", ThemesId);
node.type = "themes";
node.name = "Crimson";
node.icon = "/eccotext/icons/crimson.jpg";

node = container.addNode("deepBlueTheme", ThemesId);
node.type = "themes";
node.name = "Deep Blue";
node.icon = "/eccotext/icons/deep-blue.png";

node = container.addNode("elvishTheme", ThemesId);
node.type = "themes";
node.name = "Elvish";
node.icon = "/eccotext/icons/elvish.jpg";

node = container.addNode("homeBayTheme", ThemesId);
node.type = "themes";
node.name = "Home Bay";
node.icon = "/eccotext/icons/home-bay.png";

node = container.addNode("jurassicTheme", ThemesId);
node.type = "themes";
node.name = "Jurassic Beach";
node.icon = "/eccotext/icons/jurassic-beach.png";

node = container.addNode("mordorTheme", ThemesId);
node.type = "themes";
node.name = "Mordor";
node.icon = "/eccotext/icons/mordor.jpg";

node = container.addNode("nightTheme", ThemesId);
node.type = "themes";
node.name = "Night";
node.icon = "/eccotext/icons/night.jpg";

node = container.addNode("thanosTheme", ThemesId);
node.type = "themes";
node.name = "Thanos";
node.icon = "/eccotext/icons/thanos.jpg";

node = container.addNode("lastFightTheme", ThemesId);
node.type = "themes";
node.name = "The Last Fight";
node.icon = "/eccotext/icons/the-last-fight.png";

node = container.addNode("theMachineTheme", ThemesId);
node.type = "themes";
node.name = "The Machine";
node.icon = "/eccotext/icons/the-machine.png";

node = container.addNode("vaporwaveTheme", ThemesId);
node.type = "themes";
node.name = "Vaporwave";
node.icon = "/eccotext/icons/vaporwave.png";

// Fonts

node = container.addNode("crimsonFont", FontsId);
node.type = "fonts";
node.name = "Crimson";
node.icon = "/eccotext/icons/fonts/crimson.png";

node = container.addNode("deepBlueFont", FontsId);
node.type = "fonts";
node.name = "Deep Blue";
node.icon = "/eccotext/icons/fonts/deep-blue.png";

node = container.addNode("elvishFont", FontsId);
node.type = "fonts";
node.name = "Elvish";
node.icon = "/eccotext/icons/fonts/elvish.png";

node = container.addNode("homeBayFont", FontsId);
node.type = "fonts";
node.name = "Home Bay";
node.icon = "/eccotext/icons/fonts/home-bay.png";

node = container.addNode("jurassicFont", FontsId);
node.type = "fonts";
node.name = "Jurassic Beach";
node.icon = "/eccotext/icons/fonts/jurassic.png";

node = container.addNode("mordorFont", FontsId);
node.type = "fonts";
node.name = "Mordor";
node.icon = "/eccotext/icons/fonts/mordor.png";

node = container.addNode("nightFont", FontsId);
node.type = "fonts";
node.name = "Night";
node.icon = "/eccotext/icons/fonts/night.png";

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

node = container.addNode("lastFightFont", FontsId);
node.type = "fonts";
node.name = "The Last Fight";
node.icon = "/eccotext/icons/fonts/the-last-fight.png";

node = container.addNode("theMachineFont", FontsId);
node.type = "fonts";
node.name = "The Machine";
node.icon = "/eccotext/icons/fonts/the-machine.png";

node = container.addNode("vaporwaveFont", FontsId);
node.type = "fonts";
node.name = "Vaporwave";
node.icon = "/eccotext/icons/fonts/vaporwave.png";

node = container.addNode("volcanoFont", FontsId);
node.type = "fonts";
node.name = "Volcano";
node.icon = "/eccotext/icons/fonts/volcano.png";

// Resolutions

node = container.addNode("resUltraHigh", ResolutionsId);
node.orderId = 1;
node.type = "resolutions";
node.name = "Ultra High";
node.icon = "/icons/settings.png";

node = container.addNode("resHigh", ResolutionsId);
node.orderId = 2;
node.type = "resolutions";
node.name = "High";
node.icon = "/icons/settings.png";

node = container.addNode("resMedium", ResolutionsId);
node.orderId = 3;
node.type = "resolutions";
node.name = "Medium";
node.icon = "/icons/settings.png";

node = container.addNode("resLow", ResolutionsId);
node.orderId = 4;
node.type = "resolutions";
node.name = "Low";
node.icon = "/icons/settings.png";

export default container;
