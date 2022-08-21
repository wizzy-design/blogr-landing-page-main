// Variables
const burgerOpen = document.querySelectorAll(".activator-buttons img")[0];
const burgerClose = document.querySelectorAll(".activator-buttons img")[1];
const dropdown = document.querySelector("#dropdowns-div");

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