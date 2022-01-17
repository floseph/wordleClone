const fs = require("fs");
const readLineSync = require("readline-sync");

const words = JSON.parse(fs.readFileSync("fiveLetterWords.json"));

const randomInt = Math.floor(Math.random() * words.length);
const randomWord = words[randomInt];
console.log(randomWord);

let guess = "";
let guessCounter = 0;
while (guessCounter > 6){
  guess = readLineSync;
  console.log(guess)
}

