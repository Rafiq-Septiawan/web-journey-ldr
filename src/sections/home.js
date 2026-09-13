import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FALLBACK_ROAD_ROUTE } from '../data/routeData.js';

export function initHome(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  const rafiqSrc = `${cleanBase}images/rafiq.jpg`;
  const dwiSrc = `${cleanBase}images/dwi.jpg`;

  container.className = 'hero-section-wrapper';
  container.innerHTML = `
    <!-- Interactive Map Background (Full Screen) -->
    <div id="hero-map" class="hero-map-bg"></div>

    <!-- Atmospheric Corner Vignette -->
    <div class="hero-cloud-vignette"></div>

    <!-- Map Readability Overlay -->
    <div class="hero-map-overlay"></div>
    <div class="hero-map-overlay-bottom"></div>

    <!-- Star Compass Rose (Top Right) -->
    <div class="hero-compass-rose" title="Kompas Geografis Indonesia">
      <div class="compass-rose-inner">
        <span class="compass-dir compass-n">N</span>
        <span class="compass-dir compass-e">E</span>
        <span class="compass-dir compass-s">S</span>
        <span class="compass-dir compass-w">W</span>
        <svg width="68" height="68" viewBox="0 0 100 100" class="compass-star-svg">
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(56, 189, 248, 0.35)" stroke-width="1" stroke-dasharray="2 3"/>
          <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="0.8"/>
          <polygon points="50,50 46,18 50,8" fill="#38bdf8"/>
          <polygon points="50,50 54,18 50,8" fill="rgba(56, 189, 248, 0.45)"/>
          <polygon points="50,50 46,82 50,92" fill="#94a3b8"/>
          <polygon points="50,50 54,82 50,92" fill="rgba(148, 163, 184, 0.35)"/>
          <polygon points="50,50 82,46 92,50" fill="#94a3b8"/>
          <polygon points="50,50 82,54 92,50" fill="rgba(148, 163, 184, 0.35)"/>
          <polygon points="50,50 18,46 8,50" fill="#94a3b8"/>
          <polygon points="50,50 18,54 8,50" fill="rgba(148, 163, 184, 0.35)"/>
          <polygon points="50,50 71,29 78,22" fill="rgba(56, 189, 248, 0.6)"/>
          <polygon points="50,50 29,29 22,22" fill="rgba(56, 189, 248, 0.6)"/>
          <polygon points="50,50 71,71 78,78" fill="rgba(148, 163, 184, 0.3)"/>
          <polygon points="50,50 29,71 22,78" fill="rgba(148, 163, 184, 0.3)"/>
          <circle cx="50" cy="50" r="4.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>
        </svg>
      </div>
    </div>

    <!-- Floating Vertical Hero Card (Left Side) -->
    <div class="hero-float-card" id="hero-float-card">

      <!-- 1. Badge -->
      <div class="hfc-badge">
        <span class="hfc-badge-dot">✦</span>
        <span class="hfc-badge-text">DUA KOTA, SATU CERITA</span>
      </div>

      <!-- 2. Judul -->
      <h1 class="hfc-title">
        WEB JOURNEY <span class="hfc-title-ldr">LDR</span>
      </h1>

      <!-- 3. Deskripsi -->
      <p class="hfc-desc">
        Merawat hubungan jarak jauh antara dua kota—merekam cerita, momen, dan komunikasi yang menghubungkan ruang dan rasa.
      </p>

      <!-- Divider tipis -->
      <div class="hfc-divider"></div>

      <!-- 4. Dua Profil Berdampingan -->
      <div class="hfc-profiles">

        <!-- Profil Rafiq -->
        <div class="hfc-profile hfc-profile-cyan">
          <div class="hfc-avatar hfc-avatar-cyan">
            <img
              src="${rafiqSrc}"
              alt="Rafiq Septiawan"
              class="hfc-avatar-photo"
              onerror="if(!this.dataset.triedRel){this.dataset.triedRel='1';this.src='images/rafiq.jpg';}else{this.style.display='none';this.nextElementSibling.style.display='flex';}"
            />
            <span class="hfc-avatar-fallback" style="display:none;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </span>
          </div>
          <div class="hfc-profile-info">
            <span class="hfc-profile-loc hfc-loc-cyan">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              TANGERANG
            </span>
            <span class="hfc-profile-name">Rafiq Septiawan</span>
          </div>
        </div>

        <!-- Profil Dwi -->
        <div class="hfc-profile hfc-profile-pink">
          <div class="hfc-avatar hfc-avatar-pink">
            <img
              src="${dwiSrc}"
              alt="Dwi Mulya"
              class="hfc-avatar-photo"
              onerror="if(!this.dataset.triedRel){this.dataset.triedRel='1';this.src='images/dwi.jpg';}else{this.style.display='none';this.nextElementSibling.style.display='flex';}"
            />
            <span class="hfc-avatar-fallback" style="display:none;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </span>
          </div>
          <div class="hfc-profile-info">
            <span class="hfc-profile-loc hfc-loc-pink">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              PASAMAN BARAT
            </span>
            <span class="hfc-profile-name">Dwi Mulya</span>
          </div>
        </div>

      </div>

      <!-- 5. Keterangan Metadata Stats Bar -->
      <div class="hfc-stats-bar">
        <div class="hfc-stat-item">
          <span class="hfc-stat-label">JARAK</span>
          <span class="hfc-stat-val">±1.035 KM</span>
        </div>
        <div class="hfc-stat-divider"></div>
        <div class="hfc-stat-item">
          <span class="hfc-stat-label">TERHUBUNG MELALUI</span>
          <span class="hfc-stat-val">Chat & Call</span>
        </div>
        <div class="hfc-stat-divider"></div>
        <div class="hfc-stat-item">
          <span class="hfc-stat-label">EST. PERJALANAN</span>
          <span class="hfc-stat-val">±36 Jam</span>
        </div>
      </div>

      <!-- 6. Dua Tombol -->
      <div class="hfc-buttons">
        <a href="#journey" class="hfc-btn hfc-btn-primary" id="hero-explore-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
          <span>Jelajahi</span>
        </a>
        <a href="#profile" class="hfc-btn hfc-btn-secondary">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Profil</span>
        </a>
      </div>

    </div>
  `;

  // Attach journeyStarted event on Explore button click
  const exploreBtn = container.querySelector('#hero-explore-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('journeyStarted'));
    });
  }

  // Initialize Leaflet Map safely after DOM rendering
  setTimeout(() => {
    initLeafletHeroMap(rafiqSrc, dwiSrc);
  }, 100);
}

