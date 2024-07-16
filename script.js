// Function to generate random choice
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return "rock";
  } else if (randomChoice === 2) {
    return "paper";
  } else if (randomChoice === 3) {
    return "scissors";
  } else {
    return "Wrong choice";
  }
}

// function to get human choice
function getHumanChoice() {
  let humanInput = prompt("Choose rock, paper or scissors: ");
  if (
    humanInput == "rock" ||
    humanInput == "paper" ||
    humanInput == "scissors"
  ) {
    return humanInput;
  }
}

function playRound(humanChoice, computerChoice) {
  // Variable to store score
  let humanScore = 0;
  let computerScore = 0;

  if (humanChoice === computerChoice) {
    console.log("Draw! No one wins");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rocks beat Scissors");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat Paper");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! rock beats scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! paper beats rock");
    humanScore++;
  } else {
    console.log("Wrong Choice!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// logic to play the entire game

function playGame() {}
