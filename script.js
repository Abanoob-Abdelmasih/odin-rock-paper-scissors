"use strict";

const btns = document.querySelectorAll(".btn");
const gameStatus = document.querySelector(".game-status");

const backgroundPopup = document.querySelector(".background-popup");
const popupText = document.querySelector(".popup-text");

const playerScoreDisplay = document.querySelector(".player-score-span");
const computerScoreDisplay = document.querySelector(".computer-score-span");

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
    playerScoreDisplay.textContent = ++playerScore;
    if (playerScore === 5) {
      gameEnds(playerSelection);
    }
    return `${playerSelection} beats ${computerSelection} player win`;
  }

  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScoreDisplay.textContent = ++computerScore;
    if (computerScore === 5) {
      gameEnds(computerSelection);
    }
    return `${computerSelection} beats ${playerSelection} player lose`;
  }
}

// ///////////////////////////////////////////////////////////////////////////////////

function gameEnds(player) {
  backgroundPopup.classList.remove("hidden");
  if (player === playerSelection) {
    popupText.textContent = "Player Won";
  } else {
    popupText.textContent = "Computer Won";
  }
}

// ///////////////////////////////////////////////////////////////////////////////////

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    gameStatus.textContent = playRound(playerSelection, computerSelection);
  });
});


