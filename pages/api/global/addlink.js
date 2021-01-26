const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

const client = new MongoClient(process.env.DB_URI, {});

export default async (req, res) => {
  await client.connect();

  const link = JSON.parse(req.body)["link"];
  const query = { _id: ObjectId(JSON.parse(req.body)["_id"]) };

  const result = await client
    .db("myio_guests")
    .collection("link_groups")
    .findOneAndUpdate(query, {
      $push: {
        links: link,
      },
    });

  res.json({
    message: "link added successfully",
    result: result,
  });

  await client.close();
};
