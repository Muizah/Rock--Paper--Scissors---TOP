const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const win = document.getElementById("win");
const loss = document.getElementById("loss");
const tie = document.getElementById("tie");
const choice = document.querySelectorAll(".choice");
const startGame = document.getElementById("start_game");
const winner = document.getElementById("winner");

var isGameActive = false;

var choices = ["Rock", "Paper", "Scissors"];
function random() {
  return Math.floor(Math.random() * choices.length);
}

function getComputerChoice() {
  var computerChoice = choices[random()];
  return computerChoice;
}

// console.log(getComputerChoice());

var playerSelection;

var computerSelection;

var count = 0;

function playRound(playerSelection, computerSelection) {
  const isPlayerRock = playerSelection === choices[0];
  const isPlayerPaper = playerSelection === choices[1];
  const isPlayerScissors = playerSelection === choices[2];
  const isComputerRock = computerSelection === choices[0];
  const isComputerPaper = computerSelection === choices[1];
  const isComputerScissors = computerSelection === choices[2];
  console.log({ playerSelection, computerSelection });

  if (count >= 5) {
    isGameActive = false;
    startGame.innerText = "START GAME";
    location.reload();
    return;
  }
  if (
    (isPlayerRock && isComputerRock) ||
    (isPlayerPaper && isComputerPaper) ||
    (isPlayerScissors && isComputerScissors)
  ) {
    console.log("A Tie");
    tie.innerText = parseInt(tie.innerText) + 1;
  } else if (
    (isPlayerRock && isComputerScissors) ||
    (isPlayerPaper && isComputerRock) ||
    (isPlayerScissors && isComputerPaper)
  ) {
    console.log("You win");
    win.innerText = parseInt(win.innerText) + 1;
  } else {
    console.log("You lose");
    loss.innerText = parseInt(loss.innerText) + 1;
  }

  count += 1;
}

startGame.addEventListener("click", () => {
  if (isGameActive === false) {
    isGameActive = true;
    startGame.innerText = "GAME IN PROGRESS";
  } else {
    startGame.innerText = "START GAME";
  }
});

for (let i = 0; i < choice.length; i++) {
  const btn = choice[i];
  btn.addEventListener("click", () => {
    if (isGameActive === true) {
      playerSelection = choices[i];
      computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
    }
  });
}

/* startGame.addEventListener("DOMContentLoaded", () => {
  if (win > tie && win >= loss) {
    winner.innerText = "YOU WON!";
  } else if (loss > win && loss >= tie) {
    winner.innerText = "YOU LOST!";
  } else {
    winner.innerText = "TIE!";
  }
}); */
