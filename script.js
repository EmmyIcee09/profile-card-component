// script.js - spec-compliant, vanilla JS
document.addEventListener("DOMContentLoaded", () => {
  // Required time element (milliseconds)
  const timeEl = document.querySelector('[data-testid="test-user-time"]');

  function renderMillis() {
    if (timeEl) timeEl.textContent = Date.now();
  }

  // initial render + interval (reasonable update tick)
  renderMillis();
  setInterval(renderMillis, 1000);

  // Ensure social links open safe new tabs
  const socialContainer = document.querySelector('[data-testid="test-user-social-links"]');
  if (socialContainer) {
    const links = socialContainer.querySelectorAll('a');
    links.forEach(a => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });
  }

  // THEME TOGGLE (light/dark) - accessible
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Apply persisted theme if available
  const stored = localStorage.getItem('pf_theme');
  if (stored === 'dark') document.documentElement.classList.add('dark');

  // Update button aria-pressed state based on current theme
  function updateToggleState() {
    const isDark = document.documentElement.classList.contains('dark');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      themeToggle.textContent = isDark ? '☀️' : '🌙';
      themeToggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }
  updateToggleState();

  // Toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const dark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('pf_theme', dark ? 'dark' : 'light');
      updateToggleState();
    });

    // allow keyboard toggling via Enter / Space
    themeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.click();
      }
    });
  }
});
