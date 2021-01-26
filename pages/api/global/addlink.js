const { AddLink } = require("../services/mongo.js");

export default async (req, res) => {
  console.log(JSON.parse(req.body));
  const result = await AddLink(
    "myio_guests",
    "link_groups",
    { _id: JSON.parse(req.body)["_id"] },
    JSON.parse(req.body)["link"]
  );
  res.json({
    message: "link added successfully",
    result: result,
  });
};
