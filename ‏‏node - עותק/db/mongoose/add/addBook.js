const Book = require("../repo/bookRepo");
const Writer = require("../repo/writerRepo");

module.exports = async (writerName, bookName) => {
  const regex = new RegExp(`[${writerName}]`);
  const writerId = (
    await Writer.findOne({ firstName: { $regex: regex } }, "_id")
  )._id;

  return await new Book({
    name: bookName,
    description: "the best book",
    date: new Date("01.01.2018"),
    pages: 256,
    writer: writerId,
  }).save();
};
