//ROCK PAPER SCISSORS
let userOutput = document.querySelector(".human-output");
let aiOutput = document.querySelector(".ai-output");
let resultOutput = document.querySelector(".result-container");
let draw = `It's a draw! Your answers are the same.`;
let rockChoice = document.querySelector("#rock-choice-btn");
let paperChoice = document.querySelector("#paper-choice-btn");
let scissorsChoice = document.querySelector("#scissors-choice-btn");
let btnContainer = document.querySelector('.container-1');
let compScore = document.querySelector('.comp-score');
let compCounter = 0;
let playerScore = document.querySelector('.player-score');
let playerCounter = 0;
let winnerDisplay = document.querySelector('.container-5');   //attach the winner container
let globalUserOutput;
let globalComputerOutput;
const array1 = ['Rock', 'Paper', 'Scissors'];



// function outputs computer choice 
function getComputerChoice(){
    function func1(min, max){
        return Math.random() * (max - min) + min;
    }
    aiOutput.textContent = array1[(Math.floor(func1(1, 4))) - 1];
    return globalComputerOutput = aiOutput.textContent;
}



function displayScore(){
    compScore.textContent = `${compCounter}xp`;
    playerScore.textContent = `${playerCounter}xp`;
    if(compCounter === 5){
        winnerDisplay.textContent = 'Computers win! It\'s apocalypse...';
        compCounter = 0;
        playerCounter = 0;
        compScore.textContent= `${compCounter}xp`;
        playerScore.textContent = `${playerCounter}xp`;
    };
    if(playerCounter === 5){
        winnerDisplay.textContent = 'Humans won! Humanity is safe.';
        compCounter = 0;
        playerCounter = 0;
        compScore.textContent= `${compCounter}xp`;
        playerScore.textContent = `${playerCounter}xp`;
    };
}

function printResults(callback){
    // Rock version
    if(globalUserOutput == 'Rock' && globalComputerOutput == 'Paper'){
        resultOutput.textContent = `You lose! ${globalComputerOutput} beats ${globalUserOutput}.`;
        compCounter += 1;
        playerCounter += 0;
        callback();
    }
    if (globalUserOutput == 'Rock' && globalComputerOutput == 'Rock'){
        resultOutput.textContent = draw;
        compCounter += 0;
        playerCounter += 0;
        callback();
    }
    if(globalUserOutput == 'Rock' && globalComputerOutput == 'Scissors'){
        resultOutput.textContent = `You win! ${globalUserOutput} beats ${globalComputerOutput}.`;
        compCounter += 0;
        playerCounter += 1;
        callback();
    } 


    // Paper version
    if(globalUserOutput == 'Paper' && globalComputerOutput == 'Paper'){
        resultOutput.textContent = draw;
        compCounter += 0;
        playerCounter += 0;
        callback();
    }
    if (globalUserOutput == 'Paper' && globalComputerOutput == 'Rock'){
        resultOutput.textContent = `You win! ${globalUserOutput} beats ${globalComputerOutput}.`;
        compCounter += 0;
        playerCounter += 1;
        callback();
    }
    if(globalUserOutput == 'Paper' && globalComputerOutput == 'Scissors'){
        resultOutput.textContent = `You lose! ${globalComputerOutput} beats ${globalUserOutput}.`;
        compCounter += 1;
        playerCounter += 0;
        callback();
    } 


    // Scissors version
    if(globalUserOutput == 'Scissors' && globalComputerOutput == 'Paper'){
        resultOutput.textContent = `You win! ${globalUserOutput} beats ${globalComputerOutput}.`;
        compCounter += 0;
        playerCounter += 1;
        callback();
    }
    if (globalUserOutput == 'Scissors' && globalComputerOutput == 'Rock'){
        resultOutput.textContent = `You lose! ${globalComputerOutput} beats ${globalUserOutput}.`;
        compCounter += 1;
        playerCounter += 0;
        callback();
    }
    if(globalUserOutput == 'Scissors' && globalComputerOutput == 'Scissors'){
        resultOutput.textContent = draw;
        compCounter += 0;
        playerCounter += 0;
        callback();
    } 
}


// displays user input
btnContainer.addEventListener('click', (event) => {
    switch(event.target.id){                                  // input has to have id, not class, otherwise this doesn't work
        case 'rock-choice-btn':
            userOutput.textContent = 'Rock';
            globalUserOutput = userOutput.textContent;
            break;
        case 'paper-choice-btn':
            userOutput.textContent = 'Paper';
            globalUserOutput = userOutput.textContent;
            break;
        case 'scissors-choice-btn':
            userOutput.textContent = 'Scissors';
            globalUserOutput = userOutput.textContent;
            break;
    }
    getComputerChoice();
    printResults(displayScore);
});
