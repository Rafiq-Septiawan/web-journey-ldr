export function initAnimations() {
  // 1. Intersection Observer for Fade-Up sections and timeline items
  const fadeUpElements = document.querySelectorAll('.fade-up');
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observerOptions = {
    root: null, // viewport
    threshold: 0.1, // trigger when 10% visible
    rootMargin: '0px 0px -50px 0px' // trigger slightly before entering viewport
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // only animate once
      }
    });
  }, observerOptions);

  fadeUpElements.forEach(el => observer.observe(el));
  timelineItems.forEach(item => observer.observe(item));

  // 2. Parallax mouse effect for opening background
  const opening = document.getElementById('opening');
  if (opening) {
    opening.addEventListener('mousemove', (e) => {
      if (opening.classList.contains('dismissed')) return;

      const sky = opening.querySelector('.opening-sky');
      if (sky) {
        const moveX = (e.clientX - window.innerWidth / 2) * -0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * -0.02;
        sky.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
      }
    });
  }
}
