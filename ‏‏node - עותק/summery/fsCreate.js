const prompt = require("prompt-sync")();
const fs = require("fs");

module.exports = {
  file: () => {
    const createFile = prompt("file name to create:");

    try {
      fs.writeFileSync(`./${createFile}`, "");

      console.log(`${createFile} created`);
    } catch (error) {
      console.log(error);
    }
  },
  dir: () => {
    const dirName = prompt("directory name to create:");

    try {
      fs.mkdirSync(`./${dirName}`);

      console.log(`${dirName} created`);
    } catch (error) {
      console.log(error);
    }
  },
  fileInDir: () => {
    const fileToDir = prompt("full path of file in directory to create:");

    try {
      fs.writeFileSync(`./${fileToDir}`, "");

      console.log(`${fileToDir} created`);
    } catch (error) {
      console.log(error);
    }
  },
};
