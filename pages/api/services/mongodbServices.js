const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
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

    // console.log({
    //   Log: {
    //     invocation: "View",
    //     params: { database, collection },
    //   },
    //   Results: results,
    // });

    return results;
  } catch (err) {
  } finally {
    await client.close();
  }
}

async function FindBy(database, collection, query) {
  // const client = new MongoClient(process.env.DB_URI);
  // try {
  //   await client.connect();

  // const results = await client
  //   .db(database)
  //   .collection(collection)
  //   .findOne(query);

  const db = await Connect();
  const results = await db.collection(collection).findOne(query);

  // console.log({
  //   Log: {
  //     invocation: "FindBy",
  //     params: { database, collection, query },
  //   },
  //   Results: results,
  // });

  return results;
  // } catch (err) {
  // } finally {
  //   await client.close();
  // }
}

async function Add(database, collection, document) {
  const client = new MongoClient(process.env.DB_URI);
  try {
    await client.connect();

    const result = await client
      .db(database)
      .collection(collection)
      .insertOne(document);

    // console.log({
    //   Log: {
    //     invocation: "Add",
    //     params: { database, collection },
    //     document: document,
    //   },
    //   Results: result,
    // });

    return result;
  } catch (err) {
  } finally {
    await client.close();
  }
}

async function AddLink(database, collection, query, link) {
  const client = new MongoClient(process.env.DB_URI);
  try {
    await client.connect();

    const update = {
      $push: {
        links: {
          _id: ObjectId(),
          ...link,
        },
      },
    };
    const result = await client
      .db(database)
      .collection(collection)
      .findOneAndUpdate(query, update, { returnOriginal: false });

    // using unifiedtopology will give error for adding same things multiple times.
    /**
     * update using arrayfilters
     * {upsert:true, returnOriginal: false,
        arrayFilters: [{"el.platform" : { $eq: github }}]})
     */

    // console.log({
    //   Log: {
    //     invocation: "AddLink",
    //     params: { database, collection, query, link },
    //   },
    //   Results: result,
    // });

    return result;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

async function RemoveLink(database, collection, query) {
  // const client = new MongoClient(process.env.DB_URI);
  // try {
  //   await client.connect();
  //   const result = await client.db(database).collection(collection);
  //   console.log({
  //     Log: {
  //       invocation: "AddLink",
  //       params: { database, collection, query, link },
  //     },
  //     Results: result,
  //   });
  //   return result;
  // } catch (err) {
  //   console.log(err);
  // } finally {
  //   await client.close();
  // }
}

module.exports = { View, FindBy, Add, AddLink, RemoveLink };
