const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");


// Open / close mobile menu
menuButton.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close menu when clicking a menu link
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});