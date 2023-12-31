export class Hangman {
  constructor () {
    this.secretWords = ['pluto', 'mars', 'jupiter', 'earth', 'mercury', 'venus', 'uranus', 'neptune', 'saturn', 'moon', 'rover', 'space station', 'galaxy', 'star', 'sun', 'astronaut', 'cosmos', 'space', 'planet', 'waning', 'waxing', 'comet', 'meteor', 'lunar', 'eclipse', 'sky', 'satellite', 'phase', 'starlight', 'telescope', 'universe', 'solstice', 'orbit', 'nebula', 'dust', 'rocket', 'zodiac'];
    this.secretWord = "";
    this.placeholders = [];
    this.guesses = 6;
  }
  newGame() {
    const randomIndex = Math.floor(Math.random() * this.secretWords.length);
    this.secretWord = this.secretWords[randomIndex];
    this.placeholders = Array(this.secretWord.length).fill("_");
    this.guesses = 6;
  }
  checkLetter(letter) {
    const letterFound = this.secretWord.includes(letter.toLowerCase());
    if (!letterFound) {
      this.guesses--;
    } else {
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i] === letter.toLowerCase()) {
          this.placeholders[i] = letter;
        }
      }
    }
    return letterFound;
  }

  isWordComplete() {
    return !this.placeholders.includes("_");
  }
}