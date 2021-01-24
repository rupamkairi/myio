import React, { useState } from "react";
//
import GroupedNav from "../../components/dashboard/GroupedList/GroupedNav";
import GroupedForm from "../../components/dashboard/GroupedList/GroupedForm";
import GroupedList from "../../components/dashboard/GroupedList/GroupedList";
import GroupedListAction from "../../components/dashboard/GroupedList/GroupedListAction";
import GlobalForm from "../../components/dashboard/GlobalList/GlobalForm";
import GlobalList from "../../components/dashboard/GlobalList/GlobalList";
import GlobalListActions from "../../components/dashboard/GlobalList/GlobalListActions";
//
import { GroupedListProvider } from "../../context/GroupedListContext";

export default function Dashboard() {
  const [navTabsState, setNavTabsState] = useState();
  const [links, setLinks] = useState([]);

  return (
    <div className="container mx-auto px-4">
      {/* <p className="text-4xl mb-8 font-bold">Admin Dashboard</p> */}

      {/* <div className="py-4 flex justify-center md:justify-start">
        <button className="btn btn-standard">Add Link</button>
        <button className="btn btn-standard ml-4">Add Group</button>
      </div> */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-9">
        <div className="col-span-2 container">
          <GroupedListProvider>
            <GroupedNav />
            <GroupedForm />
            <GroupedList />
            <GroupedListAction />
          </GroupedListProvider>
          {/*  

          <div>
            <p className="pt-4 pl-2 text-gray-400 text-sm font-normal">
              {navTabsState}
            </p>

            {navTabsState && (
              <LinksList
                links={links.filter((link) => link.category == navTabsState)}
              />
            )}

            <p className="pt-4 pl-2 text-gray-400 text-sm font-normal">
              Add to {navTabsState}
            </p>

            {navTabsState && <LinksForm navTabsState={navTabsState} />}
          </div> */}
        </div>

        <div>
          <GlobalForm />
          <GlobalList />
          <GlobalListActions />
        </div>
      </div>
    </div>
  );
}
