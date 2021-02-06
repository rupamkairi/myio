const { ObjectId } = require("mongodb");
const { RemoveLink } = require("../services/mongodbServices");

export default async (req, res) => {
  const linkId = JSON.parse(req.body)["linkId"];
  const query = { "links._id": ObjectId(linkId) };
  const update = {
    $pull: {
      links: {
        _id: ObjectId(linkId),
      },
    },
  };

  const result = await RemoveLink("myio_guests", "link_groups", query, update);

  res.json({
    message: "link removed successfully",
    result: result,
  });
};
