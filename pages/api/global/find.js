const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

export default async (req, res) => {
  const client = new MongoClient(process.env.DB_URI, {});
  await client.connect();

  const query = { _id: ObjectId(JSON.parse(req.body)["_id"]) };
  // console.log(query);

  const result = await client
    .db("myio_guests")
    .collection("link_groups")
    .findOne(query);

  res.json({
    message: "list retrieved successfully",
    result: result,
  });
  await client.close();
};
