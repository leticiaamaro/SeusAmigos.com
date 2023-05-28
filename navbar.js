const navbar = document.querySelector(".navb");
const navMenu = document.querySelector(".nav-menu");

navbar.addEventListener("click", () => {
    navbar.classList.toggle('active');
    navMenu.classList.toggle('active');
})