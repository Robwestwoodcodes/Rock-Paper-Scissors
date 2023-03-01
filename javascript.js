




function getComputerChoice () {
    const computerStatment = ('Computer has chosen ');
    let computerChoice = ['Rock','Paper','Scissors'];
    let chosenComputerChoice = computerChoice [Math.floor(Math.random() * computerChoice.length)];
    return computerStatment+chosenComputerChoice;
}
console.log (getComputerChoice());   
