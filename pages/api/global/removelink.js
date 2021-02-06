import { RemoveLink } from "../services/mongodbServices";

const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

export default async (req, res) => {
  const client = new MongoClient(process.env.DB_URI, {});
  await client.connect();

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

  await client.close();
};
