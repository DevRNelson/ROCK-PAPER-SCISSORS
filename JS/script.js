const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("computerScore")
const choiceBtns = document.querySelectorAll(".choiceBtn")
let rock = "ROCK!"
let paper = "PAPER!"
let scissors = "SCISSORS"
let playerSelection;
let computer;

choiceBtns.forEach(button.addEventListener("click", () => {
    playerSelection = button.textContent;
    computerTurn();
}));

function computerTurn() {
    const randNum = math.floor(math.random() * 3) + 1;
}