import {randomCatOneQuestion, randomCatTwoQuestion, randomCatThreeQuestion, randomCatFourQuestion, checkAnswer} from "../data/data.js"

/*---------------------------let variable----------------------------*/
let score
let timeLeft = 60

/*--------------------------cached elements--------------------------*/
const boardEl = document.querySelector(".board")
let userInput = document.getElementById("user-input")
const resetBtn = document.getElementById("reset-button")
const answerBox = document.getElementById("answer-box")
let countdownEl = document.getElementById("countdown")
const questionsSpaceEl = document.getElementById("question-space")
/*--------------------------event listeners--------------------------*/

boardEl.addEventListener('click', handleClick)
resetBtn.addEventListener('click',init)
answerBox.addEventListener('keydown', function(evt) {
  if (evt.key !== undefined) {
    userInput = this.value
    render(userInput)
  }
})







/*-----------------------------functions-----------------------------*/
init()
function init() {
  timeLeft = 60
  score = 0
  questionsSpaceEl.textContent = ""
}

function handleClick(evt) {
  const questionIdx = parseInt(evt.target.id[3])
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

function render(userInput) {
  let answer = checkAnswer(userInput)
  if (answer) {
    score += 100
  } else {
    score -= 100
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



