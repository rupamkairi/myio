import React from "react";

export default function NavBar() {
  const menuItems = ["Features", "Pricing", "Blogs", "Teams"];

  return (
    <div className="container mx-auto py-4 flex justify-between items-center">
      <span className="text-4xl font-black">MYIO</span>
      <div className="text-base font-medium invisible md:visible">
        {menuItems.map((data, key) => (
          <a key={key} href="#" className="px-2">
            {data}
          </a>
        ))}
      </div>
    </div>
  );
}
