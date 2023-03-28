'use strict';

// getting the random numbers
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.number').textContent = secretNumber;

//below: working on the score decreament of the after every wrong input.
//  stating the initial score. the score-- is in the < and > else if statements.
let score = 20;

//set the initial highscore to zero
let highscore = 0;

//this function makes repetition of this code less.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// all action that will take place on click.
document.querySelector('.check').addEventListener('click', function () {
  //converted the input to number from string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // below: accounted for all possible input.
  // when there is no input
  if (!guess) {
    //meaning if there is no guess, the ! will make it true for this if part to take effect.
    displayMessage('No number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    // displaying the scret number upon win.
    document.querySelector('.number').textContent = secretNumber;

    // setting the CSS for when the player wins.
    //background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //width of the .number
    document.querySelector('.number').style.width = '30rem';

    // working on the highscore
    if (score > highscore) {
      // whenever the score is > the highscore, the score becomes the highscore .
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // using a tenary operator for the > < scenarios.
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high!' : 'Too low!';

      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

      // reducing the score by 1 on every wrong input.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// setting the functionality of the again button (reset)
document.querySelector('.again').addEventListener('click', function () {
  // reassigning the score
  score = 20;
  //reassigning a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  //restoring initial value of score

  document.querySelector('body').style.backgroundColor = '#222';
  //width of the .number
  document.querySelector('.number').style.width = '15rem';
});
