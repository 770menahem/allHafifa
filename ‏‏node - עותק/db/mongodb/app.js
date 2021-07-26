const express = require("express");
const morgan = require("morgan");
const db = require("./db.js");
const crudDb = require("./crudDb.js");
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/book/big", async (req, res) => {
  const result = await crudDb.getBigBooks();
  res.send(result);
});

app.get("/book/name/:name", async (req, res) => {
  const name = req.params.name;
  const result = await crudDb.getByName(name);
  res.send(result);
});

app.get("/book/:writer", async (req, res) => {
  const writer = req.params.writer;
  const writerId = await crudDb.gerWriterByName(writer);
  console.log(writerId);
  const result = await crudDb.getBookByWriterId(writerId._id);
  res.send(result);
});

app.post("/book", async (req, res) => {
  const { name, description, date, pages, writer } = req.body;
  const writerId = await crudDb.gerWriterByName(writer)._id;

  res.send(
    await crudDb.insertOneBook({
      name,
      description,
      date: new Date(date),
      pages,
      writer: writerId,
    })
  );
});

app.get("/writer", async (req, res) => {
  res.send(
    await crudDb.insertOneWriter({
      firstName: "ber",
      LastName: "bar",
      birthDate: new Date("28-10-0950"),
    })
  );
});

db.connect(() => {
  app.listen(4400, () => {
    console.log("app up");
  });
});
