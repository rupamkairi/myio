import React, { useContext, useState, useEffect } from "react";

const GroupedListContext = React.createContext();

export function useGroupedList() {
  return useContext(GroupedListContext);
}

export function GroupedListProvider({ children }) {
  const [navTabsState, setNavTabsState] = useState();

  const changeNavTabsState = (tabName) => {
    setNavTabsState(tabName);
  };

  return (
    <GroupedListContext.Provider value={{ navTabsState, changeNavTabsState }}>
      {children}
    </GroupedListContext.Provider>
  );
}
