const playerOne = "X";
const playerTwo = "O";
const statusText = document.querySelector("#statusText");
const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restartBtn");
const boxes = document.querySelectorAll(".box");

let currentPlayer = playerOne;

let boardState = new Array(3).fill(new Array(3).fill(null));

function initializeGame() {
    statusText.textContent = `${currentPlayer}'s turn`;
}

function playerTurn() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        statusText.textContent = `${playerTwo}'s turn`;
    } else {
        currentPlayer = playerOne;
        statusText.textContent = `${currentPlayer}'s turn`;
  }
}

function letterDisplay(box) {
    if (currentPlayer === playerOne){
        box.textContent = "X";
    } else if (currentPlayer === playerTwo){
        box.textContent = "O";
    }
    playerTurn();
    winner();
    Draw();
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
    for (const boxIndices of winConditions) {
        const [index1, index2, index3] = boxIndices;

        const box1 = document.querySelector(`button[boxindex="${index1}"]`);
        const box2 = document.querySelector(`button[boxindex="${index2}"]`);
        const box3 = document.querySelector(`button[boxindex="${index3}"]`);

        if (box1.textContent === box2.textContent && box2.textContent === box3.textContent) {
            if (box1.textContent === "X") {
                statusText.textContent = `${playerOne} wins!`;
                disableButtons();
                break;
            } else if (box1.textContent === "O") {
                statusText.textContent = `${playerTwo} wins!`;
                disableButtons();
                break;
            }   
        }
    }
}

function disableButtons(disabled = true) {
    const buttons = document.querySelectorAll("button.box");
            for(const btn of buttons){
                btn.disabled = disabled;
            }
}

function Draw() {
    if (Array.from(boxes).every(box => box.textContent !== "") && !winner()) {
        statusText.textContent = "The Game is a Draw!";
    }
}      

playerOne_score = 0
playerTwo_score = 0
function scoreBoard(){
    if (playerOne = winConditions){
        playerOne_score += 1;
    } else if (playerTwo = winConditions){
        playerTwo_score += 1;
    }
}

function endGame() {
    statusText.textContent = "Game Ended";
}

function restartGame() {
    boxes.forEach(box => {
        box.textContent = "";
    });
    initializeGame();
    playerTurn();
    endGame();
    disableButtons(false);
}

startBtn.addEventListener("click", initializeGame);
restartBtn.addEventListener("click", restartGame, endGame);

for (const box of boxes) {
    box.addEventListener("click", () => letterDisplay(box));
}