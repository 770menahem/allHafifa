const db = require("./db.js");

const [collection, field] = process.argv.slice(2);

db.connect(async () => {
  try {
    const index = {};
    index[field] = 1;

    const res = await db.get().collection(collection).createIndex(index);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});
