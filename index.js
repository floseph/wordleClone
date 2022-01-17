const fs = require("fs");
const readLineSync = require("readline-sync");

const words = JSON.parse(fs.readFileSync("fiveLetterWords.json"));

const randomInt = Math.floor(Math.random() * words.length);
const randomWord = words[randomInt];
console.log(randomWord);

let guess = "";
let guessCounter = 0;

while (guessCounter < 3){
  const guess = readLineSync.question("guess a 5 letter word\n");

  if(guess.length != 5){
    continue
  }

  if(!(words.includes(guess))){
    console.log('not a word')
    continue
  }

  guessCounter++
}

