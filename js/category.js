console.log("we live");
//* Category Card Object *//
const categoryArray = [
  {
    category: "GUEST STARS",
    description: "A certain actress became Will's real life love interest. Can you guess who?",
  },
  {
    category: "MAIN PLOTLINES",
    description: "Most of the show was filled with hilarious moments, some poignant, some tragic then funny again(again, poor Trevor!)",
  },
  {
    category: "BEHIND THE CAMERA",
    description: "For the real stans with way too much time on their hands, can you guess some of these very specific show production facts like what network the show was on, that b-boy grip from Episode 67?...ok maybe not that specific!",
  },
  {
    category: "CHARACTER NAMES",
    description: "Super easy! Can you name that iconic character from the show?!",
  },
  {
    category: "WILL'S RELATIONSHIPS",
    description: "Let's face it, Will was a ladies man! Can you correctly match their names and relationship status with Will?",
  },
];
console.log(categoryArray);
let cardHtml = ""

cardHtml = `<h3 id="category" class="category">${categoryArray[0].category}</h3>
<p class="hide">${categoryArray[0].description}</p>
<h3 id="category" class="category">${categoryArray[1].category}</h3>
<p class="hide">${categoryArray[1].description}</p>
<h3 id="category" class="category">${categoryArray[2].category}</h3>
<p class="hide">${categoryArray[2].description}</p>
<h3 id="category" class="category">${categoryArray[3].category}</h3>
<p class="hide">${categoryArray[3].description}</p>
<h3 id="category" class="category">${categoryArray[4].category}</h3>
<p class="hide">${categoryArray[4].description}</p>
<button id="startBtn" class="btn">START</button>`

const mainContent = document.querySelector("#content")
mainContent.innerHTML = cardHtml
mainContent.style.color = "black"
console.log(mainContent)
const startBtn = document.querySelector("#startBtn")
console.log("startBtn: ", startBtn)
//click event for start button
startBtn.addEventListener("click", () => {
  console.log("this button has been clicked")
  //display quiz.html goes here
  location.href = "quiz.html"
})

