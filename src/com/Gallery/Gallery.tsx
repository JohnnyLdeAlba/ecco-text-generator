import { useContext, useState } from "react";

import { t_node } from "../../lib/node-lib";
import { Toolbar } from "./Toolbar"; 

import { ThemeContext } from "../../com/theme";

export const DetailItem = ({ galleryItem }) => {

  galleryItem = galleryItem ? galleryItem : new t_node();

  const properties = galleryItem.properties;
  const status = galleryItem.status;
  
  const theme = useContext(ThemeContext);

  return (
    <div className={`flex flex-col mb-[1px]`}>
      <div className={`
        flex flex-col
        ${ status.filteredPriority ? "bg-[#1e3a8a]" : '' }
        ${ status.filteredAttribute ? "bg-[#a855f7]" : '' }
        `}
        onClick={ galleryItem.onClick }>
      <div className={`
        text-xs md:text-sm lg:text-xs
        flex flex-row items-start 
        p-3
        overflow-hidden
        ${ theme.galleryItem }
        ${ properties.disabled ? "disabled" : "button" }
        ${ status.selected ? theme.galleryItemSelected : '' }
      `}>
        <img
          src={ galleryItem.icon }
          alt=''
          className={`w-[40px] mr-3`} />
        <div className={`flex-1 flex flex-col`}>
          <div className={`
            text-sm sm:text-base
            font-medium

            overflow-hidden whitespace-nowrap
            text-ellipsis
          `}>
            { galleryItem.name }
          </div>
          <div className={`text-sm sm:text-base`}>
            { galleryItem.summary }
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
      flex flex-col
      overflow-y-auto
      ${ theme.scrollbars }
    `}>

      { galleryItems.map(galleryItem => {

        if (galleryItem.properties.placeholder)
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
      mx-4 my-2
      px-4 pb-2
      w-full
      border-b-2
      font-medium text-lg
      ${ theme.hr }
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
      w-1/3 md:w-1/5
      lg:w-1/3 xl:w-1/5
      p-2 
      flex flex-col`}>
      <div className={`
        flex flex-col
        rounded-lg
        ${ status.filteredPriority ? "bg-[#1e3a8a]" : '' }
        ${ status.filteredAttribute ? "bg-[#a855f7]" : '' }
        `}
        onClick={ galleryItem.onClick }>
      <div className={`
        text-xs sm:text-sm
        flex flex-col
        overflow-hidden
        rounded-lg
        font-medium
        ${ theme.galleryItem }
        ${ properties.disabled ? "disabled" : "button" }
        ${ status.selected ? theme.galleryItemSelected : '' }
      `}>
        <img
          src={ galleryItem.icon } alt=''
          className={`w-full`} />
        <div className={`
          flex flex-col
          items-center justify-center 
          p-2 h-[3.5em]
          text-center
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
      flex
      flex-row flex-wrap
      items-start content-start
      overflow-y-auto
      p-2
      ${ theme.scrollbars }
    `}>

      { galleryItems.map(galleryItem => {

          if (galleryItem.properties.placeholder)
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

  const [ detailsVisible, showDetails ] = useState(false);

  return (
    <div className={`flex-1 flex flex-col`}>

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

      { galleryItems.length == 0 ? <GalleryDisabled /> : null }
      { !forceDetailsVisible && !detailsVisible && galleryItems.length > 0 ? <GalleryGroup galleryItems={ galleryItems } /> : null }
      { (forceDetailsVisible || detailsVisible) && galleryItems.length > 0 ? <DetailGroup galleryItems={ galleryItems } /> : null }
    </div>
  );
}

export default Gallery;
