// import { message } from "./message.js";

// const blogList = document.querySelector(".posts-container")

// const url = "http://exam-blog-site.local/wp-json/wp/v2/posts?per_page=20&_embed";

// // const proxyUrl = "https://noroffcors.herokuapp.com/"

// // const newUrl = proxyUrl + url;

// async function getPosts() {
//     try {
//         const response = await fetch(url);
//         const getResults = await response.json();
//         blogList.innerHTML = "";

//         console.log(getResults);
//         createHTML(getResults);

//     }

//     catch (error) {
//         console.log(error, "An error ocurred")
//         blogList.innerHTML = message("error", error)
//     }
// }

// getPosts();

// function createHTML(blogPosts) {
//     for (let i = 3; i < blogPosts.length; i++) {
//         if (i === 15) {
//             break
//         }

//         blogList.innerHTML +=
//             `<div>
//             <h1>${headerContent.title.rendered}</h1>
//          </div> `;
//     }
// }