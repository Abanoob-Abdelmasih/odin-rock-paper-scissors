"use strict";

const btns = document.querySelectorAll(".btn");
const gameStatus = document.querySelector(".game-status");

const backgroundPopup = document.querySelector(".background-popup");
const popupText = document.querySelector(".popup-text");

const playerScoreDisplay = document.querySelector(".player-score-span");
const computerScoreDisplay = document.querySelector(".computer-score-span");

const againBtn = document.querySelector(".popup-again-button");

let playerScore = 0,
  computerScore = 0,
  drawScore = 0;

// computer random choice
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerChoices = ["scissors", "rock", "paper"];
  // console.log(`Computer choice: ${computerChoices[randomNumber]}`);
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
      gameEnds("Player");
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
      gameEnds("Computer");
    }
    return `${computerSelection} beats ${playerSelection} player lose`;
  }
}

// ///////////////////////////////////////////////////////////////////////////////////

function gameEnds(user) {
  backgroundPopup.classList.remove("hidden");
  if (user === "Player") {
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

// ////////////////////////////////////////////////////////////////////////////////////

againBtn.addEventListener("click", () => {
  location.reload();
});
