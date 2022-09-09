import {randomCatOneQuestion, randomCatTwoQuestion, randomCatThreeQuestion, randomCatFourQuestion, checkAnswer,categoryOne, categoryTwo, categoryThree, categoryFour} from "../js/data.js"

/*---------------------------let variable----------------------------*/
let board, score
/*--------------------------cached elements--------------------------*/
const userInput = document.querySelector("#user-input")
const resetBtn = document.querySelector("#reset-button")
const answerBox = document.querySelector("#answer-box")

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

