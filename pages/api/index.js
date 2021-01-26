// const { View, FindBy, Add, AddLink } = require("./services/mongo.js");

export default async (req, res) => {
  try {
    // View("myio_guests", "link_groups");
    // FindBy("myio_guests", "link_groups", { public: true });
    // Add("myio_guests", "link_groups", {
    //   group_title: "Rupam's Job Profile",
    //   profile_name: "Job",
    //   created_on: new Date().toDateString(),
    //   public: false,
    // });
    // AddLink(
    //   "myio_guests",
    //   "link_groups",
    //   { group_title: "Rupam's Job Profile" },
    //   { platform: "github", username: "rupamkairi" }
    // );
    // AddLink(
    //   "myio_guests",
    //   "link_groups",
    //   { group_title: "Rupam's Job Profile" },
    //   { platform: "hackthebox", username: "gREp" }
    // );

    res.json({
      message: "Welcome to Myio API. All Endpoints are working fine.",
      secrets: {
        database: {
          // db_uri: process.env.DB_URI,
          // client_isConnected: client.isConnected()
        },
      },
    });
  } catch (err) {
    res.json({
      message: "Some Error occured...",
      secrets: {
        database: {
          // client_isConnected: client.isConnected()
        },
      },
    });
  } finally {
  }
};
