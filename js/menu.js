
const toggleMenu = document.getElementsByClassName("toggle-menu")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];


let menuOpen = false;
toggleMenu.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
    if (!menuOpen) {
        toggleMenu.classList.add("open");
        menuOpen = true;
    } else {
        toggleMenu.classList.remove("open");
        menuOpen = false;
    }
});