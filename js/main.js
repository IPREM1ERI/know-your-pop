import {randomPop, randomMusic, randomSport, randomMovie, checkAnswer, randomWrongMeme, randomCorrectMeme, defaultImg} from "../data/data.js"
/*---------------------------let variable----------------------------*/
let score
let count
let timeLeft = 30
/*--------------------------cached elements--------------------------*/
const boardEl = document.querySelector(".board")
const questionsSpaceEl = document.getElementById("question-space")
let userInput = document.getElementById("user-input")
const resetBtn = document.getElementById("reset-button")
const answerBox = document.getElementById("answer-box")
let countdownEl = document.getElementById("countdown")
const enterBtn = document.getElementById("submit-button")
let displayScore = document.getElementById("score-display")
const wrongMeme = document.getElementById("wrong")
const correctMeme = document.getElementById("correct")
const gameAudio = new Audio("./assets/gamemusic.m4a")
/*--------------------------event listeners--------------------------*/
boardEl.addEventListener('click', handleClick)

resetBtn.addEventListener('click',init)

enterBtn.addEventListener('click' , function(){
  userInput = answerBox.value
  renderResult(userInput)
})

boardEl.addEventListener('click', function() {
  gameAudio.volume = .10
  gameAudio.play()
})

gameAudio.addEventListener('ended', () => {
  gameAudio.play()
})
/*-----------------------------functions-----------------------------*/
init()

function init() {
  timeLeft = 60
  score = 0
  count = 0
  displayScore.textContent = score
  countdownEl.textContent = timeLeft
  questionsSpaceEl.textContent = ""
  answerBox.value = ""
  wrongMeme.src = defaultImg
  correctMeme.src = defaultImg
  displayScore.style.color = "black"
}

function handleClick(evt) {
  if (timeLeft === 0) return
  const questionIdx = parseInt(evt.target.id[3])
  renderQuestion(questionIdx)
  answerBox.value = ""
  if (count === 0) {
    ++count
    startTimer(count)
  }
}

function renderQuestion(idx) {
  if (idx === 0) {
    questionsSpaceEl.textContent = randomPop()
  } else if (idx === 1) {
    questionsSpaceEl.textContent = randomMovie()
  } else if (idx === 2) {
    questionsSpaceEl.textContent = randomSport()
  } else {
    questionsSpaceEl.textContent = randomMusic()
  }
}

function renderResult(userInput) {
  if (timeLeft === 0) return
  let answer = checkAnswer(userInput)
  if (answer) {
    score += 100
    if (score > 0)  {
      displayScore.style.color = "green"
    } else {
      displayScore.style.color = "black"
    }
    wrongMeme.src = defaultImg
    correctMeme.src = randomCorrectMeme()
  } else {
    score -= 100
    if (score < 0) {
      displayScore.style.color = "red"
    } else {
      displayScore.style.color = "black"
    }
    correctMeme.src = defaultImg
    wrongMeme.src = randomWrongMeme()
  }
  displayScore.textContent = score
}

function startTimer(count) {
  if (count === 1) {
    let timer = setInterval(() =>{
      --timeLeft
      if (timeLeft > 9) {
        countdownEl.textContent = timeLeft
      } else {
        countdownEl.textContent = `0${timeLeft}`
      }
      if (timeLeft === 0) {
        score > 0 ? questionsSpaceEl.textContent = `Your score is ${score} we can be friends` : questionsSpaceEl.textContent = `Your score is ${score} stop touching grass`
        clearInterval(timer)
      }
    }, 1000)
  }
}







