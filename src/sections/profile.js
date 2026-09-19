import { profileData } from '../data/profile.js';

export function initProfile(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  container.innerHTML = `
    <div class="container">

      <!-- ── HEADER ── -->
      <div class="section-header">
        <div class="section-badge">PROFIL UTAMA</div>
        <h2 class="section-title">${profileData.title}</h2>
        <p class="section-subtitle">${profileData.subtitle}</p>
      </div>

      <!-- ── CONTAINER DUA KOTA ── -->
      <div class="pf-cities-container">

        <!-- KIRI: Tangerang -->
        <div class="pf-city pf-city--left">
          <div class="pf-city-photo-wrap">
            <div class="pf-city-photo pf-city-photo--tangerang"></div>
            <div class="pf-city-photo-overlay"></div>
          </div>
          <div class="pf-city-content">
            <div class="pf-city-icon pf-city-icon--cyan">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 class="pf-city-title">Tangerang, Banten</h3>
            <p class="pf-city-sub">Tempatku sekarang</p>
            <p class="pf-city-quote">"Di sini, cerita ini berawal dari satu obrolan sederhana."</p>
          </div>
        </div>

        <!-- TENGAH: Connector -->
        <div class="pf-connector">
          <div class="pf-conn-node pf-conn-node--left"></div>
          <div class="pf-conn-line-wrap">
            <div class="pf-conn-line"></div>
            <div class="pf-conn-plane">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
            </div>
          </div>
          <div class="pf-conn-node pf-conn-node--right"></div>
          <div class="pf-conn-pill">
            <span class="pf-conn-pill-dot"></span>
            Perjalanan LDR
          </div>
          <p class="pf-conn-tagline">Berbeda tempat,<br>tetapi tetap satu cerita.</p>
        </div>

        <!-- KANAN: Pasaman Barat -->
        <div class="pf-city pf-city--right">
          <div class="pf-city-photo-wrap">
            <div class="pf-city-photo pf-city-photo--pasaman"></div>
            <div class="pf-city-photo-overlay pf-city-photo-overlay--pink"></div>
          </div>
          <div class="pf-city-content">
            <div class="pf-city-icon pf-city-icon--pink">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 class="pf-city-title">Pasaman Barat, Sumatera Barat</h3>
            <p class="pf-city-sub">Rumahnya sekarang</p>
            <p class="pf-city-quote">"Di sana, ada seseorang yang menjadi bagian dari cerita ini."</p>
          </div>
        </div>

      </div><!-- end pf-cities-container -->

      <!-- ── CONTAINER INFORMASI ── -->
      <div class="pf-info-container">

        <!-- INFO 01 -->
        <div class="pf-info-item">
          <div class="pf-info-icon pf-info-icon--cyan">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="pf-info-label">TERPISAH SEJAUH</div>
          <div class="pf-info-value pf-info-value--cyan">±1.000 KM</div>
          <p class="pf-info-desc">Jarak yang tidak dekat,<br>tapi tidak pernah mengurangi rasa.</p>
        </div>

        <div class="pf-info-divider"></div>

        <!-- INFO 02 -->
        <div class="pf-info-item">
          <div class="pf-info-icon pf-info-icon--purple">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="pf-info-label">TERHUBUNG MELALUI</div>
          <div class="pf-info-value pf-info-value--purple">Chat, Voice Call &amp; Video Call</div>
          <p class="pf-info-desc">Berbagai cara untuk tetap hadir<br>di setiap hari.</p>
        </div>

        <div class="pf-info-divider"></div>

        <!-- INFO 03 -->
        <div class="pf-info-item">
          <div class="pf-info-icon pf-info-icon--pink">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div class="pf-info-label">DIMULAI PADA</div>
          <div class="pf-info-value pf-info-value--pink">8 Desember 2024</div>
          <p class="pf-info-desc">Sebuah keputusan untuk<br>menjalani cerita ini bersama.</p>
        </div>

      </div><!-- end pf-info-container -->

      <!-- ── DUA CARD PROFIL ── -->
      <div class="pf-profiles-grid">

        <!-- CARD RAFIQ -->
        <div class="pf-profile-card pf-profile-card--rafiq">
          <div class="pf-profile-card-glow pf-profile-card-glow--cyan"></div>
          <div class="pf-avatar-wrap">
            <img src="images/rafiq.jpg" alt="Rafiq Septiawan" class="pf-avatar" />
            <div class="pf-avatar-ring pf-avatar-ring--cyan"></div>
          </div>
          <div class="pf-profile-info">
            <h3 class="pf-profile-name">Rafiq Septiawan, S.Kom</h3>
            <div class="pf-profile-meta">
              <span class="pf-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                26 September 2004
              </span>
              <span class="pf-meta-sep">·</span>
              <span class="pf-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Tangerang, Banten
              </span>
            </div>
            <div class="pf-profile-divider"></div>
            <p class="pf-profile-bio">Seseorang yang awalnya hanya menemukan teman ngobrol secara anonim, lalu tanpa sadar menemukan seseorang yang ingin terus ada dalam hidupnya.</p>
          </div>
          <div class="pf-profile-quote pf-profile-quote--cyan">
            <div class="pf-quote-bar pf-quote-bar--cyan"></div>
            <p>"Terima kasih sudah menjadi bagian<br>penting dari cerita ini."</p>
          </div>
        </div>

        <!-- CARD DWI -->
        <div class="pf-profile-card pf-profile-card--dwi">
          <div class="pf-profile-card-glow pf-profile-card-glow--pink"></div>
          <div class="pf-avatar-wrap">
            <img src="images/dw.jpg" alt="Dwi Mulya Sugih Rahayu" class="pf-avatar" />
            <div class="pf-avatar-ring pf-avatar-ring--pink"></div>
          </div>
          <div class="pf-profile-info">
            <h3 class="pf-profile-name">Dwi Mulya Sugih Rahayu, S.E</h3>
            <div class="pf-profile-meta">
              <span class="pf-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                12 Desember 2006
              </span>
              <span class="pf-meta-sep">·</span>
              <span class="pf-meta-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Pasaman Barat, Sumatera Barat
              </span>
            </div>
            <div class="pf-profile-divider"></div>
            <p class="pf-profile-bio">Seseorang yang awalnya hanya menjadi teman dalam sebuah obrolan anonim, kemudian menjadi bagian penting dari perjalanan yang terus berjalan sampai hari ini.</p>
          </div>
          <div class="pf-profile-quote pf-profile-quote--pink">
            <div class="pf-quote-bar pf-quote-bar--pink"></div>
            <p>"Senang bisa menjalani cerita ini<br>bersama kamu."</p>
          </div>
        </div>

      </div><!-- end pf-profiles-grid -->

      <!-- ── FOOTER PROFIL ── -->
      <div class="pf-footer">
        <div class="pf-footer-divider">
          <div class="pf-footer-line"></div>
          <div class="pf-footer-heart">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div class="pf-footer-line"></div>
        </div>
        <div class="pf-footer-content">
          <p class="pf-footer-text">Jarak bukan akhir, tapi bagian dari cerita.</p>
          <p class="pf-footer-deco">Different Place<br>Same Story</p>
        </div>
      </div>

    </div>
  `;
}
