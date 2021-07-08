console.log("we live");
//* Category Card Object *//
const categoryArray = [
  {
    category: "GUEST STARS",
    description: "Lorem1 ipsum dolor sit amet.",
  },
  {
    category: "MAIN PLOTLINES",
    description: "Lorem1 ipsum dolor sit amet.",
  },
  {
    category: "BEHIND THE CAMERA",
    description: "Lorem1 ipsum dolor sit amet.",
  },
  {
    category: "CHARACTER NAMES",
    description: "Lorem1 ipsum dolor sit amet.",
  },
  {
    category: "WILL'S RELATIONSHIPS",
    description: "Lorem1 ipsum dolor sit amet.",
  },
];
console.log(categoryArray);
let cardHtml = ""
categoryArray.forEach((category) => {
  console.log('category: ', category.category);
cardHtml = `<h3 id="category" class="category">${category.category}</h3>
<p class="hide">${category.description}</p>
<h3 id="category" class="category">${category.category}</h3>
<p class="hide">${category.description}</p>
<h3 id="category" class="category">${category.category}</h3>
<p class="hide">${category.description}</p>
<h3 id="category" class="category">${category.category}</h3>
<p class="hide">${category.description}</p>
<h3 id="category" class="category">${category.category}</h3>
<p class="hide">${category.description}</p>
<button id="startBtn" class="btn">START</button>`
//console.log(cardHtml)
})
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

// insertCategory()
// insertDescription
//functions to return multipl icons, titles, and descriptions

/* function insertCategory(){
    categoryArray.forEach((category) =>{
        //console.log('category: ', category);
        return `${category}`
    })
}
function insertDescription(){
    descriptionArray.forEach((description) =>{
         //console.log('description: ', description);
        return `${description}`
    })
}  */
/* const categoryArray = [`<p id="category">CATEGORY1</p>`,`<p id="category">CATEGORY2</p>`,`<p id="category">CATEGORY3</p>`,`<p id="category">CATEGORY4</p>`,`<p id="category">CATEGORY5</p>`] */

/* const descriptionArray = [`<p id="description">Lorem1 ipsum dolor sit amet.</p>`,`<p id="description">Lorem2 ipsum dolor sit amet.</p>`,`<p id="description">Lorem3 ipsum dolor sit amet.</p>`,`<p id="description">Lorem4 ipsum dolor sit amet.</p>`,`<p id="description">Lorem5 ipsum dolor sit amet.</p>`] */
