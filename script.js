"use strict";

//Creating the number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Creating the mutable score
let score = 20;
let highScore = 0;

//Function penalizing the wrong Guess
function wrongGuess(messageString) {
  if (score > 1) {
    displayMessage(messageString);
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("Sorry! You lose!");
  }
}

//This is the event listener for the Check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //Game Logic implementation:
  //First Secneario: Guess is 0
  //This is the action to take when the guess does not exist.
  //As we want something to happen, we reverse the value with the ! operator
  if (!guess) {
    displayMessage("No number!");
  }

  //Second Scenario: Guess is correct
  else if (guess === secretNumber) {
    //assigning the number to the corresponding HTMl element
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Great guess! You win!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //Third Scenario: Guess is high
  else if (guess != secretNumber) {
    const messageShown =
      guess > secretNumber ? "Guess is too high" : "Guess is too low";
    wrongGuess(messageShown);
  }
});

//This is the event listener for the Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
});
function displayMessage(message) {
  return (document.querySelector(".message").textContent = message);
}
