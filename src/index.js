import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//declaring new words
const words = ['Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'];

function Hangman (words, guesses) { 
    //properties 
    this.words = words; 
    this.guesses = guesses;
    this.guessesRemaining = guesses;
    this.wins = 0; 
    this.gamesPlayed = 0

    //methods 

    //method to adjust wins 
    this.updateWins += this.wins; 
    this.gamesPlayed += this.gamesPlayed; 

    const winString = `${this.gamesPlayed} game(s) won of ${this.wins} played.`
}