let rock = "ROCK!"
let paper = "PAPER!"
let scissors = "SCISSORS"
let playerSelection = parseInt(prompt("Please Input your selection: 1 = Rock  2 = Paper 3 = Scissors!"));



function getComputerChhoice() {
    let randomNumber = math.floor(math.random() * 3)

    if (randomNumber == 1) {
        console.log(rock)
    } else if (randomNumber == 2) {
        console.log(paper)
    } else {
        console.log(scissors)
    }

}

function playRound(getComputerChhoice, playerSelection) {
    if (playerSelection == ["ROCK", "rock", "Rock"])
}