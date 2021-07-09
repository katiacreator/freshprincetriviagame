console.log("we live!");

let markup = `<h3 class="instructions">INSTRUCTIONS</h3>
<p class="instructions">This quiz game will have 15 questions, based on 5 categories.</p>
<p class="instructions">Each question is worth 10 points each, and are timed at 15 second intervals.</p>
<p class="instructions">No points will be gained or deducted if you miss answering a question in time</p>
<p class="instructions">See if you can get all 15 questions right to earn yourself the crown as a true expert fan of the show!</p>
<p class="instructions">Click continue to read about each category before you begin!</p>
<button class="btn" id="continueBtn">CONTINUE</button>
`;

const mainContent = document.getElementById("content");
mainContent.innerHTML = markup;
const continueBtn = document.querySelector("#continueBtn");
continueBtn.addEventListener("click", () => {
    location.href = "category.html";
  });