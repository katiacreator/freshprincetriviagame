console.log("we live!");
//* Title Card Object */
const homeScreen = {
  img: `<img src="/assets/freshprince/freshprince-logo.png" alt="game logo placeholder" class="img">`,
  instructions: `<h3 class="instructions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero mollitia, minima impedit nobis cumque veniam asperiores vitae nesciunt quam!</h3>`,
  continueBtn: `<p><button id="continueBtn"><a href="categories.html"><i class="fas fa-long-arrow-alt-right btn">CONTINUE</i></a></button></p>`,
};

const markup = `<!-- div for logo img -->
<section id="logo-card" class="logo-card">
${homeScreen.img}
<h1>TRIVIA GAME</h1>
${homeScreen.instructions}
<!-- this is a button to go to categories screen -->
${homeScreen.continueBtn}
</section>`;

console.log('markup: ', markup);
const content = document.getElementById("content");
content.innerHTML = markup
console.log(content)
