import React, { useState } from "react";
//
import { GroupedListProvider } from "../../context/GroupedListContext";
import { GlobalListProvider } from "../../context/GlobalListContext";
//
import GroupedNav from "../../components/dashboard/GroupedList/GroupedNav";
import GroupedAddLinkForm from "../../components/dashboard/GroupedList/GroupedAddLinkForm";
import GroupedLinkList from "../../components/dashboard/GroupedList/GroupedLinkList";
import GlobalListTitle from "../../components/dashboard/GlobalList/GlobalListTitle";
import GlobalAddLinkForm from "../../components/dashboard/GlobalList/GlobalAddLinkForm";
import GlobalLinksList from "../../components/dashboard/GlobalList/GlobalLinksList";

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

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4 xl:gap-8">
        <div className="invisible h-0 lg:visible lg:h-auto lg:col-span-2 container mx-auto invisble">
          <GroupedListProvider>
            <GroupedNav />
            <GroupedAddLinkForm />
            <GroupedLinkList />
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

        <div className="lg:col-span-1 container mx-auto">
          <GlobalListProvider>
            <GlobalListTitle />
            <GlobalAddLinkForm />
            <GlobalLinksList />
          </GlobalListProvider>
        </div>
      </div>
    </div>
  );
}