let heroMapInstance = null;
let avatarAnimFrameId = null;

function initLeafletHeroMap(rafiqSrc, dwiSrc) {
  const mapElement = document.getElementById('hero-map');
  if (!mapElement) return;

  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  if (!rafiqSrc) rafiqSrc = `${cleanBase}images/rafiq.jpg`;
  if (!dwiSrc) dwiSrc = `${cleanBase}images/dwi.jpg`;

  // Clean up any pre-existing Leaflet map instance
  if (heroMapInstance) {
    try {
      heroMapInstance.remove();
    } catch (e) {
      console.warn('Map cleanup warning:', e);
    }
    heroMapInstance = null;
  }

  mapElement.innerHTML = '';
  if (mapElement._leaflet_id) {
    mapElement._leaflet_id = null;
  }

  // Stop any previous animation frame
  if (avatarAnimFrameId) {
    cancelAnimationFrame(avatarAnimFrameId);
    avatarAnimFrameId = null;
  }

  // MANDATORY EXACT COORDINATES
  const tangerang = [-6.2212966, 106.6773168];
  const pasamanBarat = [0.0505362, 99.7887878];

  // Initialize Leaflet Map Engine
  const map = L.map('hero-map', {
    zoomControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    touchZoom: false,
    keyboard: false,
    attributionControl: false,
    zoomSnap: 0.05,
    zoomDelta: 0.2
  });

  heroMapInstance = map;

  // Helper to dynamically fit the map to the route, reserving real space for the
  // floating card so the route + labels never sit underneath it — measured live
  // from the card's actual rendered width instead of guessed per-breakpoint values.
  const applyResponsiveMapView = () => {
    if (!heroMapInstance) return;
    const w = window.innerWidth;
    const isMobile = w <= 768;

    if (isMobile) {
      // Mobile: zoom out map view with maxZoom 5.0 and ample padding so both Pasaman Barat & Tangerang points & labels fit comfortably
      heroMapInstance.fitBounds([tangerang, pasamanBarat], {
        paddingTopLeft: [70, 45],
        paddingBottomRight: [80, 45],
        maxZoom: 5.0
      });
      return;
    }

    // Desktop: vertical card is on the left side (~440px wide + 24px margin)
    // Reserve left padding so route is centered in the remaining right space
    // Extra bottom padding shifts the view up so Tangerang stays in the centre-right area
    const cardEl = document.querySelector('.hero-float-card');
    const cardRect = cardEl ? cardEl.getBoundingClientRect() : null;
    const leftReserve = cardRect ? (cardRect.right - 80) : 360;

    heroMapInstance.fitBounds([tangerang, pasamanBarat], {
      paddingTopLeft: [leftReserve, 80],
      paddingBottomRight: [60, 160],
      maxZoom: 6.2
    });
  };

  applyResponsiveMapView();


  // 1. Esri World Imagery (Realistic Dark Satellite Map Tile Layer)
  const satelliteTiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 18,
    attribution: 'Tiles &copy; Esri'
  }).addTo(map);

  // Fallback tile layer if satellite tile fails
  satelliteTiles.on('tileerror', () => {
    if (!map._hasFallbackTiles) {
      map._hasFallbackTiles = true;
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
        subdomains: 'abcd'
      }).addTo(map);
    }
  });

  // 2. Draw Latitude & Longitude Grid Lines
  drawGeoGrid(map);

  // 3. Draw Geography Labels (Aceh, Sumatera, Jawa, Kalimantan, Oceans)
  drawGeoLabels(map);

  // 4. Custom Pure Text Label Tangerang — NO pin, dot, circle, ripple, ring, or marker icon
  const tangerangIcon = L.divIcon({
    className: 'custom-map-text-marker marker-tangerang-wrapper',
    html: `
      <div class="map-text-label label-tangerang">
        <span class="label-text">TANGERANG, BANTEN</span>
      </div>
    `,
    iconSize: [160, 28],
    iconAnchor: [80, 14]
  });

  // 5. Custom Pure Text Label Pasaman Barat — NO pin, dot, circle, ripple, ring, or marker icon
  const pasamanIcon = L.divIcon({
    className: 'custom-map-text-marker marker-pasaman-wrapper',
    html: `
      <div class="map-text-label label-pasaman">
        <span class="label-text">PASAMAN BARAT, SUMATERA BARAT</span>
      </div>
    `,
    iconSize: [230, 28],
    iconAnchor: [115, 14]
  });

  // Add Pure Text Location Labels to Map
  L.marker(tangerang, { icon: tangerangIcon }).addTo(map);
  L.marker(pasamanBarat, { icon: pasamanIcon }).addTo(map);

  // 6. Draw Realistic Land Route (Tangerang <-> Pasaman Barat)
  let activeRoadPoints = [...FALLBACK_ROAD_ROUTE];
  let cumDistances = computeCumulativeDistances(activeRoadPoints);

  // Background Base Route Line
  const outerLine = L.polyline(activeRoadPoints, {
    color: '#1e293b',
    weight: 4.5,
    opacity: 0.5,
    smoothFactor: 1
  }).addTo(map);

  // Background Dashed Line
  const innerLine = L.polyline(activeRoadPoints, {
    color: 'rgba(255, 255, 255, 0.25)',
    weight: 2,
    dashArray: '5, 8',
    smoothFactor: 1
  }).addTo(map);

  // Dynamic Traveled Path Highlight for Rafiq (Glowing Cyan)
  const rafiqPathLine = L.polyline([], {
    color: '#38bdf8',
    weight: 4.5,
    opacity: 0.9,
    smoothFactor: 1
  }).addTo(map);

  // Dynamic Traveled Path Highlight for Dwi (Glowing Pink)
  const dwiPathLine = L.polyline([], {
    color: '#ec4899',
    weight: 4.5,
    opacity: 0.9,
    smoothFactor: 1
  }).addTo(map);

  // 7. Face Photo Avatar Markers & Romantic Heart Popup
  const rafiqIcon = L.divIcon({
    className: 'custom-avatar-marker rafiq-avatar-marker',
    html: `
      <div class="avatar-marker-wrapper rafiq-avatar-wrapper">
        <div class="avatar-glow-ring rafiq-glow"></div>
        <img src="${rafiqSrc}" alt="Rafiq Septiawan" class="avatar-img rafiq-img" onerror="if(!this.dataset.triedRel){this.dataset.triedRel='1';this.src='images/rafiq.jpg';}" />
        <div class="avatar-name-badge rafiq-badge">Rafiq</div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  const dwiIcon = L.divIcon({
    className: 'custom-avatar-marker dwi-avatar-marker',
    html: `
      <div class="avatar-marker-wrapper dwi-avatar-wrapper">
        <div class="avatar-glow-ring dwi-glow"></div>
        <img src="${dwiSrc}" alt="Dwi Mulya" class="avatar-img dwi-img" onerror="if(!this.dataset.triedRel){this.dataset.triedRel='1';this.src='images/dwi.jpg';}" />
        <div class="avatar-name-badge dwi-badge">Dwi</div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });

  const heartIcon = L.divIcon({
    className: 'heart-meeting-marker',
    html: `
      <div class="heart-meeting-popup" style="opacity: 0; transform: translateY(-28px) scale(0.5);">
        <div class="heart-pulse-glow"></div>
        <div class="heart-emoji">💖</div>
      </div>
    `,
    iconSize: [44, 44],
    iconAnchor: [22, 22]
  });

  const heartMarker = L.marker(tangerang, { icon: heartIcon, zIndexOffset: 2000 }).addTo(map);
  const rafiqMarker = L.marker(tangerang, { icon: rafiqIcon, zIndexOffset: 1000 }).addTo(map);
  const dwiMarker = L.marker(pasamanBarat, { icon: dwiIcon, zIndexOffset: 1001 }).addTo(map);

  // Animate avatars along the road polyline towards midpoint
  animateAvatarsAlongRoute(
    rafiqMarker,
    dwiMarker,
    heartMarker,
    rafiqPathLine,
    dwiPathLine,
    () => cumDistances,
    () => activeRoadPoints
  );

  // Asynchronously fetch full detailed driving route from OSRM API
  fetchOSRMRoute(tangerang, pasamanBarat).then(newPoints => {
    if (newPoints && newPoints.length > 0) {
      activeRoadPoints = newPoints;
      cumDistances = computeCumulativeDistances(activeRoadPoints);
      outerLine.setLatLngs(activeRoadPoints);
      innerLine.setLatLngs(activeRoadPoints);
    }
  }).catch(err => {
    console.log('Using fallback road route polyline:', err);
  });

  // Auto handle resize — invalidate size and refit the route to the (re-measured) card
  const triggerResize = () => {
    if (!heroMapInstance) return;
    heroMapInstance.invalidateSize();
    applyResponsiveMapView();
  };

  window.addEventListener('resize', triggerResize);

  setTimeout(triggerResize, 50);
  setTimeout(triggerResize, 200);
  setTimeout(triggerResize, 500);

}

