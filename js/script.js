import { message } from "./message.js";


const container = document.querySelector("");

const url = "http://exam-blog-site.local/wp-json/wp/v2/posts";

async function fetchBlogPosts() {
    try {
        const response = await fetch(url);
        const result = await response.json();

    }

    catch (error) {
        console.log(error);
        container.innerHTML = message("error", error)
    }
}

fetchBlogPosts();

