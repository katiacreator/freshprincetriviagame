console.log("we live");
//* Category Card Object *//
const categoryArray = [
  {
    category: "GUEST STARS: questions abour celebrity cameos and crossover tv characters"
  },
  {
    category: "MAIN PLOTLINES:questions about the most iconic moments in the show"
  },
  {
    category: "BEHIND THE CAMERA:questions about production and history of the show"
  },
  {
    category:
      "CHARACTER NAMES: questions about main and not-so main recurring characters",
  },
  {
    category:
      "WILL'S RELATIONSHIPS: questions abour Will's love interests throughout the show"
  },
];
let cardHtml = "";

cardHtml = `<h3 id="category" class="instructions">CATEGORIES</h3>
<p class="instructions">MAIN PLOTLINES: questions about the most iconic moments in the show</p>
<p class="instructions">BEHIND THE CAMERA: questions about production and history of the show</p>
<p class="instructions">CHARACTER NAMES: questions about main and not-so main recurring characters</p>
<p class="instructions">WILL'S RELATIONSHIPS: questions abour Will's love interests throughout the show</p>
<p class="instructions">GUEST STARS: questions abour celebrity cameos and crossover tv characters</p>
<p class="instructions">Click continue to head over to the game</p>
<button id="continueBtn" class="btn">CONTINUE</button>`;

const mainContent = document.querySelector("#content");
mainContent.innerHTML = cardHtml;

const continueBtn = document.querySelector("#continueBtn");
//click event for start button
continueBtn.addEventListener("click", () => {
  console.log("this button has been clicked");
  //display quiz.html goes here
  location.href = "quiz.html";
});
