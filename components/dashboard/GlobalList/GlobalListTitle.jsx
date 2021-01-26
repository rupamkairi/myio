import React from "react";

export default function GlobalListTitle() {
  return (
    <div className="mx-auto bg-gray-100 rounded-md shadow-md">
      <div className="container p-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-1 gap-2">
        <input
          type="text"
          className="form-text"
          placeholder="Name your Link Group"
        />
        <button className="btn btn-standard">Save Link</button>
      </div>
    </div>
  );
}
