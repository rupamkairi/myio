import React from "react";
//
import { useGroupedList } from "../../../context/GroupedListContext";

export default function GroupedNav() {
  const navTabs = ["Social", "Developer", "Hacker"];
  const { navTabsState, changeNavTabsState } = useGroupedList();

  return (
    <div className="mx-auto bg-gray-100 rounded-md shadow-md">
      <div className="flex p-4 flex-wrap justify-center md:justify-start items-center">
        {navTabs.map((data, key) => (
          <div
            key={key}
            className={
              "m-2 btn btn-nav-tabs " +
              (navTabsState === data ? "btn-nav-tabs-selected" : "")
            }
            onClick={() => {
              changeNavTabsState(data);
            }}
          >
            {data}
          </div>
        ))}
      </div>
      {/* add nav groups buttons */}
      {/* <div className="">
        <button className="btn btn-standard">Add New Group</button>
      </div> */}
    </div>
  );
}
