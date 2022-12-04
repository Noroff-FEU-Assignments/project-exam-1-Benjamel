const search = document.querySelector(".search");
const blogList = document.querySelector(".posts-container");

export function createHTML(getResults) {

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
            const searchValue = event.target.value.trim().toLowerCase();

            const filteredPosts = getResults.filter(function (posts) {
                if (posts.title.rendered.toLowerCase().startsWith(searchValue)) {
                    return true;
                }
            })

            postsToRender = filteredPosts;
            // console.log(filteredPosts);
            renderPosts();
        }
    }
}