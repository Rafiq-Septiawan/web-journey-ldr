export function initNavbar() {
  const header = document.createElement('header');
  header.className = 'navbar';
  header.id = 'main-navbar';
  header.innerHTML = `
    <div class="navbar-inner">
      <div class="nav-left">
        <a href="#home" class="nav-brand">
          <div class="nav-brand-text">
            <span class="nav-brand-name">Trove</span>
            <span class="nav-brand-tag">A Long Distance Journal</span>
          </div>
        </a>
      </div>
      <ul class="nav-menu" id="desktop-nav-links">
        <li><a href="#home" class="nav-link active">Beranda</a></li>
        <li><a href="#about" class="nav-link">Tentang</a></li>
        <li><a href="#profile" class="nav-link">Profil</a></li>
        <li><a href="#journey" class="nav-link">Perjalanan</a></li>
        <li><a href="#timeline" class="nav-link">Linimasa</a></li>
        <li><a href="#gallery" class="nav-link">Dokumentasi</a></li>
        <li><a href="#contact" class="nav-link">Kontak</a></li>
      </ul>

      <button class="nav-hamburger" id="nav-hamburger" aria-label="Buka Menu Navigasi">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Glassmorphic Mobile Drawer Backdrop Overlay (Tap empty space to close) -->
    <div class="mobile-menu-backdrop" id="mobile-backdrop"></div>

    <!-- Ultra-Modern Android/Mobile Floating Navigation Drawer -->
    <div class="mobile-menu-drawer" id="mobile-drawer">
      
      <!-- Drawer Header -->
      <div class="drawer-header">
        <div class="drawer-brand">
          <div class="nav-brand-text">
            <span class="nav-brand-name">Trove</span>
            <span class="nav-brand-tag">A Long Distance Journal</span>
          </div>
        </div>
        <button class="drawer-close-btn" id="drawer-close-btn" aria-label="Tutup Menu Navigasi">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <!-- Drawer Navigation Items -->
      <div class="drawer-nav-list">
        <a href="#home" class="mobile-nav-item mobile-link active">
          <span class="mni-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span>
          <span class="mni-text">Beranda</span>
          <span class="mni-indicator"></span>
        </a>
        <a href="#about" class="mobile-nav-item mobile-link">
          <span class="mni-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>
          <span class="mni-text">Tentang</span>
          <span class="mni-indicator"></span>
        </a>
        <a href="#profile" class="mobile-nav-item mobile-link">
          <span class="mni-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
          <span class="mni-text">Profil</span>
          <span class="mni-indicator"></span>
        </a>
        <a href="#journey" class="mobile-nav-item mobile-link">
          <span class="mni-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg></span>
          <span class="mni-text">Perjalanan</span>
          <span class="mni-indicator"></span>
        </a>
        <a href="#timeline" class="mobile-nav-item mobile-link">
          <span class="mni-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
          <span class="mni-text">Linimasa</span>
          <span class="mni-indicator"></span>
        </a>
        <a href="#gallery" class="mobile-nav-item mobile-link">
          <span class="mni-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></span>
          <span class="mni-text">Dokumentasi</span>
          <span class="mni-indicator"></span>
        </a>
        <a href="#contact" class="mobile-nav-item mobile-link">
          <span class="mni-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
          <span class="mni-text">Kontak</span>
          <span class="mni-indicator"></span>
        </a>
      </div>

      <!-- Drawer Footer -->
      <div class="drawer-footer">
        <a href="#journey" class="btn btn-primary mobile-cta-btn mobile-link">
          <span>Jelajahi Perjalanan</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <div class="drawer-status-pill">
          <span class="dsp-dot"></span>
          <span class="dsp-text">TANGERANG ↔ PASAMAN BARAT</span>
        </div>
      </div>
    </div>
  `;

  document.body.prepend(header);

  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  const closeBtn = document.getElementById('drawer-close-btn');
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link');

  const openDrawer = () => {
    hamburger.classList.add('active');
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    hamburger.classList.remove('active');
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Toggle mobile drawer
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawer.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  // Explicit close button inside drawer header
  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  // Tap backdrop space to close sidebar
  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer when clicking a link
  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
      if (link.getAttribute('href') === '#journey') {
        document.dispatchEvent(new CustomEvent('journeyStarted'));
      }
    });
  });

  // Scroll background effect & active section highlighting
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(sec => {
      const secTop = sec.offsetTop;
      const secHeight = sec.clientHeight;
      if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

