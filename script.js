function computerPlay() {
    const moves = ['Rock', 'Paper', 'Scissors']

    let computerTurn = moves[Math.floor(Math.random() * moves.length)]

    return computerTurn
}

const playerSelection = 'Scissors'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else
        return `It's a tie!`
}

function game() {
    for (let i = 0; i < 5; i++) {

    }
}