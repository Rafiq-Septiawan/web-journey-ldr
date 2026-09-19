import { aboutData } from '../data/about.js';

export function initAbout(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const keyPointsHtml = aboutData.keyPoints
    .map(point => `
      <div class="corp-card about-feature-item">
        <div class="about-feature-icon">
          ${point.icon}
        </div>
        <div class="about-feature-details">
          <h4>${point.title}</h4>
          <p>${point.description}</p>
        </div>
      </div>
    `)
    .join('');

  const descriptionHtml = Array.isArray(aboutData.description)
    ? aboutData.description.map(p => `<p>${p}</p>`).join('')
    : `<p>${aboutData.description}</p>`;

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">TENTANG PLATFORM</div>
        <h2 class="section-title">${aboutData.title}</h2>
        <p class="section-subtitle">${aboutData.subtitle}</p>
      </div>

      <div class="about-grid">
        <div class="about-text-column corp-card">
          <h3>${aboutData.leftCardTitle || 'Tentang Trove'}</h3>
          <div class="about-text-body">
            ${descriptionHtml}
          </div>
        </div>

        <div class="about-cards-column">
          ${keyPointsHtml}
        </div>
      </div>
    </div>
  `;
}

