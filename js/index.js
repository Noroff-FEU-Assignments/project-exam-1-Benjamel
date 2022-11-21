import { message } from "./message.js";

// Carousel Content
const sliderUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts?per_page=20&_embed";
const sliderTitle = document.querySelector(".slider-title");
const sliderContainer = document.querySelector(".carousel-container");

// Featured section
const featuredImgUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts/122?_embed";
const featuredImg = document.querySelector(".featured-img");

// Footer
const footerContainer = document.querySelector(".footer-container")

// Fetch Api
async function fetchData() {
    try {
        const featuredResponse = await fetch(featuredImgUrl);
        const featuredResult = await featuredResponse.json();

        const sliderResponse = await fetch(sliderUrl);
        const sliderResult = await sliderResponse.json();

        createHTML(featuredResult);
        sliderContent(sliderResult);

        console.log(sliderResult);
    }

    catch (error) {
        console.log(error, "An error ocurred");
        sliderContainer.innerHTML = message("error", error)
    }
}

fetchData();

function createHTML(headerContent, sliderResult) {
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


function sliderContent(sliderResult) {

    sliderContainer.innerHTML = "";

    for (let i = 3; i < sliderResult.length; i++) {
        sliderContainer.innerHTML += `<a href="/blogspecific.html?id=${sliderResult[i].id}" class="post-link">
                                        <div class="post-slider">
                                            <div class="blog-list-container card-shadow">
                                                <div class="card-header card-image">
                                                    <img src="${sliderResult[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${sliderResult[i].title.rendered}">
                                                </div>
                                                <div class="card-body">
                                                    <h2>${sliderResult[i].title.rendered}</h2>
                                                    <hr>
                                                </div>
                                                <div class="card-footer">
                                                    <p>${sliderResult[i]._embedded.author[0].name}</p>
                                                    <p>${sliderResult[i].date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a> `;
    }
};