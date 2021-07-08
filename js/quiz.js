//GLOBAL SCOPED VARIABLES TO BE ACCESSED IN VARIOUS FUNCTIONS
/* CONSTANTS */
//Question and Answers Array
//* Quiz Cards Object */
const questionArray = [
  {
    id: 1,
    question: "1What is Will's cousin's name that he is always berating?",
    choicesArray: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "CHARACTER NAMES",
    
  },
  {
    id: 2,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["two", "Chuck", "Charleston"],
    answer: "Chuck",
    category: "GUEST STARS",
   
  },
  {
    id: 3,
    question: "3What is Will's cousin's name that he is always berating?",
    choicesArray: ["three", "Chuck", "Charleston"],
    answer: "Charleston",
    category: "PLOTLINES",
    
  },
  {
    id: 4,
    question: "4What is Will's cousin's name that he is always berating?",
    choicesArray: ["four", "Chuck", "Charleston"],
    answer: "four",
    category: "BEHIND THE CAMERA",
    
  },
  {
    id: 5,
    question: "5What is Will's cousin's name that he is always berating?",
    choicesArray: ["five", "Chuck", "Charleston"],
    answer: "five",
    category: "WILL'S RELATIONSHIPS",
    
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
  console.log("has been clicked");
  showQuestion(questionNum); //function will append first question
}

/* FUNCTIONS */
/* ********************************************************************************** */
//appends question to main content//need to get all questions to append
function showQuestion(questionNum) {
  markup = `<section id="countdown">
  <section id="time-left">
 <span><h3 id="timer"></h3></span>
  </section>
  </section>
  <section id="question-section">
  <section id="category">${questionArray[questionNum].category}</section>
  <section id="question">${questionArray[questionNum].question}</section>
  </section>
  <button class="choiceA btn">${questionArray[questionNum].choicesArray[0]}</button>
  <button class="choiceB btn">${questionArray[questionNum].choicesArray[1]}</button>
  <button class="choiceC btn">${questionArray[questionNum].choicesArray[2]}</button>`;
  mainContent.innerHTML = markup;
  timerEl = document.querySelector("#timer");
  questionTimer();
  choiceABtn = document.querySelector(".choiceA");
  choiceABtn.addEventListener('click', (e)=> {
    if (timerIntervalId || timeOutId) {
      clearInterval(timerIntervalId)
      clearTimeout(timeOutId)
      setNextQuestion()
    }

    /* if(e.target.textContent === questionArray[questionNum].answer) {
      score++; //score stays the same, no points awarded
      console.log('score: ', score);
      setNextQuestion(); //moves on to next question
    } else if (e.target !== questionArray[questionNum].answer){
      score;
      console.log('score: ', score);
      setNextQuestion()
    } */
  })

  choiceBBtn = document.querySelector(".choiceB");
  choiceBBtn.addEventListener('click', (e)=> {
    if (timerIntervalId || timeOutId) {
      clearInterval(timerIntervalId)
      clearTimeout(timeOutId)
      setNextQuestion()
    }
  })

  choiceCBtn = document.querySelector(".choiceC");
  choiceCBtn.addEventListener('click', (e)=> {
    if (timerIntervalId || timeOutId) {
      clearInterval(timerIntervalId)
      clearTimeout(timeOutId)
      setNextQuestion()
    }
  })
}

//Timer Function-run this every 15 seconds or after each choice is clicked
function questionTimer() {
  //console.log("questionTimer function is bein run")
  //setInterval for a tick
  timeLeft = 15;
  // if (timerIntervalId) {
  //   clearInterval(timerIntervalId)
  // }
  timerIntervalId = setInterval(function () {
    timerEl.textContent = `Time Left:${timeLeft}`;
    timeLeft -= 1;
    //console.log("timeLeft: (is a number not a string/text) ", timeLeft);
  }, 1000);
  //setInterval
  
  timeOutId = setTimeout(function () {
    //console.log("setTimeout function is bein run")
    clearInterval(timerIntervalId);
    //add play ticking sound
    if (timeLeft === 0) {
      timerEl.textContent = `Time Left:${0}`;
      score;
      console.log('score: ', score);
      setNextQuestion()
    }
  }, 15500);
}

//if  a choice has been made or time is up then set next question
function evaluateAnswerGiven(e) {//this function is called but isn't giving e
  console.log("evalAnswer function is activated")
  if(e.target.textContent === questionArray[questionNum].answer) {
    score++; //score stays the same, no points awarded
    console.log('score: ', score);
    setNextQuestion(); //moves on to next question
  } else if (e.target !== questionArray[questionNum].answer){
    score;
    console.log('score: ', score);
    setNextQuestion()
  }
}


//this part is saying if there are questions in the array that haven't been shown yet then either keep showing next question or show option to restart quiz-when do i call this
function setNextQuestion() {//this function is running correctly
  console.log("setnextQuestion function is bein run")
  if (questionNum < 5) {
    questionNum++;
  showQuestion(questionNum);
  } else {
    timerEl.textContent = `Time Left:${0}`;
    alert(`There are no more questions`);
    // gameOver();
  }
}



/*  add play ticking sound
function play2() {
  
  /* Audio link for notification 
  var audio = new Audio(" ");
  audio.play();
} */

