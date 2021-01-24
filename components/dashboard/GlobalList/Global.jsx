import React from "react";
import GlobalForm from "./GlobalForm";
import GlobalList from "./GlobalList";
import GlobalListActions from "./GlobalListActions";

export default function Global() {
  return (
    <div>
      <GlobalForm />
      <GlobalList />
      <GlobalListActions />
    </div>
  );
}
