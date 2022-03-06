//Initialization of Scores (containers)
let playerScore = 0
let computerScore = 0
let round = 0;

let playerSelection;
let computerSelection;

function computerPlay() {
    const moves = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

    //randomizing using the fraction of the length
    let computerTurn = moves[Math.floor(Math.random() * moves.length)]

    return computerTurn
}

function playRound(playerSelection, computerSelection) {
    if (round >= 10) {
        console.log(playerScore)
        console.log(computerScore)
        console.log(checkScore(playerScore, computerScore))

    } else {
        if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} covers ${playerSelection}`
        } else if (playerSelection === 'Rock' && computerSelection === 'Spock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} vaporizes ${playerSelection}`
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} crushes ${computerSelection}`
        }  else if (playerSelection === 'Rock' && computerSelection === 'Lizard') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} crushes ${computerSelection}`
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} cuts ${playerSelection}`
        } else if (playerSelection === 'Paper' && computerSelection === 'Lizard') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} eats ${playerSelection}`
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} covers ${computerSelection}`
        } else if (playerSelection === 'Paper' && computerSelection === 'Spock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} disproves ${computerSelection}`
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} crushes ${playerSelection}`
        } else if (playerSelection === 'Scissors' && computerSelection === 'Spock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} smashes ${playerSelection}`
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} cuts ${computerSelection}`
        } else if (playerSelection === 'Scissors' && computerSelection === 'Lizard') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} decapitates ${computerSelection}`
        } else if (playerSelection === 'Lizard' && computerSelection === 'Scissors') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} decapitates ${playerSelection}`
        } else if (playerSelection === 'Lizard' && computerSelection === 'Rock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} crushes ${playerSelection}`
        } else if (playerSelection === 'Lizard' && computerSelection === 'Paper') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} eats ${computerSelection}`
        } else if (playerSelection === 'Lizard' && computerSelection === 'Spock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} poisons ${computerSelection}`
        } else if (playerSelection === 'Spock' && computerSelection === 'Lizard') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} poisons ${playerSelection}`
        } else if (playerSelection === 'Spock' && computerSelection === 'Paper') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You lost! ${computerSelection} disproves ${playerSelection}`
        } else if (playerSelection === 'Spock' && computerSelection === 'Rock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} vaporizes ${computerSelection}`
        } else if (playerSelection === 'Spock' && computerSelection === 'Scissors') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            return `You won! ${playerSelection} smashes ${computerSelection}`
        } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
            round += 1
            turnLabel()
            addScoreLabel()
            return `It's a tie. You both use ${playerSelection}`
        } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
            round += 1
            turnLabel()
            addScoreLabel()
            return `It's a tie. You both use ${playerSelection}`
        } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
            round += 1
            turnLabel()
            addScoreLabel()
            return `It's a tie. You both use ${playerSelection}`
        } else if (playerSelection === 'Lizard' && computerSelection === 'Lizard') {
            round += 1
            turnLabel()
            addScoreLabel()
            return `It's a tie. You both use ${playerSelection}`
        } else if (playerSelection === 'Spock' && computerSelection === 'Spock') {
            round += 1
            turnLabel()
            addScoreLabel()
            return `It's a tie. You both use ${playerSelection}`
        } else {
            round += 1
            computerScore += 1
            turnLabel()
            addScoreLabel()
            return `Wrong input! Score goes to Computer`
        }
    }

}

function resetScore() {
    round = 0;
    labelPlayerTurn.textContent = '';
    labelComputerTurn.textContent = '';
    playerScore = 0;
    computerScore = 0;  
    turnScreen.textContent = '';
}

function checkScore(playerScore, computerScore) {
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

function game() {
    computerSelection = computerPlay()

    const result = playRound(playerSelection, computerSelection)
    console.log(result)
}

function turnLabel() {
    labelPlayerTurn.textContent = playerSelection;
    labelComputerTurn.textContent = computerSelection;
}

function addScoreLabel() {
    labelPlayerScore.textContent = playerScore;
    labelComputerScore.textContent = computerScore;
}

//Event Listeners

const playButton = document.querySelector('.btn-reset')
playButton.addEventListener('click', resetScore)

const rock = document.querySelector('#player-rock-turn')
rock.addEventListener('click', () => {
    playerSelection = rock.innerText;
    game()
})

const paper = document.querySelector('#player-paper-turn')
paper.addEventListener('click', () => {
    playerSelection = paper.innerText;
    game()
})

const scissors = document.querySelector('#player-scissor-turn')
scissors.addEventListener('click', () => {
    playerSelection = scissors.innerText;
    game()
})

const lizard = document.querySelector('#player-lizard-turn')
lizard.addEventListener('click', () => {
    playerSelection = lizard.innerText;
    game()
})

const spock = document.querySelector('#player-spock-turn')
spock.addEventListener('click', () => {
    playerSelection = spock.innerText;
    game()
})


//Computer Buttons (for highlighting)
const compRock = document.querySelector('#computer-rock-turn')
const compPaper = document.querySelector('#computer-paper-turn')
const compScissors = document.querySelector('#computer-scissors-turn')
const compLizard = document.querySelector('#computer-lizard-turn')
const compSpock = document.querySelector('#computer-spock-turn')

//Labels
const labelPlayerTurn = document.querySelector('#player-window h3')
const labelPlayerScore = document.querySelector('#player-score strong')

const labelComputerTurn = document.querySelector('#computer-window h3')
const labelComputerScore = document.querySelector('#computer-score strong')

const turnScreen = document.querySelector('#turn-screen p')

//Pictures to Gifs
const imagePlayerGif = document.querySelector('#player-window img')
const imageComputerGif = document.querySelector('#computer-window img')

