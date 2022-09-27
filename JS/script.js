const playerT = document.querySelector("#player");
const computerT = document.querySelector("#computer");
const resultT = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choice");
let result;
let player;
let computer;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerChoice();
    playerT.textContent = `YOU CHOSE  ${player}`;
    computerT.textContent = `COMPUTER CHOSE ${computer}`;
    resultT.textContent = checkWinner();
}));



function checkWinner() {
    if (player == computer) {
        return "DRAW!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "You Win" : "You Lose!"
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You Win" : "You Lose!"
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You Win" : "You Lose!"
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
            break
        case 3:
            computer = "SCISSORS";
            break
    }
}