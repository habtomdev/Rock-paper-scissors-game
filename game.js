console.log("Welcome to the game");

// a logic to get the computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Logic to get human choice

function getHumanChoice() {
  let humanInput = prompt(
    "Please Choose Rock, Paper or Scissors"
  ).toLowerCase();
  if (
    humanInput === "rock" ||
    humanInput === "paper" ||
    humanInput === "scissors"
  ) {
    return humanInput;
  } else {
    return "Wrong input!!";
  }
}

function gameRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw! No one wins");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats's Rock");
    return "computer won";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat's Paper");
    return "computer won";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rocks beat's Scissors");
    return "computer won";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beat's Paper");
    return "human won";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! rock beats's scissors");
    return "human won";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! paper beats's rock");
    return "human won";
  } else {
    console.log("Wrong Choice!");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let draw = 0;
  let rounds = 0;

  while (rounds < 5) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Computer Chose: ${computerSelection}`);
    console.log(`Player Chose: ${humanSelection}`);
    const result = gameRound(humanSelection, computerSelection);

    if (result === "human won") {
      humanScore++;
    } else if (result === "computer won") {
      computerScore++;
    } else {
      draw++;
    }
    rounds++;
    console.log(
      `Round ${rounds}: Computer ${computerScore} - Player ${humanScore} - Draw ${draw}`
    );
    console.log("----------------------------");
  }

  if (humanScore > computerScore) {
    console.log("Player Win's");
  } else if (humanScore < computerScore) {
    console.log("Haha! you lose computer won");
  } else {
    console.log("It's a tie!");
  }
}

playGame();
