console.log("Welcome to the game")

// a logic to get the computer choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) +1
    if (randomChoice === 1) {
        return "rock"
    } else if (randomChoice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}
// console.log(getComputerChoice())

// Logic to get human choice

function getHumanChoice() {
    let humanChoice = prompt("Please Choose Rock, Paper or Scissors");
    if (humanChoice === "rock"
        || humanChoice === "paper"
        || humanChoice === "scissors"
    ) {
        return humanChoice;
    } else {
        return "Wrong input!!"
    }
}

// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;
