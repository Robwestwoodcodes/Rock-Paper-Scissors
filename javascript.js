
function game(){
let playerScore = 0;
let computerScore = 0;
let round = 1;


for (let i = 1; i <= 5; i++){

function getComputerChoice () {
    let computerChoice = ['rock','paper','scissors'];
    let chosenComputerChoice = computerChoice [Math.floor(Math.random() * computerChoice.length)];
    return chosenComputerChoice
}

function userSelection (){
let playSelection = prompt('Please enter either Rock, Paper or Scissors').toLowerCase();
if (playSelection !== "rock" && playSelection !== "paper" && playSelection !== "scissors"){
alert('Oops! You entered something other than/ or mis-spelled rock, paper or scissors! Please try again!')

} else {
return playSelection;
}
}

const computerPlay = getComputerChoice();
const playerSelection = userSelection();



function playRound (computerPlay,playerSelection){

        round++;
        if (computerPlay === "rock" && playerSelection === "scissors") {
        computerScore++;
        return "Computer wins";
      } else if (computerPlay === "paper" && playerSelection === "rock") {
        playerScore++;
        return "Player wins";
      } else if (computerPlay === "scissors" && playerSelection === "raper") {
        computerScore++;
        return "Computer wins";
      } else if (playerSelection === "rock" && computerPlay === "scissors") {
        computerScore++;
        return "Computer wins";
      } else if (playerSelection === "paper" && computerPlay === "rock") {
        playerScore++;
        return "Player wins";
      } else if (playerSelection === "scissors" && computerPlay === "paper") {
        playerScore++;
        return "Player wins";
      } else {
        return "Draw";
      }
    }

 

          console.log('Rock,paper or scissors? The Game. Round: '+round);
          console.log('User selected: '+ playerSelection);
          console.log(`Computer selected: ${computerPlay}`);
          console.log('Result of game: ' +playRound(computerPlay,playerSelection));
          console.log('Player score: '+playerScore);
          console.log('Computer score: '+computerScore);   
          console.log(' ');
        } 
      }
       game()

