console.log("Let's Play !!");

const computerPlay = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
};
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") || // win
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You Win!! ${playerSelection} beats ${computerSelection}`);
    return playerScore++;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") || //lose
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(`You lost !! ${computerSelection} beats ${playerSelection}`);
    return computerScore++;
  } else {
    console.log(`It's a tie ;)`);
    return `Both gets 0 ${playerScore}${computerScore}`;
  }
}
// playerSelection = "rock";
// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
function game() {
  let userValue = prompt("**Rock , Paper, Scissors **");
  userValue = userValue.toLowerCase();
  if (
    userValue === "rock" ||
    userValue === "paper" ||
    userValue === "scissors"
  ) {
    return playRound(userValue, computerPlay());
  } else {
    console.log("Enter Correct Value!!");
  }
}
for (i = 1; i <= 5; i++) {
  game();
}
if (playerScore > computerScore) {
  console.log(`You defeated the computer by ${playerScore}-${computerScore}.`);
} else if (computerScore > playerScore) {
  console.log(`You were defeated by computer ${computerScore}-${playerScore}.`);
} else if (computerScore === playerScore) {
  console.log(`It's a tie.`);
}
