//GLOBAL SCOPED VARIABLES TO BE ACCESSED IN VARIOUS FUNCTIONS
let startBtn = document.querySelector("#startBtn");
let choiceEl = document.querySelectorAll(".choice");
let questionHtml = "";
let choicesHtml = "";
let questionNum = 0;
let score = 0;
let timerEl = document.querySelector(".far");
//console.log('timerEl: ', timerEl);
let timeLeft = 15;
//console.log('timeLeft: ', timeLeft);
const mainContent = document.querySelector("#content");
console.log("mainContent: ", mainContent);
let questionContent = document.querySelector("#question-section");
console.log("questionContent: ", questionContent);
const choiceSection = document.querySelector("#choices");
console.log(choiceSection);
let choiceContent = document.querySelector("#choices");
console.log("choiceContent: ", choiceContent);

//Question and Answers Array


//This starts the entire quiz process with clicking the start button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.classList.add("hide");
    showQuestion(questionNum); //function will append first question
}

//appends question to main content
function showQuestion(questionNum) {
    questionHtml = `
    <section id="category-icon">${questionArray[questionNum].img}</section>
    <section id="category">${questionArray[questionNum].category}</section>
    <section id="question">${questionArray[questionNum].question}</section>
    </section>`;
    choicesHtml = `
    <p class="choices">A:${questionArray[questionNum].choicesArray[0]}</p>
    <p class="choices">B:${questionArray[questionNum].choicesArray[1]}</p>
    <p class="choices">C:${questionArray[questionNum].choicesArray[2]}</p>`;
    console.log("choicesHtml: ", choicesHtml);
    questionContent.innerHTML = questionHtml;
    choiceContent.innerHTML = choicesHtml;
    console.log(questionContent, choiceContent);
    questionTimer();
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
        evaluateAnswerGiven(e)
        //show next Question
        }
    }, 1000);
}


//if  a choice has been made or time is up then set next question
function evaluateAnswerGiven(e) {
    if (e.target !== null && e.target === questionArray[questionNum].answer) {
        score++
        setNextQuestion();
    } else if (e.target === null && timeLeft <= 0) {
            score;//score stays the same, no points awarded
            setNextQuestion()//moves on to next question
    } else {
        showQuestion(questionNum)//stay on current question
    }
}

function setNextQuestion() {
    // resetState();goes here?
    questionNum++
    showQuestion(questionNum);
}


  //this part is saying if there are questions in the array that haven't been shown yet then either keep showing next question or show option to restart quiz-when do i call this
function resetState(){
    if (questionNum < questionArray.length ) {
     setNextQuestion()
          //console.log("shows next button to click to next question");
    } else {
         alert(`Game Over!! Your final score is ${score}`);
            // gameOver();
    }
}
