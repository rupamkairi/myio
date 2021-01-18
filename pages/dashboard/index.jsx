import React, { useState } from "react";

export default function Dashboard() {
  const [navTabsState, setNavTabsState] = useState();
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState({});

  return (
    <div className="container mx-auto">
      <p className="text-4xl font-bold">Admin Dashboard</p>

      <p className="text-2xl font-semibold">Nav Tabs</p>
      <div>
        <ul className="flex ">
          <li className="text-xl px-2 font-medium cursor-pointer">
            <span
              onClick={() => {
                setNavTabsState("Social");
              }}
            >
              Social
            </span>
          </li>
          <li className="text-xl px-2 font-medium cursor-pointer">
            <span
              onClick={() => {
                setNavTabsState("Developer");
              }}
            >
              Developer
            </span>
          </li>
          <li className="text-xl px-2 font-medium cursor-pointer">
            <span
              onClick={() => {
                setNavTabsState("Professional");
              }}
            >
              Professional
            </span>
          </li>
        </ul>
        <div>
          <p>{navTabsState}</p>
          {navTabsState && (
            <div>
              <input
                className="bordedr-2 border-blue-300"
                type="text"
                placeholder="platform"
                onChange={(e) => {
                  link["platform"] = e.target.value;
                }}
              />
              <input
                className="bordedr-2 border-blue-300"
                type="text"
                placeholder="username"
                onChange={(e) => {
                  link["username"] = e.target.value;
                }}
              />
              <button
                className="bg-blue-300 px-4 rounded"
                onClick={() => {
                  link["category"] = navTabsState;

                  setLinks((prev) => [link, ...prev]);

                  console.log(links);
                }}
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-2xl font-semibold">Global List</p>
      <pre>{JSON.stringify(links, null, 2)}</pre>
    </div>
  );
}
