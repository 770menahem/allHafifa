const Book = require("./repo/bookRepo");
const Writer = require("./repo/writerRepo");
const { close } = require("./dbConnection");
const addWriter = require("./add/addWriter");

(async () => {
  await addBook("e", "bilubi" + parseInt(Math.random() * 100));
  const res = await Book.aggregate([
    {
      $lookup: {
        from: "writers",
        localField: "writer",
        foreignField: "_id",
        as: "writerName",
      },
    },
    {
      $match: {
        "writerName.firstName": { $regex: /[e]/ },
        pages: { $gte: 200 },
        date: {
          $gte: new Date("2015"),
          $lt: new Date("2021"),
        },
      },
    },
    { $unwind: "$writerName" },
    {
      $project: { _id: 0, name: 1, writerName: "$writerName.firstName" },
    },
    { $sort: { writerName: 1, pages: -1 } },
  ]);
  console.log(res);

  const res = await addWriter("rem", "lem", new Date("08-28-1950"));
  console.log(res);
  close();
})();
