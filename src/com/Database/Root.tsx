let id = 1000;

export const RootDir = {

  RootId: ++id,
  MyCollectionId: ++id,
  SettingsId: ++id
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

  node = container.addNode('',
    RootDir.RootId);
  node.name = "Ecco the Dolphin";
  node.orderId = 1;
  node.properties.placeholder = true;

  node = container.addNode("myCollection",
    RootDir.RootId, RootDir.MyCollectionId);
  node.name = "My Collection";
  node.icon = "/icons/folder.png";

  node = container.addNode("eccoPC",
    RootDir.RootId);
  node.name = "Ecco PC";
  node.orderId = 2;
  node.summary = "Get your game on with Ecco the Dolphin PC! Explore exciting content and resources to enhance your gameplay experience.";
  node.icon = "/icons/folder.png";

  node = container.addNode("ecco2",
    RootDir.RootId);
  node.name = "Ecco 2";
  node.orderId = 2;
  node.summary = "Take your gaming experience to the next level with Ecco 2: The Tides of Time!";
  node.icon = "/icons/folder.png";
  node.banner = "/eccoserv/ecco-2-the-tides-of-time/banner.jpg";

  node = container.addNode("eccoJr",
    RootDir.RootId);
  node.name = "Ecco Jr.";
  node.orderId = 2;
  node.summary = "Introduce your little ones to the wonders of the ocean with Ecco Jr. a game that offers a fun and educational gaming experience for kids.";
  node.icon = "/icons/folder.png";

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
