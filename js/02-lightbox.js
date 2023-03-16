import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

let backup = ``;
galleryItems.forEach(item => {
  backup += `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt=${item.description} />
  </a>`;
});

gallery.insertAdjacentHTML('afterbegin', backup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
