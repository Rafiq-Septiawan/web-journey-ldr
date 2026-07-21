import { playlistData } from '../data/playlist.js';

let bgAudio = null;
let playlistAudio = null;
let activeSong = null; // can be "bg" or a song object from playlistData
let isMuted = false;
let journeyStarted = false;

// Bernadya - Rabun Jauh
const BG_SONG = {
  id: 'bg',
  title: "Rabun Jauh",
  artist: "Bernadya",
  audioUrl: "/music/Rabun Jauh.mp3",
  fallbackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
};

// UI Elements
let floatingPlayer = null;
let playPauseBtn = null;
let muteBtn = null;
let disk = null;
let marqueeText = null;

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

function isPlaying() {
  if (activeSong === 'bg' && bgAudio) {
    return !bgAudio.paused;
  } else if (activeSong && activeSong !== 'bg' && playlistAudio) {
    return !playlistAudio.paused;
  }
  return false;
}

// Setup fallback audio source handling
function setupFallback(audioElement, fallbackUrl) {
  const errorHandler = () => {
    console.warn(`Failed to play ${audioElement.src}. Trying fallback URL: ${fallbackUrl}`);
    audioElement.removeEventListener('error', errorHandler);
    
    const wasPlaying = !audioElement.paused;
    audioElement.src = fallbackUrl;
    audioElement.load();
    if (wasPlaying) {
      audioElement.play().catch(err => {
        console.error("Failed to play fallback audio:", err);
      });
    }
  };
  audioElement.addEventListener('error', errorHandler);
}

export function initAudioController() {
  // Initialize background audio
  bgAudio = new Audio(BG_SONG.audioUrl);
  bgAudio.loop = true;
  setupFallback(bgAudio, BG_SONG.fallbackUrl);

  // Initialize playlist audio
  playlistAudio = new Audio();
  playlistAudio.addEventListener('ended', () => {
    // When a playlist song finishes, automatically resume background music
    resumeBackgroundMusic();
  });

  // Listen for the custom journeyStarted event from opening screen
  document.addEventListener('journeyStarted', () => {
    journeyStarted = true;
    createFloatingPlayer();
    playBackgroundMusic();
  });
}

function playBackgroundMusic() {
  if (!journeyStarted) return;
  
  // Pause playlist audio if playing
  if (playlistAudio) {
    playlistAudio.pause();
  }

  activeSong = 'bg';
  
  bgAudio.play()
    .then(() => {
      notifyListeners();
    })
    .catch(err => {
      console.warn("Autoplay blocked or playback error, waiting for user click.", err);
      notifyListeners();
    });
}

function resumeBackgroundMusic() {
  if (!journeyStarted) return;
  activeSong = 'bg';
  bgAudio.play()
    .then(() => {
      notifyListeners();
    })
    .catch(err => {
      console.error("Failed to resume background music:", err);
    });
}

export function playPlaylistSong(songId) {
  if (!journeyStarted) return;

  const song = playlistData.find(s => s.id === songId);
  if (!song) return;

  // Pause background music
  if (bgAudio) {
    bgAudio.pause();
  }

  // Set source of playlist player
  playlistAudio.src = song.audioUrl;
  playlistAudio.load();
  setupFallback(playlistAudio, song.fallbackUrl);

  activeSong = song;
  
  playlistAudio.play()
    .then(() => {
      notifyListeners();
    })
    .catch(err => {
      console.error(`Failed to play song ${song.title}:`, err);
    });
}

export function pausePlaylistSong() {
  if (playlistAudio) {
    playlistAudio.pause();
  }
  notifyListeners();
}

export function togglePlaylistSong(songId) {
  if (!journeyStarted) return;
  
  const song = playlistData.find(s => s.id === songId);
  if (!song) return;

  if (activeSong && activeSong.id === songId) {
    if (playlistAudio.paused) {
      if (bgAudio) bgAudio.pause();
      playlistAudio.play().then(() => notifyListeners());
    } else {
      playlistAudio.pause();
      // Resume background music instead of silence
      resumeBackgroundMusic();
    }
  } else {
    playPlaylistSong(songId);
  }
}

export function toggleGlobalPlay() {
  if (!journeyStarted) return;

  if (activeSong === 'bg') {
    if (bgAudio.paused) {
      bgAudio.play().then(() => notifyListeners());
    } else {
      bgAudio.pause();
      notifyListeners();
    }
  } else if (activeSong) {
    if (playlistAudio.paused) {
      playlistAudio.play().then(() => notifyListeners());
    } else {
      playlistAudio.pause();
      notifyListeners();
    }
  }
}

export function toggleMute() {
  isMuted = !isMuted;
  if (bgAudio) bgAudio.muted = isMuted;
  if (playlistAudio) playlistAudio.muted = isMuted;
  notifyListeners();
}

// UI creation and management
function createFloatingPlayer() {
  if (floatingPlayer) return;

  floatingPlayer = document.createElement('div');
  floatingPlayer.className = 'floating-audio-player glass-card';
  floatingPlayer.id = 'floating-audio-player';
  
  floatingPlayer.innerHTML = `
    <div class="audio-disk-container">
      <div class="audio-disk" id="audio-disk">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>
    </div>
    <div class="audio-details">
      <div class="audio-track-info">
        <span class="audio-title-marquee" id="audio-title-marquee">Memulai Musik...</span>
      </div>
      <div class="audio-controls">
        <button class="audio-btn" id="audio-play-pause-btn" aria-label="Play/Pause">
          <svg class="play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <svg class="pause-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="display: none;">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        </button>
        <button class="audio-btn" id="audio-mute-btn" aria-label="Mute/Unmute">
          <svg class="unmute-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <svg class="mute-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(floatingPlayer);

  playPauseBtn = document.getElementById('audio-play-pause-btn');
  muteBtn = document.getElementById('audio-mute-btn');
  disk = document.getElementById('audio-disk');
  marqueeText = document.getElementById('audio-title-marquee');

  playPauseBtn.addEventListener('click', toggleGlobalPlay);
  muteBtn.addEventListener('click', toggleMute);

  // Trigger initial UI update
  updateUI();
}

function updateUI() {
  if (!floatingPlayer) return;

  const playing = isPlaying();

  // Disk rotation
  if (playing) {
    disk.classList.add('playing');
  } else {
    disk.classList.remove('playing');
  }

  // Play/Pause button icons
  const playIcon = playPauseBtn.querySelector('.play-icon');
  const pauseIcon = playPauseBtn.querySelector('.pause-icon');
  if (playing) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
  } else {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
  }

  // Mute button icons
  const unmuteIcon = muteBtn.querySelector('.unmute-icon');
  const muteIcon = muteBtn.querySelector('.mute-icon');
  if (isMuted) {
    unmuteIcon.style.display = 'none';
    muteIcon.style.display = 'block';
    muteBtn.classList.add('muted');
  } else {
    unmuteIcon.style.display = 'block';
    muteIcon.style.display = 'none';
    muteBtn.classList.remove('muted');
  }

  // Track marquee title
  if (activeSong === 'bg') {
    marqueeText.textContent = `Musik Latar: ${BG_SONG.title} — ${BG_SONG.artist}`;
  } else if (activeSong) {
    marqueeText.textContent = `Memutar: ${activeSong.title} — ${activeSong.artist}`;
  } else {
    marqueeText.textContent = 'Musik Berhenti';
  }
}
