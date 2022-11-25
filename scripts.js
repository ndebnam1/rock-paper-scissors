let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissors";
let computerPick = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let computer = computerChoice();
let playerScore;
let computerScore;
let playerSelection;


function playRound() {
     playerSelection = prompt("Enter your choice");
   
        if (playerSelection == computer) {
            console.log("Its a tie!");
        }
        if (computer == choice1 && playerSelection == choice2) {
            console.log("You win! Paper beats Rock");
            return playerScore += 1;
        }
        if (computer == choice1 && playerSelection == choice3) {
            console.log("You lose! Rock beats Scissors");
            computerScore += 1;
        }
    
        if (computer == choice2 && playerSelection == choice1) {
            console.log("You lose!, Paper beats Rock");
            return computerScore += 1;
        }
        if (computer == choice2 && playerSelection == choice3) {
            console.log("You win!, Scissors beats Papaer");
            return playerScore += 1;
        }
    
        if (computer == choice3 && playerSelection == choice1) {
            console.log("You win!, Rock beats Scissors");
            return playerScore += 1;
        }
        if (computer == choice3 && playerSelection == choice2) {
            console.log("You lose!, Scissors beats Paper");
            return computerScore += 1;
        }
   
    }


   
    

        


function computerChoice() {
    switch (computerPick) {
        case 1:
            return choice1;
            break;
        case 2:
            return choice2;
            break;
        case 3:
            return choice3;
            break;
    }
}

function playGame() {
   
    for (let i = 1; i <= 5; i++) {
        playRound();
       
    }
    console.log("Final Score: Player " + playerScore + " Computer " + computerScore);
    if (playerScore > computerScore) {
        console.log("You Won!!!");
    }
    if (computerScore > playerScore) {
        console.log("You Lose!!");
    }
    }



