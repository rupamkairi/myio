const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

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
  const result = await client
    .db("myio_guests")
    .collection("link_groups")
    .findOneAndUpdate(query, update, { returnOriginal: false });

  res.json({
    message: "link edited successfully",
    result: result,
  });

  await client.close();
};
