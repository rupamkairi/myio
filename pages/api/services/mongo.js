const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(process.env.DB_URI, {});

async function View(database, collection) {
  try {
    await client.connect();

    const results = await client
      .db(database)
      .collection(collection)
      .find()
      .toArray();

    console.log({
      Log: {
        invocation: "View",
        params: { database, collection },
      },
      Results: results,
    });
  } catch (err) {
  } finally {
    await client.close();
  }
}

async function FindBy(database, collection, query) {
  try {
    await client.connect();

    const results = await client
      .db(database)
      .collection(collection)
      .find(query)
      .toArray();

    console.log({
      Log: {
        invocation: "FindBy",
        params: { database, collection, query },
      },
      Results: results,
    });
  } catch (err) {
  } finally {
    await client.close();
  }
}

async function Add(database, collection, document) {
  try {
    await client.connect();

    // const results = await client
    //   .db(database)
    //   .collection(collection)
    //   .insertOne(document);

    console.log({
      Log: {
        invocation: "Add",
        params: { database, collection },
        document: document,
      },
      // Results: results,
    });
  } catch (err) {
  } finally {
    await client.close();
  }
}

async function AddLink(database, collection, query, link) {
  try {
    await client.connect();

    const results = await client
      .db(database)
      .collection(collection)
      .findOneAndUpdate(query, {
        $push: {
          links: link,
        },
      });

    // using unifiedtopology will give error for adding same things multiple times.
    /**
     * update using arrayfilters
     * {upsert:true, returnOriginal: false,
        arrayFilters: [{"el.platform" : { $eq: github }}]})
     */

    console.log({
      Log: {
        invocation: "AddLink",
        params: { database, collection, query, link },
      },
      Results: results,
    });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

module.exports = { View, FindBy, Add, AddLink };
