const fs = require("fs");
const readLineSync = require("readline-sync");

const words = JSON.parse(fs.readFileSync("fiveLetterWords.json"));

const randomInt = Math.floor(Math.random() * words.length);
const randomWord = words[randomInt];
console.log(randomWord);

let guessCounter = 0;
const attempts = readLineSync.question('how many attempts would you like?\n')

const correctLetters = []
const hintLetters = []

while (guessCounter < attempts){
  const guess = readLineSync.question("guess a 5 letter word\n");

  if(guess.length != 5){
    console.log('enter a word with 5 letters!')
    continue
  }

  if(!(words.includes(guess))){
    console.log(`${guess} is not a word`)
    continue
  }

  const wordSplit = [...randomWord]
  const guessSplit = [...guess]
  

  for(let i = 0; i < wordSplit.length; i++){
    if(wordSplit[i] === guessSplit[i]){
      correctLetters[i] = guessSplit[i]
    }
  }

  for(i of guessSplit){
    if(wordSplit.includes(i) && !(correctLetters.includes(i)) && !(hintLetters.includes(i))){
      hintLetters.push(i)
    }
  }

  //5 is hard coded because we don't know how long the array is \
  //'in' operator allows access to holes in array
  for(let i = 0; i < 5; i++){
    if(!(i in correctLetters)){
      correctLetters[i] = '?'
    }
  }

  console.log(`Your guess: ${guess}`);
  console.log(`You got these letters in the correct place: ${correctLetters}`)
  console.log(`You got these letters correct but in the wrong place: ${hintLetters}`)

    
  guessCounter++;

  if(!(correctLetters.includes('?'))){
    console.log(`congrats! You won in ${guessCounter} guesses!`)
  }  
  
}

console.log("game over")

