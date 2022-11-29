let options = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
let playerScore = 0;
let computerScore = 0;
let playersPick;
let computerPick = getComputersPick();
let loseMessage = "You lose! ";
let winMessage = "You win! ";




function getComputersPick() {
    return options[random];
}

function playRound(playersPick, computerPick) {
    playersPick = prompt("Enter your choice: ");
    if (playersPick == computerPick) {
        return "Its a Tie!";   
    }
    if (playersPick == options[0] && computerPick == options[1]) {
        console.log(loseMessage + " Paper beats Rock!");
        computerScore++;
    }
    if (playersPick == options[0] && computerPick == options[2]) {
        return winMessage + " Rock beats Scissors!";
        playerScore++;
    }
    if (playersPick == options[1] && computerPick == options[0]) {
        return winMessage + " Paper beats Rock!";
        playerScore++;
    }
    if (playersPick == options[1] && computerPick == options[2]) {
        return loseMessage + " Scissors beats Paper!";
        computerScore++;
    }
    if (playersPick == options[2] && computerPick == options[0]) {
        return loseMessage + " Rock beats Scissors!";
        computerScore++;
    }
    if (playersPick == options[2] && computerPick == options[1]) {
        return winMessage + " Scissors beats Paper!";
        playerScore++;
    }

}

let rBtn = document.querySelector('#rBtn');
let pBtn = document.querySelector('#pBtn');
let sBtn = document.querySelector('#sBtn');
rBtn.addEventListener('click',msg => console.log("It works"));
pBtn.addEventListener('click',msg => console.log("It works too"));
sBtn.addEventListener('click', msg => console.log("this its works too"));