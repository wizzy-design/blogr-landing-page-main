// Variables
const burgerOpen = document.querySelectorAll(".activator-buttons img")[0];
const burgerClose = document.querySelectorAll(".activator-buttons img")[1];
const dropdown = document.querySelector("#dropdowns-div");
const drop = document.querySelector(".drop");

// Arrow icon
const dropArrow1 = document.querySelectorAll(".drop img")[0];
const dropArrow2 = document.querySelectorAll(".drop img")[1];
const dropArrow3 = document.querySelectorAll(".drop img")[2];

// Summary 
const summary1 = document.querySelectorAll("summary")[0];
const summary2 = document.querySelectorAll("summary")[1];
const summary3 = document.querySelectorAll("summary")[2];

// To open mobile nav
burgerOpen.addEventListener("click", () => {
    dropdown.classList.toggle("inactive");
    burgerOpen.classList.toggle("inactive");
    burgerClose.classList.remove("inactive");
    burgerClose.classList.toggle("show");
})

// To close mobile nav
burgerClose.addEventListener("click", () => {
    burgerClose.classList.remove("show");
    burgerClose.classList.toggle("inactive");
    dropdown.classList.toggle("inactive");
    burgerOpen.classList.remove("inactive");
})

// To give the dropdown arrows in mobile nav interactive
summary1.addEventListener("click", () => {
    dropArrow1.classList.toggle("rotate-arrow");
})

summary2.addEventListener("click", () => {
    dropArrow2.classList.toggle("rotate-arrow");
})

summary3.addEventListener("click", () => {
    dropArrow3.classList.toggle("rotate-arrow");
})

