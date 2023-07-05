export class (`insert class name here`){
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
    2},
  };
}