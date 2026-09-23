import { playlist, spotifyPlaylistUrl } from '../data/playlist.js';

// ─────────────────────────────────────────────────────────────
// State
// ─────────────────────────────────────────────────────────────
let currentTrackIndex = 0;
let currentAudio = null;
let isPlaying = false;
let progressInterval = null;

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0 || seconds === Infinity) return '--:--';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function stopCurrentAudio() {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (e) {
      // ignore
    }
  }
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  isPlaying = false;
}

function showAudioNotice(msg) {
  const noticeEl = document.getElementById('mj-audio-notice');
  if (noticeEl) {
    if (msg) {
      const txt = noticeEl.querySelector('span');
      if (txt) txt.textContent = msg;
      noticeEl.style.display = 'inline-flex';
      setTimeout(() => {
        if (noticeEl) noticeEl.style.display = 'none';
      }, 4000);
    } else {
      noticeEl.style.display = 'none';
    }
  }
}

// ─────────────────────────────────────────────────────────────
// Render helpers
// ─────────────────────────────────────────────────────────────
function renderCoverFallback(song) {
  const colors = [
    ['#38bdf8', '#6366f1'],
    ['#a78bfa', '#ec4899'],
    ['#34d399', '#06b6d4'],
    ['#fb923c', '#f43f5e'],
    ['#facc15', '#f97316'],
    ['#22d3ee', '#8b5cf6'],
    ['#f472b6', '#818cf8'],
    ['#4ade80', '#2dd4bf'],
    ['#fb7185', '#fbbf24'],
    ['#60a5fa', '#a855f7'],
  ];
  const [c1, c2] = colors[(song.id - 1) % colors.length];
  return `<div class="mj-cover-fallback" style="background: linear-gradient(135deg, ${c1}, ${c2});">
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="1.5">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  </div>`;
}

function renderPlaylistItem(song, index, isActive) {
  return `
    <div class="mj-track-item ${isActive ? 'mj-track-active' : ''}" data-index="${index}" id="mj-track-${index}">
      <span class="mj-track-num">${pad(song.id)}</span>

      <button class="mj-track-play-btn" id="mj-play-btn-${index}" aria-label="Putar ${song.title}">
        <svg class="mj-play-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="6 4 19 12 6 20 6 4"/>
        </svg>
        <svg class="mj-pause-icon" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
          <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
        </svg>
        <div class="mj-eq-bars" style="display:none;">
          <span></span><span></span><span></span>
        </div>
      </button>

      <div class="mj-track-thumb">
        ${renderCoverFallback(song)}
        <img src="${song.cover}" alt="${song.title}" class="mj-thumb-img" loading="lazy" onerror="this.style.display='none'" />
      </div>

      <div class="mj-track-meta">
        <span class="mj-track-title">${song.title}</span>
        <span class="mj-track-artist">${song.artist}</span>
      </div>

      <div class="mj-track-right">
        <span class="mj-track-duration">${song.duration || '--:--'}</span>
      </div>
    </div>
  `;
}

