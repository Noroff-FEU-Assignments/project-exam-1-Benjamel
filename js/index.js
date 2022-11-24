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

        if (i === 5) {
            break
        }

        slideContainerWrapper.innerHTML += `
                        <a class="carousel_images current-slide" href="/blogspecific.html?id=${getResults[i].id}">
                            <img class="carousel_image" src="${getResults[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${getResults[i].title.rendered}">
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









// const carouselSlide = document.querySelector(".carousel_slide");
// const track = document.querySelector(".carousel_track");
// const slides = Array.from(track.children);
// const prevButton = document.querySelector(".carousel_button--left");
// const nextButton = document.querySelector(".carousel_button--right");
// const dotsNav = document.querySelector(".carousel_nav");
// const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;
// //Arrange the slides next to each other
// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + "px";
// };
// slides.forEach(setSlidePosition);

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = "translateX(-" + targetSlide.style.left + ")";
//     currentSlide.classList.remove("current-slide");
//     targetSlide.classList.add("current-slide");
// }

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove("current-slide");
//     targetDot.classList.add("current-slide");
// }

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0) {
//         prevButton.classList.add("is-hidden");
//         nextButton.classList.remove("is-hidden");
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove("is-hidden");
//         nextButton.classList.add("is-hidden");
//     } else {
//         prevButton.classList.remove("is-hidden");
//         nextButton.classList.remove("is-hidden");
//     }
// }

// //When i click left, move slides to the left
// prevButton.addEventListener("click", event => {
//     const currentSlide = track.querySelector(".current-slide");
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector(".current-slide")
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slide => slide === prevSlide);

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevIndex);

// });

// //When i click right, move slides to the right
// nextButton.addEventListener("click", event => {
//     const currentSlide = track.querySelector(".current-slide");
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector(".current-slide")
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });

// //When i click the nav indicators, move to that slide
// dotsNav.addEventListener("click", event => {
//     const targetDot = event.target.closest("button");

//     if (!targetDot) return;

//     const currentSlide = track.querySelector(".current-slide");
//     const currentDot = dotsNav.querySelector(".current-slide");
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevButton, nextButton, targetIndex);
// })