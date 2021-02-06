const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");
const { Connect } = require("./mongodbCaching");

async function View(database, collection) {
  const client = new MongoClient(process.env.DB_URI);
  try {
    await client.connect();

    const results = await client
      .db(database)
      .collection(collection)
      .find()
      .toArray();

    return results;
  } catch (err) {
  } finally {
    await client.close();
  }
}

async function FindBy(database, collection, query) {
  const db = await Connect(database);

  const results = await db.collection(collection).findOne(query);

  return results;
}

async function Add(database, collection, document) {
  const client = new MongoClient(process.env.DB_URI);
  try {
    await client.connect();

    const result = await client
      .db(database)
      .collection(collection)
      .insertOne(document);

    return result;
  } catch (err) {
  } finally {
    await client.close();
  }
}

async function AddLink(database, collection, query, update) {
  const client = new MongoClient(process.env.DB_URI);
  try {
    await client.connect();

    const result = await client
      .db(database)
      .collection(collection)
      .findOneAndUpdate(query, update, { returnOriginal: false });

    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

async function RemoveLink(database, collection, query, update) {
  const client = new MongoClient(process.env.DB_URI);
  try {
    await client.connect();
    const result = await client
      .db(database)
      .collection(collection)
      .findOneAndUpdate(query, update, { returnOriginal: false });

    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

module.exports = { View, FindBy, Add, AddLink, RemoveLink };
