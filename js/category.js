console.log("we live");
//* Category Card Object *//
const categoryArray = [
  {
    icon: `<i class= "fas fa-signature"></i>`,
    category: `<p id="category">GUEST STARS</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    icon: `<i class= "fas fa-signature"></i>`,
    category: `<p id="category">PLOTLINES</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    icon: `<i class= "fas fa-signature"></i>`,
    category: `<p id="category">BEHIND THE CAMERA</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    icon: `<i class= "fas fa-signature"></i>`,
    category: `<p id="category">CHARACTER NAMES</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
  {
    icon: `<i class= "fas fa-signature"></i>`,
    category: `<p id="category">WILL's RELATIONSHIPS</p>`,
    description: `<p id="description">Lorem1 ipsum dolor sit amet.</p>`,
  },
];
//console.log(categoryArray);
let cardHtml = ""
categoryArray.forEach((category) => {
    //console.log('category: ', category);
cardHtml = `<!-- each card will flip all will have the same size but different colors -->
 <section id="category-card-grid" class="flip-card">
  <section class="flip-card-inner">
    <section id="icon" class="flip-card-front">
      ${category.icon}
    </section>
    <section class="flip-card-back">
    <h3>${category.category}</h3>
      <p>${category.description}</p>
    </section>
  </section>
</section> 
<!-- CardGridEnd -->
<!-- Start the Game Button -->
<!-- grid 1 row stretch all 5 columns -->
<button id="startBtn">START</button>`
//console.log(cardHtml)
})
const cardContent = document.querySelector("#content")
cardContent.innerHTML = cardHtml
cardContent.style.color = "black"
console.log(cardContent)
const icon = document.querySelector("#icon")
console.log('icon: ', icon);
const startBtn = document.querySelector("#startBtn")
console.log("startBtn: ", startBtn)
//click event for start button
startBtn.addEventListener("click", () => {
  console.log("this button has been clicked")
  //display quiz.html goes here
})

//insertIcon()
// insertCategory()
// insertDescription
//functions to return multipl icons, titles, and descriptions
/* function insertIcon(){
    iconArray.filter((icon) =>{
         //console.log(icon)
    return `${icon}`
    })
}
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
