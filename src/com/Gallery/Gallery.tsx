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
    <div className={`flex flex-col p-2`}>
      <div className={`
        flex flex-col
        rounded-lg
        ${ status.filteredPriority ? "bg-[#1e3a8a]" : '' }
        ${ status.filteredAttribute ? "bg-[#a855f7]" : '' }
        `}
        onClick={ galleryItem.onClick }>
      <div className={`
        text-xs md:text-sm lg:text-xs
        flex flex-row items-start 
        overflow-hidden
        rounded-lg
        ${ theme.galleryItem }
        ${ properties.disabled ? "disabled" : "button" }
        ${ status.selected ? theme.galleryItemSelected : '' }
      `}>
        <Image
          src={ galleryItem.icon }
          width={ 300 } height={ 300 } alt=''
          className={`w-[60px] 2xl:w-[80px]`} />
        <div className={`flex-1 flex flex-col p-2`}>
          <div className={`
            text-sm sm:text-base 2xl:text-lg
            font-medium

            overflow-hidden whitespace-nowrap
            text-ellipsis
          `}>
            { galleryItem.name }
          </div>
          <div className={`text-sm sm:text-base`}>
            { galleryItem.details }
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
      p-2
      ${ theme.scrollbars }
    `}>

      { galleryItems.map(galleryItem =>
          <DetailItem galleryItem={ galleryItem } />) }

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
      w-1/2 xsm:w-1/3 sm:w-1/4 2xl:w-1/6
      flex flex-col p-2`}>
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
        rounded-lg
        font-medium
        ${ theme.galleryItem }
        ${ properties.disabled ? "disabled" : "button" }
        ${ status.selected ? theme.galleryItemSelected : '' }
      `}>
        <Image
          src={ galleryItem.icon }
          width={ 300 } height={ 300 } alt=''
          className={`w-full`} />
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
      flex
      flex-row flex-wrap
      items-start content-start
      overflow-y-auto
      p-2
      ${ theme.scrollbars }
    `}>

      { galleryItems.map(galleryItem =>
          <GalleryItem galleryItem={ galleryItem } />) }

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
  onGoBack = true,
  onUnselect,
  onRemoveSelected,
  onToggleHidden = true,
  onNextPage = true,
  onPrevPage = true

}) => {

  const [ detailsVisible, showDetails  ] = useState(false);

  return (
    <div className={`flex-1 flex flex-col`}>

      { disableToolbar ? null :
        <Toolbar
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
