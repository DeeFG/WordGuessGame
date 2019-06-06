const list = ["html", "java", "python"];
let word = "";
let numGuess = 0;
const maxnumGuess = 10;
let letterGuessed = [];
let dashes = [];


startGame();

function startGame() {
    //choose  a random word
    const index = Math.floor(Math.floor() * list.length);
    word = list[index];
    //update guesses
    numGuess = 0;
    // reset letters guessed
    letterGuessed = [];
    // word dashes ...split makes an array of each letter
    // .map takes takes one array format  to another array firmat  
   dashes = word.split("").map(char => "_");
   //char ->  for every character return a dash 
   // . map use "_" as a place holder for a letter in the array

   console.log(`word is: ${dashes}` )

};



