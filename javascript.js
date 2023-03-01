
// function that gets the user input
// converts user input to lower case
function playerSelection () {
    
    let playerPrompt = prompt('Please enter either Rock, Paper or Scissors');
    let playerCaseChange = playerPrompt.toLowerCase();
    
    return playerCaseChange;
}

// returns a random value out of 3 choices
function getComputerChoice () {
    
    let computerChoice = ['rock','paper','scissors'];
    let chosenComputerChoice = computerChoice [Math.floor(Math.random() * computerChoice.length)];
    return chosenComputerChoice;
}

const userSelection = playerSelection();
const computerSelection = getComputerChoice();

function playRound (userSelection, computerSelection){

    const playerStatement = ('Player has chosen ');
    const computerStatement = ('Computer has chosen ');


    if (userSelection === 'rock'){
        rock();
    } else if (userSelection === 'paper'){
        paper();
    } else (userSelection === 'scissors')
        scissors();
    
    function rock (){
        if (userSelection === computerSelection){
        return 
        
    }

    function paper(){

    }

    function scissors (){

    }

    } 


