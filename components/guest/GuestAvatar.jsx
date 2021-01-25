import React from "react";
//
import { useGuestLinksList } from "../../context/GuestLinkListContext";

export default function GuestAvatar(props) {
  const { changeUid } = useGuestLinksList();
  changeUid(props.uid);

  return (
    <div className="mx-auto flex justify-center">
      <img
        className="rounded-full"
        src={`https://i.pravatar.cc/200?img=${props.uid}`}
        alt="user_avatar"
      />
    </div>
  );
}
