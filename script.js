// Function to generate random choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() *3) + 1;

    if (randomChoice === 1) {
        console.log("rock")
    } else if (randomChoice === 2) {
        console.log("paper")   
    } else if (randomChoice === 3) {
        console.log("scissors")
    } else {
        console.log("Wrong choice")
    }
}

// function to get human choice
function getHumanChoice() {
    let humanInput = prompt("Choose rock, paper or scissors: ")
    if (humanInput == "rock"
        || humanInput == "paper"
        || humanInput == "scissors"
    ) {
        return humanInput;
    } else {
        return "Wrong Choice!"
    }
}

// Score variable
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice ) {

    }

}

playRound (getComputerChoice(), getHumanChoice())
