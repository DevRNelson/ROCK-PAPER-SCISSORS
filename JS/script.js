const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");
const resu = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let result;
let playerSelection;
let computer;

choiceBtns.forEach(button.addEventListener("click", () => {

    playerSelection = button.textContent;
    computerChoice();
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Player: ${computerScore}`;
    resultText.textContent = checkWinner();
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
    const randNum = math.floor(math.random() * 3) + 1;

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