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

// click event
document.querySelectorAll(".content-section").forEach(el => {
    el.addEventListener("click", () => {
        el.style.backgroundColor = "#add1dc"
    })
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
const header = document.querySelector('.text-content > h2');   window.addEventListener("scroll", () => {
    header.style.color = "cornflowerblue";
    header.style.backgroundColor = "whitesmoke"
});