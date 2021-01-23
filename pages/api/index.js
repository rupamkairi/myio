// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const MongoClient = require("mongodb").MongoClient;

export default async (req, res) => {
  const client = new MongoClient(process.env.DB_URI);

  try {
    await client.connect();
    const collection = client.db("myio_guests").collection("link_groups");
    const query = {};
    const groups = await collection.find(query);
    // console.log(await groups.toArray());
    // await groups.forEach((doc) => console.log(doc));

    res.json({
      message: "Welcome to Myio API. All Endpoints are working fine.",
      secrets: {
        database: {
          // local: process.env.DB_URI,
          // atlas: process.env.ATLAS_URI,
          // client: client,
          // database: database,
          // collection: collection,
          // query: query,
          results: await groups.toArray(),
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: "Some Error occured...",
    });
  } finally {
    // await client.close();
  }
};
