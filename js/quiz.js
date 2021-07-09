//GLOBAL SCOPED VARIABLES TO BE ACCESSED IN VARIOUS FUNCTIONS
/* CONSTANTS */
//Question and Answers Array
//* Quiz Cards Object */
const questionArray = [
  {
    id: 1,
    question:
      "In the very first episode, 'The Fresh Prince Project', who does Will confuse Geoffrey with?",
    choicesArray: ["Carlton", "Uncle Phil", "Jazz"],
    answer: "Uncle Phil",
    category: "MAIN PLOTLINES",
  },
  {
    id: 2,
    question:
      "Vanessa L. Williams portrayed this pregnant sportswriter who went into labor in the limousine?",
    choicesArray: ["Vanessa Wilson", "Danny Mitchell", "Jena Jackson"],
    answer: "Danny Mitchell",
    category: "GUEST STARS",
  },
  {
    id: 2,
    question: "Trevor Collins-Newsworthy fell to his death doing what?",
    choicesArray: [
      "Proposing to Hilary",
      "Proposing to Vivian",
      "Proposing to Lisa",
    ],
    answer: "Proposing to Hilary",
    category: "MAIN PLOTLINES",
  },
  {
    id: 3,
    question:
      "Ashley had a bully at school. What's the bully's name?",
    choicesArray: ["Jamie", "Paula", "Marie"],
    answer: "Paula",
    category: "CHARACTER NAMES",
  },
  {
    id: 4,
    question:
      "Trapped in the basement during an earthquake, Will discovers everything about her is fake?",
    choicesArray: ["Monica", "Vivica", "Kathleen"],
    answer: "Kathleen",
    category: "WILL'S RELATIONSHIPS",
  },
  {
    id: 5,
    question:
      " What famous child actress portrayed the daughter of Will's mother, Vy's boyfriend?",
    choicesArray: ["Mandy Moore", "Raven Symone", "Drew Barrymore"],
    answer: "Raven Symone",
    category: "GUEST STARS",
  },
  {
    id: 6,
    question: "What is Will's mother's name?",
    choicesArray: ["Betty", "Helen", "Viola(Vy)"],
    answer: "Viola(Vy)",
    category: "CHARACTER NAMES",
  },
  {
    id: 7,
    question:
      "This executive producer for the show also plays the cab driver in the opening scene?",
    choicesArray: ["Eric Clapton", "Quincy Jones", "Chris Lighty"],
    answer: "Quincy Jones",
    category: "BEHIND THE CAMERA",
  },
  {
    id: 8,
    question:
      "Famous model, Tyra Banks, played Will's in college, what was her name?",
    choicesArray: ["Janet", "Julissa", "Jackie"],
    answer: "Jackie",
    category: "WILL'S RELATIONSHIPS",
  },
  {
    id: 9,
    question: "What is the name of Will's BFF that had a major crush on Hilary?",
    choicesArray: ["Jazz", "Chuck", "Charleston"],
    answer: "Jazz",
    category: "CHARACTER NAMES",
  },
  {
    id: 10,
    question:
      "This actress auditioned to play Will's girlfriend but was rejected for being too short?",
    choicesArray: ["Vivica Fox", "Gabrielle Union", "Jada Pinkett"],
    answer: "Jada Pinkett",
    category: "GUEST STARS",
  },
  {
    id: 11,
    question:
      "Nicholas Andrew Michael Shawn Nathan Wanya Banks is named after who?",
    choicesArray: ["Boys II Men", "Jazz", "Bel Biv Devoe"],
    answer: "Boys II Men",
    category: "WILL'S RELATIONSHIPS",
  },
  {
    id: 12,
    question: "These two are credited as the creators of the show?",
    choicesArray: [
      "Adam Lebowitz and Cheryl Walton",
      "Susan and Andy Borowitz",
      "Carlton Cuse and Linda Wilson",
    ],
    answer: "Susan and Andy Borowitz",
    category: "BEHIND THE CAMERA",
  },
  {
    id: 13,
    question: "What is the name of Will's dad who came to visit?",
    choicesArray: ["Will", "Joe", "Lou"],
    answer: "Lou",
    category: "CHARACTER NAMES",
  },
  {
    id: 14,
    question: "Carlton works as this mascot while at ULA with Will?",
    choicesArray: ["Peacock", "Eagle", "Cavalier"],
    answer: "Peacock",
    category: "MAIN PLOTLINES",
  },
  {
    id: 15,
    question: "The show ran for how many seasons?",
    choicesArray: ["4", "6", "7"],
    answer: "6",
    category: "BEHIND THE CAMERA",
  },
];

//to append html markup
const mainContent = document.querySelector("#content");
//console.log("mainContent: ", mainContent);

let choiceABtn;
let choiceBBtn;
let choiceCBtn;

/* OTHER VARIABLES */
let questionNum = 0;
let score = 0;
let timerEl;
let timeLeft = 15;
let timerIntervalId;
let timeOutId;

/****************** */ //HTML Template Literal to append to content*********************** */
let markup = `
<button id="startBtn" class="btn">START</button>
</section>`;
mainContent.innerHTML = markup;

