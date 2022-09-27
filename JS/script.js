const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const choiceBtns = document.querySelectorAll(".choiceBtn")
let rock = "ROCK!"
let paper = "PAPER!"
let scissors = "SCISSORS"
let playerSelection;
let computer;

choiceBtns.forEach(button.addEventListener("click", () => {

    playerSelection = button.textContent;
    computerChoice();
    playerScore.textContent = `Player: ${playerScore}`;
    computerScore.textContent = `Player: ${computerScore}`;
    resultText.textContent = checkWinner();
}));

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