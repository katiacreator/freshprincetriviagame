console.log("we live");
const mainContent = document.querySelector("#content");
console.log('mainContent: ', mainContent);
let sectionContent = document.querySelector("#question-section");
console.log('sectionContent: ', sectionContent);
const questionSection = document.querySelector("#question-section");
console.log("questionSection: ", questionSection);
const question = document.querySelector("#question");
console.log(question);
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
//console.log(`questionsArray[0].choicesArray, this data does not show in for each:`, questionsArray[0].choicesArray); //this is what i want access to specifically but for every question choicesArray: ["Carlton", "Chuck", "Charleston"]
/* questionsArray.forEach((question) => {
  let choices = question.choicesArray;
  console.log(`choices = question.choicesArray does show inside foreach`, choices); //this is what i need but for every question 
}); */

/* for(const choice in questionsArray.choicesArray){
  console.log(`${choice}: ${questionsArray.choicesArray[choice]}`)
} */

//HTML Template Literal to append to content
let markup = `<section id="countdown">
<section id="time-left">
<i class="far fa-hourglass" id="empty"></i>
</section>
</section>
<section id="question-section">
<ul id="choices>
/* to be fixed */
</ul>
</section>`;

//console.log(questionMarkup)
mainContent.innerHTML = markup;

let questCount = 0;
let questNum = 1;
let score = 0;
let counter;
let questionHtml = ""
function showQuestion(questNum) {
  //questionsArray.forEach((question) => {
    //console.log(question)//confirms it is looping through the objects to pull data needed
    //console.log(question);
    //for( let i = 0; i < question; i++){
    questionHtml = `<br><section id="category-icon">${questionArray[questNum].img}</section>
    <section id="category">${questionArray[questNum].category}</section>
    <section id="question">${questionArray[questNum].question}</section>`;
    //console.log(questionHtml); //-this is working
    console.log('questionHtml: ', questionHtml);
    sectionContent.innerHTML = questionHtml;
    console.log(sectionContent);
    //console.log(question[i].choicesArray[i])
  /*   const choicesHtml = `<li id="choices">A:${questionArray[questNum].choicesArray}</li>
<li id="choices">B:${questionArray[questNum].choicesArray}</li>
<li id="choices">C:${questionArray[questNum].choicesArray}</li>` */
  }
console.log(showQuestion(questNum))


//showQuestions()
// setTimeout(appendQuestions(), 10000)
/*   `<li id="choices">A:${questionsArray[0].choicesArray}</li>
<li id="choices">B:${questionsArray[1].choicesArray}</li>
<li id="choices">C:${questionsArray[1].choicesArray}</li>` */


// Start off with 15 seconds on the timer
// use timeleft constant for function that switches hourglass after 15 seconds is up if i have time
//let countdownEl = document.getElementById('countdown')
let timerEl = document.querySelector(".far");
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
//console.log('timer: ', timer);

/*  add play ticking sound
function play2() {
  
  /* Audio link for notification 
  var audio = new Audio(" ");
  audio.play();
} */
//if question...is active then run timer, if timer stops disable question and show next question


//function showQuestion(index) {}
