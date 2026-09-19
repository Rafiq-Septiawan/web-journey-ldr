export function initClosing(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'footer-section';
  container.innerHTML = `
    <div class="footer-inner">
      <!-- Top Grid: Links & Newsletter -->
      <div class="footer-top-grid">
        <div class="footer-col">
          <h5>Tentang Platform</h5>
          <ul class="footer-links">
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#profile">Profil Pasangan</a></li>
            <li><a href="#journey">Kisah Perjalanan</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Dokumentasi</h5>
          <ul class="footer-links">
            <li><a href="#timeline">Linimasa & Milestone</a></li>
            <li><a href="#gallery">Galeri Foto</a></li>
            <li><a href="#letters">Arsip Komunikasi</a></li>
            <li><a href="#playlist">Musik Perjalanan</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h5>Tautan Cepat</h5>
          <ul class="footer-links">
            <li><a href="#dreams">Rencana Masa Depan</a></li>
            <li><a href="#contact">Kontak Kami</a></li>
            <li><a href="#" onclick="event.preventDefault();">Kebijakan Privasi</a></li>
            <li><a href="#" onclick="event.preventDefault();">Syarat & Ketentuan</a></li>
          </ul>
        </div>

        <div class="footer-col footer-newsletter-col">
          <h5>Langganan Updates</h5>
          <p class="newsletter-desc">
            Berlangganan untuk mendapatkan pembaruan perjalanan, dokumentasi terbaru, dan berita platform.
          </p>
          <form class="newsletter-form" id="newsletter-form">
            <div class="newsletter-input-group">
              <input type="email" placeholder="Alamat email Anda..." class="newsletter-input" required />
              <button type="submit" class="btn btn-primary newsletter-btn">Langganan</button>
            </div>
            <p class="newsletter-notice">
              Dengan berlangganan, Anda menyetujui syarat & ketentuan kami.
            </p>
            <div class="newsletter-feedback" id="newsletter-feedback">
              ✓ Terima kasih! Email Anda telah berhasil terdaftar.
            </div>
          </form>
        </div>
      </div>

      <!-- Middle Row: Brand Logo & Social Buttons -->
      <div class="footer-mid-row">
        <div class="footer-brand-lockup">
          <div class="nav-brand-text">
            <span class="nav-brand-name">Trove</span>
            <span class="nav-brand-tag">A Long Distance Journal</span>
          </div>
        </div>

        <div class="footer-social-block">
          <span class="social-label">Follow us on</span>
          <div class="social-icon-group">
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Row: Divider + Copyright -->
      <div class="footer-bottom-bar">
        <p>&copy; 2026 Trove. Seluruh hak dilindungi.</p>
      </div>
    </div>
  `;

  const newsletterForm = container.querySelector('#newsletter-form');
  const newsletterFeedback = container.querySelector('#newsletter-feedback');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (newsletterFeedback) {
        newsletterFeedback.style.display = 'block';
        newsletterForm.querySelector('input').value = '';
        setTimeout(() => {
          newsletterFeedback.style.display = 'none';
        }, 4000);
      }
    });
  }
}


