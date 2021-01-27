import React from "react";
import Link from "next/link";

export default function NavBar() {
  const menuItems = ["Features", "Pricing"];

  return (
    <div className="sticky top-0 bg-white">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-4xl font-black">MyIO</span>
        </Link>
        <div className="text-base font-medium md:visible">
          <Link href="/dashboard">
            <span className="btn btn-standard mx-2">Try for Once</span>
          </Link>
          {menuItems.map((data, key) => (
            <Link key={key} href={`#${data}`}>
              <span className="mx-2">{data}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
