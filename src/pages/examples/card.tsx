import { useContext } from "react";
import Image from "next/image";

import FolderIcon from '@mui/icons-material/Folder';

import { t_node } from "../../lib/node-lib";

import { Gallery } from "../../com/Gallery/Gallery";
import { Card } from "../../com/Card";
import { Layout } from "../../com/Layout/Layout";
import { ThemeContext } from "../../com/theme";

const items = [];

let node = new t_node();

node = new t_node();
node.name = "About";
node.details = "Dive into the world of Ecco the Dolphin! Founded on November 2019, we are website dedicated to Ecco the Dolphin. ";
node.icon = "/icons/about.png";

items.push(node);

node = new t_node();
node.name = "Explore";
node.details = "Discover new possibilities and expand your horizons with our Explore page your gateway to a vast range of topics.";
node.icon = "/icons/explore.png";

items.push(node);

node = new t_node();
node.name = "Settings";
node.details = "Customize your experience with our Settings page! Personalize your preferences and adjust settings to suit your needs.";
node.icon = "/icons/settings.png";

items.push(node);

node = new t_node();
node.name = "Ecco the Dolphin";
node.details = "Dive into the depths of the ocean and explore the wonders of the sea with Ecco the Dolphin."
node.icon = "/icons/folder.png";

items.push(node);

node = new t_node();
node.name = "Ecco PC";
node.details = "Get your game on with Ecco the Dolphin PC! Explore exciting content and resources to enhance your gameplay experience.";
node.icon = "/icons/folder.png";

items.push(node);

node = new t_node();
node.name = "Ecco 2";
node.details = "Take your gaming experience to the next level with Ecco 2: The Tides of Time!";
node.icon = "/icons/folder.png";

items.push(node);

node = new t_node();
node.name = "Ecco Jr.";
node.details = "Introduce your little ones to the wonders of the ocean with Ecco Jr. a game that offers a fun and educational gaming experience for kids.";
node.icon = "/icons/folder.png";

items.push(node);

export const Container = ({ children }) => {

  return (
    <div className={`
      mx-0 xl:mx-auto 
      w-full 3xl:w-[1000px]
      px-0 sm:px-4 3xl:px-0
      py-0 sm:py-4
      flex-1 flex flex-col
      overflow-y-auto sm:overflow-y-visible
    `}>
      { children }
    </div>
  );
}

export const Index = () => {

  const theme = useContext(ThemeContext);

  return (
    <Layout>
      <Container>
        <Card 
          icon={ <FolderIcon /> }
          title="Home"
          subTitle="Where to?">
          <img src="/banners/eccothedolphin.jpg" alt='' />
          <Gallery galleryItems={ items } />
        </Card>
      </Container>
    </Layout>
  )
}

export default Index;
