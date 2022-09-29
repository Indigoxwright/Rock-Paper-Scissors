function computerPlay() {
  const computerSelection = ['rock', 'paper', 'scissors'];
  const getComputerChoice = computerSelection[Math.floor(Math.random() * computerSelection.length)]
  return getComputerChoice;
}



function playRound (playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
   return 'You Won! Rock beats Scissors'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lost, Paper covers Rock!'
  } else if (playerSelection === 'rock' && computerSelection === 'rock') {
   return 'You Tied, you both got Rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
   return 'You Won! Paper covers Rock'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lost... Scissors cuts Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'You Tied, you both got Paper!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Won! Scissors cuts Paper'       
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lost... Rock beats Scissors' 
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'You Tied, you both got Scissors'
  }
}

    console.log(playRound(prompt('Rock, Paper, Scissors'), computerPlay()))

