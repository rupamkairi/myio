import React, { useContext, useState } from "react";

const GuestLinksListContext = React.createContext();

export function useGuestLinksList() {
  return useContext(GuestLinksListContext);
}

export function GuestLinksListProvider({ children }) {
  const [uid, setUid] = useState("");

  const changeUid = (newUid) => {
    setUid(newUid);
    console.log(uid);
  };

  const value = {
    uid,
    changeUid,
  };

  return (
    <GuestLinksListContext.Provider value={value}>
      {children}
    </GuestLinksListContext.Provider>
  );
}
