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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "scissors") || // win
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win!! ${playerSelection} beats ${computerSelection} .`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") || //lose
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You lost !! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `It's a tie ;)`;
  }
}
// playerSelection = "rock";
// computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
let userValue = prompt("**Rock , Paper, Scissors **");
userValue = userValue.toLowerCase();
if (userValue === "rock" || userValue === "paper" || userValue === "scissors") {
  console.log(playRound(userValue, computerPlay()));
} else {
  console.log("Enter Correct Value!!");
}
