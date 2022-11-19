
const modalContainerHeader = document.querySelector(".modal-container-header");
const modalContainerGallery = document.querySelector(".modal-container-gallery");
const modalContainerGalleryTwo = document.querySelector(".modal-container-gallery-two");

const postDetails = document.querySelector(".post-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/bloglist.html";
}

const url = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts/" + id + "?_embed";

async function fetchPosts() {
    try {
        const response = await fetch(url)
        const result = await response.json();

        const blogPosts = result;

        console.log(blogPosts);

        createHTML(blogPosts);
    }

    catch (error) {
        console.log(error, "An error ocurred")
    }
}

fetchPosts();

function createHTML(blogPosts) {
    document.title = blogPosts.title.rendered;

    postDetails.innerHTML += `  <div class="post-container">
                                    <div class="post-header">
                                    <img class="modal-image" id="modal-img" src="${blogPosts._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogPosts.title.rendered}"></img>
                                    </div>
                                    <div class="post-card">
                                        <div class="post-date">
                                            <p>${blogPosts._embedded.author[0].name}</p>
                                            <p>${blogPosts.date}</p>
                                        </div>
                                        <hr>
                                        <div class="post-content">
                                            <h1>${blogPosts.title.rendered}</h1>
                                            <p>${blogPosts.excerpt.rendered}</p>
                                            <div class="wp-gallery">${blogPosts.content.rendered}</div>
                                        </div>
                                    </div>
                                </div>`;




    modalContainerHeader.innerHTML = `<div class="modal-img">
                                             <img src="${blogPosts._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogPosts.title.rendered}"></img>
                                        </div>`;


    modalContainerGallery.innerHTML = `<div class="modal-img">
                                            ${blogPosts.content.rendered}
                                        </div>`;


    modalContainerGalleryTwo.innerHTML = `<div class="modal-img">
                                             ${blogPosts.content.rendered}
                                          </div>`;





    const modalContainer = document.getElementById("modal-container-header");
    const modalImage = document.getElementsByClassName("modal-image")["0"];


    modalImage.onclick = function () {
        modalContainer.style.display = "block";
        console.log(modalImage);

        window.addEventListener("click", function (event) {
            if (event.target == modalContainer) {
                modalContainer.style.display = "none";
            };
        });
    };


    const modalGallery = document.getElementById("modal-container-gallery");
    const imgGallery = document.getElementsByClassName("wp-gallery")["0"];

    imgGallery.onclick = function () {
        modalGallery.style.display = "block";


        window.addEventListener("click", function (event) {
            if (event.target == modalGallery) {
                modalGallery.style.display = "none";
            };
        });
    };


    const modalGalleryTwo = document.getElementById("modal-container-gallery-two");
    const imgGalleryTwo = document.getElementsByClassName("wp-gallery")["0"];

    imgGalleryTwo.onclick = function () {
        modalGalleryTwo.style.display = "block";


        window.addEventListener("click", function (event) {
            if (event.target == modalGalleryTwo) {
                modalGalleryTwo.style.display = "none";
            };
        });
    };
};