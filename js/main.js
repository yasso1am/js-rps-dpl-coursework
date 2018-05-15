
var options = ['rock', 'paper', 'scissors']
var compRoll = options[Math.floor(Math.random() * options.length)]
var userChoice

//USERCHOICE

//Rock
document.getElementById('rock').addEventListener("click", goRock)
  function goRock(){
    userChoice = 'rock'
    document.getElementById('userResult').innerHTML = "You chose rock"
  }

//Paper
document.getElementById('paper').addEventListener("click", goPaper)
  function goPaper(){
    userChoice = 'paper'
    document.getElementById('userResult').innerHTML = "You chose paper"
  }

//Scissors
document.getElementById('scissors').addEventListener("click", goScissors)
  function goScissors(){
    userChoice = 'scissors'
  document.getElementById('userResult').innerHTML = "You chose scissors"
  }

// COMPUTER

// function playGame(){
  document.getElementById('playgame').addEventListener("click", playGame)
  function playGame(){
    document.getElementById('compResult').innerHTML = "Computer chose " + compRoll;
    evaluate(userChoice, compRoll);
    }


// EVALUATE //

function evaluate(userChoice, compRoll) {
  switch(userChoice) {
    case "rock":
      if (compRoll === 'rock') {
        document.getElementById('gameResult').innerHTML = "Tie Game!"
      } else if (compRoll === 'paper') {
        document.getElementById('gameResult').innerHTML = "You Lose!"
      } else {
        document.getElementById('gameResult').innerHTML = "You Win!"
      }
      break
    case "paper":
      if (compRoll === 'paper') {
        document.getElementById('gameResult').innerHTML = "Tie Game!"
      } else if (compRoll === 'scissors') {
        document.getElementById('gameResult').innerHTML = "You Lose!"
      } else {
        document.getElementById('gameResult').innerHTML = "You Win!"
      }
      break
    case "scissors":
      if (compRoll === 'scissors') {
        document.getElementById('gameResult').innerHTML = "Tie Game!"
      } else if (compRoll === 'rock') {
        document.getElementById('gameResult').innerHTML = "You Lose!"
      } else {
        document.getElementById('gameResult').innerHTML = "You Win!"
      }
      break
      default:
        document.getElementById('gameResult').innerHTML = "You tried to cheat, no bueno!"
        var compRoll = undefined
  }
}
