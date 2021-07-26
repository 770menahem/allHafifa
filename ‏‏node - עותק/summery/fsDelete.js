const prompt = require("prompt-sync")();
const fs = require("fs");

module.exports = {
  file: () => {
    const delFile = prompt("file name to delete:");
    try {
      fs.unlinkSync(`./${delFile}`);

      console.log(`${delFile} deleted`);
    } catch (error) {
      console.log(error);
    }
  },
  dir: () => {
    const delDir = prompt("directory name to delete:");
    try {
      fs.rmdirSync(`./${delDir}`);

      console.log(`${delDir} deleted`);
    } catch (error) {
      console.log(error);
    }
  },
  fileInDir: () => {
    const delFileInDIr = prompt("full path of file in directory to delete:");
    try {
      fs.unlinkSync(`./${delFileInDIr}`);

      console.log(`${delFileInDIr} deleted`);
    } catch (error) {
      console.log(error);
    }
  },
};