// Draw Latitude & Longitude Grid Lines over Indonesia Map
function drawGeoGrid(map) {
  const gridGroup = L.layerGroup().addTo(map);

  const lats = [
    { lat: 5.0, label: '5°N' },
    { lat: 0.0, label: '0°' },
    { lat: -5.0, label: '5°S' },
    { lat: -10.0, label: '10°S' }
  ];

  lats.forEach(item => {
    L.polyline([[item.lat, 92.0], [item.lat, 142.0]], {
      color: 'rgba(56, 189, 248, 0.18)',
      weight: 1,
      dashArray: '3, 7',
      interactive: false
    }).addTo(gridGroup);

    L.marker([item.lat, 93.5], {
      icon: L.divIcon({
        className: 'grid-latlng-label',
        html: `<span>${item.label}</span>`,
        iconSize: [60, 16]
      }),
      interactive: false
    }).addTo(gridGroup);
  });

  const lngs = [
    { lng: 95.0, label: '95°E' },
    { lng: 100.0, label: '100°E' },
    { lng: 105.0, label: '105°E' },
    { lng: 110.0, label: '110°E' },
    { lng: 115.0, label: '115°E' },
    { lng: 120.0, label: '120°E' },
    { lng: 125.0, label: '125°E' },
    { lng: 130.0, label: '130°E' },
    { lng: 135.0, label: '135°E' },
    { lng: 140.0, label: '140°E' }
  ];

  lngs.forEach(item => {
    L.polyline([[7.0, item.lng], [-12.0, item.lng]], {
      color: 'rgba(56, 189, 248, 0.18)',
      weight: 1,
      dashArray: '3, 7',
      interactive: false
    }).addTo(gridGroup);

    L.marker([6.2, item.lng], {
      icon: L.divIcon({
        className: 'grid-latlng-label',
        html: `<span>${item.label}</span>`,
        iconSize: [60, 16]
      }),
      interactive: false
    }).addTo(gridGroup);
  });
}

