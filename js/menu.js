const toggleMenu = document.getElementsByClassName("toggle-menu")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]


toggleMenu.addEventListener("click", function () {
    navbarLinks.classList.toggle("active")
})