function renderDetailPanel(song) {
  const displayDate = song.date ? song.date : "Bagian dari Playlist Kami";

  return `
    <div class="mj-detail-content" id="mj-detail-content">
      <div class="mj-detail-cover-wrapper">
        ${renderCoverFallback(song)}
        <img src="${song.cover}" alt="${song.title}" class="mj-detail-cover-img" loading="lazy" onerror="this.style.display='none'" />
        <div class="mj-detail-cover-glow"></div>
      </div>

      <div class="mj-detail-info">
        <div class="mj-detail-badge">LAGU ${pad(song.id)}</div>
        <h3 class="mj-detail-title">${song.title}</h3>
        <p class="mj-detail-artist">${song.artist}</p>

        ${song.label ? `<div class="mj-detail-label"><span>♡</span> ${song.label}</div>` : ''}

        <div class="mj-detail-meta">
          <div class="mj-detail-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>Catatan Momen</span>
          </div>
          <div class="mj-detail-meta-date">${displayDate}</div>
        </div>

        <div class="mj-detail-player">
          <div id="mj-audio-notice" class="mj-audio-notice" style="display:none; align-items:center; gap:6px; font-size:0.75rem; color:#f87171; background:rgba(248,113,113,0.1); border:1px solid rgba(248,113,113,0.2); padding:6px 12px; border-radius:8px; margin-bottom:4px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>Audio belum tersedia</span>
          </div>

          <div class="mj-player-timeline">
            <span class="mj-player-current" id="mj-player-current">0:00</span>
            <div class="mj-player-bar-wrap">
              <div class="mj-player-bar-bg">
                <div class="mj-player-bar-fill" id="mj-player-fill" style="width:0%"></div>
                <div class="mj-player-dot" id="mj-player-dot" style="left:0%"></div>
              </div>
            </div>
            <span class="mj-player-duration" id="mj-player-duration">${song.duration || '--:--'}</span>
          </div>
          <div class="mj-player-controls">
            <button class="mj-ctrl-btn mj-prev-btn" id="mj-prev-btn" aria-label="Lagu sebelumnya">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
            <button class="mj-ctrl-btn mj-main-play-btn" id="mj-main-play-btn" aria-label="Putar / Jeda">
              <svg class="mj-main-play-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 19 12 6 20 6 4"/>
              </svg>
              <svg class="mj-main-pause-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
                <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
              </svg>
            </button>
            <button class="mj-ctrl-btn mj-next-btn" id="mj-next-btn" aria-label="Lagu berikutnya">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="mj-detail-story">
          <h4 class="mj-detail-section-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            Tentang Lagu Ini
          </h4>
          <p class="mj-detail-story-text">${song.story || 'Catatan tentang lagu ini akan ditambahkan.'}</p>
        </div>

        <div class="mj-detail-lyric">
          <h4 class="mj-detail-section-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V8z"/>
            </svg>
            Lirik Favorit
          </h4>
          <div class="mj-lyric-card">
            <div class="mj-lyric-quote-mark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <p class="mj-lyric-text">${song.favoriteLyric || 'Lirik favorit akan ditambahkan.'}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// Update UI States
// ─────────────────────────────────────────────────────────────
function updateTrackListState() {
  playlist.forEach((_, i) => {
    const item = document.getElementById(`mj-track-${i}`);
    const playIcon = document.querySelector(`#mj-play-btn-${i} .mj-play-icon`);
    const pauseIcon = document.querySelector(`#mj-play-btn-${i} .mj-pause-icon`);
    const eqBars = document.querySelector(`#mj-play-btn-${i} .mj-eq-bars`);
    if (!item) return;

    const isThisActive = i === currentTrackIndex;
    const isThisPlaying = isThisActive && isPlaying;

    item.classList.toggle('mj-track-active', isThisActive);

    if (playIcon) playIcon.style.display = isThisPlaying ? 'none' : 'block';
    if (pauseIcon) pauseIcon.style.display = isThisPlaying ? 'block' : 'none';
    if (eqBars) eqBars.style.display = isThisPlaying ? 'flex' : 'none';
  });

  updateSpotifyButton();
}

function updateMainPlayerUI() {
  const mainPlay = document.querySelector('.mj-main-play-icon');
  const mainPause = document.querySelector('.mj-main-pause-icon');
  if (mainPlay) mainPlay.style.display = isPlaying ? 'none' : 'block';
  if (mainPause) mainPause.style.display = isPlaying ? 'block' : 'none';
}

function updateSpotifyButton() {
  const spotifyBtn = document.getElementById('mj-spotify-btn');
  if (spotifyBtn) {
    const song = playlist[currentTrackIndex];
    const url = song?.spotifyUrl || spotifyPlaylistUrl || '';
    if (url) {
      spotifyBtn.href = url;
      spotifyBtn.target = "_blank";
      spotifyBtn.rel = "noopener noreferrer";
      spotifyBtn.title = "Dengarkan di Spotify";
    } else {
      spotifyBtn.href = "javascript:void(0);";
      spotifyBtn.removeAttribute("target");
      spotifyBtn.title = "Link Spotify akan ditambahkan";
    }
  }
}

