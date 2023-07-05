import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './hangman.js';

const game = {
  secretWords: ['pluto', 'mars', 'jupiter', 'earth', 'mercury', 'venus', 'uranus', 'neptune', 'saturn'],
  secretWord: "",
  placeholders: [],
  guesses: 6,

  newGame() {
    const randomIndex = Math.floor(Math.random() * this.secretWords.length);
    this.secretWord = this.secretWords[randomIndex];
    this.placeholders = Array(this.secretWord.length).fill("_");
    this.guesses = 6;
    console.log("Game");
  },

  checkLetter(letter) {
    const letterFound = this.secretWord.includes(letter);
    if (!letterFound) {
      this.guesses--;
    } else {
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i] === letter) {
          this.placeholders[i] = letter;
        }
      }
    }
    return letterFound;
  },

  isWordComplete() {
    return !this.placeholders.includes("_");
  },
};


// ui logic 

const startGameButton = document.getElementById("startGame");
const reloadGameButton = document.getElementById("reloadGame");
const wordDisplay = document.getElementById("wordDisplay");
const letters = document.querySelectorAll(".letter");
console.log(letters)
const winningMessage = document.getElementById("winningMessage");
const guessCount = document.getElementById("guessCount");

startGameButton.addEventListener("click", startGame);
console.log('startGame', startGame)
reloadGameButton.addEventListener("click", reloadGame);
letters.forEach((letter) => {
  letter.addEventListener("click", handleLetterClick);
  console.log('letter')
});

function startGame() {
  game.newGame();
  updateWordDisplay();
  disableElement(startGameButton);
  enableElement(reloadGameButton);
  enableLetters();
  hideMessage();
  updateGuessCount();
}

function handleLetterClick(event) {
  if (game.guesses === 0) return;
  console.log("handle")
  const letter = event.target.innerText;
  const letterFound = game.checkLetter(letter);
  updateWordDisplay();
  disableElement(event.target);

  if (letterFound && game.isWordComplete()) {
    showWinningMessage("Congratulations! You guessed the word.");
    enableElement(reloadGameButton);
    disableLetters();
  } else if (!letterFound && game.guesses === 0) {
    showWinningMessage("Game Over! You ran out of guesses.");
    enableElement(reloadGameButton);
    disableLetters();
  }
  updateGuessCount();
}

function reloadGame() {
  location.reload();
}

function updateWordDisplay() {
  wordDisplay.textContent = game.placeholders.join(" ");
}

function disableElement(element) {
  element.disabled = true;
}

function enableElement(element) {
  element.disabled = false;
}

function enableLetters() {
  letters.forEach((letter) => {
    enableElement(letter);
    letter.classList.remove("chosen");
  });
}

function disableLetters() {
  letters.forEach((letter) => {
    disableElement(letter);
  });
}

function showWinningMessage(text) {
  winningMessage.textContent = text;
  winningMessage.style.display = "block";
  setTimeout(reloadGame, 10000);
}

function hideMessage() {
  winningMessage.style.display = "none";
}

function updateGuessCount() {
  guessCount.textContent = game.guesses;
}

letters.forEach((letter) => {
  letter.addEventListener("click", handleLetterClick);
  letter.style.cursor = "pointer";
});