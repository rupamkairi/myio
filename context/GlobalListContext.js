import React, { useContext, useState } from "react";

const GlobalListContext = React.createContext();

export function useGlobalList() {
  return useContext(GlobalListContext);
}

export function GlobalListProvider({ children }) {
  const [links, setLinks] = useState([]);
  const [listObjectId, setListObjectId] = useState("");
  const [listGroupObject, setListGroupObject] = useState();

  const addLink = (linkObj) => {
    setLinks((prevLinks) => [linkObj, ...prevLinks]);
  };
  const removeLink = () => {
    // setLinks((prevLinks) => {});
  };

  const changeListObjectId = (objectId) => {
    // console.log("changeListObjectId: " + objectId);
    setListObjectId(objectId);
  };

  const changeListGroupObject = (object) => {
    // console.log(object);
    setListGroupObject(object);
  };

  const value = {
    links,
    addLink,
    removeLink,
    listObjectId,
    changeListObjectId,
    listGroupObject,
    changeListGroupObject,
  };

  return (
    <GlobalListContext.Provider value={value}>
      {children}
    </GlobalListContext.Provider>
  );
}
