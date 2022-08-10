class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if (!this.lives) throw "Error"
      else if (n !== this.number) {
        this.lives--
        return false
      }
      else if (n === this.number) return true
    }
  }
  //https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript