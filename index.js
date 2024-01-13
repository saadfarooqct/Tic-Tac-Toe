const playerOne = "X";
const playerTwo = "O";
const statusText = document.querySelector("#statusText");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restartBtn");
const box = document.querySelector(".box");

let currentPlayer = playerOne;

let boardState = new Array(3).fill(new Array(3).fill(null));

function initializeGame() {
    statusText.textContent = `${currentPlayer}'s turn`;
}

function playerTurn() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
  }
}

function letterDisplay() {
    if (currentPlayer === playerOne){
        playerOne.letterDisplay === this.getAttribute("X");
    } else if (currentPlayer = playerTwo){
        playerTwo.letterDisplay === this.getAttribute("O");
    }
}

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winner() {
  if (playerOne === winConditions) {
    return `${playerOne} has won the game!`;
  } else if (playerTwo === winConditions) {
    return `${playerTwo} has won the game!`;
  }
}

playerOne_score = 0
playerTwo_score = 0
function scoreBoard(){
    if (playerOne === winConditions){
        playerOne_score += 1;
    } else if (playerTwo === winConditions){
        playerTwo_score += 1;
    }
}

function endGame() {
    statusText.textContent = "Game Ended";
}
startBtn.addEventListener("click", initializeGame);
restartBtn.addEventListener("click", endGame);
box.addEventListener("click", letterDisplay);