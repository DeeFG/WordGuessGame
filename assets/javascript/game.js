

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
var correctguess = [];
var lettermatch = computerchoice.charAt(i < computerchoice.length);
var chances = 10
/// user press any letter to find computer choice BREAK  

/// computerchoice  dispalys the number at appropriate  blank space
for (var i = 0; i < computerchoice.length; i++) {
  blankAnswer.push("_"); //push( adds on) blank sdashes for each character
  wordtoguess.textContent = blankAnswer.join(" ");// add space instead of commas  betweeen blank dashes
}




var userText = document.getElementById("user-text"); ///when user press key
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    userwrongguesses.push(event.key);     //the wrong anwer is logged on top like
    userText.textContent = userwrongguesses.join(" "); // linking usertext input to the line where wrong guesses will go 

  }
  for (var i = 0; i < computerchoice.length; i++)   // loops all the letters

    if (computerchoice.charAt(i) === " ") {
      blankAnswer += " ";
    } else {
      blankAnswer += "_";
    }
  // lettersRemain--;




  //     if (lettermatch === [j] || lettermatch === ["/"]) {
  //       blankAnswer += lettermatch;
  //     } else {
  //       blankAnswer += "_";
  //     }


  // if (event = lettermatch) {
  //   correctguess.push(lettermatch);
  //   wordtoguess.textContent = blankAnswer.join(" ")
  //   console.log(lettermatch);
  // }



  // expected output: "The character at index 4 is q"
  ///////-------------chooseing a letter-------------------
  /// computer decided if it is a letter from the computer choice length


  ///  else  display letter on screen and have it stay 


  ///---------------- is guess right or wrong -------------
  //if guess is wrongy alert() or document.write "GUESS AGAIN"
  //when GUESS AGAIN appear subtract -1 from starting chances;

  //----------------win or loose---------------------------
  // LOOP until last letter is found by userText
  /// OR if  chances === 0
  //if  last letter is found and chanced are >=1 
  // DISPLAY " YOU WIN"
  // add 1 point to winner sectionw hen display " you win" 
  // if  chances === < 1
  //add 1 point to losses  display "YOU LOOSE TRY ANOTHER WORD"
  // when 1 point added to WIN || LOSS  generate a new  computer choice


  // /// the index the computer choices
  // /// count the letters in the coumputer choice
  // var countryname = computerchoice.length;
  // /// visualize the blank slots (--------------need review--------------)



  // /// (--------------need review--------------)
  // /// user select key



  // for (var i = 0; i < words.length; i++)
  //   if (computerchoice || "spain" || "croatia" || "fiji" || "guam") {
  //     console.log(blankanswer[i]);
  //   };

  // ////////// selecting a key in dashes
  // for (var i = 0; i < countryname.length; i++)
  //   if (computerchoice === "spain" && userText === "s") {
  //     console.log("correct");
  //   }

  //         /////----------- SCORE CALCULATIONS-------------------------------
  //var guessesLeft = 9;

  document.onkeypress = function (keyPressed) {
    var keyPressed = keyPressed || window.event,
      charCode = keyPressed.keyCode || keyPressed.which,
      chances = String.fromCharCode(charCode);

    // var userGuess = prompt("What word do you guess?");
    // var userGuess = words.split('');
    // var userGuess
    // if (words.indexOf(userGuess) > -1) {
    // 	alert("Your guess is correct.")
    // }else {
    // // 	alert("Your guess is wrong.")
    // // }

    // document.getElementById("chances").innerHTML += chances;


    // guessesLeft--;

    // if (guessesLeft === -1) {
    //   alert("You Loose!");
  }

}