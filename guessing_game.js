var GuessingGame = function(answer) {
  var isSolved = false;

  this.guess = function(guess) {
    if (guess === answer) {
      isSolved = true;
      return 'correct';
    }
    else if (guess > answer) {
      isSolved = false;
      return 'high';
    }
    else {
      isSolved = false;
      return 'low';};
  }

  this.isSolved = function() {return isSolved;}

};

// var game = new GuessingGame(10);

// game.isSolved();   // => false

// game.guess(5);     // => 'low'

var GuessingGame = function(answer) {
    var isSolved = false;

    this.guess = function(guess) {
        if (guess === answer) {
            isSolved = true;
            return 'correct';
        } else if (guess > answer) {
            return 'too high';
        } else {
            return 'too low';
        }
    }
}