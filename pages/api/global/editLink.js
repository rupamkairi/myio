export default async (req, res) => {
  // const client = new MongoClient(process.env.DB_URI, {});

  // await client.connect();

  const _id = JSON.parse(req.body)["_id"];

  const field = JSON.parse(req.body)["field"];

  const edit = JSON.parse(req.body)["edit"];

  console.log({ _id, field, edit });
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
    message: "link edited successfully",
    // result: result,
  });

  // await client.close();
};
