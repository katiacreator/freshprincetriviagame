console.log("we live!");
//* Title Card Object */
const homeScreen = {
  img: `<img src="assets/luigi-lacarelli-images/luigi-lucarelli-fresh-prince-lineup-1.jpeg" alt="fresh prince cartoon family lineup" class="img">`,
  title: `<h1 id="game-title">FRESH PRINCE OF BEL-AIR QUIZ GAME</h1>`,
  instructions: `<h3 class="instructions">A timed-quiz game about the popular 90s tv show, "Fresh Prince of Bel-Air".</h3>`,
};

let markup = `
${homeScreen.img}
${homeScreen.title}
${homeScreen.instructions}
<button class="animated__animated animate__pulse btn" id="nextBtn">NEXT</button>`;

const mainContent = document.getElementById("content");
mainContent.innerHTML = markup
const nextBtn = document.querySelector("#nextBtn")
nextBtn.addEventListener("click", () => {
  console.log("this button has been clicked")
  markup = `
<h3 class="instructions">INSTRUCTIONS</h3>
<p class="instructions">This quiz game will have 10 questions, based on 5 categories.</p>
<p class="instructions">Each question is worth 1 point each, and are timed at 15 second intervals.</p>
<p class="instructions">No points will be gained or deducted if you miss answering a question in time</p>
<p class="instructions">See if you can get all 10 questions right to earn yourself the crown as a true expert fan of the show!</p>
<p class="instructions">Click continue to read about each category before you begin</p>
<button class="btn" id="continueBtn">CONTINUE</button>`
mainContent.innerHTML = markup
const continueBtn = document.querySelector("#continueBtn")
continueBtn.addEventListener("click", () => {
  console.log("this button has been clicked")
  //display category.html goes here
  location.href = "html/category.html"
})
})




