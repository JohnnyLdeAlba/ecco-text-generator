import { createContext, useContext } from "react";

export class t_progma {

  registry;
  selectedItems;

  constructor() {
    this.registry = new Map();
    this.selectedItems = new Map();
  }

  set(type, set) {
    this.registry.set(type, set);
  }

  get(type) {
    return this.registry.get(type);
  }

  getSelectedItem(hash) {
    return this.selectedItems.get(hash);
  }

  addSelectedItem(galleryItem) {

    const _galleryItem = galleryItem.copy();
    this.selectedItems.set(_galleryItem.hash, _galleryItem);
  }

  removeSelectedItemsByParentId(parentId) {

    const selectedItems = new Map();

    this.selectedItems.forEach(selectedItem => {

      if (selectedItem.parentId == parentId)
        return;

      selectedItems.set(selectedItem.hash, selectedItem);
    });

    this.selectedItems = selectedItems;
  }
}

export const ProgmaContext = createContext(new t_progma());

export const useProgma = () => {

  const progma = useContext(ProgmaContext);
  return progma;
}
