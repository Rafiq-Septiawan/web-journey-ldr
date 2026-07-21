(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.createElement(`nav`);e.className=`navbar`,e.innerHTML=`
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
  `,document.body.prepend(e);let t=document.getElementById(`nav-hamburger`),n=document.getElementById(`nav-links`),r=document.querySelectorAll(`.nav-link`);t.addEventListener(`click`,e=>{e.stopPropagation(),t.classList.toggle(`active`),n.classList.toggle(`active`)}),r.forEach(e=>{e.addEventListener(`click`,()=>{t.classList.remove(`active`),n.classList.remove(`active`)})}),document.addEventListener(`click`,r=>{e.contains(r.target)||(t.classList.remove(`active`),n.classList.remove(`active`))});let i=document.querySelectorAll(`section`);window.addEventListener(`scroll`,()=>{window.scrollY>50?e.classList.add(`scrolled`):e.classList.remove(`scrolled`);let t=``,n=window.scrollY+120;i.forEach(e=>{let r=e.offsetTop,i=e.clientHeight;n>=r&&n<r+i&&(t=e.getAttribute(`id`))}),r.forEach(e=>{e.classList.remove(`active`),e.getAttribute(`href`)===`#${t}`&&e.classList.add(`active`)})})}function t(){let e=document.createElement(`div`);e.className=`lightbox`,e.id=`lightbox-modal`,e.innerHTML=`
    <div class="lightbox-content">
      <button class="lightbox-close" id="lightbox-close">&times;</button>
      <img src="" alt="Zoomed image" class="lightbox-img" id="lightbox-img" />
      <p class="lightbox-caption" id="lightbox-caption"></p>
    </div>
  `,document.body.appendChild(e);let t=e.querySelector(`#lightbox-img`),n=e.querySelector(`#lightbox-caption`),r=e.querySelector(`#lightbox-close`),i=()=>{e.classList.remove(`active`),document.body.style.overflow=``};r.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`active`)&&i()}),window.openLightbox=function(r,i){t.src=r,n.textContent=i||``,e.classList.add(`active`),document.body.style.overflow=`hidden`}}var n=[{id:1,title:`Rabun Jauh`,artist:`Bernadya`,spotifyUrl:`https://open.spotify.com/track/7l8Vq8p7Z22744H2L1v7qB`,audioUrl:`/music/Rabun Jauh.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`},{id:2,title:`Here With Me`,artist:`d4vd`,spotifyUrl:`https://open.spotify.com/track/08kdfu656v6t526oN2hNkH`,audioUrl:`/music/here-with-me.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3`},{id:3,title:`Double Take`,artist:`dhruv`,spotifyUrl:`https://open.spotify.com/track/2qxmye6gBYegmTxnSZv3eR`,audioUrl:`/music/double-take.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3`},{id:4,title:`LDR`,artist:`Spill Tab`,spotifyUrl:`https://open.spotify.com/track/7L5c6wzNq8XhF9pG3YwY2E`,audioUrl:`/music/ldr.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3`},{id:5,title:`Until I Found You`,artist:`Stephen Sanchez`,spotifyUrl:`https://open.spotify.com/track/0U10zSUwJk07netu426gTv`,audioUrl:`/music/until-i-found-you.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3`},{id:6,title:`Kisah Sempurna`,artist:`Mahalini`,spotifyUrl:`https://open.spotify.com/track/25ScaqO32FjO11xR2G7Rtr`,audioUrl:`/music/kisah-sempurna.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3`},{id:7,title:`Dekat di Hati`,artist:`RAN`,spotifyUrl:`https://open.spotify.com/track/0bYmC3p604YQ306b3VwB6f`,audioUrl:`/music/dekat-di-hati.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3`}],r=null,i=null,a=null,o=!1,s=!1,c={id:`bg`,title:`Rabun Jauh`,artist:`Bernadya`,audioUrl:`/music/Rabun Jauh.mp3`,fallbackUrl:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`},l=null,u=null,d=null,f=null,p=null,m=[];function h(e){m.push(e)}function g(){let e={activeSong:a,isPlaying:_(),isMuted:o,journeyStarted:s};m.forEach(t=>t(e)),D()}function _(){return a===`bg`&&r?!r.paused:a&&a!==`bg`&&i?!i.paused:!1}function v(e,t){let n=()=>{console.warn(`Failed to play ${e.src}. Trying fallback URL: ${t}`),e.removeEventListener(`error`,n);let r=!e.paused;e.src=t,e.load(),r&&e.play().catch(e=>{console.error(`Failed to play fallback audio:`,e)})};e.addEventListener(`error`,n)}function y(){r=new Audio(c.audioUrl),r.loop=!0,v(r,c.fallbackUrl),i=new Audio,i.addEventListener(`ended`,()=>{x()}),document.addEventListener(`journeyStarted`,()=>{s=!0,E(),b()})}function b(){s&&(i&&i.pause(),a=`bg`,r.play().then(()=>{g()}).catch(e=>{console.warn(`Autoplay blocked or playback error, waiting for user click.`,e),g()}))}function x(){s&&(a=`bg`,r.play().then(()=>{g()}).catch(e=>{console.error(`Failed to resume background music:`,e)}))}function S(e){if(!s)return;let t=n.find(t=>t.id===e);t&&(r&&r.pause(),i.src=t.audioUrl,i.load(),v(i,t.fallbackUrl),a=t,i.play().then(()=>{g()}).catch(e=>{console.error(`Failed to play song ${t.title}:`,e)}))}function C(e){s&&n.find(t=>t.id===e)&&(a&&a.id===e?i.paused?(r&&r.pause(),i.play().then(()=>g())):(i.pause(),x()):S(e))}function w(){s&&(a===`bg`?r.paused?r.play().then(()=>g()):(r.pause(),g()):a&&(i.paused?i.play().then(()=>g()):(i.pause(),g())))}function T(){o=!o,r&&(r.muted=o),i&&(i.muted=o),g()}function E(){l||(l=document.createElement(`div`),l.className=`floating-audio-player glass-card`,l.id=`floating-audio-player`,l.innerHTML=`
    <div class="audio-disk-container">
      <div class="audio-disk" id="audio-disk">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      </div>
    </div>
    <div class="audio-details">
      <div class="audio-track-info">
        <span class="audio-title-marquee" id="audio-title-marquee">Memulai Musik...</span>
      </div>
      <div class="audio-controls">
        <button class="audio-btn" id="audio-play-pause-btn" aria-label="Play/Pause">
          <svg class="play-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <svg class="pause-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="display: none;">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        </button>
        <button class="audio-btn" id="audio-mute-btn" aria-label="Mute/Unmute">
          <svg class="unmute-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <svg class="mute-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </button>
      </div>
    </div>
  `,document.body.appendChild(l),u=document.getElementById(`audio-play-pause-btn`),d=document.getElementById(`audio-mute-btn`),f=document.getElementById(`audio-disk`),p=document.getElementById(`audio-title-marquee`),u.addEventListener(`click`,w),d.addEventListener(`click`,T),D())}function D(){if(!l)return;let e=_();e?f.classList.add(`playing`):f.classList.remove(`playing`);let t=u.querySelector(`.play-icon`),n=u.querySelector(`.pause-icon`);e?(t.style.display=`none`,n.style.display=`block`):(t.style.display=`block`,n.style.display=`none`);let r=d.querySelector(`.unmute-icon`),i=d.querySelector(`.mute-icon`);o?(r.style.display=`none`,i.style.display=`block`,d.classList.add(`muted`)):(r.style.display=`block`,i.style.display=`none`,d.classList.remove(`muted`)),a===`bg`?p.textContent=`Musik Latar: ${c.title} — ${c.artist}`:a?p.textContent=`Memutar: ${a.title} — ${a.artist}`:p.textContent=`Musik Berhenti`}function O(e){let t=document.getElementById(e);if(!t)return;t.className=``,t.id=`opening`,t.innerHTML=`
    <div class="opening-sky">
      <div class="shooting-star" style="top: 10%; left: 30%; animation-delay: 0s;"></div>
      <div class="shooting-star" style="top: 30%; left: 70%; animation-delay: 1.5s;"></div>
      <div class="shooting-star" style="top: 15%; left: 80%; animation-delay: 3s;"></div>
    </div>
    <div class="opening-text-container">
      <h2 class="opening-text" id="opening-text-1">"Every journey begins with a single hello."</h2>
      <h2 class="opening-text" id="opening-text-2" style="display: none;">"Ours became a thousand memories."</h2>
      <button class="btn btn-primary opening-btn" id="start-btn" style="display: none;">Start Our Journey</button>
    </div>
  `;let n=document.getElementById(`opening-text-1`),r=document.getElementById(`opening-text-2`),i=document.getElementById(`start-btn`);setTimeout(()=>{n.classList.add(`show`)},500),setTimeout(()=>{n.classList.remove(`show`),setTimeout(()=>{n.style.display=`none`,r.style.display=`block`,setTimeout(()=>{r.classList.add(`show`)},50)},1200)},4e3),setTimeout(()=>{i.style.display=`inline-flex`,setTimeout(()=>{i.classList.add(`show`)},50)},7500),i.addEventListener(`click`,()=>{t.classList.add(`dismissed`),document.body.style.overflowY=`auto`;let e=new CustomEvent(`journeyStarted`);document.dispatchEvent(e)}),document.body.style.overflowY=`hidden`}function k(e){let t=document.getElementById(e);t&&(t.className=`fade-up`,t.innerHTML=`
    <div class="hero-glow"></div>
    <div class="container">
      <h1 class="hero-title">Perjalanan Kita</h1>
      <p class="hero-tagline">"Jarak hanyalah sebuah angka, tapi komitmen kita adalah segalanya."</p>
      <div style="margin-top: 2rem;">
        <a href="#story" class="btn btn-primary">Baca Cerita Kita</a>
      </div>
    </div>
  `)}var A={title:`Awal Mula Cerita Kita`,subtitle:`Bagaimana dua orang dari kota yang berbeda menemukan jalan untuk saling melengkapi.`,paragraphs:[`Semua berawal dari sapaan singkat di dunia maya. Kita yang terpisah jarak ratusan kilometer tidak pernah membayangkan bahwa sebuah percakapan kasual akan tumbuh menjadi sesuatu yang begitu berarti. Dari obrolan ringan tentang hobi, bertukar lagu favorit, hingga akhirnya menyadari bahwa kita memiliki frekuensi yang sama.`,`LDR (Long Distance Relationship) bukanlah hal yang mudah. Ada hari-hari di mana rindu terasa sangat berat, dan layar ponsel adalah satu-satunya jembatan penghubung kita. Namun, setiap pesan masuk, setiap panggilan suara di larut malam, dan setiap sesi video call selalu menjadi pengingat mengapa perjuangan ini layak dilakukan.`,`Jarak memang membatasi pertemuan fisik kita, tetapi ia tidak pernah bisa membatasi bagaimana kita tumbuh bersama, mendukung mimpi satu sama lain, dan membangun kepercayaan. Ini adalah kisah tentang kesabaran, komitmen, dan keyakinan bahwa akhir dari perjalanan panjang ini akan sangat indah.`],images:[{url:`https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80`,caption:`Mengirimkan potongan langit malam yang sama meskipun dari kota yang berbeda.`},{url:`https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80`,caption:`Menanti saat di mana kita tidak perlu lagi mengucapkan selamat tinggal di bandara.`}]};function j(e){let t=document.getElementById(e);if(!t)return;t.className=`fade-up`;let n=A.paragraphs.map(e=>`<p class="story-para">${e}</p>`).join(``),r=A.images.map(e=>`
      <div class="story-img-wrapper">
        <img src="${e.url}" alt="${e.caption}" />
        <div class="story-img-caption">${e.caption}</div>
      </div>
    `).join(``);t.innerHTML=`
    <div class="container">
      <h2 class="section-title">${A.title}</h2>
      <p class="section-subtitle">${A.subtitle}</p>
      
      <div class="story-layout glass-card">
        <div class="story-text-container">
          ${n}
        </div>
        <div class="story-media">
          ${r}
        </div>
      </div>
    </div>
  `}var M=[{date:`14 Oktober 2024`,title:`Halo Pertama Kali`,description:`Hari di mana obrolan pertama kita dimulai di media sosial. Dari perkenalan singkat yang tak terduga, melahirkan percakapan panjang tanpa henti.`,image:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80`},{date:`25 Desember 2024`,title:`Panggilan Suara Pertama`,description:`Mendengar suaramu untuk pertama kalinya. Rasa canggung yang berubah menjadi tawa saat kita bercerita tentang hari masing-masing sampai larut malam.`,image:`https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80`},{date:`14 Februari 2025`,title:`Komitmen Bersama`,description:`Meskipun terpisah kota, kita memutuskan untuk melangkah bersama. Memulai perjalanan LDR ini dengan penuh keyakinan dan saling percaya.`,image:`https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80`},{date:`10 April 2025`,title:`Pertemuan Pertama`,description:`Setelah berbulan-bulan hanya menatap layar, akhirnya kita bertemu secara langsung. Detak jantung di stasiun/bandara yang tak akan pernah bisa terlupakan.`,image:`https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80`},{date:`20 Juli 2025`,title:`Liburan Berdua Pertama`,description:`Menghabiskan waktu beberapa hari bersama mengeksplorasi kota baru, membuat memori indah yang akan kita kenang saat jarak kembali memisahkan kita.`,image:`https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80`}];function N(e){let t=document.getElementById(e);t&&(t.className=`fade-up`,t.innerHTML=`
    <div class="container">
      <h2 class="section-title">Linimasa Perjalanan Kita</h2>
      <p class="section-subtitle">Momen-momen penting yang mengukir sejarah kebersamaan kita dari waktu ke waktu.</p>
      
      <div class="timeline-container">
        ${M.map(e=>`
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-content glass-card">
          <div class="timeline-date">${e.date}</div>
          <h3>${e.title}</h3>
          <p class="timeline-desc">${e.description}</p>
          ${e.image?`<img src="${e.image}" alt="${e.title}" class="timeline-img" />`:``}
        </div>
      </div>
    `).join(``)}
      </div>
    </div>
  `)}var P=[{src:`https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Genggaman tangan yang menenangkan segalanya.`},{src:`https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Senja di kotamu, senja di kotaku.`},{src:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Tawa lepas saat video call larut malam.`},{src:`https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Tiket perjalanan yang menyatukan kita.`},{src:`https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Menjelajahi tempat baru bersama.`},{src:`https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Pertemuan hangat di tengah dinginnya rindu.`},{src:`https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Menatap ombak laut yang luas, memikirkanmu.`},{src:`https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?auto=format&fit=crop&w=800&q=80`,type:`photo`,caption:`Menunggu hari di mana tak ada jarak lagi.`}];function F(e){let t=document.getElementById(e);t&&(t.className=`fade-up`,t.innerHTML=`
    <div class="container">
      <h2 class="section-title">Galeri Memori</h2>
      <p class="section-subtitle">Koleksi foto dan potongan cerita visual yang merekam senyuman, tawa, dan kebersamaan kita.</p>
      
      <div class="gallery-grid">
        ${P.map((e,t)=>{let n=``;return t===1||t===6?n=`tall`:(t===3||t===4)&&(n=`wide`),`
        <div class="gallery-item ${n}" data-index="${t}">
          <img src="${e.src}" alt="${e.caption}" loading="lazy" />
          <div class="gallery-overlay">
            <p class="gallery-caption">${e.caption}</p>
          </div>
        </div>
      `}).join(``)}
      </div>
    </div>
  `,t.querySelectorAll(`.gallery-item`).forEach(e=>{e.addEventListener(`click`,()=>{let t=P[e.getAttribute(`data-index`)];window.openLightbox&&window.openLightbox(t.src,t.caption)})}))}var I=[{id:1,date:`14 Februari 2025`,subject:`Tentang Jarak dan Waktu`,content:`Hai sayang, hari ini tepat beberapa bulan sejak kita memutuskan untuk berjuang bersama. Aku tahu, LDR ini tidak mudah. Ada kalanya aku ingin sekali ada di sampingmu saat kamu lelah dengan hari-harimu. Tapi ingatlah, setiap kilometer yang memisahkan kita saat ini sedang menenun cerita indah untuk masa depan kita. Terima kasih telah bertahan dan terus percaya. Aku mencintaimu, selalu.`},{id:2,date:`05 Juni 2025`,subject:`Saat Rindu Terasa Berat`,content:`Malam ini bintang-bintang terlihat sangat terang di langit tempatku berada. Aku memandanginya dan bertanya-tanya, apakah kamu juga sedang menatap langit yang sama? Di saat-saat rindu terasa menyesakkan dada seperti ini, aku selalu memutar kembali rekaman suara dan tawamu di ponselku. Itu sudah cukup untuk membuatku tersenyum kembali. Jaga kesehatanmu di sana ya.`},{id:3,date:`01 Januari 2026`,subject:`Resolusi Tahun Baru Kita`,content:`Selamat Tahun Baru! Tahun ini, impian terbesarku adalah agar kita bisa mengurangi frekuensi ucapan 'sampai jumpa lagi' dan memperbanyak momen kebersamaan yang nyata. Mari kita terus saling menguatkan, merayakan pencapaian-pencapaian kecil, dan terus melangkah menuju mimpi-mimpi besar yang telah kita susun bersama. Aku sangat bersyukur memilikimu di hidupku.`}];function L(e){let t=document.getElementById(e);if(!t)return;t.className=`fade-up`,t.innerHTML=`
    <div class="container">
      <h2 class="section-title">Surat Digital</h2>
      <p class="section-subtitle">Pesan-pesan hangat yang ditulis dari lubuk hati terdalam, dikirim melintasi jarak untuk saling menguatkan.</p>
      
      <div class="letters-grid">
        ${I.map(e=>`
      <div class="letter-envelope-container" data-id="${e.id}">
        <div class="envelope">
          <div class="heart-seal"></div>
          <div class="letter-paper">
            <h4>${e.subject}</h4>
            <div class="letter-date">${e.date}</div>
            <p>${e.content}</p>
          </div>
        </div>
        <div class="letter-label">${e.subject}</div>
      </div>
    `).join(``)}
      </div>
    </div>

    <!-- Letter Detail Modal -->
    <div class="letter-modal" id="letter-modal">
      <div class="letter-modal-content">
        <button class="letter-modal-close" id="letter-modal-close">&times;</button>
        <div class="letter-modal-header">
          <div class="letter-modal-date" id="modal-date"></div>
          <h3 class="letter-modal-title" id="modal-title"></h3>
        </div>
        <div class="letter-modal-body" id="modal-body"></div>
      </div>
    </div>
  `;let n=t.querySelectorAll(`.letter-envelope-container`),r=t.querySelector(`#letter-modal`),i=t.querySelector(`#letter-modal-close`),a=t.querySelector(`#modal-date`),o=t.querySelector(`#modal-title`),s=t.querySelector(`#modal-body`),c=()=>{r.classList.remove(`active`),document.body.style.overflow=``,n.forEach(e=>e.classList.remove(`open`))};i.addEventListener(`click`,c),r.addEventListener(`click`,e=>{e.target===r&&c()}),n.forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=parseInt(e.getAttribute(`data-id`)),r=I.find(e=>e.id===n);if(e.classList.contains(`open`)){l(r);return}e.classList.add(`open`),setTimeout(()=>{l(r)},900)})});function l(e){a.textContent=e.date,o.textContent=e.subject,s.innerHTML=e.content.replace(/\n/g,`<br>`),r.classList.add(`active`),document.body.style.overflow=`hidden`}}function R(e){let t=document.getElementById(e);if(!t)return;t.className=`fade-up`,t.innerHTML=`
    <div class="container">
      <h2 class="section-title">Playlist Favorit Kita</h2>
      <p class="section-subtitle">Kumpulan lagu yang menemani hari-hari kita, mewakili rasa, dan selalu mengingatkan kita satu sama lain.</p>
      
      <div class="playlist-container glass-card" style="margin: 0 auto;">
        <div class="playlist-list">
          ${n.map(e=>`
      <div class="playlist-item" data-id="${e.id}">
        <div class="playlist-info">
          <div class="playlist-icon-container">
            <div class="playlist-icon-circle">
              <!-- Default state icon (Music Note) -->
              <svg class="music-note-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <!-- Playing state equalizer -->
              <div class="equalizer" style="display: none;">
                <span class="eq-bar bar-1"></span>
                <span class="eq-bar bar-2"></span>
                <span class="eq-bar bar-3"></span>
              </div>
            </div>
            <!-- Play hover overlay button -->
            <button class="playlist-play-btn" aria-label="Play song">
              <svg class="item-play-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
              <svg class="item-pause-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
                <rect x="5" y="4" width="4" height="16"></rect>
                <rect x="15" y="4" width="4" height="16"></rect>
              </svg>
            </button>
          </div>
          <div class="playlist-meta">
            <h4>${e.title}</h4>
            <p>${e.artist}</p>
          </div>
        </div>
        
        <div class="playlist-actions">
          ${e.spotifyUrl?`
            <a href="${e.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="playlist-link" title="Buka di Spotify">
              <span>Spotify</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          `:``}
        </div>
      </div>
    `).join(``)}
        </div>
      </div>
    </div>
  `;let r=t.querySelectorAll(`.playlist-item`);r.forEach(e=>{let t=parseInt(e.getAttribute(`data-id`));e.querySelector(`.playlist-play-btn`).addEventListener(`click`,e=>{e.stopPropagation(),C(t)}),e.addEventListener(`click`,()=>{C(t)})}),h(e=>{r.forEach(t=>{let n=parseInt(t.getAttribute(`data-id`)),r=e.activeSong&&e.activeSong!==`bg`&&e.activeSong.id===n,i=r&&e.isPlaying,a=t.querySelector(`.music-note-icon`),o=t.querySelector(`.equalizer`),s=t.querySelector(`.item-play-svg`),c=t.querySelector(`.item-pause-svg`);r?(t.classList.add(`active`),i?(t.classList.add(`playing`),a.style.display=`none`,o.style.display=`flex`,s.style.display=`none`,c.style.display=`block`):(t.classList.remove(`playing`),a.style.display=`block`,o.style.display=`none`,s.style.display=`block`,c.style.display=`none`)):(t.classList.remove(`active`),t.classList.remove(`playing`),a.style.display=`block`,o.style.display=`none`,s.style.display=`block`,c.style.display=`none`)})})}var z=[{icon:`✈️`,title:`Mengakhiri LDR`,description:`Tujuan akhir dan terbesar kita. Berada di satu kota yang sama, menetap di rumah yang hangat, dan tidak perlu lagi menghitung hari untuk berpisah.`},{icon:`🏖️`,title:`Menjelajahi Dunia Bersama`,description:`Mengunjungi destinasi impian kita mulai dari pantai berpasir putih, mendaki gunung, hingga menikmati musim gugur di negeri impian.`},{icon:`🏡`,title:`Membangun Rumah Impian`,description:`Mendesain sudut-sudut rumah impian kita, dengan perpustakaan mini, dapur yang nyaman untuk memasak bersama, dan taman kecil di belakang.`},{icon:`🐈`,title:`Memelihara Kucing Bersama`,description:`Mengadopsi kucing lucu untuk menemani hari-hari kita di rumah baru nanti, memberi mereka nama-nama yang unik dan merawatnya bersama.`},{icon:`🍳`,title:`Kelas Memasak Berdua`,description:`Mengikuti kelas memasak akhir pekan untuk mempelajari hidangan baru, meskipun ujung-ujungnya kita akan menertawakan masakan masing-masing.`},{icon:`📸`,title:`Membuat Scrapbook Fisik`,description:`Mencetak semua foto perjalanan kita dan menempelkannya di album fisik, lengkap dengan tiket pesawat, tiket bioskop, dan catatan kecil kita.`}];function B(e){let t=document.getElementById(e);t&&(t.className=`fade-up`,t.innerHTML=`
    <div class="container">
      <h2 class="section-title">Harapan & Rencana Masa Depan</h2>
      <p class="section-subtitle">Daftar mimpi dan rencana yang ingin kita wujudkan bersama setelah jarak tidak lagi menjadi penghalang.</p>
      
      <div class="dreams-grid">
        ${z.map(e=>`
      <div class="dream-card glass-card">
        <div class="dream-icon">${e.icon}</div>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
      </div>
    `).join(``)}
      </div>
    </div>
  `)}function V(e){let t=document.getElementById(e);t&&(t.className=`fade-up`,t.innerHTML=`
    <div class="hero-glow" style="top: 60%"></div>
    <div class="closing-content">
      <h2 class="closing-quote">
        "Sebab pada akhirnya, rumah bukanlah sebuah tempat, melainkan seseorang. Dan bagiku, rumah itu adalah kamu."
      </h2>
      <p class="closing-author">— Perjalanan Kita</p>
      
      <div style="margin-top: 4rem;">
        <p class="footer-text">Dibuat dengan ❤️ untuk menemani setiap langkah perjalanan LDR kita.</p>
        <p class="footer-text" style="margin-top: 8px;">&copy; ${new Date().getFullYear()} Web Journey LDR. All rights reserved.</p>
      </div>
    </div>
  `)}function H(){let e=document.querySelectorAll(`.fade-up`),t=document.querySelectorAll(`.timeline-item`),n=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{root:null,threshold:.1,rootMargin:`0px 0px -50px 0px`});e.forEach(e=>n.observe(e)),t.forEach(e=>n.observe(e));let r=document.getElementById(`opening`);r&&r.addEventListener(`mousemove`,e=>{if(r.classList.contains(`dismissed`))return;let t=r.querySelector(`.opening-sky`);if(t){let n=(e.clientX-window.innerWidth/2)*-.02,r=(e.clientY-window.innerHeight/2)*-.02;t.style.transform=`translate(${n}px, ${r}px) scale(1.05)`}})}function U(){let e=document.createElement(`div`);e.className=`parallax-bg-container`,e.id=`parallax-bg`,e.innerHTML=`
    <!-- 1. Planet 1 (Neptune-like blue gradient planet) -->
    <div class="parallax-wrapper planet-1" data-depth="0.12" data-speed-y="0.6" data-speed-x="-0.1" data-rotate-speed="0.05">
      <div class="parallax-drift float-drift-1">
        <svg width="90" height="90" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="neptuneGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="45%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#020617" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="url(#neptuneGrad)" opacity="0.65" filter="drop-shadow(0 0 12px rgba(139, 92, 246, 0.3))" />
        </svg>
      </div>
    </div>

    <!-- 2. Planet 2 (Saturn-like ringed planet) -->
    <div class="parallax-wrapper planet-2" data-depth="0.08" data-speed-y="0.3" data-speed-x="0.05" data-rotate-speed="-0.03">
      <div class="parallax-drift float-drift-2">
        <svg width="130" height="90" viewBox="0 0 130 90">
          <defs>
            <radialGradient id="saturnGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#f8fafc" />
              <stop offset="50%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#090d16" />
            </radialGradient>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="rgba(139, 92, 246, 0.4)" />
              <stop offset="50%" stop-color="rgba(56, 189, 248, 0.15)" />
              <stop offset="100%" stop-color="rgba(139, 92, 246, 0.4)" />
            </linearGradient>
          </defs>
          <ellipse cx="65" cy="45" rx="60" ry="12" fill="url(#ringGrad)" transform="rotate(-15 65 45)" opacity="0.55" />
          <circle cx="65" cy="45" r="28" fill="url(#saturnGrad)" opacity="0.7" filter="drop-shadow(0 0 10px rgba(56, 189, 248, 0.2))" />
        </svg>
      </div>
    </div>

    <!-- 3. Rocket (flying space rocket) -->
    <div class="parallax-wrapper rocket-element" data-depth="0.22" data-speed-y="-0.8" data-speed-x="-0.3">
      <div class="parallax-drift float-drift-3">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
          <defs>
            <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#38bdf8" />
            </linearGradient>
          </defs>
          <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" stroke="url(#rocketGrad)" opacity="0.8" />
          <path d="M12 2C8 6 6 12 6 15c0 1.5 1 2.5 2.5 2.5 3 0 9-2 13-6 0-4-3-7-7-9z" fill="url(#rocketGrad)" stroke="#f8fafc" stroke-width="1.5" opacity="0.65" />
          <path d="M9 15l-3 3" stroke="#f8fafc" opacity="0.8" />
          <path d="M15 9l-3 3" stroke="#f8fafc" opacity="0.8" />
          <circle cx="13" cy="8" r="1.5" fill="#020617" stroke="#f8fafc" opacity="0.8" />
        </svg>
      </div>
    </div>

    <!-- 4. Airplane (travel LDR theme paper airplane) -->
    <div class="parallax-wrapper airplane-element" data-depth="0.18" data-speed-y="0.5" data-speed-x="0.4">
      <div class="parallax-drift float-drift-4">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
          <defs>
            <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#8b5cf6" />
            </linearGradient>
          </defs>
          <polygon points="3 11 22 2 13 21 11 13 3 11" fill="url(#planeGrad)" stroke="#f8fafc" stroke-width="1.5" opacity="0.65" />
          <line x1="11" y1="13" x2="22" y2="2" stroke="#f8fafc" opacity="0.8" />
        </svg>
      </div>
    </div>

    <!-- 5. Floating Numbers -->
    <!-- 365 (Days together / in a year) -->
    <div class="parallax-wrapper float-number num-365" data-depth="0.16" data-speed-y="0.7" data-speed-x="-0.15">
      <div class="parallax-drift float-drift-2">365</div>
    </div>

    <!-- 1000 (Kilometers of distance separating them) -->
    <div class="parallax-wrapper float-number num-1000" data-depth="0.1" data-speed-y="0.4" data-speed-x="0.1">
      <div class="parallax-drift float-drift-1">1000</div>
    </div>

    <!-- 24 (Hours a day they think of each other) -->
    <div class="parallax-wrapper float-number num-24" data-depth="0.2" data-speed-y="-0.9" data-speed-x="0.2">
      <div class="parallax-drift float-drift-4">24</div>
    </div>

    <!-- 7 (Days a week of commitment) -->
    <div class="parallax-wrapper float-number num-7" data-depth="0.14" data-speed-y="0.5" data-speed-x="-0.2">
      <div class="parallax-drift float-drift-3">7</div>
    </div>
  `,document.body.prepend(e);let t=e.querySelectorAll(`.parallax-wrapper`),n=!1;function r(){let e=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;t.forEach(t=>{let n=parseFloat(t.getAttribute(`data-depth`)||.1),r=parseFloat(t.getAttribute(`data-speed-y`)||1),i=parseFloat(t.getAttribute(`data-speed-x`)||0),a=parseFloat(t.getAttribute(`data-rotate-speed`)||0),o=e*n*r,s=`translate3d(${e*n*i}px, ${o}px, 0)`;a!==0&&(s+=` rotate(${e*n*a}deg)`),t.style.transform=s}),n=!1}window.addEventListener(`scroll`,()=>{n||=(window.requestAnimationFrame(r),!0)},{passive:!0}),r()}document.addEventListener(`DOMContentLoaded`,()=>{e(),t(),y(),O(`opening-screen`),k(`home`),j(`story`),N(`timeline`),F(`gallery`),L(`letters`),R(`playlist`),B(`dreams`),V(`closing`),H(),U()});