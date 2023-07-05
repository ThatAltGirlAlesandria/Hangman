index.js:

// for (let i=0;i<26;i++){
//   const element = document.querySelector(`#letter${i}`);
//   element.addEventListener("click", getLetter);
// }

// function getLetter(e){
//   const input = this.innerHTML;
//   this.style.visibility='hidden';
  
// }

// //showing images based off of attempts left.
// if (attempts === 6) {
//   hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png');
//   } else if (attempts === 5) {
//   hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png');
//   } else if (attempts === 4) {
//   hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png');
//   } else if (attempts === 3) {
//   hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png');
//   } else if (attempts === 2) {
//   hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png');
//   } else if (attempts === 1) {
//   hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png');
//   } else if (attempts === 0) {
//   hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png');
//   }


index.html:
<!-- <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hangman</title>
</head>
<body class="body">
  <h1>Hangman Game</h1>
  <id="word-container">
    <h2 id="word-display">
    </h2>
  <div id="guesses-container">
    <h3>Guesses Remaining: <span id="guesses"></span></h3>
  </div>
  <div id="placeholder" class="placeholder">
    <div id="cell0" class="cell"></div>
    <div id="cell1" class="cell"></div>
    <div id="cell2" class="cell"></div>
    <div id="cell3" class="cell"></div>
    <div id="cell4" class="cell"></div>
    <div id="cell5" class="cell"></div>
    <div id="cell6" class="cell"></div>
  </div>
  <br>
  <div class="keyboard">
  <div class="keyboardRow">
    <button class="letter" id="letter0">Q</button>
    <button class="letter" id="letter1">W</button>
    <button class="letter" id="letter2">E</button>
    <button class="letter" id="letter3">R</button>
    <button class="letter" id="letter4">T</button>
    <button class="letter" id="letter5">Y</button>
    <button class="letter" id="letter6">U</button>
    <button class="letter" id="letter7">I</button>
    <button class="letter" id="letter8">O</button>
    <button class="letter" id="letter9">P</button>
  </div>
  <div class="keyboardRow">
    <button class="letter" id="letter10">A</button>
    <button class="letter" id="letter11">S</button>
    <button class="letter" id="letter12">D</button>
    <button class="letter" id="letter13">F</button>
    <button class="letter" id="letter14">G</button>
    <button class="letter" id="letter15">H</button>
    <button class="letter" id="letter16">J</button>
    <button class="letter" id="letter17">K</button>
    <button class="letter" id="letter18">L</button>
  </div>
  <div class="keyboardRow">
    <button class="letter" id="letter19">Z</button>
    <button class="letter" id="letter20">X</button>
    <button class="letter" id="letter21">C</button>
    <button class="letter" id="letter22">V</button>
    <button class="letter" id="letter23">B</button>
    <button class="letter" id="letter24">N</button>
    <button class="letter" id="letter25">M</button>
  </div>
  <button id="newGameBtn">New Game</button>
  <button id="resetGameBtn">Reset Game</button>
</div>
</body>
</html> -->


hangman.js:

// //declaring planet names as words
// const words = ['pluto', 'mars', 'jupiter', 'earth', 'mercury', 'venus', 'uranus', 'neptune', 'saturn']

// function Hangman (words, guesses) { 
//     //properties 
//     this.words = words; 
//     this.guesses = guesses;
//     this.guessesRemaining = guesses;
//     this.wins = 0; 
//     this.gamesPlayed = 0;

//     //methods 

//     //method to adjust wins 
//     this.updateWins += this.wins; 
//     this.gamesPlayed += this.gamesPlayed; 

//     const winString = `${this.gamesPlayed} game(s) won of ${this.wins} played.`
// //find container to display win message - add .container_wins in UI?
//     document.querySelector(".container__wins").textContent = winString
// }

//     //guessing method
//     this.updateGuessesRemaining = () => {
//         document.querySelector('.guesses-container').innerHTML = `Guesses Remaining: ${this.guessesRemaining}`; 


        
//         if  (this.guessesRemaining === 0) {
//             this.updateWins(1, 0);
//             alert('Game Over!');
//             this.startNewHangman();
//         }
//     }

//     //starts new hangman game
//     this.startNewHangman = () => {
//         this.guessesRemaining = this.guesses;
//         this.updateGuessesRemaining();
//         this.updateWins(0, 0);
//     }

//     //added event listeners to each letter button
// const letterButtons = document.querySelectorAll('.letter');
// letterButtons.forEach(Button => {
//     Button.addEventListener('click', () => {
//         const letter = button.textContent;
//         //displays the clicked letter in word display
//         const wordDisplay = document.getElementById('word-display');
//         const placeholders = wordDisplay.getElementsByClassName('placeholder');

//         for (let i = 0; i < placeholders.length; i++) {
//             const placeholder = placeholders[i];
//             if (placeholder.textContent === '__') {
//                 placeholder.textContent = letter;
//                 break;
//             }
//         }
//         // disables button so its not clicked multiple times
//         button.disabled = true;
//     });

//     const keyboardLetter = document.getElementsByClassName('letter');

//     for ()

// });



