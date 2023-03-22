import { createContext, useContext } from "react";

export class t_progma {

  registry;

  constructor() {
    this.registry = new Map();
  }

  set(type, set) {
    this.registry.set(type, set);
  }

  get(type) {
    return this.registry.get(type);
  }
}

export const ProgmaContext = createContext(new t_progma());

export const useProgma = () => {

  const progma = useContext(ProgmaContext);
  return progma;
}
