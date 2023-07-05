import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './hangman.js';
// ui logic 

const startGameButton = document.getElementById("startGame");
const reloadGameButton = document.getElementById("reloadGame");
const letters = document.querySelectorAll(".letter");
console.log(letters);
const winningMessage = document.getElementById("winningMessage");
const guessCount = document.getElementById("guessCount");

startGameButton.addEventListener("click", startGame);
reloadGameButton.addEventListener("click", reloadGame);
letters.forEach((letter) => {
  letter.addEventListener("click", handleLetterClick);
});

async function startGame() {
  try {
    await game.newGame();
    updateWordDisplay();
    disableElement(startGameButton);
    enableElement(reloadGameButton);
    enableLetters();
    hideMessage();
    updateGuessCount();
  } catch (error) {
    console.error("An error occurred while starting the game:", error);
  }
}
function updateHangmanImage() {
  const hangmanImg = document.getElementById("hangmanImg");

  if (guesses === 6) {
    hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png');
  } else if (guesses === 5) {
    hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png');
  } else if (guesses === 4) {
    hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png');
  } else if (guesses === 3) {
    hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png');
  } else if (guesses === 2) {
    hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png');
  } else if (guesses === 1) {
    hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png');
  } else if (guesses === 0) {
    hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png');
  }
  updateGuessCount()

}

function handleLetterClick(event) {
  if (game.guesses === 0) return;
  const letter = event.target.innerText;
  const letterFound = game.checkLetter(letter);
  updateWordDisplay();
  disableElement(event.target);

  updateHangmanImage();

  if (letterFound && game.isWordComplete()) {
    showWinningMessage("i mean it isnt that hard to get it right, there are only 8 planets. click restart.");
    enableElement(reloadGameButton);
    disableLetters();
  } else if (!letterFound && game.guesses === 0) {
    showWinningMessage("lol, dead.");
    enableElement(reloadGameButton);
    disableLetters();
  }
  updateGuessCount();
}


function reloadGame() {
  location.reload();
}

function updateWordDisplay() {
  const wordDisplay = document.getElementById("wordDisplay");
  wordDisplay.innerHTML = 
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