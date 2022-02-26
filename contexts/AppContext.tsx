import { createContext, useContext } from "react";

const AppContext = createContext({ app: "" });

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppProvider({ children }: any) {
  return (
    <AppContext.Provider
      value={{
        app: "App",
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
