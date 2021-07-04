#Fresh Prince Trivia Game-Pseudocode
create one js file for each screen-home, game, score
create one empty body html file for each screen-home, game, score
<!-- *********************************************************** -->
##Variables-testtest3

assign const for html elemetns to be display via js, buttons, question object, 
assign let variables for score, 
build an object of questions with arrays:
    const quiz = {
        question id: 1
    question-img: url(jazz.jpg) link
    question: "What is Will's mom's name?"
    choices:  {
        "A": "Carlton"
        "B": "Chuck"
        "C": "Charleston"
    } 
    categoryId-indexOf categories array
    categoriesArray,
    answer: "A"
    score = 0,
    functions?
<!-- *********************************************************** -->
## Event Listeners
### continue button, start button, prev arrow icon button, next arrow icon button, home icon button-reset game function will be attached
## continue button for switch
## event listeners for category characters button-starts game with only those questions
## event listeners for category showFacts button-starts game with only those questions
## event listeners for category plotlines button-starts game with only those questions
## event listeners for category guest stars button-starts game with only those questions
## event listeners for home icon button-that sends user back to home from score page and runs rest gmae function
## event listeners for next arrow buttondisplays next Question
## event listeners for see score button-populates score page
<!-- *********************************************************** -->
## Score Mechanics
-score++ on answer correct, doesnt display until the end
append how many they got right out of total to stats component as MVP
<!-- *********************************************************** -->
## Functions
--init
--setTimer and/or interval depending on animation, game play, 
--scoreEval
--checkAnswerEval-changes score, plays sound if right-kazoo or wrong-buzz, shows msg and gif
-displayMsg(div)
-displayQuestionImgDIV
--displayNextQuestion
--toggle