// const game = {
//     secretWords: ["ALESANDRIA", "ALEJANDRA", "AARON", "JASE", "Pier"],
//     secretWord: "",
//     placeholders: [],
//     lives: 10,
  
//     newGame() {
//       const randomIndex = Math.floor(Math.random() * this.secretWords.length);
//       this.secretWord = this.secretWords[randomIndex];
//       this.placeholders = Array(this.secretWord.length).fill("_");
//       this.lives = 10;
//     },
  
//     checkLetter(letter) {
//       const letterFound = this.secretWord.includes(letter);
//       if (!letterFound) {
//         this.lives--;
//       } else {
//         for (let i = 0; i < this.secretWord.length; i++) {
//           if (this.secretWord[i] === letter) {
//             this.placeholders[i] = letter;
//           }
//         }
//       }
//       return letterFound;
//     },
  
//     isWordComplete() {
//       return !this.placeholders.includes("_");
//     },
//   };
  

// // ui logic 

//   const startGameButton = document.getElementById("startGame");
//   const reloadGameButton = document.getElementById("reloadGame");
//   const wordDisplay = document.getElementById("wordDisplay");
//   const letters = document.querySelectorAll(".letter");
//   const winningMessage = document.getElementById("winningMessage");
//   const livesCount = document.getElementById("livesCount");
  
//   startGameButton.addEventListener("click", startGame);
//   reloadGameButton.addEventListener("click", reloadGame);
//   letters.forEach((letter) => {
//     letter.addEventListener("click", handleLetterClick);
//   });
  
//   function startGame() {
//     game.newGame();
//     updateWordDisplay();
//     disableElement(startGameButton);
//     enableElement(reloadGameButton);
//     enableLetters();
//     hideMessage();
//     updateLivesCount();
//   }
  
//   function handleLetterClick(event) {
//     if (game.lives === 0) return;
  
//     const letter = event.target.innerText;
//     const letterFound = game.checkLetter(letter);
//     updateWordDisplay();
//     disableElement(event.target);
  
//     if (letterFound && game.isWordComplete()) {
//       showWinningMessage("Congratulations! You guessed the word.");
//       enableElement(reloadGameButton);
//       disableLetters();
//     } else if (!letterFound && game.lives === 0) {
//       showWinningMessage("Game Over! You ran out of lives.");
//       enableElement(reloadGameButton);
//       disableLetters();
//     }
//     updateLivesCount();
//   }
  
//   function reloadGame() {
//     location.reload();
//   }
  
//   function updateWordDisplay() {
//     wordDisplay.textContent = game.placeholders.join(" ");
//   }
  
//   function disableElement(element) {
//     element.disabled = true;
//   }
  
//   function enableElement(element) {
//     element.disabled = false;
//   }
  
//   function enableLetters() {
//     letters.forEach((letter) => {
//       enableElement(letter);
//       letter.classList.remove("chosen");
//     });
//   }
  
//   function disableLetters() {
//     letters.forEach((letter) => {
//       disableElement(letter);
//     });
//   }
  
//   function showWinningMessage(text) {
//     winningMessage.textContent = text;
//     winningMessage.style.display = "block";
//     setTimeout(reloadGame, 10000);
//   }
  
//   function hideMessage() {
//     winningMessage.style.display = "none";
//   }
  
//   function updateLivesCount() {
//     livesCount.textContent = game.lives;
//   }
  
//   letters.forEach((letter) => {
//     letter.addEventListener("click", handleLetterClick);
//     letter.style.cursor = "pointer";
//   });
  
styles.css:
/* .keyboard {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.keyboardRow{
  display: flex;
  justify-content: center;
  gap: 10px;
}

.letter {
  padding: 10px;
  font-size: 16px;
  background-color: lightgray;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 2px 6px #000;
  outline: 1.5px solid #000;
}

.letter:hover {
  background-color: darkgray;
}

.letter:focus {
  outline: none;
  background-color: darkgray;
}

  #resetGameBtn {
    background-color: #ff4d4d;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  #resetGameBtn:hover {
    background-color: #e13636;
  }
  
  #resetGameBtn:focus {
    outline: none;
  }

  #newGameBtn {
    background-color: rgb(36, 36, 36);
    color: white;
    font-size: 16px;
    padding: 12px 22px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #newGameBtn, #resetGameBtn {
    width: 150px;
    height: 40px;
    transform: translate(740%, -930%) 
  }
  
  #newGameBtn:hover {
    background-color: #181818;
  }
  
  #newGameBtn:focus {
    outline: none;
  }

  #word-display {
    font-size: 30px; 
  }
  
  .placeholder {
    margin-right: 12px;
    background-color: black;
    color: white;
  }


.body{
  background-image: url('https://4kwallpapers.com/images/walls/thumbs_3t/6275.jpg');
  background-size: cover;
} 

body {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  margin-top: 20px;
  color:azure;
}

h3{
  color:black;
}

#word-container {
  margin-top: 30px;
}

#guesses-container {
  margin-top: 20px;
}

#hangman-container {
  margin-top: 40px;
}

/* #hangman-image {
  width: 300px;
  height: 300px;
} */

/* #input-container {
  margin-top: 30px;
}

#letter-input {
  width: 30px;
}

#guess-button {
  margin-left: 10px;
} */ 




