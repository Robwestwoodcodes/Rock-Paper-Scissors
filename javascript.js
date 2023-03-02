
// returns a random value out of 3 choices
function getComputerChoice () {
    
    let computerChoice = ['rock','paper','scissors'];
    let chosenComputerChoice = computerChoice [Math.floor(Math.random() * computerChoice.length)];
    return chosenComputerChoice;
}

//variables that allows the user to input a choice/ storing a function into a variable
const playerSelection = prompt('Please enter either Rock, Paper or Scissors').toLowerCase;
const computerSelection = getComputerChoice();


//function to play a round of rock,paper or scissors
function playRound (playerSelection, computerSelection){

    }
