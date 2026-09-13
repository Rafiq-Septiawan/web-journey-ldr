import { profileData } from '../data/profile.js';

export function initProfile(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const profilesHtml = profileData.profiles
    .map(p => `
      <div class="corp-card profile-card">
        <div class="profile-card-header">
          <img src="${p.avatar}" alt="${p.name}" class="profile-avatar" />
          <div>
            <span class="profile-tag">${p.tag}</span>
            <h3 class="profile-name">${p.name}</h3>
            <p class="profile-role">${p.role}</p>
            <div class="profile-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${p.location}
            </div>
          </div>
        </div>
        <p class="profile-bio">${p.bio}</p>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">PROFIL UTAMA</div>
        <h2 class="section-title">${profileData.title}</h2>
        <p class="section-subtitle">${profileData.subtitle}</p>
      </div>

      <div class="profile-section-layout">
        <!-- Visual Connection Route -->
        <div class="profile-connection-bar">
          <div class="connection-metric">
            <span class="metric-label">LOKASI 01</span>
            <span class="metric-value" style="font-size: 1.1rem;">Kota Tangerang, Banten</span>
          </div>

          <div class="connection-route-visual">
            <span class="route-line"></span>
            <div class="connection-status-pill">
              <span class="pulse-dot"></span>
              Perjalanan LDR
            </div>
            <span class="route-line"></span>
          </div>

          <div class="connection-metric">
            <span class="metric-label">LOKASI 02</span>
            <span class="metric-value" style="font-size: 1.1rem;">Pasaman Barat, Sumatera Barat</span>
          </div>
        </div>

        <div class="profiles-grid">
          ${profilesHtml}
        </div>
      </div>
    </div>
  `;
}

