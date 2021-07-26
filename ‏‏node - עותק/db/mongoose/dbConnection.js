const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017";
const dbName = "hafifa";

mongoose.connect(`${dbUrl}/${dbName}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const close = () => mongoose.connection.close();

module.exports = { close };
