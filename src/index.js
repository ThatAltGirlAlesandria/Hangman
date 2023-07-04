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