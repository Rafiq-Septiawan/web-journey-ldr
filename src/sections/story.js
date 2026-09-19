import { storyData } from '../data/story.js';

/* ── SVG Icons ── */
const ICONS = {
  chat: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  phone: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.66 3.36a2 2 0 0 1 1.83-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  video: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
  heart: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
};

const ICON_COLORS = {
  chat:  { bg: 'rgba(56,189,248,0.12)',  border: 'rgba(56,189,248,0.28)',  color: '#38bdf8', glow: 'rgba(56,189,248,0.35)'  },
  phone: { bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.28)', color: '#818cf8', glow: 'rgba(99,102,241,0.35)' },
  video: { bg: 'rgba(34,211,238,0.12)', border: 'rgba(34,211,238,0.28)', color: '#22d3ee', glow: 'rgba(34,211,238,0.35)' },
  heart: { bg: 'rgba(236,72,153,0.12)',  border: 'rgba(236,72,153,0.28)',  color: '#f472b6', glow: 'rgba(236,72,153,0.35)'  },
};

export function initStory(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';

  /* ── Chapters ── */
  const chaptersHtml = storyData.chapters.map(ch => `
    <div class="sj-chapter">
      <div class="sj-chapter-accent"></div>
      <div class="sj-chapter-inner">
        <div class="sj-chapter-header">
          <span class="sj-chapter-num">${ch.num}</span>
          <h4 class="sj-chapter-title">${ch.title}</h4>
        </div>
        <p class="sj-chapter-text">${ch.body}</p>
      </div>
    </div>
  `).join('');

  /* ── Micro-cards ── */
  const microCardsHtml = storyData.microcards.map(card => {
    const c = ICON_COLORS[card.icon];
    return `
      <div class="sj-microcard" style="--mc-bg:${c.bg};--mc-border:${c.border};--mc-color:${c.color};--mc-glow:${c.glow};">
        <div class="sj-microcard-icon">${ICONS[card.icon]}</div>
        <div class="sj-microcard-text">
          <span class="sj-microcard-title">${card.title}</span>
          <span class="sj-microcard-desc">${card.desc}</span>
        </div>
      </div>
    `;
  }).join('');

  /* ── Full HTML ── */
  container.innerHTML = `
    <div class="container">

      <!-- Section Header -->
      <div class="section-header">
        <div class="section-badge">DOKUMENTASI PERJALANAN</div>
        <h2 class="section-title">${storyData.title}</h2>
        <p class="section-subtitle">${storyData.subtitle}</p>
      </div>

      <!-- Main Premium Card -->
      <div class="sj-card">

        <!-- ═══ LEFT — Narrative ═══ -->
        <div class="sj-left">

          <!-- Left header -->
          <div class="sj-left-top">
            <div class="sj-label-row">
              <div class="sj-label-dot"></div>
              <span class="sj-label">01 — Ringkasan Perjalanan</span>
            </div>
            <p class="sj-tagline">Sebuah cerita yang dimulai dari hal sederhana, lalu tumbuh menjadi sesuatu yang berarti.</p>
          </div>

          <!-- Divider -->
          <div class="sj-divider">
            <div class="sj-divider-line"></div>
            <div class="sj-divider-dot"></div>
            <div class="sj-divider-line sj-divider-line--fade"></div>
          </div>

          <!-- Chapters -->
          <div class="sj-chapters">
            ${chaptersHtml}
          </div>

          <!-- Bottom tagline -->
          <div class="sj-left-footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#f472b6" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span class="sj-left-footer-text">Jarak bukan akhir, tapi bagian dari cerita.</span>
          </div>
        </div>

        <!-- ═══ RIGHT — Visual ═══ -->
        <div class="sj-right">

          <!-- Hero image -->
          <div class="sj-img-wrap">
            <img
              src="${storyData.heroImage.url}"
              alt="LDR Journey Visual"
              class="sj-img"
              loading="lazy"
            />
            <!-- Overlays -->
            <div class="sj-img-gradient-top"></div>
            <div class="sj-img-gradient-bot"></div>

            <!-- Top badge -->
            <div class="sj-img-badge">
              <span class="sj-img-badge-dot"></span>
              <span class="sj-img-badge-text">Dokumentasi Visual</span>
            </div>

            <!-- Bottom caption -->
            <div class="sj-img-caption">
              <p class="sj-img-caption-title">${storyData.heroImage.caption}</p>
              <p class="sj-img-caption-sub">${storyData.heroImage.subcaption}</p>
            </div>
          </div>

          <!-- Micro-cards -->
          <div class="sj-microcards">
            ${microCardsHtml}
          </div>

        </div>
      </div>

    </div>
  `;
}
