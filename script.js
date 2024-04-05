//ROCK PAPER SCISSORS
let inputBtn = document.querySelector(".input-btn");
let userInput = document.querySelector("#input");
let userOutput = document.querySelector(".human-output");
let aiOutput = document.querySelector(".ai-output");
let resultOutput = document.querySelector(".result-container");
let draw = `It's a draw! Your answers are the same.`;
let globalUserOutput ;
let globalComputerOutput;
const array1 = ['Rock', 'Paper', 'Scissors'];



// receives user input
function displayUserInput(){
    userInput.value = userInput.value.toLowerCase();
    userInput.value = userInput.value.charAt(0).toUpperCase() + userInput.value.slice(1);
    // console.log(userInput.value);
    if(userInput.value === 'Rock' || userInput.value === 'Paper' || userInput.value === 'Scissors'){
        userOutput.textContent = userInput.value;
        globalUserOutput = userOutput.textContent;
        userInput.value = '';
    }
    else if (userInput.value === '' || userInput.value === null || userInput.value === undefined){
        {alert("This is not a move on this Earth. Try again noob.");}
    }
    else{alert("This is not a move on this Earth. Try again noob.");}
}



// function where computer chooses move
function generateRandom(min, max){
    return Math.random() * (max - min) + min;
}

function getComputerChoice(){
    aiOutput.textContent = array1[(Math.floor(generateRandom(1, 4))) - 1];
    return globalComputerOutput = aiOutput.textContent;
}




// results function
function printResults(){
    
    // Rock version
        if(globalUserOutput == 'Rock' && globalComputerOutput == 'Paper'){
            return resultOutput.textContent = `You lose! ${globalComputerOutput} beats ${globalUserOutput}.`;
        }
        if (globalUserOutput == 'Rock' && globalComputerOutput == 'Rock'){
            return resultOutput.textContent = draw;
        }
        if(globalUserOutput == 'Rock' && globalComputerOutput == 'Scissors'){
            return resultOutput.textContent = `You win! ${coconut} beats ${globalComputerOutput}.`;
        } 


        // Paper version
        if(globalUserOutput == 'Paper' && globalComputerOutput == 'Paper'){
            return resultOutput.textContent = draw;
        }
        if (globalUserOutput == 'Paper' && globalComputerOutput == 'Rock'){
            return resultOutput.textContent = `You win! ${globalUserOutput} beats ${globalComputerOutput}.`;
        }
        if(globalUserOutput == 'Paper' && globalComputerOutput == 'Scissors'){
            return resultOutput.textContent = `You lose! ${globalComputerOutput} beats ${globalUserOutput}.`;
        } 


        // Scissors version
        if(globalUserOutput == 'Scissors' && globalComputerOutput == 'Paper'){
            return resultOutput.textContent = `You win! ${globalUserOutput} beats ${globalComputerOutput}.`;
        }
        if (globalUserOutput == 'Scissors' && globalComputerOutput == 'Rock'){
            return resultOutput.textContent = `You lose! ${globalComputerOutput} beats ${globalUserOutput}.`;
        }
        if(globalUserOutput == 'Scissors' && globalComputerOutput == 'Scissors'){
            return resultOutput.textContent = draw;
        } 
}


inputBtn.addEventListener("click", () =>{
    displayUserInput();
    getComputerChoice();
    printResults();
});
