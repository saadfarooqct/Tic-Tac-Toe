const statusText = document.querySelector("statusText");

function initializeGame(){
    button = document.querySelector("startBtn");
    statusText.textContent = `${playerOne}'s turn`;
    startBtn.addEventListener("click", initializeGame);
}
initializeGame();

let playerOne = "X";

let playerTwo = "O";

const winConditions = [  
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],   
]

function winner(){
    if (playerOne === winConditions){
        return (`${playerOne} has won the game!`);
    } else if (playerTwo === winConditions){
        return (`${playerTwo} has won the game!`);
    } 
}
winner();