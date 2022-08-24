// Variables
const burgerOpen = document.querySelectorAll(".activator-buttons img")[0];
const burgerClose = document.querySelectorAll(".activator-buttons img")[1];
const dropdown = document.querySelector("#dropdowns-div");
const drop = document.querySelector(".drop");

// Dark Arrow Icon
const dropArrow1 = document.querySelectorAll(".drop .dark")[0];
const dropArrow2 = document.querySelectorAll(".drop .dark")[1];
const dropArrow3 = document.querySelectorAll(".drop .dark")[2];

// Light Arrow Icon
const dropArrow4 = document.querySelectorAll(".drop .light")[0];
const dropArrow5 = document.querySelectorAll(".drop .light")[1];
const dropArrow6 = document.querySelectorAll(".drop .light")[2];

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
    dropArrow4.classList.toggle("rotate-arrow");
})

summary2.addEventListener("click", () => {
    dropArrow2.classList.toggle("rotate-arrow");
    dropArrow5.classList.toggle("rotate-arrow");
})

summary3.addEventListener("click", () => {
    dropArrow3.classList.toggle("rotate-arrow");
    dropArrow6.classList.toggle("rotate-arrow");
})

