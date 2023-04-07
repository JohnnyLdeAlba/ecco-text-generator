import { createContext, useContext, useEffect, useState } from "react";

import { t_hook } from "../lib/hook";
import { t_node, t_node_container, sort_name, sort_order_id } from "../../lib/node-lib";
import Filters from "../../lib/filters";
import { ProgmaContext } from "../Progma"; 

const config = {
  requestItemsPerPage: 100,
  itemsPerPage: 24
};

class t_request_static extends t_hook {

  container;
  parentId;
  parentHash;
  parentNode;

  nodePages;
  page;
  nextPage;
  totalPages;

  tokens;
  filters;

  constructor() {

    super();

    this.state = "init";
    this.serial = 1000;
    this.container = new t_node_container();
    this.parentId = 0; 
    this.parentHash = '';
    this.parentNode = new t_node();

    this.nodePages = new Map();
    this.nodeCache = new Map();

    this.page = 0;
    this.nextPage = false;

    this.tokens = new Map();
    this.filters = [];

    this.filters.push(Filters.filter_nodes);
    this.filters.push(Filters.sort_name);
    this.filters.push(Filters.sort_order_id);
  }

  saveNodeCache(parentId = -1) {

    if (parentId < 0)
      parentId = this.parentId;

    this.nodeCache.set(parentId, this.nodePages);
  }

  restoreNodeCache(parentId = -1) {

    this.saveNodeCache();

    if (parentId < 0)
      parentId = this.parentId;

    const nodePages = this.nodeCache.get(parentId);
    if (!nodePages) {

      this.nodePages = new Map();
      return;
    }

    this.nodePages = nodePages;
  }

  setParentId(parentId) {

    if (parentId < 0)
      return;

    const parentNode = this.container.getNode(parentId);
    if (!parentNode)
      return;

    this.restoreNodeCache(parentId);

    this.parentId = parentId;
    this.parentNode = parentNode;
    this.page = 0;

    this.sendRequest();
    this.commit();
  }

  setParentHash(parentHash) {

    if (parentHash == '')
      return;

    const parentNode = this.container.getNodeByHash(parentHash);
    if (!parentNode)
      return;

    this.restoreNodeCache(parentNode.id);

    this.parentId = parentNode.id;
    this.parentHash = parentHash;
    this.parentNode = parentNode;

    this.sendRequest();
  }

  setPage(page) {
   
    if (page < 0)
      return;

    this.page = page;
    this.sendRequest();
  }

  requestAllNodes(page = -1) {

    let array = this.container.array;

    array = array.filter(
      node => node.parentId == this.parentId);

    array = sort_name(array);
    array = sort_order_id(array);

    const startIndex = page * config.requestItemsPerPage;

    return array.slice(
      startIndex,
      startIndex + config.requestItemsPerPage);
  } 

  filterAllNodes(page = -1) {

    if (page == -1)
      page = this.page;

    const nodes = [];

    this.nodePages.forEach(nodeCache =>
      nodeCache.forEach(node => nodes.push(node))
    );

    const startIndex = page * config.itemsPerPage;

    return nodes.slice(
      startIndex,
      startIndex + config.itemsPerPage);
  }

  processFilters(nodes, tokenNodes) {

    nodes;

    this.filters.forEach(filter =>
      nodes = filter(nodes, tokenNodes));

    return nodes;
  }

  getAllNodes(page = -1) {

    page == -1 ? this.page : page;
    
    let reqPage = 0;
    let reqNodes = [];
    let nodes = [];

    while (nodes.length < config.itemsPerPage) {

      reqNodes = this.nodePages.has(reqPage);
      if (!reqNodes) {

        reqNodes = this.requestAllNodes(reqPage);
        if (reqNodes.length == 0)
          break;

        this.nodePages.set(reqPage, reqNodes);
      }

      if (reqNodes.length == 0)
        break;

      nodes = this.filterAllNodes(page);
      reqPage++;
    }
 
    return nodes;
  }

  getNextPage() {

    const array = this.getAllNodes(this.page + 1);
    this.nextPage = array.length > 0;
  }

  setNode(galleryItem) {

    this.setParentId(galleryItem.id);
    this.setPage(0);
 
    this.commit();
  }

  getGalleryItems() {

    let nodes = this.filterAllNodes();
    nodes = this.processFilters(nodes, this.tokens);

    const _nodes = [];

    nodes.forEach(node => {

      if (node.hasFiltered())
        return;

      node = node.copy();
      node.uniqueId = ++this.serial;

      const selectedItem = this.progma
        .getSelectedItem(node.hash);

      if (selectedItem)
        node.status.selected = true;

      const onClick = this.progma.get(node.type);
      if (!node.onClick) {

        if (onClick)
          node.onClick = () => onClick(node);
        else
          node.onClick = () => this.setNode(node);
      }

      _nodes.push(node);
    });

    return _nodes;
  }

  onGoBack() {
    this.setParentId(this.parentNode.parentId);
  }

  onPrevPage() {

    this.setPage(this.page - 1);
    this.commit();
  }

  onNextPage() {

    this.setPage(this.page + 1);
    this.commit();
  }

  onReady() {

    this.pushUpdate();
    this.update();
  }

  send() {

    const nodes = this.getAllNodes();
    this.getNextPage();

    this.nodes = nodes;
  }

  set(params) {

    const { progma, refresh, syncEnabled, tokens } = params;

    this.progma = progma;
    this.refresh = refresh;
    this.syncEnabled = syncEnabled;
    this.tokens = tokens ? tokens : new Map();
  }

  process(params) {

    const {
      container,
      filterType,
      parentId,
      parentHash,
      page
    } = params;

    switch (this.state) {

      case "init": {

        if (container == this.container &&
          filterType == this.filterType &&
          parentId == this.parentId &&
          parentHash == this.parentHash &&
          page == this.page)
            return;

        this.disableAutoCommit();

        if (this.container != null)
          this.container = container;

        this.setParentId(parentId);
        this.setParentHash(parentHash);
        this.setPage(page);

        this.commit();

        // Create sync function.
        if (this.syncEnabled) {

          const onSync = this.progma.get("onSync");
          if (onSync)
            onSync("requestStatic", () => this.onReady());
        }
        else {

          this.pushUpdate();
          this.update();
        }

        break;
      }
    }
  }
}

export const RequestStaticContext = createContext(new t_request_static());

export const useRequestStatic = ({
  container = null,
  tokens = null,
  syncEnabled = true,
  filterType = '',
  parentId = 0,
  parentHash = '',
  page = 0
}) => {

  const progma = useContext(ProgmaContext);
  const requestStatic = useContext(RequestStaticContext);
  const [ serial, setSerial ] = useState(0);

  requestStatic.set({
    progma: progma,
    refresh: () => setSerial(serial + 1),
    syncEnabled: syncEnabled,
    tokens: tokens
  });

  useEffect(() => {

    requestStatic.process({

      container: container,
      filterType: filterType,
      parentId: parentId,
      parentHash: parentHash,
      page: page,
    });

  });

  return requestStatic;
}

export default useRequestStatic;
