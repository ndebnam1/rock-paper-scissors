const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const results = document.querySelector("#results");
const choiceBtns = document.querySelectorAll(".choiceButton");
let playerChoice;
let computerChoice;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    playerChoice = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    results.textContent = checkWinner();
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
            return (playerChoice == "Paper") ? "You win!" : "You lose!"
        }
        else if (computerChoice == "Paper") {
            return (playerChoice == "Scissors") ? "You win!" : "You lose!"
        }
        else if (computerChoice == "Scissors") {
            return (playerChoice == "Rock") ? "You win!" : "You lose!"
        }
    }
