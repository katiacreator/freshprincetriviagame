console.log("we live")

//* Quiz Cards Object */
const quiz = {
    questionId: 1,
    //questionImg: url(jazz.jpg), //link
    question: "What is Will's mom's name?",
    choices: [
      "Carlton",
      "Chuck",
      "Charleston",
    ],
    //"categoryId"-indexOf categories array
    categoryArray: [],
    answer: "A",
    score: 0,
    //functions?
}
const timeLeft = document.querySelector('#time-left')
console.log(timeLeft)
const secondsText = document.querySelector('#seconds-text')
console.log(secondsText)
const question = document.querySelector('#question-heading')
console.log(question)
const choices = document.querySelector('#choices')
console.log(choices)