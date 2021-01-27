import React from "react";
import Link from "next/link";

export default function NavBar() {
  const menuItems = ["Features", "Pricing"];

  return (
    <div className="sticky top-0 bg-white">
      <div className="container mx-auto py-4 px-4 sm:grid sm:grid-cols-1 md:flex justify-between items-center">
        <div className="w-full flex justify-between pb-8 md:pb-0">
          <Link href="/">
            <span className="text-4xl font-black">MyIO</span>
          </Link>
          <Link href="/dashboard">
            <span className="btn btn-standard md:mx-2">Try for Once</span>
          </Link>
        </div>
        <div className="text-base font-medium">
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
