const popQuestions = ["They say this member of the Mustelids goes POP", "I wonder if this Greek hero heard a POP when his got torn" ]
const movieQuestions = ["This triple crown winner had a hit movie in 2003 starring Tobey Maguire", "Name the actor: Speed, Point Break, The Devils Advocate, Bill and Ted's Execellent Adventure", "Name the film: 'Martha's polishing the brass on the Titanic.It's all going down man.' - Tyler Durden"
]
const sportQuestion = ["If you say his name before you shoot a crumpled piece of paper, your odds increase of it going in", "Name the team: Troy, Emmitt, Michale, Jimmy"]
const musicQuestions = ["Name the group: UGod, Inspecta Deck, GZA, Raekwon the Chef","This singer said 'Its ok to eat fish Cause they dont have any feelings'", "On a good day, this rapper 'messed around and got a triple double'"]

const answersArr = ['seabiscuit', 'achilles', 'weasel', 'keanureeves', 'wutang', 'wutangclan', 'kobe', 'cowboys', 'dallascowboys', 'kurtcobain', "icecube","fightclub"]

const wrongMemes = new Array("../assets/Wrong/Wrong2.jpg","../assets/Wrong/Wrong3.jpg","../assets/Wrong/Wrong4.jpg")
const correctMemes = new Array("../assets/Correct/Correct1.jpg")

const defaultImg = "../assets/glitch-smile.gif"

function randomWrongMeme() {
  return wrongMemes[Math.floor(Math.random() * wrongMemes.length)]
}

function randomCorrectMeme() {
  return correctMemes[Math.floor(Math.random() * correctMemes.length)]
}

function randomPop (){
  return popQuestions[Math.floor(Math.random() * popQuestions.length)] 
}

function randomMovie (){
  return movieQuestions[Math.floor(Math.random() * movieQuestions.length)] 
}

function randomSport (){
  return sportQuestion[Math.floor(Math.random() * sportQuestion.length)] 
}

function randomMusic (){
  return musicQuestions[Math.floor(Math.random() * musicQuestions.length)] 
}

function checkAnswer(userInput) {
  userInput = userInput.toLowerCase().replace(/[^a-z]/gi, "")
  return answersArr.includes(userInput)
}

export {
  randomPop, 
  randomMovie, 
  randomSport, 
  randomMusic, 
  checkAnswer,
  randomWrongMeme,
  randomCorrectMeme,
  defaultImg
}