// Draw Island & Sea Geography Labels
function drawGeoLabels(map) {
  const geoLabels = [
    // Major Islands
    { name: 'ACEH', pos: [4.2, 96.5], type: 'island' },
    { name: 'SUMATERA', pos: [-1.5, 101.8], type: 'island' },
    { name: 'JAWA', pos: [-7.5, 110.2], type: 'island' },
    { name: 'KALIMANTAN', pos: [-0.8, 113.8], type: 'island' },
    { name: 'SULAWESI', pos: [-1.8, 120.5], type: 'island' },
    { name: 'MALUKU', pos: [-3.2, 128.2], type: 'island' },
    { name: 'NUSA TENGGARA', pos: [-8.8, 118.5], type: 'island' },
    { name: 'PAPUA', pos: [-4.5, 136.5], type: 'island' },
    // Seas & Oceans
    { name: 'LAUT NATUNA UTARA', pos: [3.2, 107.5], type: 'ocean' },
    { name: 'SAMUDRA HINDIA', pos: [-9.5, 96.2], type: 'ocean' },
    { name: 'LAUT JAWA', pos: [-4.8, 111.5], type: 'sea' },
    { name: 'LAUT BANDA', pos: [-5.5, 127.0], type: 'sea' },
    { name: 'SELAT SUNDA', pos: [-5.9, 105.7], type: 'strait' }
  ];

  geoLabels.forEach(label => {
    L.marker(label.pos, {
      icon: L.divIcon({
        className: `geo-map-label label-${label.type}`,
        html: `<span>${label.name}</span>`,
        iconSize: [180, 20],
        iconAnchor: [90, 10]
      }),
      interactive: false
    }).addTo(map);
  });
}

