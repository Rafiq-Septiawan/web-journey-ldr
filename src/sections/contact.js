import { contactData } from '../data/contact.js';

export function initContact(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const infoListHtml = contactData.info
    .map(item => `
      <div class="contact-info-item">
        <div class="contact-info-icon">
          ${item.icon}
        </div>
        <div class="contact-info-text">
          <h5>${item.label}</h5>
          <p>${item.value}</p>
        </div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">SALURAN KOMUNIKASI</div>
        <h2 class="section-title">${contactData.title}</h2>
        <p class="section-subtitle">${contactData.subtitle}</p>
      </div>

      <div class="contact-grid">
        <div class="corp-card">
          <h3>Informasi Kontak</h3>
          <p style="margin-top: 8px; font-size: 0.95rem;">
            Silakan kirimkan pesan atau komunikasi melalui formulir di samping atau melalui email resmi kami.
          </p>

          <div class="contact-info-list">
            ${infoListHtml}
          </div>
        </div>

        <div class="corp-card">
          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <label for="contact-name">Nama</label>
              <input type="text" id="contact-name" class="form-control" placeholder="Masukkan nama Anda" required />
            </div>

            <div class="form-group">
              <label for="contact-email">Email</label>
              <input type="email" id="contact-email" class="form-control" placeholder="nama@domain.com" required />
            </div>

            <div class="form-group">
              <label for="contact-message">Pesan</label>
              <textarea id="contact-message" class="form-control" placeholder="Tuliskan pesan Anda di sini..." required></textarea>
            </div>

            <div class="form-feedback" id="form-feedback">
              ✓ Pesan berhasil dipersiapkan.
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%;">
              Kirim Pesan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector('#contact-form');
  const feedback = container.querySelector('#form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.style.display = 'block';
      form.reset();
      setTimeout(() => {
        feedback.style.display = 'none';
      }, 5000);
    });
  }
}