// ─────────────────────────────────────────────────────────────
// Progress bar ticker
// ─────────────────────────────────────────────────────────────
function startProgressTicker() {
  if (progressInterval) clearInterval(progressInterval);
  progressInterval = setInterval(() => {
    if (!currentAudio || currentAudio.paused) return;
    const cur = currentAudio.currentTime || 0;
    const dur = currentAudio.duration || 0;
    const pct = dur > 0 ? (cur / dur) * 100 : 0;

    const fill = document.getElementById('mj-player-fill');
    const dot = document.getElementById('mj-player-dot');
    const curEl = document.getElementById('mj-player-current');
    const durEl = document.getElementById('mj-player-duration');

    if (fill) fill.style.width = `${pct}%`;
    if (dot) dot.style.left = `${pct}%`;
    if (curEl) curEl.textContent = formatTime(cur);
    if (durEl && dur > 0) durEl.textContent = formatTime(dur);
  }, 250);
}

// ─────────────────────────────────────────────────────────────
// Select & play / pause song
// ─────────────────────────────────────────────────────────────
function selectTrack(index, autoPlay = false) {
  const song = playlist[index];
  if (!song) return;

  // If clicking same track — toggle play/pause
  if (index === currentTrackIndex) {
    if (isPlaying) {
      currentAudio?.pause();
      isPlaying = false;
      updateTrackListState();
      updateMainPlayerUI();
    } else {
      playCurrentTrack();
    }
    return;
  }

  // New track selected
  stopCurrentAudio();
  currentTrackIndex = index;

  // Update detail panel with transition
  const detailWrapper = document.getElementById('mj-detail-wrapper');
  if (detailWrapper) {
    detailWrapper.classList.remove('mj-detail-visible');
    setTimeout(() => {
      detailWrapper.innerHTML = renderDetailPanel(song);
      detailWrapper.classList.add('mj-detail-visible');
      bindDetailControls();
      if (autoPlay) playCurrentTrack();
    }, 180);
  }

  updateTrackListState();
}

function playCurrentTrack() {
  const song = playlist[currentTrackIndex];
  if (!song) return;

  if (!currentAudio || currentAudio.src !== song.audio) {
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.src = '';
      } catch (e) {
        // ignore
      }
    }
    currentAudio = new Audio(song.audio);

    currentAudio.addEventListener('loadedmetadata', () => {
      if (currentAudio && currentAudio.duration && !isNaN(currentAudio.duration) && currentAudio.duration > 0) {
        const formatted = formatTime(currentAudio.duration);
        song.duration = formatted;
        const durEl = document.getElementById('mj-player-duration');
        if (durEl) durEl.textContent = formatted;
        const trackDurEl = document.querySelector(`#mj-track-${currentTrackIndex} .mj-track-duration`);
        if (trackDurEl) trackDurEl.textContent = formatted;
      }
    });

    currentAudio.addEventListener('ended', () => {
      isPlaying = false;
      updateTrackListState();
      updateMainPlayerUI();
      // Auto-advance to next track
      if (currentTrackIndex < playlist.length - 1) {
        selectTrack(currentTrackIndex + 1, true);
      }
    });

    currentAudio.addEventListener('error', () => {
      isPlaying = false;
      updateTrackListState();
      updateMainPlayerUI();
      showAudioNotice('Audio belum tersedia');
    });
  }

  currentAudio.play()
    .then(() => {
      isPlaying = true;
      showAudioNotice(null);
      updateTrackListState();
      updateMainPlayerUI();
      startProgressTicker();
    })
    .catch(() => {
      isPlaying = false;
      updateTrackListState();
      updateMainPlayerUI();
      showAudioNotice('Audio belum tersedia');
    });
}

