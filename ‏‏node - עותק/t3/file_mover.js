const fs = require("fs");

const oldPath = "./files_to_move";
const newPath = "./moved_files";

const filesName = fs.readdirSync(oldPath);

filesName.forEach((fn) => {
  const from = `${oldPath}/${fn}`;
  const to = `${newPath}/${fn}`;

  fs.rename(from, to, (err) => {
    if (err) console.log(err);

    console.log(`${fn} Successfully renamed - AKA moved!`);
    fs.appendFileSync(`./moved_files.txt`, `${fn} moved\n`, (e) => {
      console.log(e);
    });
  });
});
