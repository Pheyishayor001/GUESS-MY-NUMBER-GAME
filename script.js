'use strict';

// getting the random numbers
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//below: working on the score decreament of the after every wrong input.
//  stating the initial score. the score-- is in the < and > else if statements.
let score = 20;

// all action that will take place on click.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // below: accounted for all possible input.
  // when there is no input
  if (!guess) {
    //meaning if there is no guess, the ! will make it true for this if part to take effect.
    document.querySelector('.message').textContent = 'No number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    // displaying the scret number upon win.
    document.querySelector('.number').textContent = secretNumber;

    // setting the CSS for when the player wins.
    //background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //width of the .number
    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > secretNumber) {
    //BELOW: accounting for what happens when the score has gotten to 0 and when the guessed number is > the secretNumber.
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      // reducing the score by 1 on every wrong input.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      // reducing the score by 1 on every wrong input.
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
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

  document.querySelector('.message').textContent = 'Start guessing';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  //restoring initial value of score

  document.querySelector('body').style.backgroundColor = '#222';
  //width of the .number
  document.querySelector('.number').style.width = '15rem';
});
