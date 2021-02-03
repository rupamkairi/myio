import React from "react";
import Link from "next/link";

export default function Footer() {
  const menuItems = ["Features", "Pricing"];
  return (
    <div className="bg-indigo-500 text-indigo-50">
      <div className="container mx-auto py-16">
        <div className="px-4 md:mx-16 lg:mx-32 xl:mx-64">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="text-4xl font-black">
                <Link href="/">MyIO</Link>
              </div>
              <div className="text-base font-medium">
                {menuItems.map((data, key) => (
                  <div key={key} className="my-1">
                    <Link href={`#${data}`}>{data}</Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>Open Source project</p>
              <Link href="https://github.com/rupamkairi/myio">
                <div className="my-1 py-2 px-4 border-2 rounded-md shadow-lg border-gray-500 hover:border-gray-700 bg-gray-500 hover:bg-gray-700  text-white">
                  View and Contribute on GitHub
                </div>
              </Link>
              <p>
                Built with <Link href="https://nextjs.org/">Next.js</Link> and
                Hosted on <Link href="https://vercel.com/">Vercel</Link> .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
