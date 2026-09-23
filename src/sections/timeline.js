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
          <div class="milestone-card">
            <div class="milestone-card-glow"></div>
            <div class="milestone-header">
              <div class="milestone-badge">
                <span class="milestone-badge-dot"></span>
                <span class="milestone-date-text">${item.date}</span>
              </div>
            </div>
            <h3 class="milestone-title">${item.title}</h3>
            <p class="milestone-desc">${item.description}</p>
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
        <p class="section-subtitle">Catatan kecil dari awal perkenalan hingga cerita yang masih berjalan.</p>
      </div>

      <div class="timeline-editorial">
        ${milestoneRowsHtml}
      </div>
    </div>
  `;
}

