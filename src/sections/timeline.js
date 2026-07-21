import { timelineData } from '../data/timeline.js';

export function initTimeline(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const timelineItemsHtml = timelineData
    .map(item => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-content glass-card">
          <div class="timeline-date">${item.date}</div>
          <h3>${item.title}</h3>
          <p class="timeline-desc">${item.description}</p>
          ${item.image ? `<img src="${item.image}" alt="${item.title}" class="timeline-img" />` : ''}
        </div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <h2 class="section-title">Linimasa Perjalanan Kita</h2>
      <p class="section-subtitle">Momen-momen penting yang mengukir sejarah kebersamaan kita dari waktu ke waktu.</p>
      
      <div class="timeline-container">
        ${timelineItemsHtml}
      </div>
    </div>
  `;
}
