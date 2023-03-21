import { t_node_container } from "../../lib/node-lib";

export const container = new t_node_container()
let id = 1000;

let node = null;

const RootId = ++id;

node = container.addNode("home", 0, RootId);
node.name = "Ecco Text Generator";

node = container.addNode("themes", RootId);
node.name = "Themes";
node.icon = "/icons/paint.png";
node.orderId = 1;

node = container.addNode("fonts", RootId);
node.name = "Fonts";
node.description = "Where do you want to go?";
node.icon = "/icons/fonts.png";
node.orderId = 1;

node = container.addNode("backgrounds", RootId);
node.name = "Backgrounds";
node.icon = "/icons/backgrounds.png";
node.orderId = 1;

node = container.addNode("effects", RootId);
node.name = "Effects";
node.icon = "/icons/wave.png";
node.orderId = 1;

node = container.addNode('', RootId);
node.name = "Resolution";
node.orderId = 2;
node.placeholder = true;

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

export default container;
