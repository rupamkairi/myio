import React from "react";

export default function Component({ onAcion }) {
  return (
    <div>
      <p>Component</p>
      <button
        onClick={() => {
          // onAcion("Success");
          onAcion();
        }}
      >
        Action
      </button>
    </div>
  );
}
