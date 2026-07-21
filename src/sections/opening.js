export function initOpening(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = ''; // remove initial classes if any
  container.id = 'opening';
  container.innerHTML = `
    <div class="opening-sky">
      <div class="shooting-star" style="top: 10%; left: 30%; animation-delay: 0s;"></div>
      <div class="shooting-star" style="top: 30%; left: 70%; animation-delay: 1.5s;"></div>
      <div class="shooting-star" style="top: 15%; left: 80%; animation-delay: 3s;"></div>
    </div>
    <div class="opening-text-container">
      <h2 class="opening-text" id="opening-text-1">"Every journey begins with a single hello."</h2>
      <h2 class="opening-text" id="opening-text-2" style="display: none;">"Ours became a thousand memories."</h2>
      <button class="btn btn-primary opening-btn" id="start-btn" style="display: none;">Start Our Journey</button>
    </div>
  `;

  const text1 = document.getElementById('opening-text-1');
  const text2 = document.getElementById('opening-text-2');
  const startBtn = document.getElementById('start-btn');

  // Sequential text animation
  setTimeout(() => {
    text1.classList.add('show');
  }, 500);

  setTimeout(() => {
    // Fade out text1
    text1.classList.remove('show');
    
    // After text1 fades out, show text2
    setTimeout(() => {
      text1.style.display = 'none';
      text2.style.display = 'block';
      setTimeout(() => {
        text2.classList.add('show');
      }, 50);
    }, 1200);
  }, 4000);

  setTimeout(() => {
    // Show start button
    startBtn.style.display = 'inline-flex';
    setTimeout(() => {
      startBtn.classList.add('show');
    }, 50);
  }, 7500);

  // Dismiss opening screen
  startBtn.addEventListener('click', () => {
    container.classList.add('dismissed');
    // Enable background scrolls on body once dismissed
    document.body.style.overflowY = 'auto';
    
    // Play any initial background music or triggers if the user wants
    // Dispatch custom event to notify main app
    const event = new CustomEvent('journeyStarted');
    document.dispatchEvent(event);
  });

  // Temporarily disable scroll while opening screen is active
  document.body.style.overflowY = 'hidden';
}
