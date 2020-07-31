import { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import ThemeLayout from "@/components/ThemeLayout";

import configs from "./configs";
import count from "./count";

export function createStore() {
  return {
    ...count,

    ...configs,
  };
}
type TStore = ReturnType<typeof createStore>;

const StoreContext = createContext<TStore | null>(null);

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};

export const StoreProvider = ({ children }: any) => {
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>
      <ThemeLayout>{children}</ThemeLayout>
    </StoreContext.Provider>
  );
};
