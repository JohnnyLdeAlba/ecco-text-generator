import { t_node_container } from "./lib/node-lib";

export const container = new t_node_container()
let id = 1000;

let node = null;

const RootId = ++id;

node = container.addNode("home", 0, RootId);
node.name = "Home";
node.description = "";
node.summary = "";
node.icon = "/icons/about.png";

node = container.addNode("about", RootId);
node.name = "About";
node.summary = "Dive into the world of Ecco the Dolphin! Founded on November 2019, we are website dedicated to Ecco the Dolphin. ";
node.icon = "/icons/about.png";

node = container.addNode("explore", RootId);
node.name = "Explore";
node.description = "Where do you want to go?";
node.summary = "Discover new possibilities and expand your horizons with our Explore page your gateway to a vast range of topics.";
node.icon = "/icons/explore.png";

node = container.addNode('', RootId);
node.name = "Ecco the Dolphin";
node.orderId = 1;
node.properties.placeholder = true;

const MyCollectionId = ++id;
node = container.addNode("myCollection", RootId, MyCollectionId);
node.name = "My Collection";
node.icon = "/icons/folder.png";

node = container.addNode("eccoPC", RootId);
node.name = "Ecco PC";
node.orderId = 2;
node.summary = "Get your game on with Ecco the Dolphin PC! Explore exciting content and resources to enhance your gameplay experience.";
node.icon = "/icons/folder.png";

node = container.addNode("ecco2", RootId);
node.name = "Ecco 2";
node.orderId = 2;
node.summary = "Take your gaming experience to the next level with Ecco 2: The Tides of Time!";
node.icon = "/icons/folder.png";
node.banner = "/eccoserv/ecco-2-the-tides-of-time/banner.jpg";

node = container.addNode("eccoJr", RootId);
node.name = "Ecco Jr.";
node.orderId = 2;
node.summary = "Introduce your little ones to the wonders of the ocean with Ecco Jr. a game that offers a fun and educational gaming experience for kids.";
node.icon = "/icons/folder.png";

const SettingsId = ++id;

node = container.addNode("settings", RootId, SettingsId);
node.name = "Settings";
node.summary = "Customize your experience with our Settings page! Personalize your preferences and adjust settings to suit your needs.";
node.icon = "/icons/settings.png";

node = container.addNode("theme", SettingsId);
node.name = "Theme";
node.icon = "/icons/settings.png";

node = container.addNode('', MyCollectionId);
node.name = "Sega Power Cuts";
node.icon = "/eccoserv/my-collection/icons/sega-power-cuts.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Sega Power Cuts E3";
node.icon = "/eccoserv/my-collection/icons/sega-power-cuts-e3-demo.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco Master System Silver";
node.icon = "/eccoserv/my-collection/icons/ecco-master-system-silver-ed-signed.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco PC Jack In The Box";
node.icon = "/eccoserv/my-collection/icons/ecco-pc-jack-in-the-box.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco 2 Dreamcast Blue";
node.icon = "/eccoserv/my-collection/icons/ecco-2-dreamcast-blue-bootleg.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Wacky Worlds";
node.icon = "/eccoserv/my-collection/icons/wacky-worlds.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco DOTF Dreamcast JP";
node.icon = "/eccoserv/my-collection/icons/ecco-dotf-dreamcast-jp.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco DOTF PS2 Sega3 Demo";
node.icon = "/eccoserv/my-collection/icons/ecco-dotf-ps2-sega3-demo.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco Songs of Time";
node.icon = "/eccoserv/my-collection/icons/ecco-songs-of-time.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco PC Comix Zone Blue";
node.icon = "/eccoserv/my-collection/icons/ecco-pc-comix-zone-blue.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco PC Tuneland";
node.icon = "/eccoserv/my-collection/icons/ecco-pc-tuneland-packard-bell.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco PC";
node.icon = "/eccoserv/my-collection/icons/ecco-pc-jewel-case.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco PC Comix Zone Red";
node.icon = "/eccoserv/my-collection/icons/ecco-pc-comix-zone-packard-bell.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco DOTF Dreamcast White";
node.icon = "/eccoserv/my-collection/icons/ecco-dotf-dreamcast-white.jpg";

node = container.addNode('', MyCollectionId);
node.name = "Ecco DOTF Dreamcast White";
node.icon = "/eccoserv/my-collection/icons/ecco-dotf-dreamcast-magazine.jpg";



const EccoId = ++id;

