import { useContext, useState } from "react";

import { Menu } from "../../com/Menu/Menu";
import { Backdrop } from "../../com/Backdrop";
import { Card } from "../../com/Card";

import { RequestStaticContext } from "../../com/Request/RequestStatic"
import { ThemeContext } from "../../com/theme";

export const DialogMenu = ({ show, onClose }) => {

  const request = useContext(RequestStaticContext);

  const _onClose = () => {

    request.setParentHash("home");
    onClose();
  }

  return (
    <Backdrop show={ show }>
      <div className={`
        mx-0 my-0 sm:mx-auto sm:my-8
        w-full sm:w-[500px]
        flex-1 flex flex-col
        overflow-y-auto
        h-full`}>
      <Card
        title={ request.parentNode.name }
        onClose={ _onClose }
        className={`h-full`}>
      <Menu
        toolbarPosition="top"
        forceDetailsVisible={ true }
        page={ request.page == -1 ? -1 : request.page + 1 }

        onPrevPage={ request.page > 0 ? () => request.onPrevPage() : null }
        onNextPage={ request.nextPage ? () => request.onNextPage() : null }

        galleryItems={ request.getGalleryItems() }
        onGoBack={ request.parentNode.parentId > 0 ? () => request.onGoBack() : null }
        onClose={ _onClose }
      />
      </Card>
      </div>
    </Backdrop>
  );
}

export default DialogMenu;
