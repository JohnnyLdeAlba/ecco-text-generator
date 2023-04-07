import { useEffect, createContext, useContext, useState } from "react";

import FolderIcon from '@mui/icons-material/Folder';

import { useRequestStatic } from "../../com/Request/RequestStatic";

import { ProgmaContext } from "../../com/Progma";
import { Gallery } from "../../com/Gallery/Gallery";

import { DownloadDialog } from "../../com/Gallery/DownloadDialog";

import { Card } from "../../com/Card";
import { t_hook } from "../../com/lib/hook";
import { Layout } from "../../com/Layout/Layout";
import { ThemeContext } from "../../com/theme";

import { Database }  from "../../com/Database";

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

class t_gallery extends t_hook {

  downloadVisible;

  constructor() {

    super();

    this.state = "init";
    this.downloadVisible = false;
  }

  showDownload(visible) {

    if (!visible)
      this.downloadURL = '';

    this.downloadVisible = visible;
    this.commit();
  }

  set(params) {

    const { progma, refresh } = params;

    this.progma = progma;
    this.refresh = refresh;
  }

  process() {

    switch (this.state) {

      case "init": {

        this.progma.set("download", galleryItem => {

          this.downloadURL = galleryItem.value;
          this.showDownload(true);
        });

        this.state = "ready";
        this.commit();

        break;
      }
    }
  }
}

const GalleryContext = createContext(new t_gallery());

export const useGallery = () => {

  const progma = useContext(ProgmaContext);
  const gallery = useContext(GalleryContext);
  const [ serial, setSerial ] = useState(0);

  gallery.set({
    progma: progma,
    refresh: () => setSerial(serial + 1)
  });

  useEffect(() => {
    gallery.process();
  });

  return gallery;
}

export const Index = () => {

  const progma = useContext(ProgmaContext);
  const theme = useContext(ThemeContext);
  const gallery = useGallery();

  const request = useRequestStatic({
    container: Database,
    syncEnabled: false,
    parentHash: "ecco2LevelMaps" 
  });

  return (<>

    <DownloadDialog
      show={ gallery.downloadVisible }
      imageURL={ gallery.downloadURL }
      onClose={ () => gallery.showDownload(false) } />

    <Layout>
      <Container>
        <Card 
          icon={ <FolderIcon /> }
          title={ request.parentNode.name }
          subTitle={ request.parentNode.description }>
          { request.parentNode.banner ? <img src={ request.parentNode.banner } alt='' /> : null }
          <Gallery
            page={ request.page == -1 ? -1 : request.page + 1 }

            onPrevPage={ request.page > 0 ? () => request.onPrevPage() : null }
            onNextPage={ request.nextPage ? () => request.onNextPage() : null }

            galleryItems={ request.getGalleryItems() }
            onGoBack={ request.parentNode.parentId > 0 ? () => request.onGoBack() : null }
            onToggleHidden={ () => {} }
          />
        </Card>
      </Container>
    </Layout>
  </>)
}

export default Index;
