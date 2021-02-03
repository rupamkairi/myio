import React, { useState } from "react";
//
import { useGlobalList } from "../../../context/GlobalListContext";

export default function GlobalListTitle() {
  const [editState, setEditState] = useState(true);
  const [listTitle, setListTitle] = useState("");
  const { changeListObjectId } = useGlobalList();

  return (
    <div className="mx-auto bg-gray-100 rounded-md shadow-md">
      {editState ? (
        <div className="container p-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-1 gap-2">
          <input
            type="text"
            className="form-text"
            placeholder="Name your Link Group"
            onChange={(e) => setListTitle(e.target.value)}
          />
          <button
            className="btn btn-standard"
            onClick={() => {
              fetch(process.env.NEXT_PUBLIC_API_HOST + "/global/add", {
                method: "POST",
                body: JSON.stringify({
                  title: listTitle,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  // console.log(data);
                  // console.log(data.result.ops._id);
                  changeListObjectId(data._id);
                  setEditState(false);
                });
            }}
          >
            Create Link Group
          </button>
        </div>
      ) : (
        <div className="container p-6 text-2xl font-black">{listTitle}</div>
      )}
    </div>
  );
}
