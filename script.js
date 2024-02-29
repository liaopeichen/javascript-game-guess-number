'use strict';

const body = document.querySelector('body');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');

const randomNumber = function () {
  return Math.trunc(Math.random() * 100) + 1;
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
check.addEventListener('click', function () {
  const guessValue = Number(guess.value);

  // When ther is no input
  if (!guessValue || guessValue < 0) {
    messageDisplay('⛔ Not a valid number!');

    // When player wins
  } else if (guessValue === secretNumber) {
    messageDisplay('🎉 Correct Number!');
    number.textContent = secretNumber;

    guess.disabled = true;
    check.disabled = true;
    check.classList.add('disabled-button');

    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When guess is wrong
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      messageDisplay(
        guessValue > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      scoreDisplay(score);
    } else {
      messageDisplay('☠️ Game Over!');
      scoreDisplay(0);
      guess.disabled = true;
      check.disabled = true;
      check.classList.add('disabled-button');
    }
  }
});

// Click on New Game button - reset game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = randomNumber();
  score = 20;

  messageDisplay('Start guessing...');
  number.textContent = '?';
  scoreDisplay(score);
  guess.value = '';

  guess.disabled = false;
  check.disabled = false;
  check.classList.remove('disabled-button');

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});

// Modal Controller
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelector('.quit');
const btnCloseModal = document.querySelector('.close-modal');
const noBtn = document.querySelector('.no');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnShowModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
noBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    (!modal.classList.contains('hidden') ||
      !overlay.classList.contains('hidden'))
  ) {
    closeModal();
  }
});
