import { useContext } from "react";

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
node.icon = "/icons/about.png";

items.push(node);

node = new t_node();
node.name = "Explore";
node.icon = "/icons/explore.png";

items.push(node);

node = new t_node();
node.name = "Settings";
node.icon = "/icons/settings.png";

items.push(node);

node = new t_node();
node.name = "Ecco the Dolphin";
node.icon = "/icons/folder.png";

items.push(node);

node = new t_node();
node.name = "Ecco PC";
node.icon = "/icons/folder.png";

items.push(node);

node = new t_node();
node.name = "Ecco 2";
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
      overflow-y-auto
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
          subTitle="Where to?"
        >
          <Gallery galleryItems={ items } />
        </Card>
      </Container>
    </Layout>
  )
}

export default Index;
