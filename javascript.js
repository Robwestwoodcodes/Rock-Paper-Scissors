
function playerSelection () {
    const playerStatement = ('Player has chosen ');
    let playerPrompt = prompt('Please enter either Rock, Paper or Scissors');
    let playerCaseChange = playerPrompt.toLowerCase();
    
    return playerStatement+playerCaseChange;
}
console.log (playerSelection());

function getComputerChoice () {
    const computerStatement = ('Computer has chosen ');
    let computerChoice = ['rock','paper','scissors'];
    let chosenComputerChoice = computerChoice [Math.floor(Math.random() * computerChoice.length)];
    return computerStatement+chosenComputerChoice;
}
console.log (getComputerChoice());   
