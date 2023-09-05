'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct secretNumber!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener(
  'click',
  function () {
    const guess = Number(document.querySelector('.guess').value);

    //When it`s no input
    if (!guess) {
      //document.querySelector('.message').textContent = 'No number!';
      displayMessage('No number!');
    }

    //When player wins
    else if (guess === secretNumber) {
      displayMessage('Correct Number!');
      document.querySelector('.number').textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
    //When guess is wrong, is different than the secret number
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
        //document.querySelector('.message').textContent =
        //  guess > secretNumber ? 'Too high!' : 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    }
  }

  /*//When guess is greater than secretNumber
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }

  //When guess is lower than secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }*/
);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
