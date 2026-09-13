export function initLightbox() {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.id = 'lightbox-modal';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close" id="lightbox-close" aria-label="Tutup Pratinjau Foto">&times;</button>
      <img src="" alt="Documentation image preview" class="lightbox-img" id="lightbox-img" />
      <p class="lightbox-caption" id="lightbox-caption"></p>
    </div>
  `;

  document.body.appendChild(lightbox);

  const imgEl = lightbox.querySelector('#lightbox-img');
  const captionEl = lightbox.querySelector('#lightbox-caption');
  const closeBtn = lightbox.querySelector('#lightbox-close');

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  window.openLightbox = function(src, caption) {
    imgEl.src = src;
    captionEl.textContent = caption || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
}
