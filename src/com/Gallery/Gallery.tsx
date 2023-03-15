import { useContext } from "react";
import Image from "next/image";

import { t_node } from "../../lib/node-lib";
import { Toolbar } from "./Toolbar"; 

import { ThemeContext } from "../../com/theme";

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
      No Items To Show
    </div>
  );
}

export const Gallery = ({
  _galleryItems = [],
  page = 1,
  disableToolbar = false,
  onGoBack = true,
  onUnselect = true,
  onRemoveSelected = true,
  onToggleHidden = true,
  onNextPage = true,
  onPrevPage = true

}) => {

  const galleryItems = [];

  for (let index = 0; index < 24; index++) {

    const galleryItem = new t_node();

    galleryItem.icon = "/jurassic-beach.png";
    galleryItem.name = "Title";

    galleryItems.push(galleryItem);
  }

  return (
    <div className={`flex flex-col overflow-y-auto`}>
      { disableToolbar ? null : <Toolbar /> }
      { galleryItems.length == 0 ? <GalleryDisabled /> : null }
      { galleryItems.length > 0 ? <GalleryGroup galleryItems={ galleryItems } /> : null }
    </div>
  );
}

export default Gallery;
