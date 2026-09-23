import { galleryData } from '../data/gallery.js';

export function initGallery(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const docsHtml = galleryData
    .map((item, idx) => `
      <div class="doc-item" data-index="${idx}">
        <img src="${item.src}" alt="${item.title || item.caption}" loading="lazy" />
        <div class="doc-overlay">
          ${item.title ? `<h3 class="doc-title">${item.title}</h3>` : ''}
          <p class="doc-caption">${item.description || item.caption}</p>
        </div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">ARSIP VISUAL</div>
        <h2 class="section-title">Dokumentasi</h2>
        <p class="section-subtitle">Galeri momen penting dan catatan perjalanan hidup kami.</p>
      </div>

      <div class="documentation-grid">
        ${docsHtml}
      </div>
    </div>
  `;

  // Attach Lightbox triggers
  const items = container.querySelectorAll('.doc-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const idx = item.getAttribute('data-index');
      const data = galleryData[idx];
      if (window.openLightbox) {
        const fullCaption = data.title ? `${data.title} — ${data.description || data.caption}` : data.caption;
        window.openLightbox(data.src, fullCaption);
      }
    });
  });
}


