import React from "react";
//
import { useGuestLinksList } from "../../context/GuestLinkListContext";

export default function GuestLinksList() {
  const { changeUid, userInfo } = useGuestLinksList();

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
        {userInfo?.links?.map((data, key) => (
          <div key={key} className="link-item border-2 border-blue-200">
            <p className="mr-4">{data.platform}</p>
            <p className="font-bold">{data.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
