console.log("we live");

//* Quiz Cards Object */
const questionsArray = [
  {
    id: 1,
    //questionImg: url(jazz.jpg), //link
    img: "",
    question: "1What is Will's cousin's name that he is always berating?",
    choices: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "CHARACTER NAMES",
    score: 0,
  },
  {
    id: 2,
    //questionImg: url(jazz.jpg), //link
    img: "",
    question: "2What is Will's cousin's name that he is always berating?",
    choices: ["Carlton", "Chuck", "Charleston"],
    answer: "Carlton",
    category: "Guest stars",
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


//HTML Template Literal to append
const createMarkup = function createMarkup(data) {
  const markup = `<section class="timer">
    <section id="time-left">
      <i class="far fa-hourglass"></i>Time Left
    </section>
    <section id="seconds-text">15</section>
  </section>
  <section id="question-section">
    <!-- <img src="{data.img}" alt="placeholder" id="question-img"> -->
    <!-- div for questions -->
    <section id="category">${data.category}</section>
    <section id="question">${data.question}</section>
    <ul>
    <li id="choices">A:${data.A}</li>
    <li id="choices">B:${data.B}</li>
    <li id="choices">C:${data.C}</li>
    </ul>
  </section>`

  return markup
}

//  Element Data
//loop through question array to print each item
function defineSections() {
  questionsArray.forEach((question, i, choices) => {
  const item = Object.create(null)
    i = question.id//this is getting me the right thing the id of an item in question array
    // console.log('i: ', i) it is grabbing the id
    item.question = createMarkup({
      //img: "",//worry about this last
      category: `${question.category}`,
      question: `${question.question}`,
      A: `${question.choices[0]}`,
      B: `${question.choices[1]}`,
      C: `${question.choices[2]}`,
    })
    console.log(item) //it is return the items to the template literal
    return item
  })
}

function joinHtml(items) {
  let joinedHtml = "";
  console.log('joinedHtml: ', joinedHtml);
  Object.keys(items).forEach(key => {
    joinedHtml += items[key];
  });
  return joinedHtml
}
const content = document.querySelector("content")
console.log('89content: ', content);
const items = defineSections()
console.log('91items: ', items);
const rawHtml = joinHtml(items)
console.log('93rawHtml: ', rawHtml);


// We are only interacting ONCE directly with the DOM
content.insertAdjacentHTML("beforeend", rawHtml);