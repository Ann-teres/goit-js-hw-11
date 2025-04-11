
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// Отримуємо DOM-елементи
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Створюємо екземпляр SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// Функція для створення HTML-розмітки та оновлення SimpleLightbox
export function createGallery(images) {
  const markup = images
    .map(
      ({ preview, original, description }) => `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

// Функція для очищення галереї
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// Функція для відображення лоадера
export function showLoader() {
  loader.classList.add('is-loading');
}

// Функція для приховування лоадера
export function hideLoader() {
  loader.classList.remove('is-loading');
}
