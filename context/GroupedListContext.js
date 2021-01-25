import React, { useContext, useState } from "react";

const GroupedListContext = React.createContext();

export function useGroupedList() {
  return useContext(GroupedListContext);
}

export function GroupedListProvider({ children }) {
  const [navTabs, setNavTabs] = useState([]);
  const [navTabsState, setNavTabsState] = useState("");
  const [links, setLinks] = useState([]);

  const addNavTab = (tabName) => {
    setNavTabs((prevTabs) => [...prevTabs, tabName]);
  };

  const removeNavTab = (tabName) => {
    setNavTabs((prevTabs) => [...prevTabs, tabName]);
  };
  const changeNavTabsState = (tabName) => {
    setNavTabsState(tabName);
  };

  const addLink = (linkObj) => {
    setLinks((prevLinks) => [linkObj, ...prevLinks]);
  };
  const removeLink = () => {
    // setLinks((prevLinks) => {});
  };

  const value = {
    navTabs,
    addNavTab,
    removeNavTab,
    navTabsState,
    changeNavTabsState,
    links,
    addLink,
    removeLink,
  };

  return (
    <GroupedListContext.Provider value={value}>
      {children}
    </GroupedListContext.Provider>
  );
}
