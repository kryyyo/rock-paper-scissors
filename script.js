//Initialization of Scores (containers)
let playerScore = 0
let computerScore = 0

function computerPlay() {
    const moves = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

    //randomizing using the fraction of the length
    let computerTurn = moves[Math.floor(Math.random() * moves.length)]

    return computerTurn
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        computerScore += 1
        return `You lost! ${computerSelection} covers ${playerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Spock') {
        computerScore += 1
        return `You lost! ${computerSelection} vaporizes ${playerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        playerScore += 1
        return `You won! ${playerSelection} crushes ${computerSelection}`
    }  else if (playerSelection === 'Rock' && computerSelection === 'Lizard') {
        playerScore += 1
        return `You won! ${playerSelection} crushes ${computerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        computerScore += 1
        return `You lost! ${computerSelection} cuts ${playerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Lizard') {
        computerScore += 1
        return `You lost! ${computerSelection} eats ${playerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        playerScore += 1
        return `You won! ${playerSelection} covers ${computerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Spock') {
        playerScore += 1
        return `You won! ${playerSelection} disproves ${computerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        computerScore += 1
        return `You lost! ${computerSelection} crushes ${playerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Spock') {
        computerScore += 1
        return `You lost! ${computerSelection} smashes ${playerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        playerScore += 1
        return `You won! ${playerSelection} cuts ${computerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Lizard') {
        playerScore += 1
        return `You won! ${playerSelection} decapitates ${computerSelection}`
    } else if (playerSelection === 'Lizard' && computerSelection === 'Scissors') {
        computerScore += 1
        return `You lost! ${computerSelection} decapitates ${playerSelection}`
    } else if (playerSelection === 'Lizard' && computerSelection === 'Rock') {
        computerScore += 1
        return `You lost! ${computerSelection} crushes ${playerSelection}`
    } else if (playerSelection === 'Lizard' && computerSelection === 'Paper') {
        playerScore += 1
        return `You won! ${playerSelection} eats ${computerSelection}`
    } else if (playerSelection === 'Lizard' && computerSelection === 'Spock') {
        playerScore += 1
        return `You won! ${playerSelection} poisons ${computerSelection}`
    } else if (playerSelection === 'Spock' && computerSelection === 'Lizard') {
        computerScore += 1
        return `You lost! ${computerSelection} poisons ${playerSelection}`
    } else if (playerSelection === 'Spock' && computerSelection === 'Paper') {
        computerScore += 1
        return `You lost! ${computerSelection} disproves ${playerSelection}`
    } else if (playerSelection === 'Spock' && computerSelection === 'Rock') {
        playerScore += 1
        return `You won! ${playerSelection} vaporizes ${computerSelection}`
    } else if (playerSelection === 'Spock' && computerSelection === 'Scissors') {
        playerScore += 1
        return `You won! ${playerSelection} smashes ${computerSelection}`
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return `It's a tie. You both use ${playerSelection}`
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return `It's a tie. You both use ${playerSelection}`
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return `It's a tie. You both use ${playerSelection}`
    } else if (playerSelection === 'Lizard' && computerSelection === 'Lizard') {
        return `It's a tie. You both use ${playerSelection}`
    } else if (playerSelection === 'Spock' && computerSelection === 'Spock') {
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
