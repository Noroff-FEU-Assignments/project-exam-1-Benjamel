import { message } from "./message.js";

//Slider
const sliderUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts?per_page=20&_embed";
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
        console.log(sliderResult);
    }

    catch (error) {
        console.log(error, "An error ocurred");
        carouselContainer.innerHTML = message("error", error)
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

//Fetching images slide url

function getSlider(getResults) {

    slideContainerWrapper.innerHTML = "";



    for (let i = 2; i < getResults.length; i++) {

        if (i === 10) {
            break
        }

        slideContainerWrapper.innerHTML += `
                        <a class="carousel_images current-slide" href="/blogspecific.html?id=${getResults[i].id}">
                            <img class="carousel_image" src="${getResults[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${getResults[i].title.rendered}">
                            <div class="card-body">
                                <h2>${getResults[i].title.rendered}</h2>
                                <hr>
                            </div>
                            <div class="card-footer">
                                <p>${getResults[i]._embedded.author[0].name}</p>
                                <p>${getResults[i].date}</p>
                            </div>
                        </a>`;
    }
}

const slideContainerWrapper = document.querySelector(".slide_container-wrapper");
const carouselContainer = document.querySelector(".carousel_container");
const slideContainer = document.querySelector(".slides-container");
const leftButton = document.getElementById("slide-arrow-prev")
const rightButton = document.getElementById("slide-arrow-next")

const left = () => {
    const slideWidth = slideContainer.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
};

const right = () => {
    const slideWidth = slideContainer.clientWidth;
    slideContainer.scrollLeft += slideWidth;
};

leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);

