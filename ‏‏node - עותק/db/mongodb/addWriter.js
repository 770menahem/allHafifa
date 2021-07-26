const crudDb = require("./crudDb.js");
const db = require("./db.js");

const [fName, lName, birthDate] = process.argv.slice(2);

db.connect(async () => {
  try {
    const res = await crudDb.insertOneWriter({
      fName,
      lName,
      birthDate,
    });

    console.log(res.ops);
  } catch (error) {
    console.log(error);
  }
});
