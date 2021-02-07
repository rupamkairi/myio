import React from "react";
import { object, string } from "yup";
//
import { useGuestLinksList } from "../../context/GuestLinkListContext";

const urlSchema = object().shape({
  profile_link: string().url(),
});

export default function GuestLinksList() {
  const { changeUid, userInfo } = useGuestLinksList();

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
        {userInfo?.links?.map((data, key) => (
          <div key={key} className="p-4 m-2 rounded border-2 border-blue-200">
            <div className="link-item">
              <p className="mr-4">{data.platform}</p>
              <p className="font-bold">{data.username}</p>
            </div>
            <div className="px-4 m-2 text-sm break-words">
              <a
                href={data.profile_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.profile_link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
