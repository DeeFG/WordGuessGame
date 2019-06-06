
// var win = document.getElementById("win");
// var loss = document.getElementById("loss");
// var userText = document.getElementById("user-text");
// var wordtoguess = document.getElementById("wordtoguess");
// var chanceText = document.getElementById("chances");

// /// randomized word
// var words = ["afghanistan",
//   , "albania",
//   , "algeria"
//   , "angola"
//   , "argentina"
//   , "armenia"
//   , "aruba"
//   , "australia"
//   , "austria"
//   , "bahamas"
//   , "bahrain"
//   , "bangladesh"
//   , "barbados"
//   , "belarus"
//   , "belgium"
//   , "belize"
//   , "benin"
//   , "bolivia"
//   , "bosnia "
//   , "botswana"
//   , "brazil"
//   , "brunei"
//   , "bulgaria"
//   , "burma"
//   , "burundi"
//   , "cambodia"
//   , "cameroon"
//   , "canada"
//   , "cabo verde"
//   , "chad"
//   , "chile"
//   , "china"
//   , "colombia"
//   , "comoros"
//   , "costa rica"
//   , "croatia"
//   , "cuba"
//   , "curacao"
//   , "cyprus"
//   , "czechia"
//   , "denmark"
//   , "djibouti"
//   , "dominica"
//   , "dominican republic"
//   , "ecuador"
//   , "egypt"
//   , "el salvador"
//   , "estonia"
//   , "eswatini"
//   , "ethiopia"
//   , "fiji"
//   , "finland"
//   , "france"
//   , "gabon"
//   , "gambia"
//   , "georgia"
//   , "germany"
//   , "ghana"
//   , "greece"
//   , "grenada"
//   , "guatemala"
//   , "guinea"
//   , "guyana"
//   , "haiti"
//   , "holy see"
//   , "honduras"
//   , "hong kong"
//   , "hungary"
//   , "iceland"
//   , "india"
//   , "indonesia"
//   , "iran"
//   , "iraq"
//   , "ireland"
//   , "israel"
//   , "italy"
//   , "jamaica"
//   , "japan"
//   , "jordan"
//   , "kazakhstan"
//   , "kenya"
//   , "kiribati"
//   , "korea, north"
//   , "korea, south"
//   , "kosovo"
//   , "kuwait"
//   , "kyrgyzstan"
//   , "laos"
//   , "latvia"
//   , "lebanon"
//   , "lesotho"
//   , "liberia"
//   , "libya"
//   , "liechtenstein"
//   , "lithuania"
//   , "luxembourg"
//   , "macau"
//   , "madagascar"
//   , "malawi"
//   , "malaysia"
//   , "maldives"
//   , "mali"
//   , "malta"
//   , "mauritania"
//   , "mauritius"
//   , "mexico"
//   , "micronesia"
//   , "moldova"
//   , "monaco"
//   , "mongolia"
//   , "montenegro"
//   , "mozambique"
//   , "namibia"
//   , "nauru"
//   , "nepal"
//   , "nicaragua"
//   , "niger"
//   , "nigeria"
//   , "norway"
//   , "pakistan"
//   , "palau"
//   , "panama"
//   , "paraguay"
//   , "peru"
//   , "philippines"
//   , "poland"
//   , "portugal"
//   , "qatar"
//   , "romania"
//   , "russia"
//   , "rwanda"
//   , "samoa"
//   , "senegal"
//   , "serbia"
//   , "seychelles"
//   , "sierra leone"
//   , "singapore"
//   , "sint maarten"
//   , "slovakia"
//   , "slovenia"
//   , "somalia"
//   , "south africa"
//   , "southkorea"
//   , "spain"
//   , "sri lanka"
//   , "sudan"
//   , "suriname"
//   , "sweden"
//   , "switzerland"
//   , "syria"
//   , "taiwan"
//   , "tajikistan"
//   , "tanzania"
//   , "thailand"
//   , "timor-leste"
//   , "tonga"
//   , "trinidad"
//   , "tobago"
//   , "turkey"
//   , "turkmenistan"
//   , "uganda"
//   , "ukraine"
//   , "united kingdom"
//   , "uruguay"
//   , "uzbekistan"
//   , "vanuatu"
//   , "venezuela"
//   , "vietnam"
//   , "yemen"
//   , "zambia"
//   , "zimbabwe"];


