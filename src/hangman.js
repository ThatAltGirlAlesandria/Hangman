//declaring planet names as words
const words = ['pluto', 'mars', 'jupiter', 'earth', 'mercury', 'venus', 'uranus', 'neptune', 'saturn']

function Hangman (words, guesses) { 
    //properties 
    this.words = words; 
    this.guesses = guesses;
    this.guessesRemaining = guesses;
    this.wins = 0; 
    this.gamesPlayed = 0;

    //methods 

    //method to adjust wins 
    this.updateWins += this.wins; 
    this.gamesPlayed += this.gamesPlayed; 

    const winString = `${this.gamesPlayed} game(s) won of ${this.wins} played.`
//find container to display win message - add .container_wins in UI?
    document.querySelector(".container__wins").textContent = winString
}

    //guessing method
    this.updateGuessesRemaining = () => {
        document.querySelector('.guesses-container').innerHTML = `Guesses Remaining: ${this.guessesRemaining}`; 

        if  (this.guessesRemaining === 0) {
            this.updateWins(1, 0);
            alert('Game Over!');
            this.startNewHangman();
        }
    }

    //starts new hangman game
    this.startNewHangman = () => {
        this.guessesRemaining = this.guesses;
        this.updateGuessesRemaining();
        this.updateWins(0, 0);
    }