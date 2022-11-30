let options = ["Rock", "Paper", "Scissors"];
let random = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
let playerScore = 0;
let computerScore = 0;
let playersPick;
let computerPick = getComputersPick();
let loseMessage = "You lose! ";
let winMessage = "You win! ";


function setPlayerPick() {
    rBtn
}

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
     displayChoices(playersPick);
     
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

async function displayChoices(playersPick) {
    console.log(`You Chose: ${playersPick} `);
    console.log(`The Computer Chose: ${computerPick}`);
	
}






let rBtn = document.querySelector('#rBtn');
let pBtn = document.querySelector('#pBtn');
let sBtn = document.querySelector('#sBtn');


rBtn.addEventListener('click', sRock => playersPick = options[0]);
pBtn.addEventListener('click', sPaper => playersPick = options[1]);
sBtn.addEventListener('click', sScis => playersPick = options[2]);

