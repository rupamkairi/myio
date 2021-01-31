import React from "react";
//
import { useGlobalList } from "../../../context/GlobalListContext";
//
import GlobalLinkItem from "./GlobalLinkItem";
import GlobalListActions from "./GlobalListActions";

export default function GlobalLinksList() {
  const { listGroupObject } = useGlobalList();
  let links = listGroupObject?.links;
  // links = [
  //   { platform: "twitter", username: "RupamKairi" },
  //   { platform: "GitHub", username: "rupamkairi" },
  //   { platform: "Hashnode", username: "rupamkairi" },
  // ];

  return (
    <div className="border rounded-md">
      {links?.map((data, key) => (
        <div key={key}>
          <GlobalLinkItem item={data} />
        </div>
      ))}
      <GlobalListActions />
    </div>
  );
}
