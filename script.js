"use strict";

const btns = document.querySelectorAll(".btn");

let playerScore = 0,
  computerScore = 0,
  drawScore = 0;

// computer random choice
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoices = ["scissors", "rock", "paper"];
  console.log(`Computer choice: ${computerChoices[randomNumber]}`);
  return computerChoices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    ++drawScore;
    return "draw";
  }

  if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    ++playerScore;
    return `${playerSelection} beats ${computerSelection} player win`;
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    ++computerScore;
    return `${computerSelection} beats ${playerSelection} player lose`;
  }
}

// ///////////////////////////////////////////////////////////////////////////////////

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target.id);
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  });
});

// function game() {
// }

// game();
