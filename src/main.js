import './styles/style.css';

// Core Components
import { initNavbar } from './components/navbar.js';
import { initLightbox } from './components/lightbox.js';
import { initAudioController } from './components/audioController.js';

// Page Sections
import { initOpening } from './sections/opening.js';
import { initHome } from './sections/home.js';
import { initAbout } from './sections/about.js';
import { initProfile } from './sections/profile.js';
import { initStory } from './sections/story.js';
import { initTimeline } from './sections/timeline.js';
import { initGallery } from './sections/gallery.js';
import { initLetters } from './sections/letters.js';
import { initPlaylist } from './sections/playlist.js';
import { initDreams } from './sections/dreams.js';
import { initContact } from './sections/contact.js';
import { initClosing } from './sections/closing.js';

// Animations & Background
import { initAnimations } from './animations/index.js';
import { initParallaxBg } from './animations/parallaxBg.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive UI Components
  initNavbar();
  initLightbox();
  initAudioController();

  // 2. Render Page Sections
  initOpening('opening-screen');
  initHome('home');
  initAbout('about');
  initProfile('profile');
  initStory('journey');
  initTimeline('timeline');
  initGallery('gallery');
  initLetters('letters');
  initPlaylist('playlist');
  initDreams('dreams');
  initContact('contact');
  initClosing('closing');

  // 3. Animations & Background Observers
  initAnimations();
  initParallaxBg();
});
