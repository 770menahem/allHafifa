require("dotenv").config();
const fs = require("fs");
const oneLinerJoke = require("one-liner-joke");

const minJokesNum = 50;
const jokesNum = process.env.JOKE_AMOUNT || minJokesNum;
const jokesSubject = process.env.JOKE_SUBJECT;

if (jokesNum < minJokesNum) {
  return console.log(`minimum jokes number is 50 (and not ${jokesNum})`);
}

const jokes = [];

while (jokes.length != jokesNum) {
  const randomJoke = oneLinerJoke.getRandomJokeWithTag(jokesSubject);

  if (!randomJoke.body) {
    return console.log(`${jokesSubject} is not valid subject`);
  }

  if (!jokes.includes(randomJoke.body)) {
    jokes.push(randomJoke.body);
  }
}

const text = jokes.join("\n");
const fileName = "myJoke.txt";

fs.writeFile(`./${fileName}`, text, (err) => {
  if (err) return console.log(err);

  console.log(`${fileName} created`);
});
