I. Home Screen-index.html
     A. Title Card - game logo card does animation before showing instructions card
    B. Instructions Card - gives instructions for the game, "click next to view categories"
     i. some animation to get to next screen, maybe a button
    C. Categories Card Screen- card grid of 5 cards
        i. different icons for each category card for MVP
        1. star - GUEST STARS: from celebrity appearances to crossover tv character appearances
        2. heart - WILL'S ROMANTIC RELATIONSHIPS: there's a lot to unpack here
        3. video camera - BEHIND THE CAMERA: history of show production
        4. ?? - CHARACTERS NAMES : be ready to name not just the main cast but recurring character's names
        5. ?? - MAJOR PLOTLINES: ex. will and carlton living in the beach house, the trevor incident, uncle phil's job, will's dad episode
         ii. card will flip on hover to show the description
         iii. different img of characters for each category-BONUS FEATURE

II. Game Screen - game.html
    A. Category Card- card that shows the icon of the category that expands to the left revealing the question div
    B. Question Card- this card will have a timer, the question, the 3 choices, and next arrow button set up as a grid to make click events easier
        i. sand timer icon for the timer div with :15 as the text for each question that appears
           1. timer resets on each question-write a function for this
    ii. question header tag will append each question
     iii. each card bg color will match category color with black color for the text if not white
     iv. choices section will append the 3 multiple choices as a grid-click event needed
      1. once an answer is clicked, it is compared to correct answer on the backend and next question appears-SET INTERVAL NEED
        1. if u don't answer in 15 seconds timer ends and next question appears-SET INTERVAL NEED
        v. after all questions have been answered, page turns to scores screen

III. Score Screen - score.html
    A. Score Stats Component- how many total, how many per category, and percentage
