import { t_node_container } from "./lib/node-lib";

export const container = new t_node_container()
let id = 1000;

let node = null;

const RootId = ++id;

node = container.addNode("home", 0, RootId);
node.name = "Home";
node.details = "";
node.icon = "/icons/about.png";

node = container.addNode("about", RootId);
node.name = "About";
node.details = "Dive into the world of Ecco the Dolphin! Founded on November 2019, we are website dedicated to Ecco the Dolphin. ";
node.icon = "/icons/about.png";

node = container.addNode("explore", RootId);
node.name = "Explore";
node.details = "Discover new possibilities and expand your horizons with our Explore page your gateway to a vast range of topics.";
node.icon = "/icons/explore.png";

const SettingsId = ++id;

node = container.addNode("settings", RootId, SettingsId);
node.orderId = -1;
node.name = "Settings";
node.details = "Customize your experience with our Settings page! Personalize your preferences and adjust settings to suit your needs.";
node.icon = "/icons/settings.png";

node = container.addNode("ecco", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco1", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco21", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco3", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco4", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco5", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco6", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco7", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco8", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("ecco9", SettingsId);
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

node = container.addNode("eccoPC", RootId);
node.name = "Ecco PC";
node.details = "Get your game on with Ecco the Dolphin PC! Explore exciting content and resources to enhance your gameplay experience.";
node.icon = "/icons/folder.png";

node = container.addNode("ecco2", RootId);
node.name = "Ecco 2";
node.details = "Take your gaming experience to the next level with Ecco 2: The Tides of Time!";
node.icon = "/icons/folder.png";

node = container.addNode("eccoJr", RootId);
node.name = "Ecco Jr.";
node.details = "Introduce your little ones to the wonders of the ocean with Ecco Jr. a game that offers a fun and educational gaming experience for kids.";
node.icon = "/icons/folder.png";


export default container;
