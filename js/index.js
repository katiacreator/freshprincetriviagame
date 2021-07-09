console.log("we live!");
//* Title Card Object */
const homeScreen = {
  title: `<h1 id="game-title">FRESH PRINCE OF BEL-AIR<br><span class="title">QUIZ GAME</span></h1>`,
  instructions: `<h3 class="instructions">A timed-quiz game about the popular 90s tv show, "Fresh Prince of Bel-Air". Click next for instructions.</h3>`,
};

let markup = `
<div class='filmstrip-wrapper'>
<div class='filmstrip'> <!-- There must be NO whitespace between frames!-->
  <div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-ashley.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-carlton.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-geoffrey.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-hilary.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-jazz.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-phil.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-vivian-1.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-vivian-2.jpeg'/>
  </div><div class='filmstrip-frame'>
    <img src='assets/tinified/luigi-lucarelli-will.jpeg'/>
  </div>
  </div>
  </div>
  ${homeScreen.title}
${homeScreen.instructions}
<button class="btn" id="nextBtn">NEXT</button>`;

const mainContent = document.getElementById("content");
mainContent.innerHTML = markup;
const nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", () => {
  console.log("this button has been clicked");
  markup = `
<h3 class="instructions">INSTRUCTIONS</h3>
<p class="instructions">This quiz game will have 10 questions, based on 5 categories.</p>
<p class="instructions">Each question is worth 1 point each, and are timed at 15 second intervals.</p>
<p class="instructions">No points will be gained or deducted if you miss answering a question in time</p>
<p class="instructions">See if you can get all 10 questions right to earn yourself the crown as a true expert fan of the show!</p>
<p class="instructions">Click continue to read about each category before you begin!</p>
<button class="btn" id="continueBtn">CONTINUE</button>`;
  mainContent.innerHTML = markup;
  const continueBtn = document.querySelector("#continueBtn");
  continueBtn.addEventListener("click", () => {
    console.log("this button has been clicked");
    //display category.html goes here
    location.href = "html/category.html";
  });
});

let filmstrip = document.getElementsByClassName('filmstrip-wrapper')[0];
          filmstrip.addEventListener('animationiteration', function(){
            // Loop through all the frames and swap their images
            let filmstripFrames = document.getElementsByClassName('filmstrip-frame');
            let nextImg = filmstripFrames[0].getElementsByTagName('img')[0].src;
            for (let i = filmstripFrames.length-1; i >= 0; --i) {
              let frame = filmstripFrames[i];
              let img = frame.getElementsByTagName('img')[0];
              let imgSrc = img.src;
              img.src = nextImg;
              nextImg = imgSrc;
            }
          });
