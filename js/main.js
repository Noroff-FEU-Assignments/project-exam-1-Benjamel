
// Hamburger Menu
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

// Footer

const footerContainer = document.querySelector(".footer-container")

footerContainer.innerHTML = `
                            <div class="footer-nav">
                                <div class="social-media-icons">
                                    <a href="http://www.instagram.com/benjaminmeldal">
                                    <img src="/icons/icons8-instagram-48.png" alt="instagram icon" class="social-media">
                                    </a>
                                    <a href="https://www.github.com/Benjamel">
                                    <img src="/icons/icons8-github-50.png" alt="github icon" class="social-media">
                                    </a>
                                    <a href="https://www.linkedin.com/in/benjaminmeldal/">
                                    <img src="/icons/icons8-linkedin-circled-48.png" alt="linkedin icon" class="social-media">
                                    </a>
                                    <a href="https://www.discord.com/">
                                    <img src="/icons/icons8-discord-48.png" alt="discord icon" class="social-media">
                                    </a>
                                </div>
                            </div>
                                <div class="footer-copyright">
                                    <p>©Copyright Benjamin Meldal</p>
                                </div>`;
