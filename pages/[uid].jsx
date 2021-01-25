import React from "react";
import { useRouter } from "next/router";
//
import { GlobalListProvider } from "../context/GlobalListContext";
import { GuestLinksListProvider } from "../context/GuestLinkListContext";
//
import GuestAvatar from "../components/guest/GuestAvatar";
import GuestLinksList from "../components/guest/GuestLinksList";

export default function Guest() {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="container mx-auto my-auto">
        <GuestLinksListProvider>
          <GuestAvatar uid={uid} />
          <GuestLinksList />
        </GuestLinksListProvider>
      </div>
    </div>
  );
}
