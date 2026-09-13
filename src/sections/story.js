import { storyData } from '../data/story.js';

export function initStory(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';
  
  const paragraphsHtml = storyData.paragraphs
    .map(p => `<p class="journey-paragraph">${p}</p>`)
    .join('');

  const imagesHtml = storyData.images
    .map(img => `
      <div class="journey-img-card">
        <img src="${img.url}" alt="${img.caption}" />
        <div class="journey-img-caption">${img.caption}</div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">DOKUMENTASI PERJALANAN</div>
        <h2 class="section-title">${storyData.title}</h2>
        <p class="section-subtitle">${storyData.subtitle}</p>
      </div>
      
      <div class="corp-card journey-chapters-grid">
        <div class="journey-text-block">
          <h3 style="font-size: 1.5rem; color: var(--accent-cyan);">01 — Ringkasan Perjalanan</h3>
          ${paragraphsHtml}
        </div>
        <div class="journey-media-stack">
          ${imagesHtml}
        </div>
      </div>
    </div>
  `;
}

