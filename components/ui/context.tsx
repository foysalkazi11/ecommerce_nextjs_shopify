import { createContext, FC, ReactNode, useContext, useState } from "react";

interface UIState {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
}

const UIContext = createContext<UIState>({} as UIState);

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const uiState = {
    isOpenSidebar,
    toggleSidebar: () => setOpenSidebar((prev) => !prev),
  };
  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  const context = useContext(UIContext);

  return context;
};
