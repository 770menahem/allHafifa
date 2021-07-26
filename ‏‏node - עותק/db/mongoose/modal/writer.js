const { Schema } = require("mongoose");

const writerSchema = Schema({
  firstName: String,
  lastName: String,
  birthDate: { type: Date, default: Date.now },
});

module.exports = writerSchema;
