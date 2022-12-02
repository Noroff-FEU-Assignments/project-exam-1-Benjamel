import { displayMessage } from "./displayMessage.js";

const blogList = document.querySelector(".posts-container");
const postHeader = document.querySelector(".posts-header");
const viewMorePosts = document.querySelector(".view-more-container");
const search = document.querySelector(".search");

const postsUrl = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts?per_page=10&_embed";

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



    for (let i = 0; i < getResults.length; i++) {



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
        function renderPosts() {
            blogList.innerHTML = "";

            postsToRender.forEach(function (posts) {
                blogList.innerHTML += `<a href="/blogspecific.html?id=${posts.id}" class="post-link">
            <div class="blog-list-container card-shadow">
                <div class="card-header card-image">
                    <img src="${posts._embedded["wp:featuredmedia"]["0"].source_url}" alt="${posts.title.rendered}">
                </div>
                <div class="card-body">
                    <h2>${posts.title.rendered}</h2>
                    <hr>
                </div>
                <div class="card-footer">
                    <p>${posts._embedded.author[0].name}</p>
                    <p>${posts.date}</p>
                </div>
             </div>
        </a> `;
            });
        }

        search.onkeyup = function () {
            // console.log(event);
            const searchValue = event.target.value.trim().toLowerCase();
            // console.log(searchValue);

            const filteredPosts = getResults.filter(function (posts) {
                if (posts.title.rendered.toLowerCase().startsWith(searchValue)) {
                    return true;
                }
            })

            postsToRender = filteredPosts;
            console.log(filteredPosts);
            renderPosts();
        }
    }
}

viewMorePosts.innerHTML += `<a id="viewMoreBtn" class="btn">View More</a>`;

viewMoreBtn.onclick = function () {
    const newUrl = postsUrl + `&per_page=12`;
    getPosts(newUrl);
    viewMorePosts.classList.add("remove");
}
