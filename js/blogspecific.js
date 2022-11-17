

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
                                    <img class="modal-image" src="${blogPosts._embedded["wp:featuredmedia"]["0"].source_url}" alt="${blogPosts.title.rendered}"></img>
                                    </div>
                                    <div class="post-card">
                                        <div class="post-date">
                                            <p>${blogPosts._embedded.author[0].name}</p>
                                            <p>${blogPosts.date}</p>
                                        </div>
                                        <hr>
                                        <div class="post-content">
                                        <h1>${blogPosts.title.rendered}</h1>
                                        <div class="wp-gallery">${blogPosts.content.rendered}</div>
                                        </div>
                                    </div>
                                </div>`;

    const modalContainer = document.querySelector(".modal-container");
    const modalImage = document.getElementsByClassName("modal-image")[0];


    modalImage.onclick = function () {
        modalContainer.style.display = "block";


        window.addEventListener("click", function (event) {
            if (event.target == modalContainer) {
                modalContainer.style.display = "none";
            };
        });
    };

    const modalGallery = document.querySelector(".modal-gallery")
    const imgGallery = document.querySelector(".wp-gallery")

    imgGallery.onclick = function () {
        modalContainer.style.display = "block";


        window.addEventListener("click", function (event) {
            if (event.target == modalContainer) {
                modalContainer.style.display = "none";
            };
        });
    };
};












// mainImage.onclick = function () {
//     modalMain.style.display = "block";

//     window.addEventListener("click", function (event) {
//         if (event.target == modalMain) {
//             modalMain.style.display = "none";
//         };
//     });
// };