// ─────────────────────────────────────────────────────────────
// Bind controls inside detail panel (re-bound on every render)
// ─────────────────────────────────────────────────────────────
function bindDetailControls() {
  const mainPlayBtn = document.getElementById('mj-main-play-btn');
  const prevBtn = document.getElementById('mj-prev-btn');
  const nextBtn = document.getElementById('mj-next-btn');

  if (mainPlayBtn) {
    mainPlayBtn.addEventListener('click', () => {
      if (isPlaying) {
        currentAudio?.pause();
        isPlaying = false;
        updateTrackListState();
        updateMainPlayerUI();
      } else {
        playCurrentTrack();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prev = currentTrackIndex - 1;
      if (prev >= 0) selectTrack(prev, isPlaying);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const next = currentTrackIndex + 1;
      if (next < playlist.length) selectTrack(next, isPlaying);
    });
  }

  // Clickable progress bar
  const barWrap = document.querySelector('.mj-player-bar-bg');
  if (barWrap) {
    barWrap.addEventListener('click', (e) => {
      if (!currentAudio || !currentAudio.duration || isNaN(currentAudio.duration)) return;
      const rect = barWrap.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      currentAudio.currentTime = pct * currentAudio.duration;
    });
  }
}

// ─────────────────────────────────────────────────────────────
// Main init
// ─────────────────────────────────────────────────────────────
export function initPlaylist(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Reset state on initialization so track #0 (01 - Bermuara) is ALWAYS default active
  stopCurrentAudio();
  currentTrackIndex = 0;
  isPlaying = false;

  container.className = 'fade-up';

  const firstSong = playlist[0];

  container.innerHTML = `
    <div class="mj-section">

      <!-- HEADER -->
      <div class="mj-header">
        <div class="section-badge mj-badge">🎵 MUSIK PERJALANAN</div>
        <h2 class="section-title mj-title">Musik Perjalanan</h2>
        <p class="section-subtitle mj-subtitle">Lagu yang menemani setiap momen perjalanan kami.</p>

        <div class="mj-quote-card">
          <div class="mj-quote-mark">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <p class="mj-quote-text">Setiap lagu punya cerita, dan setiap cerita selalu mengingatkan kami pada satu momen yang berharga.</p>
        </div>
      </div>

      <!-- MAIN LAYOUT -->
      <div class="mj-layout">

        <!-- LEFT: PLAYLIST -->
        <div class="mj-playlist-col">
          <div class="mj-playlist-card">
            <div class="mj-playlist-header">
              <div class="mj-playlist-info">
                <span class="mj-playlist-count">${playlist.length} Lagu</span>
                <span class="mj-playlist-label">Personal Playlist</span>
              </div>
            </div>

            <div class="mj-tracklist" id="mj-tracklist">
              ${playlist.map((song, i) => renderPlaylistItem(song, i, i === 0)).join('')}
            </div>

            <!-- FOOTER SECTION -->
            <div class="mj-playlist-footer">
              <a href="${firstSong.spotifyUrl || spotifyPlaylistUrl || 'javascript:void(0);'}" target="_blank" rel="noopener noreferrer" class="mj-spotify-btn" id="mj-spotify-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.208c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 1 1-.277-1.215c3.809-.87 7.077-.496 9.712 1.115.293.18.387.563.207.856zm1.223-2.722a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.13-9.965-1.166a.78.78 0 0 1-.973-.519.781.781 0 0 1 .519-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.793c3.521-1.069 9.372-.862 13.066 1.331a.937.937 0 0 1-1.006 1.619z"/>
                </svg>
                Dengarkan di Spotify ↗
              </a>

              <div class="mj-footer-poetry">
                <p>Same Playlist,</p>
                <p>Different Places,</p>
                <p>But Still Together ♡</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: DETAIL PANEL -->
        <div class="mj-detail-col">
          <div class="mj-detail-wrapper mj-detail-visible" id="mj-detail-wrapper">
            ${renderDetailPanel(firstSong)}
          </div>
        </div>

      </div>
    </div>
  `;

  // Bind track clicks
  const tracklist = document.getElementById('mj-tracklist');
  if (tracklist) {
    tracklist.addEventListener('click', (e) => {
      const trackItem = e.target.closest('.mj-track-item');
      if (!trackItem) return;
      const index = parseInt(trackItem.dataset.index, 10);

      const playBtnClicked = e.target.closest('.mj-track-play-btn');
      if (playBtnClicked) {
        if (index === currentTrackIndex) {
          if (isPlaying) {
            currentAudio?.pause();
            isPlaying = false;
            updateTrackListState();
            updateMainPlayerUI();
          } else {
            playCurrentTrack();
          }
        } else {
          selectTrack(index, true);
        }
      } else {
        selectTrack(index, false);
      }
    });
  }

  // Bind detail controls for initial render
  bindDetailControls();
  updateTrackListState();
}
