import './style.css';

// Components
import { initNavbar } from './components/navbar.js';
import { initLightbox } from './components/lightbox.js';
import { initAudioController } from './components/audioController.js';

// Sections
import { initOpening } from './sections/opening.js';
import { initHome } from './sections/home.js';
import { initStory } from './sections/story.js';
import { initTimeline } from './sections/timeline.js';
import { initGallery } from './sections/gallery.js';
import { initLetters } from './sections/letters.js';
import { initPlaylist } from './sections/playlist.js';
import { initDreams } from './sections/dreams.js';
import { initClosing } from './sections/closing.js';

// Animations
import { initAnimations } from './animations/index.js';
import { initParallaxBg } from './animations/parallaxBg.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Interactive UI Components
  initNavbar();
  initLightbox();
  initAudioController();

  // 2. Initialize and Render Page Sections
  initOpening('opening-screen');
  initHome('home');
  initStory('story');
  initTimeline('timeline');
  initGallery('gallery');
  initLetters('letters');
  initPlaylist('playlist');
  initDreams('dreams');
  initClosing('closing');

  // 3. Initialize Animations & Intersection Observers
  initAnimations();
  initParallaxBg();
});

