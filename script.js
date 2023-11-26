'use strict';

const body = document.querySelector('body');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const scoreDisplay = function (score) {
  document.querySelector('.score').textContent = score;
};

const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};

let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

// Click on Check button
document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(guess.value);

  // When ther is no input
  if (!guessValue || guessValue < 0) {
    messageDisplay('⛔ Not a valid number!');

    // When player wins
  } else if (guessValue === secretNumber) {
    messageDisplay('🎉 Correct Number!');
    number.textContent = secretNumber;

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guessValue !== secretNumber) {
    messageDisplay(guessValue > secretNumber ? '📈 Too High!' : '📉 Too Low!');
    score--;
    scoreDisplay(score);
  } else {
    messageDisplay('☠️ Game Over!');
    scoreDisplay(0);
  }
});

// When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too High!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '☠️ Game Over!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '☠️ Game Over!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   return;
// });

// Click on Again button - reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;

  messageDisplay('Start guessing...');
  number.textContent = '?';
  scoreDisplay(score);
  guess.value = '';

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
