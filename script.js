'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displaymessage('No Number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displaymessage('Correct Guess!!');
    document.querySelector('body').style.backgroundColor = 'skyblue';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displaymessage(guess < secretNumber ? 'too low' : 'too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displaymessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
