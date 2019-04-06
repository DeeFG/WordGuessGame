var computerChoices = ["zebra", "pig", "mouse"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var blank = [];
for (var i = 0; 0 < computerChoices.length; i++) {
    blank.push("_");    
}
document.onkeyup = function (event) {
    
}
// // Creating variables to hold the number of wins, losses, and ties. They start at 0.
// var wins = 0;
// var losses = 0;
// var ties = 0;
// // Create variables that hold references to the places in the HTML where we want to display things.
// var directionsText = document.getElementById("directions-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var tiesText = document.getElementById("ties-text");
// // This function is run whenever the user presses a key.
// document.onkeyup = function (event) {
//     var userGuess = event.key;
//     if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
//         if ((userGuess === "r" && computerGuess === "s") ||
//             (userGuess === "s" && computerGuess === "p") ||
//             (userGuess === "p" && computerGuess === "r")) {
//             wins++;
//         } else if (userGuess === computerGuess) {
//             ties++;
//         } else {
//             losses++;
//         }
//         // Hide the directions
//         directionsText.textContent = "";







        // Hide the directions
        directionsText.textContent = "";
        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
