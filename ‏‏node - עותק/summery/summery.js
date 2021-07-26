const prompt = require("prompt-sync")();
const option = require("./options.js");
const print = require("./print.js");
const fsCreate = require("./fsCreate.js");
const fsDelete = require("./fsDelete.js");
const fsInsert = require("./fsInsert.js");

(async () => {
  let exit = false;

  await print.menu();

  while (!exit) {
    const choose = prompt("your choose:");

    if (!Number(choose)) {
      print.error();
    } else {
      switch (parseInt(choose)) {
        case option.DELETE_FILE:
          fsDelete.file();
          break;
        case option.CREATE_FILE:
          fsCreate.file();
          break;
        case option.TEXT_TO_FILE:
          fsInsert.textToFile();
          break;
        case option.CREATE_DIR:
          fsCreate.dir();
          break;
        case option.DELETE_DIR:
          fsDelete.dir();
          break;
        case option.CREATE_FILE_DIR:
          fsCreate.fileInDir();
          break;
        case option.DELETE_FILE_DIR:
          fsDelete.fileInDir();
          break;
        case option.MARGE_FILE:
          fsInsert.margeFiles();
          break;
        case option.EXIT:
          await print.end();
          exit = true;
          break;

        default:
          break;
      }
    }
  }
})();
