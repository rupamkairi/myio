import React, { useContext, useState } from "react";

const GlobalListContext = React.createContext();

export function useGlobalList() {
  return useContext(GlobalListContext);
}

export function GlobalListProvider({ children }) {
  const [links, setLinks] = useState([]);

  const addLink = (linkObj) => {
    setLinks((prevLinks) => [linkObj, ...prevLinks]);
  };
  const removeLink = () => {
    // setLinks((prevLinks) => {});
  };

  const value = {
    links,
    addLink,
    removeLink,
  };

  return (
    <GlobalListContext.Provider value={value}>
      {children}
    </GlobalListContext.Provider>
  );
}
