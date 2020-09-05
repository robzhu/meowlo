import React, { useState, useContext } from "react";
import { FullListDetailsFragment } from "../graphql/generated";
import { getAllLists } from "../graphql";

export class Store {
  static fromHooks(init: Partial<Store>): Store {
    const [store, setStore] = useState(new Store(init));
    store._setStore = setStore;
    return store;
  }

  constructor(init: Partial<Store>) {
    Object.assign(this, init);
  }

  lists: FullListDetailsFragment[] = [];
  private _setStore: React.Dispatch<React.SetStateAction<Store>> = () => {};
  private refresh() {
    this._setStore(new Store(this));
  }

  async refetch() {
    const data = (await getAllLists()).data;
    if (data) {
      this.lists = data.allLists;
    }
    this.refresh();
  }
}

export const StoreContext = React.createContext<Store>(new Store({}));

export function useStore(): Store {
  return useContext(StoreContext);
}

export function useStoreFromProvider(init: Partial<Store>): Store {
  const store = Store.fromHooks(init);
  return store;
}
