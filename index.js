const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const results = document.querySelector("#results");
const choiceBtns = document.querySelectorAll(".choiceButton");
let playerChoice;
let computerChoice;
let result;
let computerScore;
let playerScore;




choiceBtns.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.id;
    getComputerChoice();
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    results.textContent = `Results: ${checkWinner()}`;
}));

function getComputerChoice() {

    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            computerChoice = "Rock"
            break;
        case 2:
            computerChoice = "Paper"
            break;
        case 3:
            computerChoice = "Scissors"
            break;
    }
}
function checkWinner() {
        
        if (playerChoice == computerChoice) {
            return "Its a tie!";

        }
        else if (computerChoice == "Rock") {
            return (playerChoice == "Paper") ? "You Win!! Paper beats Rock!": "You lose!! Rock beats Scissors"
        }
        else if (computerChoice == "Paper") {
            return (playerChoice == "Scissors") ? "You win!! Scissors beats Paper" : "You lose! Paper beats Rock!"
        }
        else if (computerChoice == "Scissors") {
            return (playerChoice == "Rock") ? "You win!! Rock beats Scissors" : "You lose! Scissors beats Paper"
        }
    updateScore();
    }

function updateScore() {
    if (playerChoice == computerChoice) {
        playerScore += 1;
        computerScore += 1;
    }
    else if (computerChoice == "Rock") {
        return(playerChoice == "Paper") ? playerScore +=1 : computerScore += 1
    }
    else if (computerChoice == "Paper") {
        return(playerChoice == "Scissors") ? playerScore +=1 : computerScore += 1
    }
    else if (computerChoice == "Scissors") {
        return(playerChoice == "Rock") ? playerScore +=1 : computerScore += 1
    }    
    return `Your Score: ${playerScore}\nComputer Score: ${computerScore}`
}
    

