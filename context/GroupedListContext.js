import React, { useContext, useState } from "react";

const GroupedListContext = React.createContext();

export function useGroupedList() {
  return useContext(GroupedListContext);
}

export function GroupedListProvider({ children }) {
  const [navTabs, setNavTabs] = useState([]);
  const [navTabsState, setNavTabsState] = useState();

  const addNavTab = (tabName) => {
    setNavTabs((prevTabs) => [...prevTabs, tabName]);
  };
  const removeNavTab = (tabName) => {
    setNavTabs((prevTabs) => [...prevTabs, tabName]);
  };
  const changeNavTabsState = (tabName) => {
    setNavTabsState(tabName);
  };

  const value = {
    navTabs,
    addNavTab,
    removeNavTab,
    navTabsState,
    changeNavTabsState,
  };

  return (
    <GroupedListContext.Provider value={value}>
      {children}
    </GroupedListContext.Provider>
  );
}
