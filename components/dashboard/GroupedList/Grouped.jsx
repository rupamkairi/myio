import React from "react";
import GroupedForm from "./GroupedForm";
import GroupedList from "./GroupedList";
import GroupedListAction from "./GroupedListAction";
import GroupedNav from "./GroupedNav";

export default function Grouped() {
  return (
    <div>
      <GroupedNav />
      <GroupedForm />
      <GroupedList />
      <GroupedListAction />
    </div>
  );
}
