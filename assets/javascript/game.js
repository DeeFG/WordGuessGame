var wordtoguess = document.getElementById("wordtoguess");

var countries = ["spain", "croatia", "fiji", "guam"];
///////-------------chooseing a letter-------------------
/// user press any letter to find computer choice BREAK       
var computerchoice = countries[Math.floor(Math.random() * countries.length)];
//// if its a letter from the computer choice
/// computer dispalys the number at appropriate  blank space
var chances = 5 ;
var lettersRemain = computerchoice.length;
var blankAnswer = [];
var userwrongguesses = [];
var correctguess = [];

for (var i = 0; i < computerchoice.length; i++) {
  blankAnswer.push("_"); // insert/push blank space for eash character
wordtoguess.textContent = blankAnswer.join(" ");

// 
if (userText === computerchoice.charAt([i])) { 
correctguess.push(" HELLO");
}
}



var userText = document.getElementById("user-text");
document.onkeyup = function (event) {
  userwrongguesses.push(event.key);
    userText.textContent = userwrongguesses;


for (var j = 0; j < computerchoice.length; j++)
  if (computerchoice[j] === userText) {
      blankAnswer[j] = userText;
      lettersRemain--;
      console.log(j);
  }
}


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



// for (var i = 0; i < countries.length; i++)
//   if (computerchoice || "spain" || "croatia" || "fiji" || "guam") {
//     console.log(blankanswer[i]);
//   };

// ////////// selecting a key in dashes
// for (var i = 0; i < countryname.length; i++)
//   if (computerchoice === "spain" && userText === "s") {
//     console.log("correct");
//   }

//         /////----------- SCORE CALCULATIONS------------------------------------


