import React from "react";

export default function LinksList(props) {
  return (
    <div>
      <pre>{JSON.stringify(props.links, null, 2)}</pre>
    </div>
  );
}
