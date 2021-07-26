const { get } = require("./db");

module.exports = {
  insertOneBook: async (obj) => {
    const db = await get();
    const res = await db.collection("book").insertOne(obj);
    return res;
  },
  getByName: async (name) => {
    const db = await get();
    const reg = new RegExp(`[${name}]`);

    return await db
      .collection("book")
      .find({ name: { $regex: reg } })
      .toArray();
  },
  getBigBooks: async () => {
    const db = await get();
    const res = await db
      .collection("book")
      .find({ pages: { $gte: 250 } })
      .sort({ pages: 1 })
      .toArray();
    return res;
  },
  getBigBooksByNum: async (num) => {
    const db = await get();
    const res = await db
      .collection("book")
      .find({
        pages: { $gte: num },
        date: {
          $gte: new Date("2015-01-01T00:00:00.000Z"),
          $lt: new Date("2021-01-01T00:00:00.000Z"),
        },
        // writerName: { $regex: /[p]/ },
      })
      .sort({ writerName: 1, pages: -1 })
      .toArray();
    return res;
  },
  getBookByWriterId: async (writerId) => {
    const db = await get();

    return await db.collection("book").find({ writer: writerId }).toArray();
  },
  insertOneWriter: async (obj) => {
    const db = await get();
    const res = await db.collection("writer").insertOne(obj);
    return res;
  },
  gerWriterByName: async (name) => {
    const db = await get();
    return await db.collection("writer").findOne({ firstName: name });
  },
};
