// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const MongoClient = require("mongodb").MongoClient;

export default async (req, res) => {
  const client = new MongoClient(process.env.DB_URI);

  try {
    await client.connect();
    // console.log(client.isConnected());
    const collection = client.db("myio_guests").collection("link_groups");
    // console.log(collection.namespace);
    const query = {};
    const groups = await collection.find(query);
    console.log(await groups.toArray());
    await groups.forEach((doc) => console.log(doc));

    res.json({
      message: "Welcome to Myio API. All Endpoints are working fine.",
      secrets: {
        database: {
          client_isConnected: client.isConnected(),
          collection_namespace: collection.namespace,
          // query: query,
          results: await groups.toArray(),
        },
      },
    });
  } catch (err) {
    res.json({
      message: "Some Error occured...",
      secrets: {
        database: {
          client_isConnected: client.isConnected(),
          collection_namespace: collection.namespace,
          results: await groups.toArray(),
        },
      },
    });
  } finally {
    await client.close();
  }
};
