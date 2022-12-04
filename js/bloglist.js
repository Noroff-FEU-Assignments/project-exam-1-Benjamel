import { displayMessage } from "./ui/displayMessage.js";
import { createHTML } from "./ui/SearchAndLoadPosts.js";


const postHeader = document.querySelector(".posts-header");
const viewMorePosts = document.querySelector(".view-more-container");

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

//Blog Posts header
postHeader.innerHTML += `<div class="posts-header"><h1>Blog Posts</h1></div>`;

//View more posts button 
viewMorePosts.innerHTML += `<a id="viewMoreBtn" class="btn">View More</a>`;

viewMoreBtn.onclick = function () {
    const newUrl = postsUrl + `&per_page=12`;
    getPosts(newUrl);
    viewMorePosts.classList.add("remove");
}
