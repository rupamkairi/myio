import React from "react";
import LinksList from "../GroupedList/GroupedList";

export default function GlobalList(props) {
  return (
    <div className="my-2 border rounded-md">
      global list
      {/* {props.links?.map((data, key) => (
        <div
          key={key}
          className="p-4 m-2 rounded hover:bg-blue-100 grid grid-cols-auto md:grid-cols-2 md:grid-flow-col "
        >
          <div className="flex">
            <p className="mr-4">{data.platform}</p>
            <p className="font-bold">{data.username}</p>
          </div>
          <div className="flex justify-end">
            <div>more</div>
            <div>actions</div>
          </div>
        </div>
      ))}

      <div className="px-6 py-4 pb-8 bg-gray-100 ">
        <div className="font-semibold flex flex-col">
          <div className="h-12 flex justify-between items-center">
            <div>Share this List</div>

            <button className="text-blue-500 focus:outline-none active:outline-none">
              <svg
                className="w-6 h-6 md:w-5 md:h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            className="form-text font-medium tracking-wide"
            value="myio.vercel.app/09j"
            disabled
          />
          <p className="pt-1 text-right text-blue-500 font-bold">Copied!</p>
        </div>
      </div> */}
    </div>
  );
}
