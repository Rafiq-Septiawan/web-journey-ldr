import { lettersData } from '../data/letters.js';

export function initLetters(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const lettersHtml = lettersData
    .map(letter => `
      <div class="letter-envelope-container" data-id="${letter.id}">
        <div class="envelope">
          <div class="heart-seal"></div>
          <div class="letter-paper">
            <h4>${letter.subject}</h4>
            <div class="letter-date">${letter.date}</div>
            <p>${letter.content}</p>
          </div>
        </div>
        <div class="letter-label">${letter.subject}</div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <h2 class="section-title">Surat Digital</h2>
      <p class="section-subtitle">Pesan-pesan hangat yang ditulis dari lubuk hati terdalam, dikirim melintasi jarak untuk saling menguatkan.</p>
      
      <div class="letters-grid">
        ${lettersHtml}
      </div>
    </div>

    <!-- Letter Detail Modal -->
    <div class="letter-modal" id="letter-modal">
      <div class="letter-modal-content">
        <button class="letter-modal-close" id="letter-modal-close">&times;</button>
        <div class="letter-modal-header">
          <div class="letter-modal-date" id="modal-date"></div>
          <h3 class="letter-modal-title" id="modal-title"></h3>
        </div>
        <div class="letter-modal-body" id="modal-body"></div>
      </div>
    </div>
  `;

  // Setup interaction
  const envelopes = container.querySelectorAll('.letter-envelope-container');
  const modal = container.querySelector('#letter-modal');
  const modalClose = container.querySelector('#letter-modal-close');
  const modalDate = container.querySelector('#modal-date');
  const modalTitle = container.querySelector('#modal-title');
  const modalBody = container.querySelector('#modal-body');

  const closeLetterModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Optional: reset open states of envelopes
    envelopes.forEach(env => env.classList.remove('open'));
  };

  modalClose.addEventListener('click', closeLetterModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLetterModal();
    }
  });

  envelopes.forEach(envelope => {
    envelope.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(envelope.getAttribute('data-id'));
      const letter = lettersData.find(l => l.id === id);
      
      // If already open, just open modal
      if (envelope.classList.contains('open')) {
        openModal(letter);
        return;
      }

      // Play animation first
      envelope.classList.add('open');
      
      // Open modal after envelope opening animation completes
      setTimeout(() => {
        openModal(letter);
      }, 900);
    });
  });

  function openModal(letter) {
    modalDate.textContent = letter.date;
    modalTitle.textContent = letter.subject;
    modalBody.innerHTML = letter.content.replace(/\n/g, '<br>');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
