#Fresh Prince Trivia Game-Pseudocode
create one js file for each screen-home, game, score
create one empty body html file for each screen-home, game, score
<!-- *********************************************************** -->
##Variables
assign const for html elemetns to be display via js, buttons, question object, gamer id per person that starts the game-random Number generated
assign let variables for score, 
build an object of questions with arrays for each category
    with question id
    question
    question-img
    functions,
    score,
    categoriesArray,
    categoryId
<!-- *********************************************************** -->
## Event Listeners
## event listeners for start button that starts the game, step 1 being display categories to choose from(only one) and randomize all questions button if you think you'r a FP wiz
## event listeners for restart button to reset entire game
## event listeners for category characters button-starts game with only those questions
## event listeners for category showFacts button-starts game with only those questions
## event listeners for category plotlines button-starts game with only those questions
## event listeners for category guest stars button-starts game with only those questions
## event listeners for randomize all questions/categories button as a bonus
## event listeners for home icon button-that sends user back to home from score page and runs rest gmae function
## event listeners for next arrow buttondisplays next Question
## event listeners for see score button-populates score page
<!-- *********************************************************** -->
## Score Mechanics
-score++ on answer correct, display msg that answer was correct and show a "positive" FP gif, "negative gif if answer wrong but no change in score
-write a function that figures out high score amongst those in the score log
<!-- *********************************************************** -->
## Functions
-randomNumber to create gamerID
--init
--setTimer and/or interval depending on animation, game play, 
--scoreEval
--checkAnswerEval-changes score, plays sound if right-kazoo or wrong-buzz, shows msg and gif
-displayMsg(div)
-displayQuestionImgDIV
-displayAnswerEvalImg
--dispalyNextQuestion
--toggle