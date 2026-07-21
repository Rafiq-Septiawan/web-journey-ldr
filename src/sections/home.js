export function initHome(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';
  container.innerHTML = `
    <div class="hero-glow"></div>
    <div class="container">
      <h1 class="hero-title">Perjalanan Kita</h1>
      <p class="hero-tagline">"Jarak hanyalah sebuah angka, tapi komitmen kita adalah segalanya."</p>
      <div style="margin-top: 2rem;">
        <a href="#story" class="btn btn-primary">Baca Cerita Kita</a>
      </div>
    </div>
  `;
}
