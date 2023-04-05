let secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let guessCount = 0;

do {
  guess = prompt("Guess a number between 1 and 100:");
  guessCount++;

  if (guess < secretNumber) {
    alert("Too low! Try again.");
  } else if (guess > secretNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You guessed the secret number in " + guessCount + " tries!");
  }
} while (guess != secretNumber);