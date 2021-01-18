import React from "react";
import Login from "./Login";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>hero</div>
      <div>
        <Login/>
      </div>
    </div>
  );
}
