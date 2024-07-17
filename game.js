
console.log("--------------Welcome-------------");

// Function to get computer choice (Random)
function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3) + 1;

  if (compChoice === 1) {
    return "rock";
  } else if (compChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// function to get player choice 
function getPlayerChoice() {
  let playerChoice = prompt(
    "Please Choose Rock, Paper or Scissors:"
  ).toLowerCase();

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return "Wrong Input";
  }
}

// function to display who won

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Draw!");
    return "Draw";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("It's a Draw!");
    return "Computer wins";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat's paper");
    return "Computer wins";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beat's scissors");
    return "Computer wins";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beat's rock");
    return "Player wins";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beat's scissors");
    return "Player wins";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beat's paper");
    return "Player wins";
  } else {
    return "Wrong input";
  }
}

// function to loop the game five times, keeps score and announce the winner

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let draw = 0;
  let round = 0;

  while (round < 5) {
    const playerSelection = getPlayerChoice();
    const compSelection = getComputerChoice();
    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${compSelection}`);
    const result = playRound(playerSelection, compSelection);

    if (result === "Player wins") {
      humanScore++;
    } else if (result === "Computer wins") {
      computerScore++;
    } else {
      draw++;
    }
    round++;

    console.log(
      `Round: ${round} | 🧑‍🦱: ${humanScore} | 💻: ${computerScore} | 🟰: ${draw}`
    );
  }

  if (humanScore > computerScore) {
    console.log("🏆🏆You win! you beat the computer🏆🏆");
  } else if (humanScore < computerScore) {
    console.log("😔😔You lose! computer beat's you😔😔");
  } else {
    console.log("It's a draw");
  }
}

playGame();
