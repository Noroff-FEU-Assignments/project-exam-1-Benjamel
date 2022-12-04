import { displayMessage } from "./ui/displayMessage.js";

const aboutContainer = document.querySelector(".about-content")
const aboutUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts/133?_embed";


// Fetch Api
async function fetchData() {
    try {
        const response = await fetch(aboutUrl);
        const result = await response.json();
        // console.log(result)
        createHTML(result);
    }
    catch (error) {
        console.log(error, "An error ocurred");
        displayMessage("error", error, ".errorMsg")
    }
}

fetchData();

function createHTML(aboutContent) {
    aboutContainer.innerHTML = ``;
    aboutContainer.innerHTML +=
        `
            <div class="about-image">
                <img src="${aboutContent._embedded["wp:featuredmedia"]["0"].source_url}" alt="Picture of me, myself and I">
            </div>
            <div class="text-content">
                <h1>${aboutContent.title.rendered}</h1>
                <p>${aboutContent.excerpt.rendered}</p>
                `;
}

