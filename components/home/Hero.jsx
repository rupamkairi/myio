import React from "react";
// import Login from "./Login";
import Image from "next/image";
import TryDemoButton from "./TryDemoButton";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-around items-center flex-wrap my-2">
        <div className="md:w-3/5 lg:w-7/12 xl:w-6/12 md:mr-2">
          <img src="https://imgur.com/VfNOgGj.jpg" alt="hero description" />
        </div>
        <div className="md:ml-2">
          <TryDemoButton />
        </div>
      </div>
    </div>
  );
}
