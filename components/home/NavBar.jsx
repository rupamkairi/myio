import React from "react";
import Link from "next/link";

export default function NavBar() {
  const menuItems = ["Features"];

  return (
    <div className="bg-gray-100 shadow-md">
      <div className="container mx-auto py-4 px-4 sm:grid sm:grid-cols-1 md:flex justify-between items-center">
        <div className="w-full flex justify-between pb-8 md:pb-0">
          <span className="text-4xl font-black">
            <Link href="/">MyIO</Link>
          </span>
          <Link href="/dashboard">
            <span className="btn btn-standard md:mx-2">Try for Once</span>
          </Link>
        </div>
        <div className="text-base font-medium">
          {menuItems.map((data, key) => (
            <span key={key} className="mx-2">
              <Link href={`#${data}`}>{data}</Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
