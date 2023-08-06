
const card = document.querySelector("#card");
const array = [
    {
     imgLink:"https://cdn-icons-png.flaticon.com/512/6611/6611876.png",
     h1:"Web Development",
    },   
    {
        imgLink:"https://cdn3.iconfinder.com/data/icons/design-and-development-15/256/42-512.png",
        h1:"App Development",
       },
       {
        imgLink:"https://cdn-icons-png.flaticon.com/512/5309/5309779.png",
        h1:"Branding",
       },   
       {
        imgLink:"https://cdn-icons-png.flaticon.com/512/1995/1995437.png",
        h1:"Free Lancing",
       },   
       {
        imgLink:"https://cdn-icons-png.flaticon.com/512/2620/2620577.png",
        h1:"Product Strategy",
       },   
       {
        imgLink:"https://cdn-icons-png.flaticon.com/512/174/174857.png",
        h1:"Linked in",
       },   
]
array.forEach(function (cards){
    card.innerHTML += `
    <div class="card-inner flex"><img src=${cards.imgLink} alt="" width="100px" height="100px">
    <h1>${cards.h1}</h1></div>`
})



var typed = new Typed("#element", {
  strings: [
    "Web Developer .",
    "Graphic Designer .",
    "Video Editor. ",
    "C programmer.",
    "Java programmer.",
  ],
  typeSpeed: 40,
  loop: true,
});

