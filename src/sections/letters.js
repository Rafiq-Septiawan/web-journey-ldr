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
          <span>Buka Cerita</span>
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
        <p class="section-subtitle">Kumpulan percakapan dan pesan yang menjadi bagian dari perjalanan.</p>
      </div>
      <div class="archive-grid">
        ${archivesHtml}
      </div>
    </div>
  `;

  // ── Build modal on document.body so position:fixed works correctly.
  // Section has fade-up class with CSS transform which would break fixed children.
  let modal = document.getElementById('letters-chat-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'document-modal';
    modal.id = 'letters-chat-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="chat-viewer-box">
        <div class="chat-viewer-header">
          <div class="chat-header-top">
            <div class="chat-header-main">
              <div class="chat-avatar-group">
                <div class="chat-avatar avatar-dwi" title="Dwi">D</div>
                <div class="chat-avatar avatar-rafiq" title="Rafiq">R</div>
              </div>
              <div class="chat-title-info">
                <h3 class="chat-title" id="chat-modal-title">Arsip Percakapan</h3>
                <div class="chat-status">
                  <span class="status-dot"></span>
                  <span id="chat-modal-subtitle">Arsip Percakapan</span>
                </div>
              </div>
            </div>
            <div class="chat-header-actions">
              <div class="chat-date-picker-wrap">
                <button class="chat-action-btn" id="chat-date-jump-btn" title="Lompat ke Tanggal">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <span class="btn-text-desktop">Tanggal</span>
                </button>
                <div class="chat-date-dropdown" id="chat-date-dropdown"></div>
              </div>
              <button class="chat-action-btn" id="chat-search-toggle" title="Cari dalam Percakapan">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
              <button class="chat-close-btn" id="doc-modal-close" aria-label="Tutup Percakapan">&times;</button>
            </div>
          </div>
          <div class="chat-search-bar" id="chat-search-bar">
            <div class="search-input-wrap">
              <svg class="search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" id="chat-search-input" placeholder="Cari dalam percakapan (contoh: wisuda, skripsi)..." />
              <span class="search-count" id="chat-search-count"></span>
              <button class="search-nav-btn" id="chat-search-prev" title="Sebelumnya">&#9650;</button>
              <button class="search-nav-btn" id="chat-search-next" title="Berikutnya">&#9660;</button>
              <button class="search-close-btn" id="chat-search-close" title="Tutup Pencarian">&times;</button>
            </div>
          </div>
        </div>

        <div class="chat-viewer-body" id="chat-messages-container"></div>

        <div class="chat-viewer-footer">
          <div class="chat-footer-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <span>Arsip Percakapan Pribadi &bull; Terenkripsi</span>
          </div>
          <button class="chat-scroll-bottom-btn" id="chat-scroll-bottom" title="Ke Pesan Terbaru">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Wire up DOM refs from modal
  const cards = container.querySelectorAll('.archive-card');
  const closeBtn       = modal.querySelector('#doc-modal-close');
  const modalTitle     = modal.querySelector('#chat-modal-title');
  const modalSubtitle  = modal.querySelector('#chat-modal-subtitle');
  const msgContainer   = modal.querySelector('#chat-messages-container');
  const searchToggle   = modal.querySelector('#chat-search-toggle');
  const searchBar      = modal.querySelector('#chat-search-bar');
  const searchInput    = modal.querySelector('#chat-search-input');
  const searchCount    = modal.querySelector('#chat-search-count');
  const searchPrev     = modal.querySelector('#chat-search-prev');
  const searchNext     = modal.querySelector('#chat-search-next');
  const searchClose    = modal.querySelector('#chat-search-close');
  const dateJumpBtn    = modal.querySelector('#chat-date-jump-btn');
  const dateDropdown   = modal.querySelector('#chat-date-dropdown');
  const scrollBtn      = modal.querySelector('#chat-scroll-bottom');

  let searchMatches = [];
  let searchIdx = -1;

  /* ── Close ── */
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    searchBar.classList.remove('active');
    dateDropdown.classList.remove('active');
    clearSearch();
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  /* ── Date jump ── */
  dateJumpBtn.addEventListener('click', e => {
    e.stopPropagation();
    dateDropdown.classList.toggle('active');
  });
  document.addEventListener('click', e => {
    if (!dateDropdown.contains(e.target) && e.target !== dateJumpBtn) {
      dateDropdown.classList.remove('active');
    }
  });

  /* ── Search ── */
  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) searchInput.focus();
    else clearSearch();
  });
  searchClose.addEventListener('click', () => {
    searchBar.classList.remove('active');
    clearSearch();
  });

  const clearSearch = () => {
    searchInput.value = '';
    searchCount.textContent = '';
    searchMatches = [];
    searchIdx = -1;
    msgContainer.querySelectorAll('.chat-bubble').forEach(b => b.classList.remove('search-highlight'));
  };

  const doSearch = () => {
    const q = searchInput.value.trim().toLowerCase();
    msgContainer.querySelectorAll('.chat-bubble').forEach(b => b.classList.remove('search-highlight'));
    if (!q) { searchCount.textContent = ''; searchMatches = []; searchIdx = -1; return; }
    const all = Array.from(msgContainer.querySelectorAll('.chat-bubble'));
    searchMatches = all.filter(b => b.textContent.toLowerCase().includes(q));
    if (searchMatches.length > 0) { searchIdx = 0; applySearch(); }
    else { searchCount.textContent = '0 hasil'; searchIdx = -1; }
  };

  const applySearch = () => {
    msgContainer.querySelectorAll('.chat-bubble').forEach(b => b.classList.remove('search-highlight'));
    if (!searchMatches.length || searchIdx < 0) return;
    const el = searchMatches[searchIdx];
    el.classList.add('search-highlight');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    searchCount.textContent = `${searchIdx + 1} / ${searchMatches.length}`;
  };

  searchInput.addEventListener('input', doSearch);
  searchNext.addEventListener('click', () => {
    if (!searchMatches.length) return;
    searchIdx = (searchIdx + 1) % searchMatches.length;
    applySearch();
  });
  searchPrev.addEventListener('click', () => {
    if (!searchMatches.length) return;
    searchIdx = (searchIdx - 1 + searchMatches.length) % searchMatches.length;
    applySearch();
  });

  /* ── Scroll to bottom ── */
  scrollBtn.addEventListener('click', () => {
    msgContainer.scrollTo({ top: msgContainer.scrollHeight, behavior: 'smooth' });
  });

  /* ── Render messages ── */
  const escapeHtml = str => str
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

  const renderChatMessages = (letter) => {
    modalTitle.textContent = letter.subject;
    modalSubtitle.textContent = letter.subtitle || `Arsip Percakapan \u2022 ${letter.date}`;
    clearSearch();

    const messages = letter.messages || [{
      id: 'm0', sender: 'Dwi', date: letter.date, timestamp: '12:00',
      text: letter.content, type: 'text'
    }];

    let html = '';
    let lastDate = '';
    const datesList = [];

    messages.forEach((msg, idx) => {
      if (msg.date && msg.date !== lastDate) {
        lastDate = msg.date;
        const dId = `dsep-${idx}`;
        datesList.push({ label: msg.date, id: dId });
        html += `<div class="chat-date-separator" id="${dId}"><span class="chat-date-pill">${msg.date}</span></div>`;
      }

      const isRafiq = msg.sender && msg.sender.toLowerCase() === 'rafiq';
      const senderClass = isRafiq ? 'sender-rafiq' : 'sender-dwi';
      const senderName = isRafiq ? 'Rafiq' : 'Dwi';

      let mediaHtml = '';
      if (msg.type === 'image' && msg.mediaUrl) {
        mediaHtml = `<img src="${msg.mediaUrl}" alt="Lampiran gambar" class="chat-media-img" loading="lazy" />`;
      } else if (msg.type === 'voicenote') {
        mediaHtml = `
          <div class="chat-voicenote-player">
            <button class="vn-play-btn" aria-label="Putar Voice Note">&#9654;</button>
            <div class="vn-waveform">
              <span class="vn-bar active"></span><span class="vn-bar active"></span>
              <span class="vn-bar active"></span><span class="vn-bar"></span>
              <span class="vn-bar"></span><span class="vn-bar"></span>
            </div>
            <span class="vn-duration">${msg.duration || '0:18'}</span>
          </div>`;
      }

      html += `
        <div class="chat-message-row ${senderClass}" data-id="${msg.id}">
          <span class="chat-sender-label">${senderName}</span>
          <div class="chat-bubble">
            ${mediaHtml}
            ${msg.text ? `<div>${escapeHtml(msg.text)}</div>` : ''}
            <div class="chat-meta">
              <span>${msg.timestamp}</span>
              ${isRafiq ? '<span class="chat-read-checks" title="Telah dibaca">&#10003;&#10003;</span>' : ''}
            </div>
          </div>
        </div>`;
    });

    msgContainer.innerHTML = html;

    // Populate date jump dropdown
    dateDropdown.innerHTML = datesList
      .map(d => `<button class="chat-date-item" data-target="${d.id}">${d.label}</button>`)
      .join('');
    dateDropdown.querySelectorAll('.chat-date-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const el = msgContainer.querySelector(`#${btn.getAttribute('data-target')}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        dateDropdown.classList.remove('active');
      });
    });

    setTimeout(() => { msgContainer.scrollTop = msgContainer.scrollHeight; }, 60);
  };

  /* ── Open triggers ── */
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const letter = lettersData.find(l => l.id === id);
      if (!letter) return;
      renderChatMessages(letter);
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}
