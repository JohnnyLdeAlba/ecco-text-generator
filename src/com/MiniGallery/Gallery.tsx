import { useContext, useState } from "react";
import Image from "next/image";

import { t_node } from "../../lib/node-lib";
import { Toolbar } from "./Toolbar"; 

import { ThemeContext } from "../../com/theme";

export const DetailItem = ({ galleryItem }) => {

  galleryItem = galleryItem ? galleryItem : new t_node();

  const properties = galleryItem.properties;
  const status = galleryItem.status;
  
  const theme = useContext(ThemeContext);

  return (
    <div className={`flex flex-col pb-[1px]`}>
      <div className={`
        flex flex-col
        ${ status.filteredPriority ? "bg-[#1e3a8a]" : '' }
        ${ status.filteredAttribute ? "bg-[#a855f7]" : '' }
        `}
        onClick={ galleryItem.onClick }>
      <div className={`
        flex flex-row items-start 
        overflow-hidden p-2
        ${ theme.galleryItem }
        ${ properties.disabled ? "disabled" : "button" }
        ${ status.selected ? theme.galleryItemSelected : '' }
      `}>
        <Image
          src={ galleryItem.icon }
          width={ 300 } height={ 300 } alt=''
          className={`w-[30px] mr-2 `} />
        <div className={`flex-1 flex flex-col`}>
          <div className={`
            text-sm
            font-medium

            overflow-hidden whitespace-nowrap
            text-ellipsis
          `}>
            { galleryItem.name }
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export const DetailGroup = ({
  galleryItems
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex-1 flex flex-col
      overflow-y-auto pt-[1px]
      ${  theme.cardHeader }
      ${ theme.miniGallery.scrollbars }
    `}>

      { galleryItems.map(galleryItem => {

        if (galleryItem.placeholder)
          return <GalleryHR key={ galleryItem.uniqueId } galleryItem={ galleryItem} />;
        else
          return <DetailItem key={ galleryItem.uniqueId } galleryItem={ galleryItem } />;

      }) }

    </div>
  );
}

export const GalleryHR = ({ galleryItem }) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      mb-[1px]
      px-3 py-2
      font-medium text-sm
      `}>
      { galleryItem.name }
    </div>
  );
}

export const GalleryItem = ({ galleryItem }) => {

  galleryItem = galleryItem ? galleryItem : new t_node();

  const properties = galleryItem.properties;
  const status = galleryItem.status;
  
  const theme = useContext(ThemeContext);

  return (
    <div className={`
      w-1/2
      flex flex-col p-4`}>
      <div className={`
        flex flex-col
        rounded-lg
        ${ status.filteredPriority ? "bg-[#1e3a8a]" : '' }
        ${ status.filteredAttribute ? "bg-[#a855f7]" : '' }
        `}
        onClick={ galleryItem.onClick }>
      <div className={`
        text-xs md:text-sm lg:text-xs
        flex flex-col
        overflow-hidden
        font-medium
        ${ properties.disabled ? "disabled" : "button" }
        ${ status.selected ? theme.galleryItemSelected : '' }
      `}>
        <Image
          src={ galleryItem.icon }
          width={ 300 } height={ 300 } alt=''
          className={`
            w-full
            ${ status.filteredPriority || status.filteredAttribute ? '' : "rounded-lg" }
          `} />
        <div className={`
          p-2
          overflow-hidden whitespace-nowrap
          text-ellipsis text-center
        `}>
          { galleryItem.name }
        </div>
      </div>
      </div>
    </div>
  );
}

export const GalleryGroup = ({
  galleryItems
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex-1 flex
      flex-row flex-wrap
      items-start content-start
      overflow-y-auto
      h-full
      ${ theme.miniGallery.scrollbars }
    `}>

      { galleryItems.map(galleryItem => {

          if (galleryItem.placeholder)
            return <GalleryHR key={ galleryItem.uniqueId } galleryItem={ galleryItem} />;
          else
            return <GalleryItem key={ galleryItem.uniqueId } galleryItem={ galleryItem } />;
      }) }

    </div>
  );
}

export const GalleryDisabled = ({
  galleryItems
}) => {

  const theme = useContext(ThemeContext);

  return (
    <div className={`
      flex-1 flex
      flex-col
      items-center justify-center
      p-2 h-full
      font-medium
      text-sm
    `}>
      No items to show
    </div>
  );
}

export const Gallery = ({
  galleryItems = [],
  page = 1,
  disableToolbar = false,
  disableShowDetails = false,
  forceDetailsVisible = false,
  onGoBack,
  onUnselect,
  onRemoveSelected,
  onToggleHidden,
  onNextPage,
  onPrevPage

}) => {

  const theme = useContext(ThemeContext);
  const [ detailsVisible, showDetails ] = useState(false);

  return (
    <div className={`flex-1 flex flex-col h-full`}>

      { galleryItems.length == 0 ? <GalleryDisabled /> : null }
      { !forceDetailsVisible && !detailsVisible && galleryItems.length > 0 ? <GalleryGroup galleryItems={ galleryItems } /> : null }
      { (forceDetailsVisible || detailsVisible) && galleryItems.length > 0 ? <DetailGroup galleryItems={ galleryItems } /> : null }

      { disableToolbar ? null :
        <Toolbar

          page={ page }
          onPrevPage={ onPrevPage }
          onNextPage={ onNextPage }

          showDetailsClosed={ detailsVisible }

          onGoBack={ onGoBack }

          onShowDetails={ !disableShowDetails && !forceDetailsVisible ?
            () => showDetails(!detailsVisible) : null }

          onToggleHidden={ onToggleHidden }        
        /> }

    </div>
  );
}

export default Gallery;
