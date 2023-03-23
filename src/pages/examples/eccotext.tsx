import { createContext, useEffect, useContext, useState, useRef } from "react";

import { ThemeContext } from "../../com/theme";
import FolderIcon from '@mui/icons-material/Folder';

import { Gallery } from "../../com/MiniGallery/Gallery";
import { Card } from "../../com/Card";
import { Layout } from "../../com/Layout/Layout";
import { useCanvas, Canvas } from "../../com/EccoText/Canvas";

import { useRequestStatic } from "../../com/Request/RequestStatic";
import { ProgmaContext, useProgma } from "../../com/Progma";

import { container } from "../../com/EccoText/menuItemsDB";
import { Toolbar } from "../../com/EccoText/Toolbar";

export const Container = ({ children }) => {

  return (
    <div className={`
      mx-0 xl:mx-auto 
      w-full 2xl:w-[900px]
      px-0 sm:px-4 2xl:px-0
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
  const progma = useProgma();
  const canvas = useCanvas({ progma: progma });

  const request = useRequestStatic({
    progma: progma,
    container: container,
    parentHash: "home" 
  });


  return (
    <Layout>
      <Container>

      <div className={`flex flex-col overflow-y-auto`}>
        <div className={`flex flex-row overflow-y-auto`}>

          <div className={`flex-1 flex flex-col`}>
            <Canvas />
          </div>

          <div className={`hidden md:flex flex-col overflow-y-auto pl-4 w-[240px] sm:h-[450px] 2xl:h-[500px]`}>

            <div className={`flex-1 flex flex-col overflow-y-auto rounded-lg h-full ${ theme.card }`}>
              <div className={`flex flex-col px-3 py-2 font-medium text-sm ${ theme.cardHeader }`}>
                { request.parentNode.name }
              </div>
              <div className={`flex-1 flex flex-col overflow-y-auto h-full ${ theme.scrollbars }`}>
                <Gallery
                  forceDetailsVisible={ true }
                  page={ request.page == -1 ? -1 : request.page + 1 }

                  onPrevPage={ request.page > 0 ? () => request.onPrevPage() : null }
                  onNextPage={ request.nextPage ? () => request.onNextPage() : null }

                  galleryItems={ request.getGalleryItems() }
                  onGoBack={ request.parentNode.parentId > 0 ? () => request.onGoBack() : null }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
          <Toolbar />
      </Container>
    </Layout>
  )
}

export default Index;
