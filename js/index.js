console.log("we live!");
//* Title Card Object */
const homeScreen = {
  img: `<img src="placeholder.jpg" alt="game logo placeholder">`,
  instructions: `<h2 class="gameInstructions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero mollitia, minima impedit nobis cumque veniam asperiores vitae nesciunt quam!</h2>`,
  continueBtn: `<button class="continueBtn"><i class="fas fa-long-arrow-alt-right"></i>CONTINUE</button>`,
};

const markup = `<!-- div for logo img -->
<section id="logo-card" class="row-1 flipCard">
${homeScreen.img}
</section>
<!-- div to instructions -->
<section id="instructions-card">
${homeScreen.instructions}
<!-- this is a button to go to categories screen -->
${homeScreen.continueBtn}
</section>`;

console.log('markup: ', markup);
const content = document.getElementById("content");
content.innerHTML = markup
console.log(content)
