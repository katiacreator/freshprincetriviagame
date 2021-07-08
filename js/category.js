console.log("we live");
//* Category Card Object *//
const categoryArray = [
  {
    category: `<p id="category">GUEST STARS</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    category: `<p id="category">PLOTLINES</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    category: `<p id="category">BEHIND THE CAMERA</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    category: `<p id="category">CHARACTER NAMES</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    category: `<p id="category">WILL's RELATIONSHIPS</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
];
//console.log(categoryArray);
let cardHtml = ""
categoryArray.forEach((category) => {
    //console.log('category: ', category);
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
<!-- Start the Game Button -->
<button id="startBtn" class="btn">START</button>`
//console.log(cardHtml)
})
const cardContent = document.querySelector("#content")
cardContent.innerHTML = cardHtml
cardContent.style.color = "black"
console.log(cardContent)
const startBtn = document.querySelector("#startBtn")
console.log("startBtn: ", startBtn)
//click event for start button
startBtn.addEventListener("click", () => {
  console.log("this button has been clicked")
  //display quiz.html goes here
})

// insertCategory()
// insertDescription
//functions to return multipl icons, titles, and descriptions

function insertCategory(){
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
} */
/* const categoryArray = [`<p id="category">CATEGORY1</p>`,`<p id="category">CATEGORY2</p>`,`<p id="category">CATEGORY3</p>`,`<p id="category">CATEGORY4</p>`,`<p id="category">CATEGORY5</p>`] */

/* const descriptionArray = [`<p id="description">Lorem1 ipsum dolor sit amet.</p>`,`<p id="description">Lorem2 ipsum dolor sit amet.</p>`,`<p id="description">Lorem3 ipsum dolor sit amet.</p>`,`<p id="description">Lorem4 ipsum dolor sit amet.</p>`,`<p id="description">Lorem5 ipsum dolor sit amet.</p>`] */
