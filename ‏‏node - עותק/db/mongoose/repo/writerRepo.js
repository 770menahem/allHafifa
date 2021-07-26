const mongoose = require("mongoose");
const writerSchema = require("../modal/writer");

const Writer = mongoose.model("writer", writerSchema);

module.exports = Writer;
