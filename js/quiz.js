console.log("we live");

//* Quiz Cards Object */
const questionsArray = [
  {
    id: 1,
    img: `<i class="fas fa-signature"></i>`,
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
]
//console.log("questionsArray: ", questionsArray);

/* const timeLeft = document.querySelector('#time-left')
console.log(timeLeft)
const secondsText = document.querySelector('#seconds-text')
console.log(secondsText)
const questionSection = document.querySelector('#question-section')
console.log('questionSection: ', questionSection);
const question = document.querySelector('#question')
console.log(question)
const choices = document.querySelector('#choices')
console.log(choices)
 */
// const questionHtml = ""
//HTML Template Literal to append to content
const markup = `<section class="timer">
    <section id="time-left">
    <i class="far fa-hourglass"></i>Time Left
    </section>
    <section id="seconds-text">15</section>
    </section>
    <section id="question-section">
    <ul id="choices>
    /* to be fixed */
    </ul>
    </section>`

//question.choicesArray

//console.log(questionMarkup)
const mainContent = document.querySelector("#content")
mainContent.innerHTML = markup
//console.log(content)html is appended to main div with id of content
const sectionContent = document.querySelector("#question-section")
//console.log('questionContent: ', sectionContent)//html is appended to section with id question section this houses the question and choices info
//looping through and appending html of question info-needs a function with setInterval
function appendQuestion() {
  questionsArray.forEach((question, i) => {
    //console.log(question, i)confirms it is looping through the objects to pull data needed
    const questionHtml = `<section id="category-icon">${question.img}</section>
    <section id="category">${question.category}</section>
    <section id="question">${question.question}</section>`
    console.log(questionHtml)
    //console.log(question.choicesArray)
    // question.forEach((choice)=>{
    /*  `<li id="choices">A:${question.choicesArray}</li>
      <li id="choices">B:${question.choicesArray}</li>
      <li id="choices">C:${question.choicesArray}</li>` */
    //console.log(choiceHtml)
  })
}
appendQuestion()