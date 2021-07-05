console.log("we live")

//* Quiz Cards Object */
const questionsArray = [
  {
    id: 1,
    img:`<i class="fas fa-signature"></i>` ,
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
    choicesArray: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "GUEST STARS",
    score: 0,
  },
  {
    id: 3,
    //questionImg: url(jazz.jpg), //link
    img: `<i class="fas fa-network-wired"></i>`,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "PLOTLINES",
    score: 0,
  },
  {
    id: 4,
    //questionImg: url(jazz.jpg), //link
    img: `<i class="fas fa-film"></i>`,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "BEHIND THE CAMERA",
    score: 0,
  },
  {
    id: 5,
    //questionImg: url(jazz.jpg), //link
    img: `<i class="far fa-heart"></i>`,
    question: "2What is Will's cousin's name that he is always berating?",
    choicesArray: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "WILL'S RELATIONSHIPS",
    score: 0,
  },
];

/* const timeLeft = document.querySelector('#time-left')
console.log(timeLeft)
const secondsText = document.querySelector('#seconds-text')
console.log(secondsText)
const questionSection = document.querySelector('#question-section')
console.log('questionSection: ', questionSection);
const question = document.querySelector('#question')
console.log(question)
const choices = document.querySelector('#choices')
console.log(choices) */


//HTML Template Literal to append to content
questionsArray.forEach((question) => {
const markup = `<section class="timer">
    <section id="time-left">
      <i class="far fa-hourglass"></i>Time Left
    </section>
    <section id="seconds-text">15</section>
  </section>
  <section id="question-section">
  <section id="category-icon">${question.img}</section>
    <!-- div for questions -->
    <section id="category">${question.category}</section>
    <section id="question">${question.question}</section>
    <ul id="choices>
   /* to be fixed */
    </ul>
  </section>`
  //console.log(markup)
})

const content = document.querySelector("content")
const choices = questionsArray.choices
console.log(choices)
/* questionsArray.choicesArray.forEach((choice, i)=>{
  i = choices.indexOf(i)
  console.log('i: ', i);
  choice = choices[i]
  console.log('choice: ', choice);
}) */

/* <li id="choices">A:${question.choice[0]}</li>
<li id="choices">A:${question.choice[1]}</li>
<li id="choices">A:${question.choice[2]}</li> */