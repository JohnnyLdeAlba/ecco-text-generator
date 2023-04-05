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
        ${ properties.disabled ? "disabled" : "button" }
        ${ status.selected ? theme.menu.itemSelected : theme.menu.item }
      `}>
        <img
          src={ galleryItem.icon } alt=''
          className={`w-[30px] mr-2 rounded-md`} />
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
      ${ theme.menu.scrollbars }
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
      mb-[1px]
      px-3 py-2
      font-medium text-sm
      `}>
      { galleryItem.name }
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

export const Menu = ({
  disabled = false,
  galleryItems = [],
  page = 1,
  disableToolbar = false,
  toolbarPosition = '',
  onGoBack,
  onUnselect,
  onRemoveSelected,
  onToggleHidden,
  onNextPage,
  onPrevPage,
  onClose

}) => {

  const theme = useContext(ThemeContext);

  galleryItems.forEach(galleryItem => {

    if (disabled) {

      galleryItem.onClick = null;
      return;
    }

    if (galleryItem.type == '')
      return;

    const onClick = galleryItem.onClick;
    galleryItem.onClick = galleryItem => {

      onClick(galleryItem);
      if (onClose)
        onClose();
    }

  });

  return (
    <div className={`flex-1 flex flex-col h-full`}>

      { toolbarPosition != "top" || disableToolbar ? '' :
        <Toolbar

          page={ page }
          onPrevPage={ onPrevPage }
          onNextPage={ onNextPage }
          onGoBack={ onGoBack }

          onToggleHidden={ onToggleHidden }        
        /> }

      { galleryItems.length == 0 ? <GalleryDisabled /> : '' }
      { galleryItems.length > 0 ? <DetailGroup galleryItems={ galleryItems } /> : '' }

      { toolbarPosition == "top" || disableToolbar ? '' :
        <Toolbar

          page={ page }
          onPrevPage={ onPrevPage }
          onNextPage={ onNextPage }
          onGoBack={ onGoBack }
          onToggleHidden={ onToggleHidden }        
        /> }

    </div>
  );
}

export default Menu;
