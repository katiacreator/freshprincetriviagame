#Fresh Prince Trivia Game-Pseudocode
create one js file for each screen-home, game, score-DONE
create one empty body html file for each screen-home, game, score-DONE
<!-- *********************************************************** -->
##Variables-
assign const for html elemetns to be display via js, buttons, question object, 
assign let variables for score, 
build an array of questions with objects:
  
<!-- *********************************************************** -->
## Event Listeners
### continue button, start button home icon button-reset game function will be attached
## continue button for switch

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
//if question...is active then run timer, if timer reaches 0 disable that question and show next question 
--scoreEval
--checkAnswerEval-changes score, plays sound if right-kazoo or wrong-buzz, shows msg and gif
-displayMsg(div)
-displayQuestionImgDIV
--displayNextQuestion
--toggle classes to show and hide question info once quiz starts
## Goals
use this example to refactor css styling once game is fully functional
    https://tailwindcomponents.com/component/nonsense-card
    https://tailwindcomponents.com/component/fully-interactive-frames-slider