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

    //added event listeners to each letter button
const letterButtons = document.querySelectorAll('.letter');
letterButtons.forEach(Button => {
    Button.addEventListener('click', () => {
        const letter = button.textContent;
        //displays the clicked letter in word display
        const wordDisplay = document.getElementById('word-display');
        const placeholders = wordDisplay.getElementsByClassName('placeholder');

        for (let i = 0; i < placeholders.length; i++) {
            const placeholder = placeholders[i];
            if (placeholder.textContent === '__') {
                placeholder.textContent = letter;
                break;
            }
        }
        // disables button so its not clicked multiple times
        button.disabled = true;
    });
});