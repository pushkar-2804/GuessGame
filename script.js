'use strict';

let score = 20;
let randNum = Math.floor(Math.random()*20)+1;
let highScore = 0;

// Reseting the Game
const reset = function(){
    document.body.style.background = 'var(--color-Background)';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    randNum = Math.floor(Math.random()*20);
    document.querySelector('.number').style.width = '15rem';
    document.querySelector(".number").textContent = '?';
}


// Message on Losing
const lostMessage = function(){
    document.querySelector('.message').textContent = '😢You Lost!';
}

// Again Button
document.querySelector('.again').addEventListener('click',reset);

// Check Button
document.querySelector('.check').addEventListener('click',function(){
    
    const Guess = Number(document.querySelector('.guess').value);
    // Checking if Number exists
    if (!Guess){
        document.querySelector('.message').textContent = '🛑No Number!';
        return;
    }
    // Alerting if Number not in range
    if (Guess <=0 | Guess>20){
        alert('Enter Number Between 1 and 20');
        document.querySelector('.guess').value = '';
        return;
    }
    // Correct Guess
    if ( Guess === randNum) {
        document.body.style.background = 'Green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector(".number").textContent = randNum;
        document.querySelector('.message').textContent = 'Correct Number!🎉';
        if(highScore< score){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // Guess is Wrong
    else if (Guess!==randNum){
        if(score>1){
        document.querySelector('.message').textContent = (Guess > randNum)? '💹Too High!': '📉Too Low!';
        document.body.style.background = (Guess > randNum)? 'Red' : 'Blue';
        score--
        document.querySelector('.score').textContent = score;
        }
        // Game Lost
        else{
            reset();
            lostMessage();
        }
    }
    
});