import {randomCatOneQuestion, randomCatTwoQuestion, randomCatThreeQuestion, randomCatFourQuestion, checkAnswer} from "../data/data.js"

/*---------------------------let variable----------------------------*/
let score
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
resetBtn.addEventListener('click',init)



/*-----------------------------functions-----------------------------*/
init()
function init() {
  //board = [categoryOne,categoryTwo,categoryThree,categoryFour]
  timeLeft = 60
  score = 0
  questionsSpaceEl.textContent = ""
 //
}

function handleClick(evt) {
  const questionIdx = parseInt(evt.target.id[3])
  console.log(questionIdx)
  renderQuestion(questionIdx)
}

function renderQuestion(idx) {
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



