// Array that contains options for computer to guess
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables to hold number of wins, losses, and guesses left. 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

// Variables that hold references to the places in the html
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var lettersGuessedText = document.getElementById("lettersGuessed-Text");

// Assigns a random value to computerGuess
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);

// Updates lettersGuessed display
function updateLettersGuessed() {
    document.querySelector("#lettersGuessed-text").innerHTML = lettersGuessed.join(", ");
}

// Function that resets the values to begin a new game
function reset() {
    lettersGuessed = [];
    userGuess = "";
    guessesLeft = 9;
    computerGuess = letters[Math.floor(Math.random() * letters.length)];

    console.log(computerGuess);
}

// Collects user input

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

    if (userGuess !== computerGuess) {
        guessesLeft--;
        lettersGuessed.push(userGuess)
        updateLettersGuessed();

        if (guessesLeft === 0) {
            losses++;
            //alert("The correct letter was: " + computerGuess);
            reset();
        }
        
    }

    else if (userGuess === computerGuess) { 
        wins++
        //alert("Great guess! You win!");
        reset();
    }

    else if (lettersGuessed.includes(userGuess)) {
        
    }

    // This text will be displayed in the html
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = guessesLeft;
    lettersGuessedText.textContent = "Letters already guessed: " + lettersGuessed;
}
