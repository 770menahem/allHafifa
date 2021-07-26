const prompt = require("prompt-sync")();
const fs = require("fs");

module.exports = {
  textToFile: () => {
    const fileTo = prompt("file name to enter text:");
    const text = prompt("text to enter:");

    try {
      fs.appendFileSync(`./${fileTo}`, text);

      console.log(`insert text to ${fileTo}`);
    } catch (error) {
      console.log(error);
    }
  },
  margeFiles: () => {
    const from = prompt("file name from:");
    const to = prompt("file name to:");

    try {
      const textFile = fs.readFileSync(`./${from}`, "utf8");

      fs.appendFileSync(`./${to}`, `\nnew\n${textFile}`);

      console.log(`merge file from ${from} to ${to}`);
    } catch (err) {
      console.log(err);
    }
  },
};
