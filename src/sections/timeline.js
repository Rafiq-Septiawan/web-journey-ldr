import { timelineData } from '../data/timeline.js';

export function initTimeline(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const milestoneRowsHtml = timelineData
    .map((item, index) => {
      const milestoneNum = (index + 1).toString().padStart(2, '0');
      return `
        <div class="milestone-row">
          <div class="milestone-marker">${milestoneNum}</div>
          <div class="corp-card milestone-card">
            <div class="milestone-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p class="milestone-desc">${item.description}</p>
            ${item.image ? `<img src="${item.image}" alt="${item.title}" class="milestone-img" loading="lazy" />` : ''}
          </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">REKAMAN KRONOLOGIS</div>
        <h2 class="section-title">Linimasa Perjalanan</h2>
        <p class="section-subtitle">Catatan historis peristiwa dan pencapaian penting dalam perjalanan hubungan.</p>
      </div>

      <div class="timeline-editorial">
        ${milestoneRowsHtml}
      </div>
    </div>
  `;
}

