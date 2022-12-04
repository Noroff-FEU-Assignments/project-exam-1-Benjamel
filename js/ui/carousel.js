const slideContainerWrapper = document.querySelector(".slide_container-wrapper");
const slideContainer = document.querySelector(".slides-container");
const leftButton = document.getElementById("slide-arrow-prev")
const rightButton = document.getElementById("slide-arrow-next")

//Fetching images slide url
export function getSlider(getResults) {

    slideContainerWrapper.innerHTML = "";

    for (let i = 0; i < getResults.length; i++) {

        if (i === 4) {
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