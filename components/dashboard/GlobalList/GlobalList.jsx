import React from "react";
//
import { useGlobalList } from "../../../context/GlobalListContext";
//
import GlobalListActions from "./GlobalListActions";

export default function GlobalList() {
  const { links } = useGlobalList();

  return (
    <div className="border rounded-md">
      {links?.map((data, key) => (
        <div key={key} className="link-item">
          <div className="flex">
            <p className="mr-4">{data.platform}</p>
            <p className="font-bold">{data.username}</p>
          </div>
          <div className="flex justify-end">
            <div>more</div>
            <div>actions</div>
          </div>
        </div>
      ))}
      <GlobalListActions />
    </div>
  );
}
