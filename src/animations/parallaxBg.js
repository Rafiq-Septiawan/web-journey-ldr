export function initParallaxBg() {
  const bgContainer = document.createElement('div');
  bgContainer.className = 'parallax-bg-container';
  bgContainer.id = 'parallax-bg';

  bgContainer.innerHTML = `
    <div class="bg-grid-overlay"></div>
    <div class="bg-dot-matrix"></div>
    <div class="bg-ambient-orb bg-orb-cyan" id="orb-1"></div>
    <div class="bg-ambient-orb bg-orb-indigo" id="orb-2"></div>
    <div class="bg-ambient-orb bg-orb-pink" id="orb-3"></div>
    <div class="bg-ambient-orb bg-orb-teal" id="orb-4"></div>
    <div class="starfield-particles">
      <div class="star-particle star-p1"></div>
      <div class="star-particle star-p2"></div>
      <div class="star-particle star-p3"></div>
      <div class="star-particle star-p4"></div>
      <div class="star-particle star-p5"></div>
      <div class="star-particle star-p6"></div>
      <div class="star-particle star-p7"></div>
      <div class="star-particle star-p8"></div>
    </div>
  `;

  document.body.prepend(bgContainer);

  const orb1 = document.getElementById('orb-1');
  const orb2 = document.getElementById('orb-2');
  const orb3 = document.getElementById('orb-3');
  const orb4 = document.getElementById('orb-4');

  let ticking = false;

  function updateAmbientOrbs() {
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (orb1) {
      orb1.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;
    }
    if (orb2) {
      orb2.style.transform = `translate3d(0, ${-scrollY * 0.08}px, 0)`;
    }
    if (orb3) {
      orb3.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
    }
    if (orb4) {
      orb4.style.transform = `translate3d(0, ${-scrollY * 0.14}px, 0)`;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateAmbientOrbs);
      ticking = true;
    }
  }, { passive: true });

  updateAmbientOrbs();
}
