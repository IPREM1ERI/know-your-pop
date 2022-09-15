const popQuestions = ["They say this member of the Mustelids goes POP", "I wonder if this Greek hero heard a POP when his got torn","'Once you POP the fun dont stop' is what chip brand slogan","The POPular vote is overridden by what voting body in the United States","POP and lock are staple moves in this dance stlye","This Robin was not POPular, it's why the fans voted for the Joker to kill him","If youd like the bartender to make you a 7 & 7, they'll need Seagrams 7 and this soda POP"]
const movieQuestions = ["This triple crown winner had a hit movie in 2003 starring Tobey Maguire", "Name the actor: Speed, Point Break, The Devils Advocate, Bill and Ted's Execellent Adventure", "Name the film: 'Martha's polishing the brass on the Titanic.It's all going down man.' - Tyler Durden", "Name the director: Reservoir Dogs, The Hateful Eight, Jackie Brown, Pulp Fiction","These 4 actors (Michale Keaton, Val Kilmer, George Clooney, Robert Pattison) all played what role?"
]
const sportQuestions = ["If you say his name before you shoot a crumpled piece of paper, your odds increase of it going in", "Name the team: Troy, Emmitt, Michale, Jimmy","This team has won more World Series titles than the next 3 teams combined","This Polk High Legend once scored 4 touchdowns in 1 game","Every year on April 15, every player in the MLB wears 42 to honor this Dodger player","These four teams have won 5 or more Superbowls: Cowboys, Steelers, Patriots and ____","This heavyweight champion once said 'Everyone has a plan until they get punched in the mouth'"]
const musicQuestions = ["Name the group: UGod, Inspecta Deck, GZA, Raekwon the Chef","This singer said 'Its ok to eat fish Cause they dont have any feelings'", "On a good day, this MC 'messed around and got a triple double'","Name the Song: There is a house way down in  New Orleans...it's been the ruin of many a poor boy","Name the band: Disorder, She's Lost Control, Shawdowplay, Transmission","This MC 'never prayed to God, he prayed to Gotti, Thats right its wicked, thats life he lives it'","You better ask Annie if she's ok. She was hit by a ____","Name the duo: Southernplayalisticcadillacmusic, ATLiens, Aquemini, Stankonia","This French duo's music has been heard around the world","This MC should have tought how much a dollar really cost. It costed him a spot in Heaven"]

const answerArrs = ['seabiscuit', 'achilles', 'weasel', 'keanureeves', 'wutang', 'wutangclan', 'kobe', 'cowboys', 'dallascowboys', 'kurtcobain', "icecube","fightclub","houseoftherisingsun", "pringles", "electoralcollege","joydivision","yankees","newyorkyankees", "breakdancing","quentintarantino","albundy","jayz","smoothcriminal","outkast","daftpunk","kendricklamar","jasontodd","jackierobinson","49ers","miketyson","7up","batman"]

const wrongMemes = new Array("../assets/Wrong/Wrong1.jpg","../assets/Wrong/Wrong2.jpg","../assets/Wrong/Wrong3.jpg","../assets/Wrong/Wrong4.jpg","../assets/Wrong/Wrong5.jpg","../assets/Wrong/Wrong6.gif")

const correctMemes = new Array("../assets/Correct/Correct1.jpg","../assets/Correct/Correct2.png","../assets/Correct/Correct3.jpg","../assets/Correct/Correct4.jpg","../assets/Correct/Correct5.jpg","../assets/Correct/Correct6.jpg","../assets/Correct/Correct7.jpg","../assets/Correct/Correct8.PNG","../assets/Correct/Correct9.gif")

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
  return sportQuestions[Math.floor(Math.random() * sportQuestions.length)] 
}

function randomMusic (){
  return musicQuestions[Math.floor(Math.random() * musicQuestions.length)] 
}

function checkAnswer(userInput) {
  userInput = userInput.toLowerCase().replace(/[^a-z0-9]/gi, "")
  return answerArrs.includes(userInput)
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