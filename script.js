"use strict";

// computer random choice
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoices = ['scissors', 'rock', 'paper'];
    console.log(`Computer choice: ${computerChoices[randomNumber]}`);
    return computerChoices[randomNumber];
  }