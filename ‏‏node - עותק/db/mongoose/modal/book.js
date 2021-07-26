const { Schema } = require("mongoose");
const ObjectId = Schema.ObjectId;

const bookSchema = Schema({
  name: String,
  description: String,
  date: { type: Date, default: Date.now },
  pages: Number,
  writer: ObjectId,
});

module.exports = bookSchema;
