//Initialization of Scores (containers)
let playerScore = 0
let computerScore = 0

//Generating the turn of the computer
function computerPlay() {
    const moves = ['Rock', 'Paper', 'Scissors']

    //Randomizing using random() function in the observance of the length of the moves array
    let computerTurn = moves[Math.floor(Math.random() * moves.length)]

    return computerTurn
}

//Create a playRound function
function playRound(playerSelection, computerSelection) {

    //Conditionals for who won and who lost including the score
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

//Function for restarting scores for every game played
function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

//Creating a function to start the game
function game() {
    
    //Resetting the scores first
    resetScore()

    //5 round play
    for (let i = 0; i < 5; i++) {

        //Get the answer of user
        const answer = prompt('What is your turn?')

        //Capitalize first letter of the answer to match the case of conditions
        const playerSelection = answer.slice(0,1).toUpperCase() + answer.slice(1,).toLowerCase()
        const computerSelection = computerPlay()

        //Invoking playRound
        const result = playRound(playerSelection, computerSelection)

        console.log(result)
    }
    
    //Game over. Displaying the winner.
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
