import React from "react";
import Link from "next/link";

export default function TryDemoButton() {
  return (
    <div className="my-8">
      <Link href="/dashboard">
        <span className="text-2xl font-bold py-4 px-8 border rounded-md border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-700 cursor-pointer">
          Try for Once
        </span>
      </Link>
    </div>
  );
}
