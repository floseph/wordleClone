const fs = require("fs")

const words = JSON.parse(fs.readFileSync("fiveLetterWords.json"))

const randomInt = Math.floor(Math.random() * words.length)
const randomWord = words[randomInt]
console.log(randomWord)