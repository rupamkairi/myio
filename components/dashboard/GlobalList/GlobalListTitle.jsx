import React, { useState } from "react";
import axios from "axios";
//
import { useGlobalList } from "../../../context/GlobalListContext";

export default function GlobalListTitle() {
  const [listTitle, setListTitle] = useState("");
  const { changeListObjectId } = useGlobalList();
  return (
    <div className="mx-auto bg-gray-100 rounded-md shadow-md">
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
            // axios
            //   .post(process.env.NEXT_PUBLIC_API_HOST + "/global/add", {
            //     title: listTitle,
            //   })
            //   .then(async (res) => {
            //     console.log(res.data);
            //     console.log(typeof res.data);
            //     console.log(res.data.insertedId);
            //     console.log(typeof res.data.insertedId);
            //   });
            fetch(process.env.NEXT_PUBLIC_API_HOST + "/global/add", {
              method: "POST",
              body: JSON.stringify({
                title: listTitle,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                console.log(data.ops);
                return data.ops;
              })
              .then((ops) => console.log(ops));
          }}
        >
          Save Link
        </button>
      </div>
    </div>
  );
}
