import { useContext } from "react";
import Image from "next/image";

import FolderIcon from '@mui/icons-material/Folder';

import { t_node } from "../../lib/node-lib";
import { useRequestStatic } from "../../com/Request/RequestStatic";

import { Gallery } from "../../com/Gallery/Gallery";
import { Card } from "../../com/Card";
import { Layout } from "../../com/Layout/Layout";
import { ThemeContext } from "../../com/theme";

import { container } from "../../static-database";

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
  const request = useRequestStatic({ container: container });

  console.log(request.parentNode.parentId);

  return (
    <Layout>
      <Container>
        <Card 
          icon={ <FolderIcon /> }
          title="Home"
          subTitle="Where to?">
          <img src="/banners/eccothedolphin.jpg" alt='' />
          <Gallery
            page={ request.page == -1 ? -1 : request.page + 1 }

            onPrevPage={ request.page > 0 ? () => request.onPrevPage() : null }
            onNextPage={ request.nextPage ? () => request.onNextPage() : null }

            galleryItems={ request.getGalleryItems() }
            onGoBack={ request.parentNode.parentId > 0 ? () => request.onGoBack() : null }
          />
        </Card>
      </Container>
    </Layout>
  )
}

export default Index;
