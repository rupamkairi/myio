import React from "react";
//
import { useGlobalList } from "../../../context/GlobalListContext";
//
import GlobalLinkItem from "./GlobalLinkItem";
import GlobalListActions from "./GlobalListActions";

export default function GlobalLinksList() {
  let { links } = useGlobalList();
  // links = [
  //   { platform: "twitter", username: "RupamKairi" },
  //   { platform: "GitHub", username: "rupamkairi" },
  //   { platform: "Hashnode", username: "rupamkairi" },
  // ];

  return (
    <div className="border rounded-md">
      {links?.map((data, key) => (
        <div key={key}>
          <GlobalLinkItem platform={data.platform} username={data.username} />
        </div>
      ))}
      <GlobalListActions />
    </div>
  );
}
