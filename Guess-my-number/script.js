'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent; // define ou retorna o valor especificado 
document.querySelector('.score').textContent = 10; // retorna o valor 
document.querySelector('.guess').value = 25; // alterou o valor do atributo
console.log(document.querySelector('.guess').value); // especifica o valor do atributo
*/

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20)+1;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);
    
    // when there is no input
    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No Number';
    
    // when player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number! 🎉';
        if(score > highScore) {highScore = score};
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '⏫ Too high';
            score--;
            document.querySelector('.score').textContent = score;    
        } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = 0;
        }

    // when guess is to low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '⏬ Too low';
            score--;
        document.querySelector('.score').textContent = score;    
    } else {
            document.querySelector('.message').textContent = 'You lose the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});
    // reset the game
document.querySelector('.again').addEventListener('click', function () {
    // initial value
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // secretNumber message
    document.querySelector('.number').textContent = '?';
    // initial style
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // score message and inicial message
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    // empty input value
    document.querySelector('.guess').value = '';
    });

