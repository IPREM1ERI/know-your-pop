const categoryOne = ["They say this member of the Mustelids goes POP", "I wonder if this greek hero heard a POP when his got torn" ]
const categoryTwo = ["This triple crown winner had a hit movie in 2003 starring Tobey Maguire", "Name the actor: Speed, Point Break, The Devils Advocate, Bill and Ted's Execellent Adventure"]
const categoryThree = ["If you say his name before you shoot a crumpled piece of paper, your odds increase of it going in", "Name the team: Troy, Emmitt, Michale, Jimmy"]
const categoryFour = ["Name the group: UGod, Inspecta Deck, GZA, Raekwon the Chef","This singer said 'Its ok to eat fish Cause they dont have any feelings'", "On a good day, this rapper 'messed around and got a triple double'"]

const answersArr = ['seabiscuit', 'achilles', 'weasel', 'keanureeves', 'wutang', 'wutangclan', 'kobe', 'cowboys', 'dallascowboys', 'kurtcobain']

//when more questions are added update the 2 to the total new questions amount
function randomCatOneQuestion (){
  return categoryOne[Math.floor(Math.random() * categoryOne.length)] 
}

function randomCatTwoQuestion (){
  return categoryTwo[Math.floor(Math.random() * categoryTwo.length)] 
}

function randomCatThreeQuestion (){
  return categoryThree[Math.floor(Math.random() * categoryThree.length)] 
}

function randomCatFourQuestion (){
  return categoryFour[Math.floor(Math.random() * categoryFour.length)] 
}

function checkAnswer(userAnswer) {
  userAnswer = userAnswer.toLowerCase().replace(/[^a-z]/gi, "")
  return answersArr.icludes(userAnswer)
}

export {
  randomCatOneQuestion, 
  randomCatTwoQuestion, 
  randomCatThreeQuestion, 
  randomCatFourQuestion, 
  checkAnswer, 
}