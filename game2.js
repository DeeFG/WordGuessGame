// http://danorlovsky.tech/Articles/Javascript-Hangman-Tutorial 

var words = ["spain", "croatia", "germany", "guam"];
//maxtries
var chances = 5; 
//guessedlettesr

// remaingguess
var lettersRemain = computerchoice.length;
var gameStart = ;
// current word index 

var choicearray = computerchoice.split([]);
var loss = 0;
var win = 0;

function resetTheGame() {
  lettersRemain = chances;
  gameStart = false;

computerchoice = Math.floor(Math.random() * (words.length)); // currentword
guessedLetters = []; // slot for guessed 
correctLetters = []; //guessingword
document.getElementById("hangmanimage").src="";
// selecting random word by 
for (var i = 0; i < words[computerchoice].length; i++ ){
  correctLetters.push("_");
}
////// MAY NOT USE ?????
document.getElementById("pressKeyTryAgain").style.cssText= "display: none";
document.getElementById("gameover-image").style.cssText = "display: none";
document.getElementById("youwin-image").style.cssText = "display: none";
//////MAY NOT USE?????

updateDispaly(); // updates page with new info 
};
function updateDisplay() {
  document.getElementById("Wins").innerText = "wins";
  document.getElementById("computerchoice").innerText ="";

  for(var i= 0; i< correctLetters.length; i++) {
document.getElementById("computerchoice").innerText += correctLetters[i];
  }
document.getElementById("lettersRemain").innerText = lettersRemain;
    document.getElementById("correctLetters").innerText = guessedLetters;

    if(lettersRemain <= 0) {
        alert("gameover");
        done = true;
    }
};

document.onkeyup = fuunction(event) {
  if(done) {
    resetTheGame();
    done = false;
  } else {

    if(event.keyCode >= 65 && event.keycode <= 90) {
      PRESSGUESS(event.key.toLowerCase());
    }
    
  }
};

function PRESSGUESS(letter) {
  if(lettersRemain > 0) {
    if (!gameStarted) {
      gameStarted =true;
    }
    if (correctLetters.indexOf(letter)=== -1){
      correctLetters.push(letter);
      checkGuess(letter);

    }
  }
  updateDisplay();
  checkWin();
};

function checkGuess(letter) {
  var blankSpace = [];

  for (var i = 0; i < words[computerchoice].length; i++ ){
    if(words[computerchoice][i] === letter)
    blankSpace.push(i);
  }
}
if (blankSpace.length <=0) {
  lettersRemain--;
  updateHangmanImage();
} else {
  for(var i = 0; i < blankSpace.length; i++) {
    correctLetters[blankSpace[i]] = letter ;
  }
};

functin checkWin() {
  if(guessedLetters.indexOf("_") === -1) {
    document.getElementById("youwin-image").style.cssText = "display: block";
    document.getElementById("pressKeyTryAgain").style.cssText= "display: block";
    win++
    done = true;
  }
};
