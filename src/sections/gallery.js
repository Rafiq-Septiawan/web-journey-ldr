import { galleryData } from '../data/gallery.js';

export function initGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  // Create layout variations (wide, tall) periodically for masonry look
  const galleryItemsHtml = galleryData
    .map((item, idx) => {
      let layoutClass = '';
      if (idx === 1 || idx === 6) {
        layoutClass = 'tall';
      } else if (idx === 3 || idx === 4) {
        layoutClass = 'wide';
      }
      return `
        <div class="gallery-item ${layoutClass}" data-index="${idx}">
          <img src="${item.src}" alt="${item.caption}" loading="lazy" />
          <div class="gallery-overlay">
            <p class="gallery-caption">${item.caption}</p>
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="container">
      <h2 class="section-title">Galeri Memori</h2>
      <p class="section-subtitle">Koleksi foto dan potongan cerita visual yang merekam senyuman, tawa, dan kebersamaan kita.</p>
      
      <div class="gallery-grid">
        ${galleryItemsHtml}
      </div>
    </div>
  `;

  // Attach event listeners for Lightbox modal
  const items = container.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const idx = item.getAttribute('data-index');
      const data = galleryData[idx];
      if (window.openLightbox) {
        window.openLightbox(data.src, data.caption);
      }
    });
  });
}
