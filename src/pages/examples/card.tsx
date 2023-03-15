import { useContext } from "react";

import FolderIcon from '@mui/icons-material/Folder';

import { Gallery } from "../../com/Gallery/Gallery";
import { Card } from "../../com/Card";
import { Layout } from "../../com/Layout/Layout";
import { ThemeContext } from "../../com/theme";

export const Container = ({ children }) => {

  return (
    <div className={`
      mx-0 xl:mx-auto 
      w-full 3xl:w-[1000px]
      px-0 sm:px-4 3xl:px-0
      py-0 sm:py-4
      flex flex-col
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
          title="title"
          subTitle="subTitle"
        >
          <Gallery />
        </Card>
      </Container>
    </Layout>
  )
}

export default Index;
