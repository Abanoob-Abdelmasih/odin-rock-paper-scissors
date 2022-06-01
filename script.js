"use strict";

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

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = "ROCK".toLowerCase();
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }

  console.log(
    `Player score: ${playerScore} - Computer score: ${computerScore} - Draws: ${drawScore}`
  );
}

game();
