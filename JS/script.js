const playerT = document.querySelector("#player");
const computerT = document.querySelector("#computer");
const resultT = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choice");
const faceReaction = document.getElementById("computerFace");
let player;
let computer;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent.toUpperCase();
    computerChoice();
    playerT.textContent = `YOU CHOSE  ${player}`;
    computerT.textContent = `COMPUTER CHOSE ${computer}`;
    resultT.textContent = checkWinner();
    faceReaction.textContent = faces();
}));

function checkWinner() {
    if (player === computer) {
        return "It's a Tie!";
    } else if (player === "ROCK" && computer === "SCISSORS" || 
               player === "PAPER" && computer === "ROCK" || 
               player === "SCISSORS" && computer === "PAPER") {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

function faces() {
    if (player === computer) {
        return ":|";
    } else if ((player === "ROCK" && computer === "SCISSORS") || 
               (player === "PAPER" && computer === "ROCK") || 
               (player === "SCISSORS" && computer === "PAPER")) {
        return ">:0";
    } else {
        return ":)";
    }
}

function computerChoice() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    
    switch (randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
