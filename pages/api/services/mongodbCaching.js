const MongoClient = require("mongodb").MongoClient;

// let cachedConnection = null;
let cacheddb = null;

export async function Connect() {
  if (cacheddb) {
    console.log("giving cached connetion");
    return cacheddb;
  }

  console.log("need to create new connection");
  const client = await MongoClient.connect(process.env.DB_URI);
  const db = await client.db("myio_guests");
  cacheddb = db;
  return db;
}
