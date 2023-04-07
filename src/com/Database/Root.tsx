let id = 1000;

export const RootDir = {

  RootId: ++id,
  MyCollectionId: ++id,
  SettingsId: ++id,

  EccoId: ++id,
  EccoPCId: ++id,
  Ecco2Id: ++id,

  EccoSpritesId: ++id,
  EccoLevelMapsId: ++id,
  EccoBackgroundsId: ++id,
  EccoSonarMapsId: ++id,

  EccoPCSpritesId: ++id,
  EccoPCLevelMapsId: ++id,
  EccoPCBackgroundsId: ++id,

  Ecco2SpritesId: ++id,
  Ecco2LevelMapsId: ++id,
  Ecco2BackgroundsId: ++id,
  Ecco2ObjectMapsId: ++id,
  Ecco2SonarMapsId: ++id,

  EccoJr: ++id,
  EccoJrLevelMapsId: ++id,
  EccoJrBackgroundsId: ++id,
}

export const Root = container => {

  let node = null;

  node = container.addNode("home", 0,
    RootDir.RootId);
  node.name = "Home";
  node.description = "";
  node.summary = "";
  node.icon = "/icons/about.png";

  node = container.addNode("about",
    RootDir.RootId);
  node.name = "About";
  node.summary = "Dive into the world of Ecco the Dolphin! Founded on November 2019, we are website dedicated to Ecco the Dolphin. ";
  node.icon = "/icons/about.png";

  node = container.addNode("explore",
    RootDir.RootId);
  node.name = "Explore";
  node.description = "Where do you want to go?";
  node.summary = "Discover new possibilities and expand your horizons with our Explore page your gateway to a vast range of topics.";
  node.icon = "/icons/explore.png";

  node = container.addNode("myCollection",
    RootDir.RootId, RootDir.MyCollectionId);
  node.name = "My Collection";
  node.icon = "/icons/folder.png";

  node = container.addNode("eccoPC",
    RootDir.RootId, RootDir.EccoPCId);
  node.name = "Ecco the Dolphin PC";
  node.orderId = 2;
  node.summary = "Get your game on with Ecco the Dolphin PC! Explore exciting content and resources to enhance your gameplay experience.";
  node.icon = "/icons/folder.png";

  node = container.addNode("ecco",
    RootDir.RootId, RootDir.EccoId);
  node.name = "Ecco the Dolphin";
  node.orderId = 2;
  node.description = "No fate but what we make for oursleves.";
  node.summary = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";

  node = container.addNode("ecco2",
    RootDir.RootId, RootDir.Ecco2Id);
  node.name = "Ecco 2: The Tides of Time";
  node.orderId = 2;
  node.summary = "Take your gaming experience to the next level with Ecco 2: The Tides of Time!";
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-2-the-tides-of-time/banner.jpg";

  node = container.addNode("eccoSprites", 
    RootDir.EccoId, RootDir.EccoSpritesId);
  node.name = "Sprite Sheets";
  node.description = "Ecco Sprite Sheets"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";

  node = container.addNode("eccoLevelMaps", 
    RootDir.EccoId, RootDir.EccoLevelMapsId);
  node.name = "Level Maps";
  node.description = "Ecco Level Maps"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";

  node = container.addNode("eccoSonarMaps", 
    RootDir.EccoId, RootDir.EccoSonarMapsId);
  node.name = "Sonar Maps";
  node.description = "Ecco Sonar Maps"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";



  node = container.addNode("eccoPCSprites", 
    RootDir.EccoPCId, RootDir.EccoPCSpritesId);
  node.name = "Sprite Sheets";
  node.description = "Ecco PC Sprite Sheets"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";

  node = container.addNode("eccoPCLevelMaps", 
    RootDir.EccoPCId, RootDir.EccoPCLevelMapsId);
  node.name = "Level Maps";
  node.description = "Ecco PC Level Maps"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";

  node = container.addNode("ecco2Sprites", 
    RootDir.Ecco2Id, RootDir.Ecco2SpritesId);
  node.name = "Sprite Sheets";
  node.description = "Ecco 2 Sprite Sheets"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-2-the-tides-of-time/banner.jpg";

  node = container.addNode("ecco2LevelMaps", 
    RootDir.Ecco2Id, RootDir.Ecco2LevelMapsId);
  node.name = "Level Maps";
  node.description = "Ecco 2 Level Maps"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-2-the-tides-of-time/banner.jpg";

  node = container.addNode("ecco2ObjectMaps", 
    RootDir.Ecco2Id, RootDir.Ecco2ObjectMapsId);
  node.name = "Object Maps";
  node.description = "Ecco 2 Object Maps"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-2-the-tides-of-time/banner.jpg";

  node = container.addNode("ecco2SonarMaps", 
    RootDir.Ecco2Id, RootDir.Ecco2SonarMapsId);
  node.name = "Sonar Maps";
  node.description = "Ecco 2 Sonar Maps"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-2-the-tides-of-time/banner.jpg";



  node = container.addNode("eccoJr",
    RootDir.RootId, RootDir.EccoJrId);
  node.name = "Ecco Jr.";
  node.orderId = 2;
  node.summary = "Introduce your little ones to the wonders of the ocean with Ecco Jr. a game that offers a fun and educational gaming experience for kids.";
  node.icon = "/icons/folder.png";

  node = container.addNode("eccoJrLevelMaps", 
    RootDir.EccoJrId, RootDir.EccoJrLevelMapsId);
  node.name = "Level Maps";
  node.description = "Ecco Jr Level Maps"
  node.summary = ""
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-the-dolphin/banner.jpg";



  node = container.addNode("settings",
    RootDir.RootId, RootDir.SettingsId);
  node.name = "Settings";
  node.summary = "Customize your experience with our Settings page! Personalize your preferences and adjust settings to suit your needs.";
  node.icon = "/icons/settings.png";

  node = container.addNode("theme",
    RootDir.SettingsId);
  node.name = "Theme";
  node.icon = "/icons/settings.png";

  return container;
}
