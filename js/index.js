// Your code goes here

// mouseenter event
const busImg = document.querySelector('.intro > img');busImg.addEventListener("mouseenter", () => {
    busImg.style.transform ="scale(1.2)";
    busImg.style.transition = "all 0.3s"
});

// mouseleave event
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
    busImg.style.transition = "all 0.3s"
});

// doubleclick event
const boatImg = document.querySelector('.content-destination > img');
boatImg.addEventListener("dblclick", () => {
    boatImg.style.transform = 'rotate(180deg)';
});

// resize event
const navChange = document.querySelector(".nav-container");
window.addEventListener("resize", () => {
   navChange.style.backgroundColor = "#add1dc"
})

// scroll event
const header = document.querySelector('.text-content h2');window.addEventListener("scroll", () => {
    header.style.color = "cornflowerblue";
    header.style.backgroundColor = "whitesmoke"
});

// keydown event
const body = document.querySelector("body");
body.addEventListener('keydown', () => {
    body.style.display = 'none'
});

// keyup event
body.addEventListener('keyup', () => {
    body.style.display = 'inline'
});

// click event
document.querySelectorAll(".content-section").forEach(el => {
    el.addEventListener("click", () => {
        el.style.backgroundColor = "#add1dc"
    })
});

// click event propagation
body.addEventListener('click', () => {
  body.style.backgroundColor = "papayawhip";
  console.log("end");
});

const content = document.querySelector(".content-section");
content.addEventListener('click', () => {
  content.style.backgroundColor = "whitesmoke";
  console.log("middle")
});

const image = document.querySelector(".img-content");
image.addEventListener('click', () => {
  image.style.backgroundColor = "#FFAA42";
  console.log("start");
  stopPropogration();
});

// prevent default
document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("click", (event) => {
        event.preventDefault();
    })
});