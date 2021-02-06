const { ObjectId } = require("mongodb");
const { AddLink } = require("../services/mongodbServices");

export default async (req, res) => {
  const query = { _id: ObjectId(JSON.parse(req.body)["_id"]) };
  const link = JSON.parse(req.body)["link"];
  const update = {
    $push: {
      links: {
        _id: ObjectId(),
        ...link,
      },
    },
  };

  const result = await AddLink("myio_guests", "link_groups", query, update);

  res.json({
    message: "link added successfully",
    result: result,
  });
};
