import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery');

function createGallery(arr){
    const liPicture = arr.map(item => `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`).join('')
    galleryList.insertAdjacentHTML('beforeend',liPicture);
}
createGallery(galleryItems);
//createGallery(galleryItems,galleryList,"gallery__item");
//чомусь не працює

new SimpleLightbox('.gallery a',{
    captionsData:"alt",
});



