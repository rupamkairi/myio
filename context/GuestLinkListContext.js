import React, { useContext, useEffect, useState } from "react";

const GuestLinksListContext = React.createContext();

export function useGuestLinksList() {
  return useContext(GuestLinksListContext);
}

export function GuestLinksListProvider({ children }) {
  const [uid, setUid] = useState("");
  const [userInfo, setUserInfo] = useState();

  const changeUid = (newUid) => {
    setUid(newUid);
  };

  useEffect(() => {
    if (uid) {
      console.log(uid);
      fetch(process.env.NEXT_PUBLIC_API_HOST + "/global/find", {
        method: "POST",
        body: JSON.stringify({
          _id: uid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setUserInfo(data.result);
        });
    }
  }, [uid]);

  const value = {
    uid,
    changeUid,
    userInfo,
  };

  return (
    <GuestLinksListContext.Provider value={value}>
      {children}
    </GuestLinksListContext.Provider>
  );
}
