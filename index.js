let options = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
let playerScore = 0;
let computerScore = 0;
let playersPick;
const computerPick = getComputersPick();
let loseMessage = "You lose! ";
let winMessage = "You win! ";




function getComputersPick() {
    switch (random) {
        case 0:
            return options[0];
            break;
        case 1:
            return options[1];
            break;
        case 2:
            return options[2];
            break;
    }
}

function playRound(playersPick, computerPick) {
    if (playersPick == computerPick) {
        return "Its a Tie!";   
    }
    if (playersPick == options[0] && computerPick == options[1]) {
        return loseMessage + " Paper beats Rock!";
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
rBtn.addEventListener('click',msg => console.log(playRound("Rock",getComputersPick())));
pBtn.addEventListener('click',msg => console.log(playRound("Paper",computerPick)));
sBtn.addEventListener('click', msg => console.log(playRound("Scissors",computerPick)));