console.log("we live!");
//* Title Card Object */
const homeScreen = {
  title: `<h1 id="game-title">FRESH PRINCE OF BEL-AIR<br><span class="title">QUIZ GAME</span></h1>`,
  instructions: `<h3 class="description">A timed-quiz game about the popular 90s tv show, "Fresh Prince of Bel-Air". Click next for instructions.</h3>`,
};

let markup = `
  ${homeScreen.title}
  ${homeScreen.instructions}
  <button id="nextBtn" class="btn">NEXT
  `;
console.log(markup);
const mainContent = document.getElementById("content");
mainContent.innerHTML = markup;
const nextBtn = document.querySelector("#nextBtn");
console.log("nextBtn: ", nextBtn);
nextBtn.addEventListener("click", () => {
  console.log("clicked");
  location.href = "html/instructions.html";
});

// - Credit to Dominick @ Codepen: https://codepen.io/dmj/pen/vVpdEe for this filmstrip animation code
let filmstrip = document.getElementsByClassName("filmstrip-wrapper")[0];
filmstrip.addEventListener("animationiteration", function () {
  // Loop through all the frames and swap their images
  let filmstripFrames = document.getElementsByClassName("filmstrip-frame");
  let nextImg = filmstripFrames[0].getElementsByTagName("img")[0].src;
  for (let i = filmstripFrames.length - 1; i >= 0; --i) {
    let frame = filmstripFrames[i];
    let img = frame.getElementsByTagName("img")[0];
    let imgSrc = img.src;
    img.src = nextImg;
    nextImg = imgSrc;
  }
});
