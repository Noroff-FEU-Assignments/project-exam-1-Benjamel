import { message } from "./message.js";

const sliderContainer = document.querySelector(".slider")
const featuredImgUrl = "http://exam-blog-site.local/wp-json/wp/v2/posts/122?_embed";
const featuredImg = document.querySelector(".featured-img");

// const url = "http://exam-blog-site.local/wp-json/wp/v2/posts";


// Fetch Api
async function fetchData() {
    try {
        const response = await fetch(featuredImgUrl);
        const result = await response.json();

        createHTML(result);
    }

    catch (error) {
        console.log(error, "An error ocurred");
        sliderContainer.innerHTML = message("error", error)
    }
}

fetchData();

function createHTML(headerContent) {
    featuredImg.innerHTML +=
        `<div class="featured-content">
            <img src="${headerContent._embedded["wp:featuredmedia"]["0"].source_url}" alt="featured image">
            <div class="featured-text">
                <h1>${headerContent.title.rendered}</h1>
                <p>${headerContent.excerpt.rendered}</p>
                <a href="bloglist.html" class="btn">Blog Posts</a>
            </div>
        </div>`;
} 