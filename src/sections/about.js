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

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">TENTANG PLATFORM</div>
        <h2 class="section-title">${aboutData.title}</h2>
        <p class="section-subtitle">${aboutData.subtitle}</p>
      </div>

      <div class="about-grid">
        <div class="about-text-column corp-card">
          <h3>Ruang Digital Dokumentasi Terstruktur</h3>
          <p>${aboutData.description}</p>
          <p>
            Dengan arsitektur terstruktur, setiap momen tidak hanya disimpan sebagai memori biasa, melainkan didokumentasikan secara rapi agar dapat direfleksikan dan dibangun menjadi fondasi masa depan.
          </p>
        </div>

        <div class="about-cards-column">
          ${keyPointsHtml}
        </div>
      </div>
    </div>
  `;
}

