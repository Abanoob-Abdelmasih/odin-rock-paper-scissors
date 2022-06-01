"use strict";

// computer random choice
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoices = ["scissors", "rock", "paper"];
  console.log(`Computer choice: ${computerChoices[randomNumber]}`);
  return computerChoices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return "draw";
  }

  if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    return `${playerSelection} beats ${computerSelection} player win`;
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return `${computerSelection} beats ${playerSelection} player lose`;
  }
}




const playerSelection = "ROCK".toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
