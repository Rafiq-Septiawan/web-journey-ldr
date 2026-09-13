export function initClosing(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'footer-section';
  container.innerHTML = `
    <div class="footer-inner">
      <div class="footer-content">
        <div class="footer-brand">
          <h4 style="color: var(--primary-text); font-weight: 800;">WEB JOURNEY <span style="color: var(--accent-cyan);">LDR</span></h4>
          <p style="color: var(--secondary-text); margin-top: 8px;">
            Platform Dokumentasi Perjalanan Hubungan Jarak Jauh
          </p>
          <p style="color: var(--accent-cyan); margin-top: 12px; font-weight: 600; font-size: 0.9rem;">
            <a href="mailto:rafiqseptiawan260904@gmail.com" style="color: inherit; text-decoration: none;">rafiqseptiawan260904@gmail.com</a>
          </p>
        </div>

        <div class="footer-column">
          <h5>Navigasi</h5>
          <ul class="footer-links">
            <li><a href="#home">Beranda</a></li>
            <li><a href="#about">Tentang</a></li>
            <li><a href="#profile">Profil</a></li>
            <li><a href="#journey">Perjalanan</a></li>
            <li><a href="#timeline">Linimasa</a></li>
            <li><a href="#gallery">Dokumentasi</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h5>Arsip Platform</h5>
          <ul class="footer-links">
            <li><a href="#letters">Arsip Komunikasi</a></li>
            <li><a href="#playlist">Musik Perjalanan</a></li>
            <li><a href="#dreams">Rencana Masa Depan</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>&copy; 2026 WEB JOURNEY LDR. Seluruh hak dilindungi.</div>
        <div>Mendokumentasikan setiap jarak, momen, dan perjalanan.</div>
      </div>
    </div>
  `;

}

