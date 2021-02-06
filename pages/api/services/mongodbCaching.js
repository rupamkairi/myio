const MongoClient = require("mongodb").MongoClient;

// let cachedConnection = null;
let cacheddb = null;

export async function Connect(database) {
  if (cacheddb) {
    console.log("giving cached connetion");
    return cacheddb;
  }

  console.log("need to create new connection");
  const client = await MongoClient.connect(process.env.DB_URI);
  const db = await client.db(database);
  cacheddb = db;
  return db;
}
