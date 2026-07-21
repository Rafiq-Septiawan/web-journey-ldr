import { storyData } from '../data/story.js';

export function initStory(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';
  
  // Render paragraphs html
  const paragraphsHtml = storyData.paragraphs
    .map(p => `<p class="story-para">${p}</p>`)
    .join('');

  // Render images html
  const imagesHtml = storyData.images
    .map(img => `
      <div class="story-img-wrapper">
        <img src="${img.url}" alt="${img.caption}" />
        <div class="story-img-caption">${img.caption}</div>
      </div>
    `)
    .join('');

  container.innerHTML = `
    <div class="container">
      <h2 class="section-title">${storyData.title}</h2>
      <p class="section-subtitle">${storyData.subtitle}</p>
      
      <div class="story-layout glass-card">
        <div class="story-text-container">
          ${paragraphsHtml}
        </div>
        <div class="story-media">
          ${imagesHtml}
        </div>
      </div>
    </div>
  `;
}
