import {randomCatOneQuestion, randomCatTwoQuestion, randomCatThreeQuestion, randomCatFourQuestion, checkAnswer,categoryOne, categoryTwo, categoryThree, categoryFour} from "../js/data.js"

/*---------------------------let variable----------------------------*/
let board, score
let timeLeft = 60

/*--------------------------cached elements--------------------------*/
const userInput = document.getElementById("user-input")
const resetBtn = document.getElementById("reset-button")
const answerBox = document.getElementById("answer-box")
let countdownEl = document.getElementById("countdown")
/*--------------------------event listeners--------------------------*/





/*-----------------------------functions-----------------------------*/
init()
function init() {
  board = [categoryOne,categoryTwo,categoryThree,categoryFour]
  score = 0
  render()
}

function render() {

}

let timer = setInterval(() =>{
  --timeLeft
  if (timeLeft > 9) {
    countdownEl.textContent = timeLeft
  } else {
    countdownEl.textContent = `0${timeLeft}`
  }
  if (timeLeft === 0) {
  clearInterval(timer)
  }
}, 1000)

