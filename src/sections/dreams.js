import { dreamsData } from '../data/dreams.js';

export function initDreams(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const dreamsHtml = dreamsData
    .map(dream => `
      <div class="dream-card glass-card">
        <div class="dream-icon">${dream.icon}</div>
        <h3>${dream.title}</h3>
        <p>${dream.description}</p>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <h2 class="section-title">Harapan & Rencana Masa Depan</h2>
      <p class="section-subtitle">Daftar mimpi dan rencana yang ingin kita wujudkan bersama setelah jarak tidak lagi menjadi penghalang.</p>
      
      <div class="dreams-grid">
        ${dreamsHtml}
      </div>
    </div>
  `;
}
