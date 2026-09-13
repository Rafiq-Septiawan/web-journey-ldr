export function initAnimations() {
  const fadeUpElements = document.querySelectorAll('.fade-up');
  const milestoneRows = document.querySelectorAll('.milestone-row');

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeUpElements.forEach(el => observer.observe(el));
  milestoneRows.forEach(item => observer.observe(item));
}
