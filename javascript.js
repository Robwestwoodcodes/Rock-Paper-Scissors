
// function that gets the user input
// converts user input to lower case
function playerSelection () {
    const playerStatement = ('Player has chosen ');
    let playerPrompt = prompt('Please enter either Rock, Paper or Scissors');
    let playerCaseChange = playerPrompt.toLowerCase();
    
    return playerStatement+playerCaseChange;
}

// returns a random value out of 3 choices
function getComputerChoice () {
    const computerStatement = ('Computer has chosen ');
    let computerChoice = ['rock','paper','scissors'];
    let chosenComputerChoice = computerChoice [Math.floor(Math.random() * computerChoice.length)];
    return computerStatement+chosenComputerChoice;
}

const userSelection = playerSelection();
const computerSelection = getComputerChoice();

function playRound (userSelection, computerSelection){



}

