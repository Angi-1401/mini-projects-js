/**
 * Checks if the input is a valid number between 1 and 100, returning the number if valid or
 * displaying an alert message if invalid.
 * @param {number} input - The function takes an `input` parameter and performs the following validations:
 * @returns The number `n` if the input is a valid number between 1 and 100.
 * If the input is null or not a valid number, it will return null or false respectively.
 */
function validateInput(input) {
  if (input == null) {
    return null;
  }

  let n = Number(input);
  if (isNaN(n) || n < 1 || n > 100) {
    alert(
      "If you're reading this, is because you're trying to put an invalid number, and that's not right."
    );
    return false;
  }

  return n;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let continueGame = true;

  // Main loop
  while (continueGame) {
    let number = Math.floor(Math.random() * (100 + 1)); // Random number between 1 and 100
    let attempts = 6;

    // Game loop
    for (let i = 0; i < attempts; i++) {
      let guess = prompt(`Guess a number between 1 and 100`);

      // If the user selects `cancel` in the middle of the game,
      // ask if they want to give up
      if (guess == null) {
        let abandon = confirm("Do you want to give up?");
        if (abandon) {
          alert("Game over!");
          break; // Terminate game
        } else {
          continue;
        }
      }

      // Validate input
      // If the input is invalid, decrement the counter
      guess = validateInput(guess);
      if (guess == false) {
        i--;
        continue;
      }

      // Check if the guess is correct
      if (guess == number) {
        alert("You guessed the number!");
        break;
      } else if (guess > number) {
        alert("Too high!");
      } else {
        alert("Too low!");
      }

      // Display remaining attempts
      alert(`You have ${attempts - i - 1} attempts left`);

      // If this is the last attempt, end the game
      if (i == attempts - 1) {
        alert("Game over!");
      }
    }

    // Ask if the user wants to play again
    continueGame = confirm("Play again?");
  }

  alert("Thanks for playing!");
});
