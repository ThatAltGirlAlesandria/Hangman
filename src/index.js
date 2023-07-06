import './css/styles.css';
import { Hangman } from './hangman.js';

const game = new Hangman();

const startGameButton = document.getElementById("startGame");
const reloadGameButton = document.getElementById("reloadGame");
const wordDisplay = document.getElementById("wordDisplay");
const letters = document.querySelectorAll(".letter");
const winningMessage = document.getElementById("winningMessage");
const guessCount = document.getElementById("guessCount");

startGameButton.addEventListener("click", startGame);
reloadGameButton.addEventListener("click", reloadGame);
letters.forEach((letter) => {
  letter.addEventListener("click", handleLetterClick);
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
  const letter = event.target.innerText;
  const letterFound = game.checkLetter(letter);
  updateWordDisplay();
  disableElement(event.target);

  if (letterFound && game.isWordComplete()) {
    showWinningMessage("Bravo! You've transcended mere mortals and conquered the Galactic Hangman. The universe now recognizes you as the ultimate 'Linguistic Jedi Master.' May the words be with you!");
    enableElement(reloadGameButton);
    disableLetters();
  } else if (!letterFound && game.guesses === 0) {
    showWinningMessage("Alas, the celestial forces were not in your favor today. You've stumbled upon the cosmic riddle and failed to decode it. Fear not, young padawan, for the path to lexical enlightenment is paved with countless failed attempts.");
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
  element.style.backgroundColor = "transparent";

}

function enableElement(element) {
  element.disabled = false;
  element.style.backgroundColor = "";
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
