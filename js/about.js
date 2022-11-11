

const aboutContainer = document.querySelector(".about-content")
const aboutUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts/133?_embed";


// Fetch Api
async function fetchData() {
    try {
        const response = await fetch(aboutUrl);
        const result = await response.json();

        createHTML(result);
    }

    catch (error) {
        console.log(error, "An error ocurred");
        aboutContainer.innerHTML = message("error", error)
    }
}

fetchData();

function createHTML(aboutContent) {
    aboutContainer.innerHTML +=
        `
            <div class="about-image">
                <img src="${aboutContent._embedded["wp:featuredmedia"]["0"].source_url}" alt="about image">
            </div>
            <div class="text-content">
                <h1>${aboutContent.title.rendered}</h1>
                <p>${aboutContent.excerpt.rendered}</p>
                <h3>Feel free to get in touch through my social media!</h3>
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
        `;
} 