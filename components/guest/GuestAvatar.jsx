import React from "react";
import Head from "next/head";
import { AvatarGenerator } from "random-avatar-generator";
//
import { useGuestLinksList } from "../../context/GuestLinkListContext";

export default function GuestAvatar(props) {
  const { changeUid, userInfo } = useGuestLinksList();
  changeUid(props.uid);

  const generator = new AvatarGenerator();

  return (
    <div className="mx-auto flex flex-col justify-center items-center py-6">
      <Head>
        <title>{userInfo?.group_title}</title>
      </Head>
      <img
        className="rounded-full pb-4"
        src={userInfo ? generator.generateRandomAvatar() : null}
        alt="user_avatar"
      />
      <p className="px-2 text-3xl font-black">{userInfo?.group_title}</p>
    </div>
  );
}
