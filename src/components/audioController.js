let bgAudio = null;
let activeSong = null;
let isMuted = false;
let journeyStarted = false;
let isExpanded = false;

const BASE = import.meta.env.BASE_URL;
const BG_SONG = {
  id: 'bg',
  title: "Bermuara",
  artist: "Rizky Febian ft Mahalini",
  audioUrl: `${BASE}music/Bermuara.mp3`,
};

let containerEl = null;
const listeners = [];

export function addAudioListener(callback) {
  listeners.push(callback);
}

function notifyListeners() {
  const state = {
    activeSong,
    isPlaying: isPlaying(),
    isMuted,
    journeyStarted
  };
  listeners.forEach(cb => cb(state));
  updateUI();
}

export function isPlaying() {
  if (bgAudio) return !bgAudio.paused;
  return false;
}

function getActiveAudio() {
  return bgAudio;
}

export function initAudioController() {
  bgAudio = new Audio(BG_SONG.audioUrl);
  bgAudio.loop = true;

  bgAudio.addEventListener('timeupdate', () => updateProgressUI());

  bgAudio.addEventListener('error', (e) => {
    console.error('Audio error:', e, bgAudio.error);
  });

  createFloatingPlayer();

  document.addEventListener('journeyStarted', () => {
    if (!journeyStarted) {
      journeyStarted = true;
      playBackgroundMusic();
    }
  });
}

export function playBackgroundMusic() {
  journeyStarted = true;
  activeSong = 'bg';

  bgAudio.play()
    .then(() => notifyListeners())
    .catch(err => {
      console.warn("Playback waiting for user interaction.", err);
      notifyListeners();
    });
}

export function toggleGlobalPlay() {
  journeyStarted = true;
  if (!activeSong) {
    playBackgroundMusic();
    return;
  }

  if (bgAudio.paused) {
    bgAudio.play().then(() => notifyListeners());
  } else {
    bgAudio.pause();
    notifyListeners();
  }
}

export function toggleMute() {
  isMuted = !isMuted;
  if (bgAudio) bgAudio.muted = isMuted;
  notifyListeners();
}

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function createFloatingPlayer() {
  if (containerEl) return;

  containerEl = document.createElement('div');
  containerEl.className = 'floating-music-container';
  containerEl.id = 'floating-music-container';

  containerEl.innerHTML = `
    <!-- Compact Circular Floating Music Note Button -->
    <button class="music-trigger-btn" id="music-trigger-btn" aria-label="Pemutar Musik" title="Pemutar Musik">
      <div class="music-trigger-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      </div>
    </button>

    <!-- Expanded Mini Player Card -->
    <div class="mini-player-card" id="mini-player-card">
      <div class="mini-player-header">
        <div class="mini-player-brand">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
          <span>Musik Perjalanan</span>
        </div>
        <button class="mini-player-close" id="mini-player-close" aria-label="Tutup Pemutar Musik">&times;</button>
      </div>

      <div class="mini-player-body">
        <div class="mini-player-track">
          <span class="mini-track-title" id="mini-title">Bermuara</span>
          <span class="mini-track-artist" id="mini-artist">Rizky Febian ft Mahalini</span>
        </div>

        <div class="mini-player-progress-container">
          <span class="progress-time" id="progress-current">0:00</span>
          <input type="range" class="mini-progress-bar" id="mini-progress" min="0" max="100" value="0" />
          <span class="progress-time" id="progress-duration">0:00</span>
        </div>

        <div class="mini-player-controls">
          <button class="mini-play-main-btn" id="mini-play-btn" title="Putar / Jeda">
            <svg class="play-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <svg class="pause-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display: none;"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          </button>

          <button class="mini-ctrl-btn" id="mini-mute-btn" title="Mute / Unmute">
            <svg class="unmute-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            <svg class="mute-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(containerEl);

  const triggerBtn = document.getElementById('music-trigger-btn');
  const cardEl = document.getElementById('mini-player-card');
  const closeBtn = document.getElementById('mini-player-close');
  const playBtn = document.getElementById('mini-play-btn');
  const muteBtn = document.getElementById('mini-mute-btn');
  const progressBar = document.getElementById('mini-progress');

  triggerBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    cardEl.classList.toggle('active', isExpanded);
    if (!activeSong) {
      toggleGlobalPlay();
    }
  });

  closeBtn.addEventListener('click', () => {
    isExpanded = false;
    cardEl.classList.remove('active');
  });

  playBtn.addEventListener('click', toggleGlobalPlay);
  muteBtn.addEventListener('click', toggleMute);

  progressBar.addEventListener('input', (e) => {
    if (bgAudio && bgAudio.duration) {
      bgAudio.currentTime = (e.target.value / 100) * bgAudio.duration;
    }
  });

  updateUI();
}

function updateProgressUI() {
  const progressBar = document.getElementById('mini-progress');
  const currentTimeEl = document.getElementById('progress-current');
  const durationTimeEl = document.getElementById('progress-duration');

  if (bgAudio && progressBar && currentTimeEl && durationTimeEl) {
    const cur = bgAudio.currentTime || 0;
    const dur = bgAudio.duration || 0;
    currentTimeEl.textContent = formatTime(cur);
    durationTimeEl.textContent = formatTime(dur);

    if (dur > 0) {
      progressBar.value = (cur / dur) * 100;
    } else {
      progressBar.value = 0;
    }
  }
}

function updateUI() {
  if (!containerEl) return;

  const playing = isPlaying();
  const triggerBtn = document.getElementById('music-trigger-btn');
  const playBtn = document.getElementById('mini-play-btn');
  const muteBtn = document.getElementById('mini-mute-btn');

  if (triggerBtn) {
    triggerBtn.classList.toggle('playing', playing);
  }

  if (playBtn) {
    const playIcon = playBtn.querySelector('.play-icon');
    const pauseIcon = playBtn.querySelector('.pause-icon');
    if (playing) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  }

  if (muteBtn) {
    const unmuteIcon = muteBtn.querySelector('.unmute-icon');
    const muteIcon = muteBtn.querySelector('.mute-icon');
    if (isMuted) {
      unmuteIcon.style.display = 'none';
      muteIcon.style.display = 'block';
    } else {
      unmuteIcon.style.display = 'block';
      muteIcon.style.display = 'none';
    }
  }

  updateProgressUI();
}
