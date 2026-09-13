import { toggleGlobalPlay, isPlaying, addAudioListener } from '../components/audioController.js';

export function initPlaylist(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  container.innerHTML = `
    <div class="container">
      <div class="section-header">
        <div class="section-badge">BACKSOUND</div>
        <h2 class="section-title">Musik Perjalanan</h2>
        <p class="section-subtitle">Lagu yang menemani setiap momen perjalanan kita.</p>
      </div>

      <div class="corp-card soundtrack-table-card">
        <div class="soundtrack-list">
          <div class="soundtrack-item" id="bermuara-track">
            <div class="soundtrack-info">
              <button class="soundtrack-play-btn" id="bermuara-play-btn" aria-label="Putar Bermuara">
                <svg class="play-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <div class="soundtrack-eq" style="display: none;">
                  <span class="eq-bar"></span>
                  <span class="eq-bar"></span>
                  <span class="eq-bar"></span>
                </div>
              </button>
              <div class="soundtrack-meta">
                <h4>Bermuara</h4>
                <p>Rizky Febian ft Mahalini</p>
              </div>
            </div>

            <div style="font-size: 0.85rem; color: var(--muted-text); font-weight: 600;">
              LAGU #01
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const trackItem = document.getElementById('bermuara-track');
  const playSvg = trackItem.querySelector('.play-svg');
  const eq = trackItem.querySelector('.soundtrack-eq');

  trackItem.addEventListener('click', () => {
    toggleGlobalPlay();
  });

  addAudioListener((state) => {
    const playing = state.isPlaying;

    if (playing) {
      trackItem.classList.add('active', 'playing');
      if (playSvg) playSvg.style.display = 'none';
      if (eq) eq.style.display = 'flex';
    } else {
      trackItem.classList.remove('active', 'playing');
      if (playSvg) playSvg.style.display = 'block';
      if (eq) eq.style.display = 'none';
    }
  });
}
