import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './hangman.js';

for (let i=0;i<26;i++){
  const element = document.querySelector(`#letter${i}`);
  element.addEventListener("click", getLetter);
}

function getLetter(e){
  const input = this.innerHTML;
  this.style.visibility='hidden';
  
}

//showing images based off of attempts left.
if (attempts === 6) {
  hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png');
  } else if (attempts === 5) {
  hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png');
  } else if (attempts === 4) {
  hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png');
  } else if (attempts === 3) {
  hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png');
  } else if (attempts === 2) {
  hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png');
  } else if (attempts === 1) {
  hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png');
  } else if (attempts === 0) {
  hangmanImg.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png');
  }