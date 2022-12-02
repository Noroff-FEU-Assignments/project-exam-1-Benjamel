import { displayMessage } from "./displayMessage.js";

const blogList = document.querySelector(".posts-container");
const postHeader = document.querySelector(".posts-header");
const viewMorePosts = document.querySelector(".view-more-container");
const search = document.querySelector(".search");

const postsUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts?per_page=12&_embed";

async function getPosts(urls) {
    try {
        const response = await fetch(urls);
        const getResults = await response.json();

        createHTML(getResults);
    }

    catch (error) {
        console.log(error, "An error ocurred");
        displayMessage("error", error, ".errorMsg")
    }
}

getPosts(postsUrl);

postHeader.innerHTML += `<div class="posts-header"><h1>Blog Posts</h1></div>`;

function createHTML(getResults) {

    blogList.innerHTML = "";



    for (let i = 2; i < getResults.length; i++) {



        blogList.innerHTML += `<a href="/blogspecific.html?id=${getResults[i].id}" class="post-link">
                                    <div class="blog-list-container card-shadow">
                                        <div class="card-header card-image">
                                            <img src="${getResults[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${getResults[i].title.rendered}">
                                        </div>
                                        <div class="card-body">
                                            <h2>${getResults[i].title.rendered}</h2>
                                            <hr>
                                        </div>
                                        <div class="card-footer">
                                            <p>${getResults[i]._embedded.author[0].name}</p>
                                            <p>${getResults[i].date}</p>
                                        </div>
                                     </div>
                                </a> `;

        //Search Engine
        let postsToRender = getResults;
        search.onkeyup = function (event) {
            // console.log(event);
            const searchValue = event.target.value.trim().toLowerCase();
            console.log(searchValue);

            const filteredPosts = postsToRender.filter(function (getResults) {
                if (getResults.title.rendered.toLowerCase().startsWith(searchValue)) {
                    return true;
                }
            })

            postsToRender = filteredPosts;
            console.log(filteredPosts);
            createHTML(filteredPosts);
        }
    }
}


viewMorePosts.innerHTML += `<a id="viewMoreBtn" class="btn">View More</a>`;


viewMoreBtn.onclick = function () {
    const newUrl = postsUrl + `&per_page=14`;
    getPosts(newUrl);
    viewMorePosts.classList.add("remove");
}
