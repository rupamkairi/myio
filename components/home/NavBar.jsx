import React from "react";
import Link from "next/link";

export default function NavBar() {
  const menuItems = ["Features", "Pricing"];

  return (
    <div className="sticky top-0 bg-white">
      <div className="container mx-auto py-4 px-4 sm:grid sm:grid-cols-1 md:flex justify-between items-center">
        <div className="w-full flex justify-between pb-8 md:pb-0">
          <span className="text-4xl font-black">
            <Link href="/">MyIO</Link>
          </span>
          <span className="btn btn-standard md:mx-2">
            <Link href="/dashboard">Try for Once</Link>
          </span>
        </div>
        <div className="text-base font-medium">
          {menuItems.map((data, key) => (
            <span className="mx-2">
              <Link key={key} href={`#${data}`}>
                {data}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
