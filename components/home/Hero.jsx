import React from "react";
import Login from "./Login";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        {/* <Image
          src="/undraw_social.png"
          alt="Hero Image"
          width={500}
          height={500}
        />{" "} */}
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}