// Calculate distance between two points in KM (Haversine Formula)
function getDistanceKm(p1, p2) {
  const R = 6371;
  const dLat = ((p2[0] - p1[0]) * Math.PI) / 180;
  const dLng = ((p2[1] - p1[1]) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((p1[0] * Math.PI) / 180) *
      Math.cos((p2[0] * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Pre-calculate cumulative distances array along polyline
function computeCumulativeDistances(points) {
  const cumDist = [0];
  for (let i = 0; i < points.length - 1; i++) {
    const d = getDistanceKm(points[i], points[i + 1]);
    cumDist.push(cumDist[i] + d);
  }
  return cumDist;
}

// Interpolate Lat/Lng coordinate at target distance along polyline
function getPositionAtDistance(cumDist, points, targetDist) {
  const totalDist = cumDist[cumDist.length - 1];
  if (targetDist <= 0) return points[0];
  if (targetDist >= totalDist) return points[points.length - 1];

  let low = 0;
  let high = cumDist.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (cumDist[mid] < targetDist) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  const idx = Math.max(0, low - 1);
  const nextIdx = Math.min(idx + 1, points.length - 1);
  const segLength = cumDist[nextIdx] - cumDist[idx];
  if (segLength <= 0) return points[idx];

  const ratio = (targetDist - cumDist[idx]) / segLength;
  const lat = points[idx][0] + (points[nextIdx][0] - points[idx][0]) * ratio;
  const lng = points[idx][1] + (points[nextIdx][1] - points[idx][1]) * ratio;
  return [lat, lng];
}

// Slice points array between startDist and endDist for highlighted active path
function getSubPoints(cumDist, points, startDist, endDist) {
  if (startDist > endDist) {
    const temp = startDist;
    startDist = endDist;
    endDist = temp;
  }
  const sub = [];
  sub.push(getPositionAtDistance(cumDist, points, startDist));

  for (let i = 0; i < points.length; i++) {
    if (cumDist[i] > startDist && cumDist[i] < endDist) {
      sub.push(points[i]);
    }
  }

  sub.push(getPositionAtDistance(cumDist, points, endDist));
  return sub;
}

// Fetch OSRM driving route polyline
async function fetchOSRMRoute(start, end) {
  const url = `https://router.project-osrm.org/route/v1/driving/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`OSRM status ${res.status}`);
  const data = await res.json();
  if (data.code === 'Ok' && data.routes && data.routes[0]) {
    return data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
  }
  throw new Error('OSRM route data invalid');
}

// Animate both face photo avatars moving towards midpoint, meeting with heart popup, fade-out & loop
function animateAvatarsAlongRoute(
  rafiqMarker,
  dwiMarker,
  heartMarker,
  rafiqPathLine,
  dwiPathLine,
  getCumDist,
  getPoints
) {
  let startTime = null;

  const travelDuration = 12000;  // 12 seconds traveling to midpoint
  const meetingDuration = 2500;  // 2.5 seconds reunion at midpoint with heart effect
  const fadeOutDuration = 1000;  // 1 second fade out at midpoint
  const resetDuration = 500;     // 0.5 second reset to origins
  const totalCycle = travelDuration + meetingDuration + fadeOutDuration + resetDuration;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const cycleElapsed = elapsed % totalCycle;

    const cumDist = getCumDist();
    const points = getPoints();
    const totalDist = cumDist[cumDist.length - 1];
    const midDist = totalDist / 2;
    const midPos = getPositionAtDistance(cumDist, points, midDist);

    const rafiqEl = rafiqMarker.getElement();
    const dwiEl = dwiMarker.getElement();
    const heartEl = heartMarker.getElement();

    let rafiqWrapper = rafiqEl ? rafiqEl.querySelector('.rafiq-avatar-wrapper') : null;
    let dwiWrapper = dwiEl ? dwiEl.querySelector('.dwi-avatar-wrapper') : null;
    let heartPopup = heartEl ? heartEl.querySelector('.heart-meeting-popup') : null;

    if (cycleElapsed < travelDuration) {
      // PHASE 1: BOTH AVATARS TRAVELING TOWARDS MIDPOINT
      const progress = cycleElapsed / travelDuration;
      const easedT = 0.5 - 0.5 * Math.cos(progress * Math.PI);

      const rafiqDist = easedT * midDist;
      const dwiDist = totalDist - (easedT * (totalDist - midDist));

      const rafiqPos = getPositionAtDistance(cumDist, points, rafiqDist);
      const dwiPos = getPositionAtDistance(cumDist, points, dwiDist);

      rafiqMarker.setLatLng(rafiqPos);
      dwiMarker.setLatLng(dwiPos);

      // Reset normal avatar transform & opacity
      if (rafiqWrapper) {
        rafiqWrapper.style.transform = 'scale(1)';
        rafiqWrapper.style.opacity = '1';
      }
      if (dwiWrapper) {
        dwiWrapper.style.transform = 'scale(1)';
        dwiWrapper.style.opacity = '1';
      }
      if (heartPopup) {
        heartPopup.style.opacity = '0';
        heartPopup.style.transform = 'translateY(-28px) scale(0.5)';
      }

      // Highlight active traveled road paths behind each avatar
      rafiqPathLine.setLatLngs(getSubPoints(cumDist, points, 0, rafiqDist));
      dwiPathLine.setLatLngs(getSubPoints(cumDist, points, dwiDist, totalDist));

      rafiqPathLine.setStyle({ opacity: 0.9 });
      dwiPathLine.setStyle({ opacity: 0.9 });

    } else if (cycleElapsed < travelDuration + meetingDuration) {
      // PHASE 2: REUNION AT MIDPOINT (OVERLAP & HEART PULSE POPUP)
      rafiqMarker.setLatLng(midPos);
      dwiMarker.setLatLng(midPos);
      heartMarker.setLatLng(midPos);

      if (rafiqWrapper) {
        rafiqWrapper.style.transform = 'translate(-10px, -4px) scale(1.3)';
        rafiqWrapper.style.opacity = '1';
      }
      if (dwiWrapper) {
        dwiWrapper.style.transform = 'translate(10px, 4px) scale(1.3)';
        dwiWrapper.style.opacity = '1';
      }
      if (heartPopup) {
        heartPopup.style.opacity = '1';
        heartPopup.style.transform = 'translateY(-28px) scale(1.2)';
      }

      rafiqPathLine.setLatLngs(getSubPoints(cumDist, points, 0, midDist));
      dwiPathLine.setLatLngs(getSubPoints(cumDist, points, midDist, totalDist));

      rafiqPathLine.setStyle({ opacity: 0.95 });
      dwiPathLine.setStyle({ opacity: 0.95 });

    } else if (cycleElapsed < travelDuration + meetingDuration + fadeOutDuration) {
      // PHASE 3: FADE OUT AT MIDPOINT
      const fadeProgress = (cycleElapsed - (travelDuration + meetingDuration)) / fadeOutDuration;
      const opacity = 1 - fadeProgress;

      if (rafiqWrapper) rafiqWrapper.style.opacity = opacity.toString();
      if (dwiWrapper) dwiWrapper.style.opacity = opacity.toString();
      if (heartPopup) heartPopup.style.opacity = opacity.toString();

      rafiqPathLine.setStyle({ opacity: 0.9 * opacity });
      dwiPathLine.setStyle({ opacity: 0.9 * opacity });

    } else {
      // PHASE 4: RESET TO ORIGIN CITIES
      const startPosRafiq = points[0];
      const startPosDwi = points[points.length - 1];

      rafiqMarker.setLatLng(startPosRafiq);
      dwiMarker.setLatLng(startPosDwi);

      rafiqPathLine.setLatLngs([]);
      dwiPathLine.setLatLngs([]);

      if (rafiqWrapper) {
        rafiqWrapper.style.transform = 'scale(1)';
        rafiqWrapper.style.opacity = '0';
      }
      if (dwiWrapper) {
        dwiWrapper.style.transform = 'scale(1)';
        dwiWrapper.style.opacity = '0';
      }
      if (heartPopup) heartPopup.style.opacity = '0';
    }

    avatarAnimFrameId = requestAnimationFrame(step);
  }

  avatarAnimFrameId = requestAnimationFrame(step);
}