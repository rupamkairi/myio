export default async (req, res) => {
  // await client.connect();

  // const result = await client
  //   .db("myio_guests")
  //   .collection("link_groups")

  res.json({
    message: "list retrieved successfully",
  });
  // await client.close();
};
