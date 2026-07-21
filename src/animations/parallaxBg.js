export function initParallaxBg() {
  const bgContainer = document.createElement('div');
  bgContainer.className = 'parallax-bg-container';
  bgContainer.id = 'parallax-bg';

  bgContainer.innerHTML = `
    <!-- 1. Planet 1 (Neptune-like blue gradient planet) -->
    <div class="parallax-wrapper planet-1" data-depth="0.12" data-speed-y="0.6" data-speed-x="-0.1" data-rotate-speed="0.05">
      <div class="parallax-drift float-drift-1">
        <svg width="90" height="90" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="neptuneGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="45%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#020617" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#neptuneGrad)" opacity="0.65" filter="drop-shadow(0 0 12px rgba(139, 92, 246, 0.3))" />
        </svg>
      </div>
    </div>

    <!-- 2. Planet 2 (Saturn-like ringed planet) -->
    <div class="parallax-wrapper planet-2" data-depth="0.08" data-speed-y="0.3" data-speed-x="0.05" data-rotate-speed="-0.03">
      <div class="parallax-drift float-drift-2">
        <svg width="130" height="90" viewBox="0 0 130 90">
          <defs>
            <radialGradient id="saturnGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#f8fafc" />
              <stop offset="50%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#090d16" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)" />
              <stop offset="50%" stop-color="rgba(56, 189, 248, 0.15)" />
              <stop offset="100%" stop-color="rgba(139, 92, 246, 0.4)" />
            </linearGradient>
          </defs>
          <ellipse cx="65" cy="45" rx="60" ry="12" fill="url(#ringGrad)" transform="rotate(-15 65 45)" opacity="0.55" />
          <circle cx="65" cy="45" r="28" fill="url(#saturnGrad)" opacity="0.7" filter="drop-shadow(0 0 10px rgba(56, 189, 248, 0.2))" />
        </svg>
      </div>
    </div>

    <!-- 3. Rocket (flying space rocket) -->
    <div class="parallax-wrapper rocket-element" data-depth="0.22" data-speed-y="-0.8" data-speed-x="-0.3">
      <div class="parallax-drift float-drift-3">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
          <defs>
            <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
          </defs>
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" stroke="url(#rocketGrad)" opacity="0.8" />
          <path d="M12 2C8 6 6 12 6 15c0 1.5 1 2.5 2.5 2.5 3 0 9-2 13-6 0-4-3-7-7-9z" fill="url(#rocketGrad)" stroke="#f8fafc" stroke-width="1.5" opacity="0.65" />
          <path d="M9 15l-3 3" stroke="#f8fafc" opacity="0.8" />
          <path d="M15 9l-3 3" stroke="#f8fafc" opacity="0.8" />
          <circle cx="13" cy="8" r="1.5" fill="#020617" stroke="#f8fafc" opacity="0.8" />
        </svg>
      </div>
    </div>

    <!-- 4. Airplane (travel LDR theme paper airplane) -->
    <div class="parallax-wrapper airplane-element" data-depth="0.18" data-speed-y="0.5" data-speed-x="0.4">
      <div class="parallax-drift float-drift-4">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
          <defs>
            <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
          </defs>
          <polygon points="3 11 22 2 13 21 11 13 3 11" fill="url(#planeGrad)" stroke="#f8fafc" stroke-width="1.5" opacity="0.65" />
          <line x1="11" y1="13" x2="22" y2="2" stroke="#f8fafc" opacity="0.8" />
        </svg>
      </div>
    </div>

    <!-- 5. Floating Numbers -->
    <!-- 365 (Days together / in a year) -->
    <div class="parallax-wrapper float-number num-365" data-depth="0.16" data-speed-y="0.7" data-speed-x="-0.15">
      <div class="parallax-drift float-drift-2">365</div>
    </div>

    <!-- 1000 (Kilometers of distance separating them) -->
    <div class="parallax-wrapper float-number num-1000" data-depth="0.1" data-speed-y="0.4" data-speed-x="0.1">
      <div class="parallax-drift float-drift-1">1000</div>
    </div>

    <!-- 24 (Hours a day they think of each other) -->
    <div class="parallax-wrapper float-number num-24" data-depth="0.2" data-speed-y="-0.9" data-speed-x="0.2">
      <div class="parallax-drift float-drift-4">24</div>
    </div>

    <!-- 7 (Days a week of commitment) -->
    <div class="parallax-wrapper float-number num-7" data-depth="0.14" data-speed-y="0.5" data-speed-x="-0.2">
      <div class="parallax-drift float-drift-3">7</div>
    </div>
  `;

  document.body.prepend(bgContainer);

  const wrappers = bgContainer.querySelectorAll('.parallax-wrapper');

  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    wrappers.forEach(wrap => {
      const depth = parseFloat(wrap.getAttribute('data-depth') || 0.1);
      const speedY = parseFloat(wrap.getAttribute('data-speed-y') || 1);
      const speedX = parseFloat(wrap.getAttribute('data-speed-x') || 0);
      const rotateSpeed = parseFloat(wrap.getAttribute('data-rotate-speed') || 0);

      const yTranslation = scrollY * depth * speedY;
      const xTranslation = scrollY * depth * speedX;
      
      let transformStr = `translate3d(${xTranslation}px, ${yTranslation}px, 0)`;
      if (rotateSpeed !== 0) {
        transformStr += ` rotate(${scrollY * depth * rotateSpeed}deg)`;
      }

      wrap.style.transform = transformStr;
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }, { passive: true });

  // Initial trigger to position them correctly
  updateParallax();
}
