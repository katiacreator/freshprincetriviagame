console.log("we live");


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
//console.log("questionsArray: ", questionsArray);

const mainContent = document.querySelector("#content");
console.log("mainContent: ", mainContent);

//HTML Template Literal to append to content
let markup = `<section id="countdown">
<section id="time-left">
<i class="far fa-hourglass" id="empty"></i>
</section>
</section>
<section id="question-section">
<section id="category-icon"></section>
<section id="category"></section>
<section id="question"></section>
<section id="choices">
<p class="choice"></p>
<p class="choice"></p>
<p class="choice"></p>
  </section>
  <button id="startBtn">START</button>
</section>`;

console.log(markup)
mainContent.innerHTML = markup;
/* ************************************************************************************ */

let questionContent = document.querySelector("#question-section");
console.log("questionContent: ", questionContent);
const choiceSection = document.querySelector("#choices");
console.log(choiceSection);
let choiceContent = document.querySelector("#choices");
console.log("choiceContent: ", choiceContent); 

let questCount = 0;
let questNum = 1;
let score = 0;
let counter;
let questionHtml = "";
let choicesHtml = ""

function questionTimer()
{let timerEl = document.querySelector(".far");
//console.log('timerEl: ', timerEl);
let timeLeft = 15;
//console.log('timeLeft: ', timeLeft);
//document.querySelector('#time-left').textContent
//console.log(timeLeft)

let timer = setInterval(function () {
  //add play ticking sound
  timerEl.textContent = ` :${timeLeft}`;
  timeLeft -= 1;
  if (timeLeft < 0) {
    //add play buzzer sound
    timerEl.textContent = ` :${0}`;
    //score doesnt change
    //show next Question
  }
}, 1000);
}

function showQuestion(questNum) {
  questionHtml = `<br><section id="category-icon">${questionArray[questNum].img}</section>
  <section id="category">${questionArray[questNum].category}</section>
  <section id="question">${questionArray[questNum].question}</section>
  </section>`;
  choicesHtml = `<p class="choices">A:${questionArray[questNum].choicesArray[0]}</p>
      <p class="choices">B:${questionArray[questNum].choicesArray[1]}</p>
      <p class="choices">C:${questionArray[questNum].choicesArray[2]}</p>`;
      console.log("choicesHtml: ", choicesHtml);
  questionContent.innerHTML = questionHtml;
  choiceContent.innerHTML = choicesHtml
  console.log(questionContent, choiceContent);
}
showQuestion(questNum)
/* for( let i=0; i < questionArray.length; i++){
  showQuestion(questNum)
} */





//console.log('timer: ', timer);

/*  add play ticking sound
function play2() {
  
  /* Audio link for notification 
  var audio = new Audio(" ");
  audio.play();
} */
//if question...is active then run timer, if timer stops disable question and show next question

//function showQuestion(index) {}
