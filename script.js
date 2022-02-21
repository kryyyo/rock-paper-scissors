//Initialization of Scores (containers)
let playerScore = 0
let computerScore = 0

function computerPlay() {
    const moves = ['Rock', 'Paper', 'Scissors']

    //randomizing using the fraction of the length
    let computerTurn = moves[Math.floor(Math.random() * moves.length)]

    return computerTurn
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore += 1
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore += 1
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore += 1
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore += 1
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore += 1
        return `You lost! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore += 1
        return `You won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return `It's a tie. You both use ${playerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return `It's a tie. You both use ${playerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return `It's a tie. You both use ${playerSelection}`
    } else {
        computerScore += 1
        return `Wrong input! Score goes to Computer`
    }
       
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    
    resetScore()

    //5 round play
    for (let i = 0; i < 5; i++) {

        const answer = prompt('What is your turn?')

        const playerSelection = answer.slice(0,1).toUpperCase() + answer.slice(1,).toLowerCase()
        const computerSelection = computerPlay()

        const result = playRound(playerSelection, computerSelection)

        console.log(result)
    }
    
    //Game over
    if (playerScore > computerScore) {
        return `You won! Your score: ${playerScore}; Computer score: ${computerScore}`
    } else if (playerScore < computerScore) {
        return `You lost! Your score: ${playerScore}; Computer score: ${computerScore}`
    } else if (playerScore === computerScore) {
        return `It's a tie! You both scored: ${computerScore}`
    } else {
        return 'Something is wrong'
    }

}
