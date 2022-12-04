import { displayMessage } from "./ui/displayMessage.js";
import { getSlider } from "./ui/carousel.js";

//Slider
const sliderUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts?per_page=10&_embed";
const sliderTitle = document.querySelector(".slider-title");

// Featured section
const featuredImgUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts/122?_embed";
const featuredImg = document.querySelector(".featured-img");

// Fetch Api
async function fetchData() {
    try {
        const featuredResponse = await fetch(featuredImgUrl);
        const featuredResult = await featuredResponse.json();

        const sliderResponse = await fetch(sliderUrl);
        const sliderResult = await sliderResponse.json();

        createHTML(featuredResult);
        getSlider(sliderResult);
    }

    catch (error) {
        console.log(error, "An error ocurred");
        displayMessage("error", error, ".errorMsg");
    }
}

fetchData();

function createHTML(headerContent) {
    featuredImg.innerHTML +=
        `<div class="featured-content">
                                <img src="${headerContent._embedded["wp:featuredmedia"]["0"].source_url}" alt="">
                                <div class="featured-text">
                                    <h1>${headerContent.title.rendered}</h1>
                                    <p>${headerContent.excerpt.rendered}</p>
                                    <a href="bloglist.html" class="btn">Blog Posts</a>
                                </div>
                            </div>`;

    sliderTitle.innerHTML =
        `<div class="slider-title">
                                <h2>Latest Posts</h2>
                            </div>`;
};
