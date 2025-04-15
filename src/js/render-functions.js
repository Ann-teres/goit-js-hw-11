import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');

  // Генеруємо лише <a> елементи всередині .gallery
  gallery.innerHTML = images
    .map(
      image => `
        <a href="${image.largeImageURL}" class="gallery-link">
          <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
        </a>
      `
    )
    .join('');

  // Ініціалізація або оновлення lightbox
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
