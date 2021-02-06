import React from "react";
//
import { useGroupedList } from "../../../context/GroupedListContext";
import GroupedLinkItem from "./GroupedLinkItem";
import GroupedListAction from "./GroupedListAction";

export default function GroupedLinkList() {
  const { navTabsState, links } = useGroupedList();

  return (
    <div>
      {navTabsState !== "" ? (
        <div className="border rounded-md">
          {links?.map((data, key) => (
            <div key={key}>
              <GroupedLinkItem item={data} />
            </div>
          ))}
          <GroupedListAction />
        </div>
      ) : (
        <p className="text-center text-sm font-medium py-6 text-gray-500">
          Select any Tabs from above to see further options...
        </p>
      )}
    </div>
  );
}
