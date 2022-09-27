let rock = "ROCK!"
let paper = "PAPER!"
let scissors = "SCISSORS"
let playerSelection =



    function playRound() {
        let computerChoice = math.floor(math.random() * 3)

        if (playerSelection === getComputerChoice) {
            console.log("it's a tie!")
        } else if (computerChoice === 1) {
            if (playerSelection === 2) {
                console.log("Congragulations you beat Rock with Paper!!")
            } else {
                console.log("Sorry you lost Rock")
            }
        } else if (computerChoice === 2) {
            if (playerSelection === 3) {
                console.log("Congragulations you beat Paper with Scissors!")
            } else {
                console.log("Sorry you lost to Paper")
            }
        } else(computerChoice === 3)
        if (playerSelection === 1) {
            console.log("Congragulations you beat Scissors with Rock!!")
        } else {
            console.log("Sorry You lost to Scissors")
        }
    }

console.log()