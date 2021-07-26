const crudDb = require("./crudDb.js");
const db = require("./db.js");

const [name, description, date, pages, writer] = process.argv.slice(2);

db.connect(async () => {
  try {
    const writerObj = await crudDb.gerWriterByName(writer);

    const res = await crudDb.insertOneBook({
      name,
      description,
      date: new Date(date),
      pages,
      writer: writerObj._id.toString(),
    });

    console.log(res.ops);
  } catch (error) {
    console.log(error);
  }
});