// // array of differdent words
// var computerchoice = words[Math.floor(Math.random() * words.length)];
// ///space where word is guesses
// var lettersRemain = computerchoice.length;  //remaining letters
// var blankAnswer = []; // slots for a randomized anwer
// var userwrongguesses = []; // slot for guessed letters 
// var choicearray = computerchoice.split([]);

// var chances = 10; //counts correct letters
// var guessedletter = 0;
// var loss = 0;
// var wins = 0;
// var match = false;
// chanceText.textContent = chances;

// for (var i = 0; i < computerchoice.length; i++) {
//   blankAnswer.push("_"); //push( adds on) blank sdashes for each character
//   wordtoguess.textContent = blankAnswer.join(" ");// add space instead of commas  betweeen blank dashes  
//   chances = 10;
  
// }

// document.onkeyup = function (event) {
//   if (event.keyCode >= 65 && event.keyCode <= 90) { /// code to use letters only 
//     userwrongguesses.push(event.key);
//     userText.textContent = userwrongguesses.join(" "); // linking usertext input to the line where wrong guesses will go 
//     // }
//     for (var i = 0; i < choicearray.length; i++) {  // loops all the letters
//       if (choicearray[i] === event.key) {
//         blankAnswer[i] = choicearray[i];
//         wordtoguess.textContent = blankAnswer.join(" ");
//         match = true;

//       }
//     }

//     if (!choicearray.includes(event.key)) {
//       chances--;
//       chanceText.textContent = chances;
//     if (chances <= 0) { 
//       alert("loose"); 
//       loss++;
//     }
//     if( !blankAnswer === choicearray){
//       alert("WIN")
//     }
//     }
//   }
// };


// --------------------------------------


var win = document.getElementById("win");
var loss = document.getElementById("loss");
var userText = document.getElementById("user-text");
var wordtoguess = document.getElementById("wordtoguess");
var chanceText = document.getElementById("chances");
var computerchoice1 = document.getElementById("user-text");


/// randomized word
var words = ["afghanistan",

    , "yemen"
    , "zambia"
    , "zimbabwe"];

/// array of differdent words
var computerchoice = words[Math.floor(Math.random() * words.length)];
///space where word is guesses
var lettersRemain = computerchoice.length;  //remaining letters
var blankAnswer = []; // slots for a randomized anwer
var userwrongguesses = []; // slot for guessed letters 
var choicearray = computerchoice.split([]);

var chances = 10; //counts correct letters
var guessedletter = 0;
var losses = 0;
var wins = 0;
var match = false;
chanceText.textContent = chances;

for (var i = 0; i < computerchoice.length; i++) {
  blankAnswer.push("_"); //push( adds on) blank sdashes for each character
  wordtoguess.textContent = blankAnswer.join(" ");// add space instead of commas  betweeen blank dashes  
  chances = 10;
}

document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) { /// code to use letters only 
    userwrongguesses.push(event.key);
    userText.textContent = userwrongguesses.join(" "); // linking usertext input to the line where wrong guesses will go 
    // }
    for (var i = 0; i < choicearray.length; i++) {  // loops all the letters
      if (choicearray[i] === event.key) {
        blankAnswer[i] = choicearray[i];
        wordtoguess.textContent = blankAnswer.join(" ");
        match = true;

      }
    }

    if (!choicearray.includes(event.key)) {
      chances--;
      chanceText.textContent = chances;
    if (chances <= 0) { 
      alert("loose"); 
    }
    if( !blankAnswer === choicearray){
      alert("WIN")
    }
    }
  }
};