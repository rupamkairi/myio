import React from "react";
import Link from "next/link";

export default function NavBar() {
  const menuItems = ["Features", "Pricing", "Blogs", "Teams"];

  return (
    <div className="container mx-auto py-4 flex justify-between items-center">
      <span className="text-4xl font-black">MyIO</span>
      <div className="text-base font-medium invisible md:visible">
        <Link href="/dashboard">Dashboard</Link>
        {menuItems.map((data, key) => (
          <a key={key} href="#" className="px-2">
            {data}
          </a>
        ))}
      </div>
    </div>
  );
}
