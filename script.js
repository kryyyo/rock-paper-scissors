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

function firstToTen() {
    if (playerScore === 10 || computerScore === 10) {
        turnScreen.textContent = checkScore(playerScore, computerScore)
        resetTurnStyle()
    } else {
        return
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerScore < 10 && computerScore < 10) {
        if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compPaper)
            turnScreen.textContent = `You lost! ${computerSelection} covers ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-rock.gif'
            imageComputerGif.src = './gifs/win-paper.gif'

        } else if (playerSelection === 'Rock' && computerSelection === 'Spock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compSpock)
            turnScreen.textContent = `You lost! ${computerSelection} vaporizes ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-rock.gif'
            imageComputerGif.src = './gifs/win-spock.gif'

        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compScissors)
            turnScreen.textContent = `You won! ${playerSelection} crushes ${computerSelection}`
            imagePlayerGif.src = './gifs/win-rock.gif'
            imageComputerGif.src = './gifs/lose-scissors.gif'

        }  else if (playerSelection === 'Rock' && computerSelection === 'Lizard') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compLizard)
            turnScreen.textContent = `You won! ${playerSelection} crushes ${computerSelection}`
            imagePlayerGif.src = './gifs/win-rock.gif'
            imageComputerGif.src = './gifs/lose-lizard.gif'

        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compScissors)
            turnScreen.textContent = `You lost! ${computerSelection} cuts ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-paper.gif'
            imageComputerGif.src = './gifs/win-scissors.gif'

        } else if (playerSelection === 'Paper' && computerSelection === 'Lizard') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compLizard)
            turnScreen.textContent = `You lost! ${computerSelection} eats ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-paper.gif'
            imageComputerGif.src = './gifs/win-lizard.gif'

        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compRock)
            turnScreen.textContent = `You won! ${playerSelection} covers ${computerSelection}`
            imagePlayerGif.src = './gifs/win-paper.gif'
            imageComputerGif.src = './gifs/lose-rock.gif'

        } else if (playerSelection === 'Paper' && computerSelection === 'Spock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compSpock)
            turnScreen.textContent = `You won! ${playerSelection} disproves ${computerSelection}`
            imagePlayerGif.src = './gifs/win-paper.gif'
            imageComputerGif.src = './gifs/lose-spock.gif'

        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compRock)
            turnScreen.textContent = `You lost! ${computerSelection} crushes ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-scissors.gif'
            imageComputerGif.src = './gifs/win-rock.gif'

        } else if (playerSelection === 'Scissors' && computerSelection === 'Spock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compSpock)
            turnScreen.textContent = `You lost! ${computerSelection} smashes ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-scissors.gif'
            imageComputerGif.src = './gifs/win-spock.gif'

        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compPaper)
            turnScreen.textContent = `You won! ${playerSelection} cuts ${computerSelection}`
            imagePlayerGif.src = './gifs/win-scissors.gif'
            imageComputerGif.src = './gifs/lose-paper.gif'

        } else if (playerSelection === 'Scissors' && computerSelection === 'Lizard') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compLizard)
            turnScreen.textContent = `You won! ${playerSelection} decapitates ${computerSelection}`
            imagePlayerGif.src = './gifs/win-scissors.gif'
            imageComputerGif.src = './gifs/lose-lizard.gif'

        } else if (playerSelection === 'Lizard' && computerSelection === 'Scissors') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compScissors)
            turnScreen.textContent = `You lost! ${computerSelection} decapitates ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-lizard.gif'
            imageComputerGif.src = './gifs/win-scissors.gif'

        } else if (playerSelection === 'Lizard' && computerSelection === 'Rock') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compRock)
            turnScreen.textContent = `You lost! ${computerSelection} crushes ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-lizard.gif'
            imageComputerGif.src = './gifs/win-rock.gif'

        } else if (playerSelection === 'Lizard' && computerSelection === 'Paper') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compPaper)
            turnScreen.textContent = `You won! ${playerSelection} eats ${computerSelection}`
            imagePlayerGif.src = './gifs/win-lizard.gif'
            imageComputerGif.src = './gifs/lose-paper.gif'

        } else if (playerSelection === 'Lizard' && computerSelection === 'Spock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compSpock)
            turnScreen.textContent = `You won! ${playerSelection} poisons ${computerSelection}`
            imagePlayerGif.src = './gifs/win-lizard.gif'
            imageComputerGif.src = './gifs/lose-spock.gif'


        } else if (playerSelection === 'Spock' && computerSelection === 'Lizard') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compLizard)
            turnScreen.textContent = `You lost! ${computerSelection} poisons ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-spock.gif'
            imageComputerGif.src = './gifs/win-lizard.gif'

            
        } else if (playerSelection === 'Spock' && computerSelection === 'Paper') {
            computerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compPaper)
            turnScreen.textContent = `You lost! ${computerSelection} disproves ${playerSelection}`
            imagePlayerGif.src = './gifs/lose-spock.gif'
            imageComputerGif.src = './gifs/win-paper.gif'

        } else if (playerSelection === 'Spock' && computerSelection === 'Rock') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compRock)
            turnScreen.textContent = `You won! ${playerSelection} vaporizes ${computerSelection}`
            imagePlayerGif.src = './gifs/win-spock.gif'
            imageComputerGif.src = './gifs/lose-rock.gif'

        } else if (playerSelection === 'Spock' && computerSelection === 'Scissors') {
            playerScore += 1
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compScissors)
            turnScreen.textContent = `You won! ${playerSelection} smashes ${computerSelection}`
            imagePlayerGif.src = './gifs/win-spock.gif'
            imageComputerGif.src = './gifs/lose-scissors.gif'

        } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compRock)
            turnScreen.textContent = `It's a tie. You both use ${playerSelection}`
            imagePlayerGif.src = './gifs/win-rock.gif'
            imageComputerGif.src = './gifs/win-rock.gif'

        } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compPaper)
            turnScreen.textContent = `It's a tie. You both use ${playerSelection}`
            imagePlayerGif.src = './gifs/win-paper.gif'
            imageComputerGif.src = './gifs/win-paper.gif'


        } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compScissors)
            turnScreen.textContent = `It's a tie. You both use ${playerSelection}`
            imagePlayerGif.src = './gifs/win-scissors.gif'
            imageComputerGif.src = './gifs/win-scissors.gif'


        } else if (playerSelection === 'Lizard' && computerSelection === 'Lizard') {
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compLizard)
            turnScreen.textContent = `It's a tie. You both use ${playerSelection}`
            imagePlayerGif.src = './gifs/win-lizard.gif'
            imageComputerGif.src = './gifs/win-lizard.gif'


        } else if (playerSelection === 'Spock' && computerSelection === 'Spock') {
            round += 1
            turnLabel()
            addScoreLabel()
            invertStyle(compSpock)
            turnScreen.textContent = `It's a tie. You both use ${playerSelection}`
            imagePlayerGif.src = './gifs/win-spock.gif'
            imageComputerGif.src = './gifs/win-spock.gif'


        } else {
            round += 1
            computerScore += 1
            turnLabel()
            addScoreLabel()
            turnScreen.textContent = `Wrong input! Score goes to Computer`
        }
        
    } else {
        return
    }

    firstToTen()
}

