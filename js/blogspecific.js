import { displayMessage } from "./displayMessage.js";

const modalContainerHeader = document.querySelector(".modal-container-header");
const backBtn = document.querySelector(".back-btn");

const postDetails = document.querySelector(".post-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/bloglist.html";
}

const url = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts/" + id + "?_embed";

const modalGallery = document.getElementById("modal-container-gallery");
const imgGallery = document.getElementById("imgpopup");

async function fetchPosts() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        const blogPosts = result;
        createHTML(blogPosts);
        ModalPopup();
    }

    catch (error) {
        console.log(error, "An error ocurred")
        displayMessage("error", error, ".errorMsg")
    }
}

fetchPosts();

function createHTML(blogPosts) {
    document.title = blogPosts.title.rendered;

    backBtn.innerHTML =
        `<a href="/bloglist.html">&#8592; Back</a>`;

    postDetails.innerHTML = ``;

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
                                            <div>${blogPosts.content.rendered}</div>
                                        </div>
                                    </div>
                                </div>`;


    modalContainerHeader.innerHTML = `<div class="modal-img">
                                             <img src="${blogPosts._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogPosts.title.rendered}"></img>
                                        </div>`;

    //Modal popup - for my featured image
    const modalContainer = document.getElementById("modal-container-header");
    const modalImage = document.getElementsByClassName("modal-image")["0"];

    modalImage.onclick = function () {
        modalContainer.style.display = "block";

        window.addEventListener("click", function (event) {
            if (event.target == modalContainer) {
                modalContainer.style.display = "none";
            };
        });
    };
};

//Modal Image popup - for my gallery images
function ModalPopup() {
    const imageSrc = document.querySelectorAll("figure img");
    for (let i = 0; i < imageSrc.length; i++) {
        imageSrc[i].onclick = function () {
            modalGallery.style.display = "block";
            imgGallery.src = imageSrc[i].currentSrc;
        }
        window.addEventListener("click", function (event) {
            if (event.target == modalGallery) {
                modalGallery.style.display = "none";
            };
        });
    }
}