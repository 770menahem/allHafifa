const crudDb = require("./crudDb.js");
const db = require("./db.js");

const [num] = process.argv.slice(2);

db.connect(async () => {
  try {
    const res = await crudDb.getBigBooksByNum(200);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
});