function checkScore(playerScore, computerScore) {
        if (playerScore > computerScore) {
            return `You won! Your score: ${playerScore}, Computer score: ${computerScore}`
        } else if (playerScore < computerScore) {
            return `You lost! Your score: ${playerScore}, Computer score: ${computerScore}`
        } else if (playerScore === computerScore) {
            return `It's a tie! You both scored: ${computerScore}`
        } else {
            return 'Something is wrong'
        }
}

function game() {
    computerSelection = computerPlay()

    playRound(playerSelection, computerSelection)
}

function turnLabel() {
    labelPlayerTurn.textContent = playerSelection;
    labelComputerTurn.textContent = computerSelection;
}

function addScoreLabel() {
    labelPlayerScore.textContent = playerScore;
    labelComputerScore.textContent = computerScore;
}

function resetTurnStyle() {
    rock.setAttribute('style', 'filter: invert(0%)')
    paper.setAttribute('style', 'filter: invert(0%)')
    scissors.setAttribute('style', 'filter: invert(0%)')
    lizard.setAttribute('style', 'filter: invert(0%)')
    spock.setAttribute('style', 'filter: invert(0%)')
    compRock.setAttribute('style', 'filter: invert(0%)')
    compPaper.setAttribute('style', 'filter: invert(0%)')
    compScissors.setAttribute('style', 'filter: invert(0%)')
    compLizard.setAttribute('style', 'filter: invert(0%)')
    compSpock.setAttribute('style', 'filter: invert(0%)')
}

function invertStyle(element) {
    element.setAttribute('style', 'filter: invert(100%)')
}

//Event Listeners

const playButton = document.querySelector('.btn-reset')
playButton.addEventListener('click', () => location.reload())

const rock = document.querySelector('#player-rock-turn')
rock.addEventListener('click', () => {
    playerSelection = rock.innerText;
    resetTurnStyle()
    invertStyle(rock)
    game()
})

const paper = document.querySelector('#player-paper-turn')
paper.addEventListener('click', () => {
    playerSelection = paper.innerText;
    resetTurnStyle()
    invertStyle(paper)
    game()
})

const scissors = document.querySelector('#player-scissor-turn')
scissors.addEventListener('click', () => {
    playerSelection = scissors.innerText;
    resetTurnStyle()
    invertStyle(scissors)
    game()
})

const lizard = document.querySelector('#player-lizard-turn')
lizard.addEventListener('click', () => {
    playerSelection = lizard.innerText;
    resetTurnStyle()
    invertStyle(lizard)
    game()
})

const spock = document.querySelector('#player-spock-turn')
spock.addEventListener('click', () => {
    playerSelection = spock.innerText;
    resetTurnStyle()
    invertStyle(spock)
    game()
})


//Computer Buttons (for highlighting)
const compRock = document.querySelector('#computer-rock-turn')
const compPaper = document.querySelector('#computer-paper-turn')
const compScissors = document.querySelector('#computer-scissor-turn')
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

//Game Alert End 
const alertEndWindow = document.querySelector('#alert-endgame')

if (turnScreen.textContent.slice(0, 7) === 'Round 10') {
    alertEndWindow.id = 'alert-show'
}   