const startBtn = document.querySelector("#startBtn");
/* EVENT LISTENERS */
//This starts the entire quiz process with clicking the start button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  //console.log("has been clicked");
  showQuestion(questionNum); //function will append first question
}

/* FUNCTIONS */
/* ********************************************************************************** */
//appends question to main content//need to get all questions to append
function showQuestion(questionNum) {
  markup = `<section id="countdown">
  <section id="time-left">
 <span><h3 id="timer" class="animated--animated animate--bounce"></h3></span>
  </section>
  </section>
  <section id="question-section">
  <section id="category" >${questionArray[questionNum].category}</section>
  <section id="question">${questionArray[questionNum].question}</section>
  </section>
  <button class="choiceA btn">${questionArray[questionNum].choicesArray[0]}</button>
  <button class="choiceB btn">${questionArray[questionNum].choicesArray[1]}</button>
  <button class="choiceC btn">${questionArray[questionNum].choicesArray[2]}</button>
  <section id="scoreDisplay"><h2 id="scoreText"></h2></section>
  `;
  mainContent.innerHTML = markup;
  timerEl = document.querySelector("#timer");
  questionTimer();
  choiceABtn = document.querySelector(".choiceA");
  choiceABtn.addEventListener("click", (e) => {
    if (timerIntervalId || timeOutId) {
      clearInterval(timerIntervalId);
      clearTimeout(timeOutId);
      evaluateAnswerGiven(e);
    }
  });

  choiceBBtn = document.querySelector(".choiceB");
  choiceBBtn.addEventListener("click", (e) => {
    if (timerIntervalId || timeOutId) {
      clearInterval(timerIntervalId);
      clearTimeout(timeOutId);
      evaluateAnswerGiven(e);
    }
  });

  choiceCBtn = document.querySelector(".choiceC");
  choiceCBtn.addEventListener("click", (e) => {
    if (timerIntervalId || timeOutId) {
      clearInterval(timerIntervalId);
      clearTimeout(timeOutId);
      evaluateAnswerGiven(e);
    }
  });
}

//Timer Function-run this every 15 seconds or after each choice is clicked
function questionTimer() {
  //setInterval for a tick
  timeLeft = 15;
  // if (timerIntervalId) {
  //   clearInterval(timerIntervalId)
  // }
  timerIntervalId = setInterval(function () {
    timerEl.textContent = `Time Left:${timeLeft}`;
    timeLeft -= 1;
  }, 1000);
  //setInterval

  timeOutId = setTimeout(function () {
    //console.log("setTimeout function is bein run")
    clearInterval(timerIntervalId);
    //add play ticking sound
    if (timeLeft === 0) {
      timerEl.textContent = `Time Left:${0}`;
      score;
      console.log("score: ", score);
      setNextQuestion();
    }
  }, 15500);
}

//if  a choice has been made or time is up then set next question
function evaluateAnswerGiven(e) {
  console.log("evalAnswer function is activated");
  if (e.target.textContent === questionArray[questionNum].answer) {
    score+=10; //score stays the same, no points awarded
    console.log("score: ", score);
    setNextQuestion(); //moves on to next question
  } else if (e.target !== questionArray[questionNum].answer) {
    score;
    console.log("score: ", score);
    setNextQuestion();
  }
}

//this part is saying if there are questions in the array that haven't been shown yet then either keep showing next question or show option to restart quiz
function setNextQuestion() {
  console.log("setnextQuestion function is bein run");
  if (questionNum < questionArray.length - 1) {
    questionNum++;
    showQuestion(questionNum);
  } else {
    timerEl.textContent = `GAME OVER!!!!!!`;
    showScore();
  }
}

/* //refactor code using this function
function gameOver(){
  const endGameDisplay = document.querySelector("#endGameDisplay");
  console.log('endGameDisplay: ', endGameDisplay);
  const gameOverText = document.querySelector("#gameOverText");
  console.log('gameOverText: ', gameOverText);
  markup = `<h1>Game Over</h1><p> Congrats! Press scores button to see how you did!<button id="scoresBtn" class="btn">Scores</button>`;
} */

function showScore() {
  const scoreDisplay = document.querySelector("#scoreDisplay");
  console.log("scoreDisplay: ", scoreDisplay);
  const scoreText = document.querySelector("#scoreText");
  console.log("scoreText: ", scoreText);
  if (score === 0 || score < 100) {
    markup = `<h6 id="scoreText">You scored ${score} points! You fail! Ok, so maybe add FPOBA to your tv binge list. I know you have one!  Press home button to restart the game.</h6><button id="homeBtn" class="btn">Home</button>`;
    mainContent.innerHTML = markup;
    const homeBtn = document.querySelector("#homeBtn");
    homeBtn.addEventListener("click", () => {
      location.href = "../index.html";
    });
  } else {
    markup = `<h6 id="scoreText">You scored ${score} points! You win! I now crown you as Fresh Prince of Bel-Air fan royalty! Press home button to play again</h6><button id="homeBtn" class="btn">Home</button>`;
    mainContent.innerHTML = markup;
    const homeBtn = document.querySelector("#homeBtn");
    homeBtn.addEventListener("click", () => {
      location.href = "../index.html";
    });
  }
}



