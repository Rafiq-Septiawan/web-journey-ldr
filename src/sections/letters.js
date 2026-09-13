import { lettersData } from '../data/letters.js';

export function initLetters(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const archivesHtml = lettersData
    .map(letter => `
      <div class="corp-card archive-card" data-id="${letter.id}">
        <div>
          <div class="archive-card-header">
            <span class="archive-date">${letter.date}</span>
            <span class="archive-badge">DOKUMEN #${letter.id.toString().padStart(2, '0')}</span>
          </div>
          <h3 class="archive-subject">${letter.subject}</h3>
          <p class="archive-snippet">${letter.content}</p>
        </div>
        <div class="archive-action">
          <span>Buka Pesan</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">ARSIP DOKUMEN</div>
        <h2 class="section-title">Arsip Komunikasi</h2>
        <p class="section-subtitle">Kumpulan pesan yang menjadi bagian dari perjalanan.</p>
      </div>

      <div class="archive-grid">
        ${archivesHtml}
      </div>
    </div>

    <!-- Document Modal -->
    <div class="document-modal" id="document-modal">
      <div class="document-modal-box">
        <button class="document-modal-close" id="doc-modal-close" aria-label="Tutup Pesan">&times;</button>
        <div class="document-modal-label">Tanggal: <span id="doc-modal-date"></span></div>
        <h3 class="document-modal-title" id="doc-modal-title"></h3>
        <div class="document-modal-label" style="margin-top: 16px; margin-bottom: 8px;">Pesan:</div>
        <div class="document-modal-content" id="doc-modal-content"></div>
      </div>
    </div>
  `;

  // Attach modal triggers
  const cards = container.querySelectorAll('.archive-card');
  const modal = container.querySelector('#document-modal');
  const closeBtn = container.querySelector('#doc-modal-close');
  const modalDate = container.querySelector('#doc-modal-date');
  const modalTitle = container.querySelector('#doc-modal-title');
  const modalContent = container.querySelector('#doc-modal-content');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const letter = lettersData.find(l => l.id === id);
      if (!letter) return;

      modalDate.textContent = letter.date;
      modalTitle.textContent = letter.subject;
      modalContent.textContent = letter.content;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

