// const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
const { AddLink } = require("../services/mongodbServices");

export default async (req, res) => {
  // const client = new MongoClient(process.env.DB_URI, {});
  // await client.connect();

  const query = { _id: ObjectId(JSON.parse(req.body)["_id"]) };
  const link = JSON.parse(req.body)["link"];

  // const result = await client
  //   .db("myio_guests")
  //   .collection("link_groups")
  //   .findOneAndUpdate(query, {
  //     $push: {
  //       links: link,
  //     },
  //   });

  const result = await AddLink("myio_guests", "link_groups", query, link);

  res.json({
    message: "link added successfully",
    result: result,
  });

  // await client.close();
};
