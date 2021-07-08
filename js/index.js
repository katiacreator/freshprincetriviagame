console.log("we live!");
//* Title Card Object */
const homeScreen = {
  img: `<img src="assets/luigi-lacarelli-images/luigi-lucarelli-fresh-prince-lineup-1.jpeg" alt="fresh prince cartoon family lineup" class="img">`,
  title: `<h1 id="game-title">FRESH PRINCE OF BEL-AIR QUIZ GAME</h1>`,
  instructions: `<h3 class="instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero mollitia, minima impedit nobis cumque veniam asperiores vitae nesciunt quam!</h3>`,
};

const markup = `
${homeScreen.img}
${homeScreen.title}
${homeScreen.instructions}
<button class="animated__animated animate__pulse btn" id="continueBtn">CONTINUE</button>`;

console.log('markup: ', markup);
const mainContent = document.getElementById("content");
mainContent.innerHTML = markup
console.log(mainContent)
const continueBtn = document.querySelector("#continueBtn")
console.log('continueBtn: ', continueBtn);
continueBtn.addEventListener("click", () => {
  console.log("this button has been clicked")
  //display category.html goes here
  location.href = "html/category.html"
})
// mainContent.setAttribute("class", "animated__animated animate_slideInUp")

