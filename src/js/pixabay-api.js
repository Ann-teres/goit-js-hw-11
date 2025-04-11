const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.target.elements.query.value.trim();
  if (!query) return;

  const response = await fetch(`https://pixabay.com/api/?key=YOUR_API_KEY&q=${encodeURIComponent(query)}&image_type=photo`);
  const data = await response.json();

  createGallery(data.hits);
});

function createGallery(images) {
  const markup = images.map(({ webformatURL, largeImageURL, tags }) => `
    <a href="${largeImageURL}" class="gallery__item">
      <img src="${webformatURL}" alt="${tags}" class="gallery__image" />
    </a>
  `).join('');

  gallery.innerHTML = markup;
  // Ініціалізація SimpleLightbox або іншої бібліотеки для модального перегляду
}
