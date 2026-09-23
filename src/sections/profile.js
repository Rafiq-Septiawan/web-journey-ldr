import { profileData } from '../data/profile.js';

export function initProfile(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  container.innerHTML = `
    <div class="container pf-main-wrapper">

      <!-- ── 1. HEADER ── -->
      <div class="section-header pf-header">
        <div class="section-badge">PROFIL UTAMA</div>
        <h2 class="section-title">${profileData.title}</h2>
        <p class="section-subtitle">${profileData.subtitle}</p>
      </div>

      <!-- ── 2. CONTAINER LOKASI ── -->
      <div class="pf-cities-container">

        <!-- KIRI: Tangerang -->
        <div class="pf-city pf-city--left">
          <div class="pf-city-icon pf-city-icon--cyan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <h3 class="pf-city-title">Tangerang, Banten</h3>
        </div>

        <!-- TENGAH: Connector -->
        <div class="pf-connector">
          <div class="pf-conn-line-wrap">
            <div class="pf-conn-node pf-conn-node--left"></div>
            <div class="pf-conn-line"></div>
            <div class="pf-conn-plane">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
            </div>
            <div class="pf-conn-node pf-conn-node--right"></div>
          </div>
        </div>

        <!-- KANAN: Pasaman Barat -->
        <div class="pf-city pf-city--right">
          <div class="pf-city-icon pf-city-icon--pink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <h3 class="pf-city-title">Pasaman Barat, Sumatera Barat</h3>
        </div>

      </div><!-- end pf-cities-container -->

      <!-- ── 3. CONTAINER INFORMASI HUBUNGAN ── -->
      <div class="pf-info-container">

        <!-- INFO 01 -->
        <div class="pf-info-item">
          <div class="pf-info-icon pf-info-icon--cyan">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="pf-info-label">TERPISAH SEJAUH</div>
          <div class="pf-info-value pf-info-value--cyan">${profileData.connection.distance}</div>
          <p class="pf-info-desc">Jarak yang tidak dekat,<br>tapi tidak pernah mengurangi rasa.</p>
        </div>

        <div class="pf-info-divider"></div>

        <!-- INFO 02 -->
        <div class="pf-info-item">
          <div class="pf-info-icon pf-info-icon--purple">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="pf-info-label">TERHUBUNG MELALUI</div>
          <div class="pf-info-value pf-info-value--purple">${profileData.connection.communication}</div>
          <p class="pf-info-desc">Berbagai cara untuk tetap hadir<br>di setiap hari.</p>
        </div>

        <div class="pf-info-divider"></div>

        <!-- INFO 03 -->
        <div class="pf-info-item">
          <div class="pf-info-icon pf-info-icon--pink">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div class="pf-info-label">DIMULAI PADA</div>
          <div class="pf-info-value pf-info-value--pink">${profileData.connection.startDate}</div>
          <p class="pf-info-desc">Sebuah keputusan untuk<br>menjalani cerita ini bersama.</p>
        </div>

      </div><!-- end pf-info-container -->

      <!-- ── 4. DUA CARD PROFIL ── -->
      <div class="pf-profiles-grid">

        <!-- CARD RAFIQ -->
        <div class="pf-profile-card pf-profile-card--rafiq">
          <div class="pf-profile-card-glow pf-profile-card-glow--cyan"></div>
          
          <div class="pf-profile-header">
            <div class="pf-avatar-wrap">
              <img src="${profileData.profiles[0].avatar}" alt="${profileData.profiles[0].name}" class="pf-avatar" />
              <div class="pf-avatar-ring pf-avatar-ring--cyan"></div>
            </div>
            <div class="pf-profile-title-block">
              <h3 class="pf-profile-name">${profileData.profiles[0].name}</h3>
              <div class="pf-profile-meta">
                <span class="pf-meta-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  ${profileData.profiles[0].birthDate}
                </span>
                <span class="pf-meta-sep">•</span>
                <span class="pf-meta-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${profileData.profiles[0].location}
                </span>
              </div>
            </div>
          </div>

          <div class="pf-profile-divider"></div>

          <p class="pf-profile-bio">${profileData.profiles[0].bio}</p>

          <div class="pf-profile-quote pf-profile-quote--cyan">
            <div class="pf-quote-bar pf-quote-bar--cyan"></div>
            <p>"${profileData.profiles[0].quote}"</p>
          </div>
        </div>

        <!-- CARD DWI -->
        <div class="pf-profile-card pf-profile-card--dwi">
          <div class="pf-profile-card-glow pf-profile-card-glow--pink"></div>
          
          <div class="pf-profile-header">
            <div class="pf-avatar-wrap">
              <img src="${profileData.profiles[1].avatar}" alt="${profileData.profiles[1].name}" class="pf-avatar" />
              <div class="pf-avatar-ring pf-avatar-ring--pink"></div>
            </div>
            <div class="pf-profile-title-block">
              <h3 class="pf-profile-name">${profileData.profiles[1].name}</h3>
              <div class="pf-profile-meta">
                <span class="pf-meta-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  ${profileData.profiles[1].birthDate}
                </span>
                <span class="pf-meta-sep">•</span>
                <span class="pf-meta-item">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${profileData.profiles[1].location}
                </span>
              </div>
            </div>
          </div>

          <div class="pf-profile-divider"></div>

          <p class="pf-profile-bio">${profileData.profiles[1].bio}</p>

          <div class="pf-profile-quote pf-profile-quote--pink">
            <div class="pf-quote-bar pf-quote-bar--pink"></div>
            <p>"${profileData.profiles[1].quote}"</p>
          </div>
        </div>

      </div><!-- end pf-profiles-grid -->

    </div>
  `;
}

