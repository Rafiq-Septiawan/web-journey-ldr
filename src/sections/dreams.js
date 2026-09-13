import { dreamsData } from '../data/dreams.js';

export function initDreams(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const roadmapItemsHtml = dreamsData
    .map((dream) => {
      const categoryLabel = dream.category || 'Rencana Perjalanan';
      return `
        <div class="corp-card roadmap-card">
          <div class="roadmap-card-header">
            <div class="roadmap-icon-box">${dream.icon}</div>
            <div>
              <span class="roadmap-category-tag">${categoryLabel}</span>
              <h3>${dream.title}</h3>
            </div>
          </div>
          <p>${dream.description}</p>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">PETA JALAN STRATEGIS</div>
        <h2 class="section-title">Rencana Masa Depan</h2>
        <p class="section-subtitle">Peta jalan dan target strategis yang disusun berdasarkan tahap waktu perancangan.</p>
      </div>

      <div class="roadmap-grid">
        ${roadmapItemsHtml}
      </div>
    </div>
  `;
}

