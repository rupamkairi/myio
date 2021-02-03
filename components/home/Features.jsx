import React from "react";

export default function Features() {
  return (
    <div id="Features" className="container mx-auto">
      <div className="px-4 my-8 text-gray-800">
        <p className="text-2xl md:text-4xl font-black">Features</p>
        <ul className="px-5 md:text-xl list-disc">
          <li className="py-1">Create and Maintain multiple link groups.</li>
          <li className="py-1">Share links on Social Media.</li>
          <li className="py-1">
            Have Custom url and themes for your links It helps branding.{" "}
            <span className="text-sm text-gray-400">(coming soon)</span>
          </li>
          <li className="py-1">
            Have custom logo of workplace or redirect url.{" "}
            <span className="text-sm text-gray-400">(coming soon)</span>
          </li>
          <li className="py-1">
            Share links with full control of duration and users who can see and
            edit. <span className="text-sm text-gray-400">(coming soon)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
