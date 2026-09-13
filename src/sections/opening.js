export function initOpening(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Ensure main site scroll is immediately active
  document.body.style.overflowY = 'auto';
  container.innerHTML = '';
  container.style.display = 'none';
}
