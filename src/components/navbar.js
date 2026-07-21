export function initNavbar() {
  const header = document.createElement('nav');
  header.className = 'navbar';
  header.innerHTML = `
    <a href="#home" class="nav-logo">
      <span>Web Journey LDR</span> ❤️
    </a>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle Navigation Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li><a href="#home" class="nav-link active">Home</a></li>
      <li><a href="#story" class="nav-link">Our Story</a></li>
      <li><a href="#timeline" class="nav-link">Timeline</a></li>
      <li><a href="#gallery" class="nav-link">Gallery</a></li>
      <li><a href="#letters" class="nav-link">Letters</a></li>
      <li><a href="#playlist" class="nav-link">Playlist</a></li>
      <li><a href="#dreams" class="nav-link">Dreams</a></li>
      <li><a href="#closing" class="nav-link">Closing</a></li>
    </ul>
  `;

  document.body.prepend(header);

  const hamburger = document.getElementById('nav-hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Scroll effect & Active Link Highlighting
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    // 1. Scroll background effect
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // 2. Active section link highlighting
    let current = '';
    const scrollPosition = window.scrollY + 120; // offset for nav height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
