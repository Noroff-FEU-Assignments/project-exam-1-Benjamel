// import { message } from "./message.js";

const blogList = document.querySelector(".posts-container");
const postHeader = document.querySelector(".posts-header");

const url = "https://www.benjaminmeldal.com/wp-json/wp/v2/posts?per_page=20&_embed";

async function getPosts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
    
        console.log(getResults);
        createHTML(getResults);
    }

    catch (error) {
        console.log(error, "An error ocurred");
        blogList.innerHTML = message("error", error);
    }
}

getPosts();

function createHTML(getResults) {

    blogList.innerHTML = "";

    postHeader.innerHTML += 
                            `<div class="posts-header">
                                <h1>Blog Posts</h1>       
                            </div>`;

    for(let i = 3; i < getResults.length; i++) {
        blogList.innerHTML += 
                                `<div class="blog-list-container">
                                    <div class="card-header">
                                        <img src="${getResults[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="featured image">
                                    </div>
                                        <h2>${getResults[i].title.rendered}</h2>
                                    <div class="card-body">
                                        <p>${getResults[i]._embedded.author[0].name}</p>
                                        <p>${getResults[i].date}</p>
                                    </div>
                                </div>`;
    }
};