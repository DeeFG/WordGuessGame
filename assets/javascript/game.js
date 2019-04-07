var tries = document.getElementById("tries");
var winText = document.getElementById("wins-text");
var lossText = document.getElementById("losses-text");
var userText = document.getElementById("user-text");
var wordtoguess = document.getElementById("wordtoguess");
/// randomized word
var words = ["spain", "croatia", "germany", "guam"];
// array of differdent words
var computerchoice = words[Math.floor(Math.random() * words.length)];
///space where word is guesses
var chances = 10; //numbe of chances 
var lettersRemain = computerchoice.length;  //remaining letters
var blankAnswer = []; // slots for a randomized anwer
var userwrongguesses = []; // slot for guessed letters 
var choicearray = computerchoice.split([]);
var chances = 7; //counts correct letters
var losses = 0;
var wins = 0;


for (var i = 0; i < computerchoice.length; i++) {
  blankAnswer.push("_"); //push( adds on) blank sdashes for each character
  wordtoguess.textContent = blankAnswer.join(" ");// add space instead of commas  betweeen blank dashes
  chances = 7

}

///when user press key
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) { /// code to use letters only 
    userwrongguesses.push(event.key);
    userText.textContent = userwrongguesses.join(" "); // linking usertext input to the line where wrong guesses will go 
  }
  for (var i = 0; i < choicearray.length; i++) {  // loops all the letters
    if (choicearray[i] === event.key)
      blankAnswer[i] = choicearray[i];
  
      ;
    
  }
  document.getElementById("tries").innerText = chances;
    if(lettersRemain <= 0) {
      alert ("hi")
        done = true;
    }
};



  


