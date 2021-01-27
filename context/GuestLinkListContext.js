import React, { useContext, useEffect, useState } from "react";

const GuestLinksListContext = React.createContext();

export function useGuestLinksList() {
  return useContext(GuestLinksListContext);
}

export function GuestLinksListProvider({ children }) {
  const [uid, setUid] = useState("");

  const changeUid = (newUid) => {
    setUid(newUid);
  };

  useEffect(() => {
    if (uid) {
      console.log(uid);
      fetch(process.env.NEXT_PUBLIC_API_HOST + "/global/find")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [uid]);

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
