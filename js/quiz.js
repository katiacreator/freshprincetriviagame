console.log("we live");

//* Quiz Cards Object */
const questionsArray = [
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
    //questionImg: url(jazz.jpg), //link
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
console.log("questionsArray: ", questionsArray);

// const questionHtml = ""
//HTML Template Literal to append to content
const markup = `<section id="countdown">
    <section id="time-left">
    <i class="far fa-hourglass" id="empty"></i>
    </section>
    </section>
    <section id="question-section">
    <ul id="choices>
    /* to be fixed */
    </ul>
    </section>`;

//question.choicesArray

//console.log(questionMarkup)
const mainContent = document.querySelector("#content");
mainContent.innerHTML = markup;
//console.log(content)html is appended to main div with id of content
const sectionContent = document.querySelector("#question-section");
//console.log('questionContent: ', sectionContent)//html is appended to section with id question section this houses the question and choices info
//looping through and appending html of question info-needs a function with setInterval

questionsArray.forEach((question) => {
  //console.log(question)//confirms it is looping through the objects to pull data needed
  //console.log(question)
  //for( let i = 0; i < question; i++){
  const questionHtml = `<br><section id="category-icon">${question.img}</section>
    <section id="category">${question.category}</section>
    <section id="question">${question.question}</section>`;
  //console.log(questionHtml); //-this is working
  sectionContent.innerHTML = questionHtml
console.log(sectionContent)
})

// Start off with 15 seconds on the timer

//showQuestions()
// setTimeout(appendQuestions(), 10000)
//console.log(question[i].choicesArray[i])
/*   `<li id="choices">A:${question.choicesArray[0]}</li>
      <li id="choices">B:${question.choicesArray[1]}</li>
      <li id="choices">C:${question.choicesArray[2]}</li>` */
  // question.forEach((choice)=>{
  /*  `<li id="choices">A:${question.choicesArray}</li>
      <li id="choices">B:${question.choicesArray}</li>
      <li id="choices">C:${question.choicesArray}</li>` */
//console.log(choiceHtml)

// use timeleft constant for function that switches hourglass after 15 seconds is up if i have time
//let countdownEl = document.getElementById('countdown')
let timerEl = document.querySelector('.far')
console.log('timerEl: ', timerEl);
let timeLeft = 15
//console.log('timeLeft: ', timeLeft);
//document.querySelector('#time-left').textContent
//console.log(timeLeft)


let timer = setInterval(function() {
  timerEl.textContent = ` :${timeLeft}`;
  timeLeft -= 1;
  if (timeLeft < 0) {
    //timerEl = document.getElementById('empty')
    timerEl.textContent = ` :${0}`;
        //score doesnt change
        //show next Question
     }
 }, 1000) 

//if question...is active then run timer, if timer stops disable question and show next question
const questionSection = document.querySelector('#question-section')
console.log('questionSection: ', questionSection);
const question = document.querySelector('#question')
console.log(question)
const choices = document.querySelector('#choices')
console.log(choices)

