import { useState } from "react";

import { t_hook } from "../lib/hook";
import { t_node, t_node_container } from "../../lib/node-lib";

const config = {
  itemsPerPage: 24
};

class t_request_static extends t_hook {

  container;
  parentId;
  parentNode;
  page;
  nextPage;
  totalPages;

  constructor() {

    super();

    this.serial = 1000;
    this.container = new t_node_container();
    this.parentId = 1001; // Fix this  
    this.parentNode = new t_node();
    this.page = 0;
    this.nextPage = false;
  }

  setParentId(parentId) {

    if (parentId < 0)
      return;

    const parentNode = this.container.getNode(parentId);
    if (!parentNode)
      return;

    this.parentId = parentId;
    this.parentNode = parentNode;
  }

  setPage(page) {
   
    if (page < 0)
      return;

    this.page = page;
  }

  setNode(galleryItem) {

    this.setParentId(galleryItem.id);
    this.setPage(0);
    this.getGalleryItems();
 
    this.refresh();
  }

  getAllNodes(page = -1) {

    if (page == -1)
      page = this.page;

    const array = this.container.array.filter(
      node => node.parentId == this.parentId);

    const startIndex = page * config.itemsPerPage;

    return array.slice(
      startIndex,
      startIndex + config.itemsPerPage);
  } 

  getNextPage() {

    const array = this.getAllNodes(this.page + 1);
    this.nextPage = array.length > 0;
  }

  getGalleryItems() {

    const nodes = this.getAllNodes();
    this.getNextPage();

    nodes.forEach(node => {

      node.uniqueId = ++this.serial;

      if (!node.onClick)
        node.onClick = () => this.setNode(node);
    });

    return nodes;
  }

  onGoBack() {

    this.setParentId(this.parentNode.parentId);
    this.refresh();
  }

  onPrevPage() {

    this.setPage(this.page - 1);
    this.refresh();
  }

  onNextPage() {

    this.setPage(this.page + 1);
    this.refresh();
  }

  set(params) {

    const {
      refresh,
      container
    } = params;

    this.refresh = refresh;

    if (container != this.container) {

      this.container = container;
      this.refresh();
    }
  }
}

// fix this!
const requestStatic = new t_request_static();

export const useRequestStatic = ({
  container = null,
}) => {

  const [ serial, setSerial ] = useState(0);

  requestStatic.set({
    refresh: () => setSerial(serial + 1),
    container: container
  });

  return requestStatic;
}

export default useRequestStatic;
