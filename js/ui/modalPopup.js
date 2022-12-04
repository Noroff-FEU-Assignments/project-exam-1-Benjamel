// //Modal popup - for my featured image
// const modalContainer = document.getElementById("modal-container-header");
// const modalImage = document.getElementsByClassName("modal-image")["0"];

// export function modalFeatured() {
//     modalImage.onclick = function () {
//         modalContainer.style.display = "block";

//         window.addEventListener("click", function (event) {
//             if (event.target == modalContainer) {
//                 modalContainer.style.display = "none";
//             };
//         });
//     };
// }

//Modal popup - gallery images
const modalGallery = document.getElementById("modal-container-gallery");
const imgGallery = document.getElementById("imgpopup");

export function modalPopup() {
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