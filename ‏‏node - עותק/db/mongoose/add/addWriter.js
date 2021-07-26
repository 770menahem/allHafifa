const Writer = require("../repo/writerRepo");

module.exports = async (fName, lName, bDate) => {
  return await new Writer({
    firstName: fName,
    lastName: lName,
    birthDate: bDate,
  }).save();
};
