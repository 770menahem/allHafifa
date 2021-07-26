const fs = require("fs");

const words = `"כתבו סקריפט ב- NodeJS בשם  שיקבל 2 ארגומנטים (arguments)
הארגומנט הראשון יהיה מספר אשר ייצג את כמות הקבצים שהסקריפט יצור בתיקיה בשם 
הארגומנט השני יהיה מספר אשר ייצג את כמות המילים הרנדומליות שהקבוץ הראשון יכיל.
כל קובץ (חוץ מהקובץ הראשון) יכיל כמות כפולה של מילים מהקובץ שהגיע מלפניו.
הסקריפט ירשום ב- console את שם כל קובץ שהוא יצר ואת כמות המילים שנרשמו בו.
דוגמא:
הפקודה הבאה
node file_generator 3 4
תיצור 3 קבצים כאשר הקובץ הראשון יכיל 4 מילים, הקובץ השני יכיל 8 מילים והקובץ השלישי יכיל 16 מילים.
הדגש: הסקריפט צריך להיות אסינכרוני.
"`.split(" ");

const [filesNumber, wordsNumber] = process.argv.slice(2);

for (let i = 0; i < filesNumber; i++) {
  createFile(i, generateText(i));
}

function generateText(i) {
  let str = "";

  for (let j = 0; j < wordsNumber * (i + 1); j++) {
    str += words[parseInt(Math.random() * (words.length - 1))] + "\n";
  }

  return str;
}

function createFile(i, str) {
  const fileName = `${i + 1}.txt`;

  fs.writeFile(`./created_files/${fileName}`, str, (err) => {
    if (err) return console.log(err);

    console.log(fileName + " created");
  });
}
