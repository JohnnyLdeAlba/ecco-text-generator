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

    for (const selectedItems of this.selectedItems.values()) {

      const selectedItem = selectedItems.get(hash);
      if (selectedItem)
        return selectedItem;
    }

    return null;
  }

  addSelectedItem(parentHash, hash) {

    let selectedItems = this.selectedItems.get(parentHash);
    if (!selectedItems) {

      selectedItems = new Map();
      selectedItems.set(hash, true);

      this.selectedItems.set(parentHash, selectedItems);
      return;
    }

    selectedItems.set(hash, true);
  }

  removeAllSelectedItems(parentHash) {
    this.selectedItems.set(parentHash, new Map());
  }
}

export const ProgmaContext = createContext(new t_progma());

export const useProgma = () => {

  const progma = useContext(ProgmaContext);
  return progma;
}
