const { ObjectId } = require("mongodb");
const { FindBy } = require("../services/mongodbServices");

export default async (req, res) => {
  // const client = new MongoClient(process.env.DB_URI, {});
  // await client.connect();

  const query = { _id: ObjectId(JSON.parse(req.body)["_id"]) };
  // console.log(query);

  // const result = await client
  //   .db("myio_guests")
  //   .collection("link_groups")
  //   .findOne(query);
  // console.log(result);

  const result = await FindBy("myio_guests", "link_groups", query);
  // console.log(await result);

  res.json({
    message: "list retrieved successfully",
    result: result,
  });
  // await client.close();
};
