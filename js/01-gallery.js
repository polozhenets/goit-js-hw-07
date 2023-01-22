import { galleryItems,createGallery } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", galleryHandler);

function galleryHandler(event) {
  if (event.target.nodeName !== "IMG") {
    return
  }

  const src = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${src}" alt="">
    </div>
    `);
    instance.show();
}

createGallery(galleryItems,gallery,"gallery__link");
