import React from "react";
//

export default function GuestLinksList() {
  let links = [
    { platform: "twitter", username: "RupamKairi" },
    { platform: "GitHub", username: "rupamkairi" },
    { platform: "twitter", username: "RupamKairi" },
    { platform: "GitHub", username: "rupamkairi" },
    { platform: "twitter", username: "RupamKairi" },
    { platform: "GitHub", username: "rupamkairi" },
    { platform: "twitter", username: "RupamKairi" },
    { platform: "GitHub", username: "rupamkairi" },
    { platform: "twitter", username: "RupamKairi" },
    { platform: "GitHub", username: "rupamkairi" },
    { platform: "twitter", username: "RupamKairi" },
    { platform: "GitHub", username: "rupamkairi" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-8">
        {links?.map((data, key) => (
          <div key={key} className="link-item">
            <p className="mr-4">{data.platform}</p>
            <p className="font-bold">{data.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