node = container.addNode("ecco", RootId, EccoId);
node.name = "Ecco the Dolphin";
node.orderId = 2;
node.description = "No fate but what we make for oursleves.";
node.summary = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";
node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";

const EccoSpritesId = ++id;

node = container.addNode("eccoSprites", EccoId, EccoSpritesId);
node.name = "Sprite Sheets";
node.description = "Ecco the Dolphin Sprite Sheets"
node.summary = ""
node.icon = "/icons/folder.png";
node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";

node = container.addNode('', EccoSpritesId);
node.name = "Alphabet";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/alphabet.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/alphabet.png";

node = container.addNode('', EccoSpritesId);
node.name = "Artic Spider";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/artic-spider.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/artic-spider.png";

node = container.addNode('', EccoSpritesId);
node.name = "Bubbles";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/bubbles.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/bubbles.png";

node = container.addNode('', EccoSpritesId);
node.name = "Crab";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/crab.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/crab.png";

node = container.addNode('', EccoSpritesId);
node.name = "Dolphin";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/dolphin.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/dolphin.png";

node = container.addNode('', EccoSpritesId);
node.name = "Dunkleosteus";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/dunkleosteus.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/dunkleosteus.png";

node = container.addNode('', EccoSpritesId);
node.name = "Fish";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/fish.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/fish.png";

node = container.addNode('', EccoSpritesId);
node.name = "Glyph";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/glyph.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/glyph.png";

node = container.addNode('', EccoSpritesId);
node.name = "Jellyfish";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/jellyfish.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/jellyfish.png";

node = container.addNode('', EccoSpritesId);
node.name = "Eel";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/leech.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/leech.png";

node = container.addNode('', EccoSpritesId);
node.name = "Leopard Shark";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/leopard-shark.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/leopard-shark.png";

node = container.addNode('', EccoSpritesId);
node.name = "Objects";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/objects-and-obstacles.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/objects-and-obstacles.png";

node = container.addNode('', EccoSpritesId);
node.name = "Octopus";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/octopus.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/octopus.png";

node = container.addNode('', EccoSpritesId);
node.name = "Orca";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/orca.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/orca.png";

node = container.addNode('', EccoSpritesId);
node.name = "Orthocone";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/orthocone.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/orthocone.png";

node = container.addNode('', EccoSpritesId);
node.name = "Health Bar";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/power-bar.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/power-bar.png";

node = container.addNode('', EccoSpritesId);
node.name = "Prehistoic Jellyfish";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/prehistoric-jellyfish.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/prehistoric-jellyfish.png";

node = container.addNode('', EccoSpritesId);
node.name = "Pteranodon";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/pteranodon.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/pteranodon.png";

node = container.addNode('', EccoSpritesId);
node.name = "Pufferfish";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/pufferfish.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/pufferfish.png";

node = container.addNode('', EccoSpritesId);
node.name = "Seahorse";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/seahorse.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/seahorse.png";

node = container.addNode('', EccoSpritesId);
node.name = "Shark";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/shark.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/seahorse.png";

node = container.addNode('', EccoSpritesId);
node.name = "Shells";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/shells.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/shells.png";

node = container.addNode('', EccoSpritesId);
node.name = "Sonar";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/sonar.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/sonar.png";

node = container.addNode('', EccoSpritesId);
node.name = "Sonar Rings";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/sonar-responce.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/sonar-reponce.png";

node = container.addNode('', EccoSpritesId);
node.name = "Spikes";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/spikes.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/spikes.png";

node = container.addNode('', EccoSpritesId);
node.name = "Splash";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/splash.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/splash.png";

node = container.addNode('', EccoSpritesId);
node.name = "Stars";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/stars.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/stars.png";

node = container.addNode('', EccoSpritesId);
node.name = "Stingray";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/stingray.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/stingray.png";

node = container.addNode('', EccoSpritesId);
node.name = "Thunder";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/thunder.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/thunder.png";

node = container.addNode('', EccoSpritesId);
node.name = "Trilobite";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/trilobite.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/trilobite.png";

node = container.addNode('', EccoSpritesId);
node.name = "Turtle";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/unused-turtle.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/unused-turtle.png";

node = container.addNode('', EccoSpritesId);
node.name = "Vortex Drone";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/vortex-drone.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/vortex-drone.png";

node = container.addNode('', EccoSpritesId);
node.name = "Vortex Queen";
node.icon = "/eccoserv/ecco-the-dolphin/sprite-sheets/icons/vortex-queen.png";
node.value = "/eccoserv/ecco-the-dolphin/sprite-sheets/vortex-queen.png";

export default container;
