//GLOBAL SCOPED VARIABLES TO BE ACCESSED IN VARIOUS FUNCTIONS
/* CONSTANTS */
//Question and Answers Array
//* Quiz Cards Object */
const questionArray = [
  {
    id: 1,
    img: `<i class= "fas fa-signature"></i>`,
    question: "1What is Will's cousin's name that he is always berating?",
    choicesArray: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "CHARACTER NAMES",
    score: 0,
  },
  {
    id: 2,
    //img: url(jazz.jpg), //link
    img: `<i class="far fa-star"></i>`,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["two", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "GUEST STARS",
    score: 0,
  },
  {
    id: 3,
    //questionImg: url(jazz.jpg), //link
    img: `<i class="fas fa-network-wired"></i>`,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["three", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "PLOTLINES",
    score: 0,
  },
  {
    id: 4,
    //questionImg: url(jazz.jpg), //link
    img: `<i class="fas fa-film"></i>`,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["four", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "BEHIND THE CAMERA",
    score: 0,
  },
  {
    id: 5,
    //questionImg: url(jazz.jpg), //link
    img: `<i class="far fa-heart"></i>`,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["five", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "WILL'S RELATIONSHIPS",
    score: 0,
  },
];
//to append html markup
const mainContent = document.querySelector("#content");
//console.log("mainContent: ", mainContent);

let choiceBtn = document.querySelector(".choiceA");
console.log('choiceBtn: ', choiceBtn);
let choiceBBtn = document.querySelector(".choiceB");
console.log('choiceBBtn: ', choiceBBtn);
let choiceCBtn= document.querySelector(".choiceC");
console.log('choiceCEl: ', choiceCBtn);

/* OTHER VARIABLES */
let questionNum = 0;
let score = 0;
let timerEl;
//console.log('timerEl: ', timerEl);
let timeLeft = 15;
//console.log('timeLeft: ', timeLeft);

/****************** */ //HTML Template Literal to append to content*********************** */
let markup = `
<button id="startBtn">START</button>
</section>`;
//console.log(markup);
mainContent.innerHTML = markup;


const startBtn = document.querySelector("#startBtn");
//console.log("startBtn: ", startBtn);
/* EVENT LISTENERS */
//This starts the entire quiz process with clicking the start button
//startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("has been clicked");
  showQuestion(questionNum); //function will append first question
}

/* FUNCTIONS */
/* ********************************************************************************** */
//appends question to main content//need to get all questions to append
function showQuestion(questionNum) {
  markup = `<section id="countdown">
  <section id="time-left">
 <span><h4 id="timer"></h4></span>
  </section>
  </section>
  <section id="question-section">
  <section id="category-icon">${questionArray[questionNum].img}</section>
  <section id="category">${questionArray[questionNum].category}</section>
  <section id="question">${questionArray[questionNum].question}</section>
  </section>
  <button class="choiceA btn">A: ${questionArray[questionNum].choicesArray[0]}</button>
  <button class="choiceB btn">B: ${questionArray[questionNum].choicesArray[1]}</button>
  <button class="choiceC btn">C: ${questionArray[questionNum].choicesArray[2]}</button>`;
  mainContent.innerHTML = markup;
  //console.log(choiceCBtn)
  timerEl = document.querySelector("#timer");
  questionTimer();
}

//Timer Function-run this every 15 seconds or after each choice is clicked
function questionTimer() {
  console.log("questionTimer function is bein run")
  //setInterval for a tick
  timeLeft = 15;
  let timerIntervalId = setInterval(function () {
    timerEl.textContent = ` :${timeLeft}`;
    timeLeft -= 1;
    console.log("timeLeft: (is a number not a string/text) ", timeLeft);
  }, 1000);
  //setInterval
  
  setTimeout(function () {
    //console.log("setTimeout function is bein run")
    clearInterval(timerIntervalId);
    //add play ticking sound
    if (timeLeft === 0) {
      timerEl.textContent = ` :${0}`;
      //evaluateAnswerGiven(e);
      setNextQuestion()
    }
  }, 15000);
}

//if  a choice has been made or time is up then set next question
function evaluateAnswerGiven(e) {//this function is not giving e
  console.log("this function is activated")
  if (timeLeft === 0) {
    score;
    setNextQuestion();
  } else if(e.target !== null && e.target === questionArray[questionNum].answer) {
    score++; //score stays the same, no points awarded
    setNextQuestion(); //moves on to next question
  }
}


//this part is saying if there are questions in the array that haven't been shown yet then either keep showing next question or show option to restart quiz-when do i call this
function setNextQuestion() {
  console.log("setnextQuestion function is bein run")

  if (questionNum <= questionArray.length) {
    questionNum++;
  showQuestion(questionNum);
    //console.log("shows next button to click to next question");
  } else {
    alert(`Game Over!! Your final score is ${score}`);
    // gameOver();
  }
}



/*  add play ticking sound
function play2() {
  
  /* Audio link for notification 
  var audio = new Audio(" ");
  audio.play();
} */

