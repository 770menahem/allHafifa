const mongoose = require("mongoose");
const bookSchema = require("../modal/book");

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
