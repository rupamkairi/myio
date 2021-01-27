const MongoClient = require("mongodb").MongoClient;

export default async (req, res) => {
  const client = new MongoClient(process.env.DB_URI, {});
  await client.connect();

  const document = {
    group_title: JSON.parse(req.body)["title"],
    created_on: new Date().toDateString(),
    public: true,
  };
  console.log(document);

  const result = await client
    .db("myio_guests")
    .collection("link_groups")
    .insertOne(document);

  res.json({
    message: "list added successfully",
    result: result,
    _id: result.insertedId,
    ops: result.ops,
  });
  await client.close();
};
