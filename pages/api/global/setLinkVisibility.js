export default async (req, res) => {
  // const client = new MongoClient(process.env.DB_URI, {});

  // await client.connect();

  // const link = JSON.parse(req.body)["link"];
  // const query = { _id: ObjectId(JSON.parse(req.body)["_id"]) };

  // const result = await client
  //   .db("myio_guests")
  //   .collection("link_groups")
  //   .findOneAndUpdate(query, {
  //     $push: {
  //       links: link,
  //     },
  //   });

  res.json({
    message: "link visibility changed successfully",
    // result: result,
  });

  // await client.close();
};
