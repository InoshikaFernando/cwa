/**
 * Use this function when using javascript online compiler.
 * Because prompt is windows inbuild function
 let randomNumber = Math.round(Math.random(1, 10)*10);
let guessedNumber = prompt("Enter a number between 1 - 10: ")

while(randomNumber != guessedNumber) {
    if(randomNumber < guessedNumber) {
        guessedNumber = prompt("The entered number is too large. Retry: ")
    } else {
        guessedNumber = prompt("The entered number is too small. Retry: ")
    }
}
console.log("Congratulations. You guessed correctly")
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 10) + 1; // 1–10

function askGuess() {
  rl.question("Enter a number between 1 - 10: ", (answer) => {
    let guessedNumber = parseInt(answer);

    if (guessedNumber === randomNumber) {
      console.log("Congratulations! You guessed correctly 🎉");
      rl.close();
    } else if (guessedNumber > randomNumber) {
      console.log("The entered number is too large. Retry.");
      askGuess();
    } else {
      console.log("The entered number is too small. Retry.");
      askGuess();
    }
  });
}

askGuess();


