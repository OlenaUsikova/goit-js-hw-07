import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

let backup = ``;
galleryItems.forEach(item => {
  backup += `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>`;
});

gallery.insertAdjacentHTML('afterbegin', backup);

gallery.addEventListener('click', ev => {
  ev.preventDefault();
  if (ev.target.dataset.source) {
    const instance = basicLightbox.create(`
        <img src=${ev.target.dataset.source} width="1200">
    `);
    instance.show();
  }
});
