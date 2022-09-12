import {randomCatOneQuestion, randomCatTwoQuestion, randomCatThreeQuestion, randomCatFourQuestion, checkAnswer} from "../data/data.js"

/*---------------------------let variable----------------------------*/
let board, score
let timeLeft = 60

/*--------------------------cached elements--------------------------*/
const boardEl = document.querySelector(".board")
const userInput = document.getElementById("user-input")
const resetBtn = document.getElementById("reset-button")
const answerBox = document.getElementById("answer-box")
let countdownEl = document.getElementById("countdown")
const questionsSpaceEl = document.getElementById("question-space")
/*--------------------------event listeners--------------------------*/

boardEl.addEventListener('click', handleClick)



/*-----------------------------functions-----------------------------*/
init()
function init() {
  board = [categoryOne,categoryTwo,categoryThree,categoryFour]
  score = 0
  render()
}

function handleClick(evt) {
  const questionIdx = parseInt(evt.target.id[3])
  console.log(questionIdx)
  render(questionIdx)
  

}

function render(idx) {
  if (idx === 0) {
    questionsSpaceEl.textContent = randomCatOneQuestion()
  } else if (idx === 1) {
    questionsSpaceEl.textContent = randomCatTwoQuestion()
  } else if (idx === 2) {
    questionsSpaceEl.textContent = randomCatThreeQuestion()
  } else {
    questionsSpaceEl.textContent = randomCatFourQuestion()
  }
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



