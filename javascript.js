let playerScore = 0
let compScore = 0 

function computerPlay() {
  const arrOfChoices = ['rock', 'paper', 'scissors']
  const getComputerChoice = [Math.floor(Math.random() * arrOfChoices.length)]
  const compChoice = arrOfChoices[getComputerChoice]
  return compChoice
}

 //computerPlay()


function playRound (playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
   return 'You Won! Rock beats Scissors'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    compScore++
    return 'You Lost, Paper covers Rock!'
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
   return 'You Tied, you both got Rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
   return 'You Won! Paper covers Rock'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    compScore++
    return 'You Lost... Scissors cuts Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'You Tied, you both got Paper!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You Won! Scissors cuts Paper'       
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    compScore++
    return 'You Lost... Rock beats Scissors' 
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'You Tied, you both got Scissors'
  }
}




function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Make your Choice!' , 'Rock, Paper, Scissors').toLowerCase()    
    const computerSelection = computerPlay();
    (playRound(playerSelection, computerSelection)); 
  }

  if (playerScore > compScore) {
    return 'You beat the computer!'
  } else if (playerScore < compScore) {
    return 'The computer beat you' 
  }  else 
    return 'You Tied!'
  }


console.log(game())  
  

