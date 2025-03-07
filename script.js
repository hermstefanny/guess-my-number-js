"use strict";
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
*/

//Creating the number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Creating the mutable score
let score = 20;
let highScore = 0;

//Function penalizing the wrong Guess
function wrongGuess() {
  score--;
  document.querySelector(".score").textContent = score;
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
    document.querySelector(".message").textContent = "No number!";
  }

  //Second Scenario: Guess is correct
  else if (guess === secretNumber) {
    //assigning the number to the corresponding HTMl element
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "Great guess! You win!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //Third Scenario: Guess is high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess is too high";
      wrongGuess();
    } else {
      document.querySelector(".message").textContent = "Sorry! you lose!";
    }
  }

  //Fourth Scenario: Guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess is too low";
      wrongGuess();
    } else {
      document.querySelector(".message").textContent = "Sorry! you lose!";
    }
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
  document.querySelector(".message").textContent = "Start guessing...";
});
