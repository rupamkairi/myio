import React, { useRef, useState } from "react";
//
import { useGlobalList } from "../../../context/GlobalListContext";

export default function GlobalLinkItem(props) {
  const [edit, setEdit] = useState(false);
  const editRef = useRef();
  const [visible, setVisible] = useState(true);

  const { changeListGroupObject } = useGlobalList();

  return (
    <div
      className={
        "link-item " + (visible ? "" : "border-2 border-grey-300 border-dotted")
      }
    >
      <div className="flex flex-grow">
        <p className="mr-4">{props.item.platform}</p>
        <p
          className={
            "font-bold w-full mr-1 " +
            (edit
              ? "pl-1 rounded border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              : "")
          }
          contentEditable={edit}
          ref={editRef}
        >
          {props.item.username}
        </p>
      </div>
      <div className="flex justify-end">
        {/* <button
          className="p-1 rounded-full text-green-500 hover:bg-green-100 hover:text-green-700 focus:outline-none active:outline-none"
          onClick={() => {
            if (edit) {
              console.log("saving...");
              fetch(process.env.NEXT_PUBLIC_API_HOST + "/global/editlink", {
                method: "POST",
                body: JSON.stringify({
                  _id: props.item._id,
                  field: "username",
                  edit: editRef.current.innerText,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  // changeListGroupObject(data.result.value)
                });
            }
            setEdit((prevEdit) => !prevEdit);
          }}
        >
          {edit ? (
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          )}
        </button> */}
        <button
          className="p-1 rounded-full text-red-500 hover:bg-red-100 hover:text-red-700 focus:outline-none active:outline-none"
          onClick={() => {
            console.log("delete link...");
            fetch(process.env.NEXT_PUBLIC_API_HOST + "/global/removelink", {
              method: "POST",
              body: JSON.stringify({
                linkId: props.item._id,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                changeListGroupObject(data.result.value);
              });
          }}
        >
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <button
          className="p-1 rounded-full text-indigo-500 hover:text-indigo-700 focus:outline-none active:outline-none"
          onClick={() => {
            setVisible((prevVisible) => !prevVisible);
          }}
        >
          {visible ? (
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fillRule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                clipRule="evenodd"
              />
              <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
