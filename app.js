// Variables
const burgerOpen = document.querySelectorAll(".activator-buttons img")[0];
const burgerClose = document.querySelectorAll(".activator-buttons img")[1];
const dropdown = document.querySelector("#dropdowns-div");
const connect = document.querySelector("#connect");
const connectArrow = document.querySelector("#connect img");
const summary = document.querySelector("summary");

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

connect.addEventListener, summary.addEventListener("click", () => {
    connectArrow.classList.toggle("rotate-arrow");
})