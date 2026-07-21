export function initClosing(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.className = 'fade-up';
  container.innerHTML = `
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
  `;
}
