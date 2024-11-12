// Available choices
const options = ["rock", "paper", "scissors"];

/**
 * Returns a randomly selected option.
 * @returns Random element from the `options` array.
 */
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Determines the winner between a player and computer based on their selections.
 * @param {string} playerSelection - Represents the choice made by the player.
 * @param {string} computerSelection - Represents the choice made by the computer.
 * @returns A message based on the outcome of a round. The possible return values are:
 * 1. "It's a tie!" if both the player and computer make the same selection.
 * 2. `Computer choose ${computerSelection}. You win!` if the player wins the round.
 * 3. `Computer choose ${computerSelection}. You loose!` if the player loose the round.
 */
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `Computer choose ${computerSelection}. You win!`;
  } else {
    return `Computer choose ${computerSelection}. You lose!`;
  }
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let continueGame = true;

  // Game loop
  while (continueGame) {
    const playerSelection = prompt("Choose rock, paper, or scissors");

    // If the user selects `cancel` in the middle of the game,
    // ask if they want abandon
    if (playerSelection == null) {
      let abandon = confirm("Abandon the game?");
      if (abandon) {
        alert("Thanks for playing!");
        break;
      } else {
        continue;
      }
    }

    // Verifies if the player selection is valid
    // If not, terminate the game
    if (!options.includes(playerSelection)) {
      alert("Disqualified for breaking the rules");
      break;
    }

    // Get computer selection
    const computerSelection = getComputerChoice();

    // Play round and display results
    alert(playRound(playerSelection, computerSelection));

    // Ask if the user wants to play again
    continueGame = confirm("Play again?");
  }

  alert("Thanks for playing!");
});
