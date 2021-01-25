import React from "react";
//
import { useGroupedList } from "../../../context/GroupedListContext";
import GroupedListAction from "./GroupedListAction";

export default function GroupedList() {
  const { navTabsState, links } = useGroupedList();

  return (
    <div>
      {navTabsState !== "" ? (
        <div className="border rounded-md">
          {links?.map((data, key) => (
            <div
              key={key}
              className="link-item grid grid-cols-auto md:grid-cols-2 md:grid-flow-col"
            >
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
