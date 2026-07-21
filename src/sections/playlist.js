import { playlistData } from '../data/playlist.js';
import { togglePlaylistSong, addAudioListener } from '../components/audioController.js';

export function initPlaylist(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  const playlistHtml = playlistData
    .map(song => `
      <div class="playlist-item" data-id="${song.id}">
        <div class="playlist-info">
          <div class="playlist-icon-container">
            <div class="playlist-icon-circle">
              <!-- Default state icon (Music Note) -->
              <svg class="music-note-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <!-- Playing state equalizer -->
              <div class="equalizer" style="display: none;">
                <span class="eq-bar bar-1"></span>
                <span class="eq-bar bar-2"></span>
                <span class="eq-bar bar-3"></span>
              </div>
            </div>
            <!-- Play hover overlay button -->
            <button class="playlist-play-btn" aria-label="Play song">
              <svg class="item-play-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
              <svg class="item-pause-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
                <rect x="5" y="4" width="4" height="16"></rect>
                <rect x="15" y="4" width="4" height="16"></rect>
              </svg>
            </button>
          </div>
          <div class="playlist-meta">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
          </div>
        </div>
        
        <div class="playlist-actions">
          ${song.spotifyUrl ? `
            <a href="${song.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="playlist-link" title="Buka di Spotify">
              <span>Spotify</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <h2 class="section-title">Playlist Favorit Kita</h2>
      <p class="section-subtitle">Kumpulan lagu yang menemani hari-hari kita, mewakili rasa, dan selalu mengingatkan kita satu sama lain.</p>
      
      <div class="playlist-container glass-card" style="margin: 0 auto;">
        <div class="playlist-list">
          ${playlistHtml}
        </div>
      </div>
    </div>
  `;

  // Attach event listeners to playlist items
  const items = container.querySelectorAll('.playlist-item');
  items.forEach(item => {
    const songId = parseInt(item.getAttribute('data-id'));
    const playBtn = item.querySelector('.playlist-play-btn');
    
    // Play on clicking the play button
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlaylistSong(songId);
    });

    // Also play when clicking the item card for a more intuitive mobile experience
    item.addEventListener('click', () => {
      togglePlaylistSong(songId);
    });
  });

  // Listen to audioController changes to update the play/pause icons and card classes in the UI
  addAudioListener((state) => {
    items.forEach(item => {
      const songId = parseInt(item.getAttribute('data-id'));
      const isActive = state.activeSong && state.activeSong !== 'bg' && state.activeSong.id === songId;
      const isSongPlaying = isActive && state.isPlaying;

      const noteIcon = item.querySelector('.music-note-icon');
      const equalizer = item.querySelector('.equalizer');
      const playIcon = item.querySelector('.item-play-svg');
      const pauseIcon = item.querySelector('.item-pause-svg');

      if (isActive) {
        item.classList.add('active');
        if (isSongPlaying) {
          item.classList.add('playing');
          noteIcon.style.display = 'none';
          equalizer.style.display = 'flex';
          playIcon.style.display = 'none';
          pauseIcon.style.display = 'block';
        } else {
          item.classList.remove('playing');
          noteIcon.style.display = 'block';
          equalizer.style.display = 'none';
          playIcon.style.display = 'block';
          pauseIcon.style.display = 'none';
        }
      } else {
        item.classList.remove('active');
        item.classList.remove('playing');
        noteIcon.style.display = 'block';
        equalizer.style.display = 'none';
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
      }
    });
  });
}
