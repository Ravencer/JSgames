const compChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.getElementsByClassName('button');

let userChoice;
let compChoice;
let choices = {0 : 'rock', 1 : 'paper', 2 : 'scissors'};
let results = {'rock' : 'paper', 'paper' : 'scissors', 'scissors' : 'rock'};

Array.from(possibleChoices).forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    resultDisplay.innerHTML = getResult();
}));

const generateComputerChoice = function() {
    const randomNumber = Math.floor(Math.random() * Array.from(possibleChoices).length);
    compChoice = choices[randomNumber];
    compChoiceDisplay.innerHTML = compChoice;
};

const getResult = function() {
    if(results[userChoice] === compChoice){
        return 'User lost!';
    }
    else if(results[compChoice] === userChoice){
        return 'User won!';
    }
    else {
        return 'It is a draw!';
    }
};