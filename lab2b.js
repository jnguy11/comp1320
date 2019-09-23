
//Simple function to see whether or not you guessed the correct number.
function guessTheNumber(myGuess) {
    if (myGuess === 30) {
        console.log("You are correct");
    }
    else {
        console.log("Try again!");
    }
}
console.log(guessTheNumber(30));