const { MongoClient, ObjectId } = require("mongodb");

var url = "mongodb://localhost:27017";
const dbName = "hafifa";

// Connect to the db
let mongodb;
const connect = (callBack) => {
  MongoClient.connect(url, { useUnifiedTopology: true }, async (err, db) => {
    if (err) throw err;
    mongodb = db.db(dbName);

    console.log("db up");

    await callBack();
    db.close();
  });
};
const get = () => mongodb;

const close = () => mongodb.close();

module.exports = {
  connect,
  get,
  close,
};
