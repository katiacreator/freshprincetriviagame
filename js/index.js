console.log("we live!");
//* Title Card Object */
const homeScreen = {
  img: `<img src="assets/luigi-lacarelli-images/luigi-lucarelli-fresh-prince-lineup-1.jpeg" alt="fresh prince cartoon family lineup" class="img">`,
  title: `<h1 id="game-title">FRESH PRINCE OF BEL-AIR QUIZ GAME</h1>`,
  instructions: `<h3 class="instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero mollitia, minima impedit nobis cumque veniam asperiores vitae nesciunt quam!</h3>`,
  continueBtn: `<a href="/category.html" class="animated__animated animate__pulse btn" id="continueBtn">CONTINUE</a>`
};

const markup = `
${homeScreen.img}
${homeScreen.title}
${homeScreen.instructions}
${homeScreen.continueBtn}`;

console.log('markup: ', markup);
const mainContent = document.getElementById("content");
mainContent.innerHTML = markup
console.log(mainContent)

// mainContent.setAttribute("class", "animated__animated animate_slideInUp")

