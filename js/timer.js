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


//HTML Template Literal to append to content
let markup = `
  <button id="startBtn">START</button>
</section>`;

//console.log(markup);
const mainContent = document.querySelector("#content");
//console.log("mainContent: ", mainContent);
mainContent.innerHTML = markup;
let questionContent = document.querySelector("#question-section");
//console.log("questionContent: ", questionContent);
let choiceContent = document.querySelector("#choices");
//console.log("choiceContent: ", choiceContent);
//GLOBAL SCOPED VARIABLES TO BE ACCESSED IN VARIOUS FUNCTIONS
let startBtn = document.querySelector("#startBtn");
let questionNum = 0;
let score = 0;
let timerEl = document.querySelector(".far");
//console.log('timerEl: ', timerEl);
let timeLeft = 15;
//console.log('timeLeft: ', timeLeft);
//This starts the entire quiz process with clicking the start button
//startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener('click', ()=>{
    console.log("has been clicked")
    showQuestion(questionNum)
})
/* function startQuiz() {
  //startBtn.classList.add("hide");
  showQuestion(questionNum); //function will append first question
} */

//appends question to main content
function showQuestion(questionNum) {
    questionTimer();
    markup = `<section id="countdown">
    <section id="time-left">
    <i class="far fa-hourglass" id="empty">:${timeLeft}</i>
    </section>
    </section>
    <section id="question-section">
    <section id="category-icon">${questionArray[questionNum].img}</section>
    <section id="category">${questionArray[questionNum].category}</section>
    <section id="question">${questionArray[questionNum].question}</section>
    </section>
    <p class="choices">A:${questionArray[questionNum].choicesArray[0]}</p>
    <p class="choices">B:${questionArray[questionNum].choicesArray[1]}</p>
    <p class="choices">C:${questionArray[questionNum].choicesArray[2]}</p>`;
  mainContent.innerHTML = markup; 
}


//Timer Function-run this every 15 seconds or after each choice is clicked
function questionTimer() {
  let timer = setInterval(function () {
    //add play ticking sound
    timerEl.textContent = ` :${timeLeft}`;
    timeLeft -= 1;
    if (timeLeft < 0) {
      //add play buzzer sound
      timerEl.textContent = ` :${0}`;
      //run choiceEval function
      //evaluateAnswerGiven(e);
      //show next Question
    }
  }, 1000);
}

//if  a choice has been made or time is up then set next question
function evaluateAnswerGiven(e) {
  if (e.target !== null && e.target === questionArray[questionNum].answer) {
    score++;
    setNextQuestion();
  } else if (e.target === null && timeLeft <= 0) {
    score; //score stays the same, no points awarded
    setNextQuestion(); //moves on to next question
  } else {
    showQuestion(questionNum); //stay on current question
  }
}

function setNextQuestion() {
  // resetState();goes here?
  questionNum++;
  showQuestion(questionNum);
}

//this part is saying if there are questions in the array that haven't been shown yet then either keep showing next question or show option to restart quiz-when do i call this
function resetState() {
  if (questionNum < questionArray.length) {
    setNextQuestion();
    //console.log("shows next button to click to next question");
  } else {
    alert(`Game Over!! Your final score is ${score}`);
    // gameOver();
  }
}
