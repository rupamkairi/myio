const { ObjectId } = require("mongodb");
const { FindBy } = require("../services/mongodbServices");

export default async (req, res) => {
  const query = { _id: ObjectId(JSON.parse(req.body)["_id"]) };

  const result = await FindBy("myio_guests", "link_groups", query);

  res.json({
    message: "list retrieved successfully",
    result: result,
  });
};
