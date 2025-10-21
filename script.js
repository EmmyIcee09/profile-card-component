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

  // PAGE NAVIGATION
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');

  function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
      page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
    }

    // Update active nav link
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      }
    });

    // Update URL hash
    window.location.hash = pageId;
  }

  // Add click event listeners to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      showPage(pageId);
    });
  });

  // Handle initial page load with hash
  const initialPage = window.location.hash.substring(1) || 'home';
  showPage(initialPage);

  // CONTACT FORM VALIDATION
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    // Real-time validation
    inputs.forEach(input => {
      input.addEventListener('blur', validateField);
      input.addEventListener('input', clearError);
    });

    // Form submission
    contactForm.addEventListener('submit', handleFormSubmit);
  }

  function validateField(e) {
    const field = e.target;
    const errorElement = document.getElementById(`${field.id}-error`);
    
    // Clear previous error
    clearErrorForField(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !field.value.trim()) {
      showError(field, `${field.labels[0].textContent} is required`);
      return false;
    }

    // Email validation
    if (field.type === 'email' && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        showError(field, 'Please enter a valid email address');
        return false;
      }
    }

    // Message length validation
    if (field.name === 'message' && field.value.trim().length < 10) {
      showError(field, 'Message must be at least 10 characters long');
      return false;
    }

    return true;
  }

  function showError(field, message) {
    const errorElement = document.getElementById(`${field.id}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      field.setAttribute('aria-invalid', 'true');
    }
  }

  function clearError(e) {
    const field = e.target;
    clearErrorForField(field);
  }

  function clearErrorForField(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    if (errorElement) {
      errorElement.textContent = '';
      field.setAttribute('aria-invalid', 'false');
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    // Validate all fields
    inputs.forEach(input => {
      const event = new Event('blur');
      input.dispatchEvent(event);
      if (input.getAttribute('aria-invalid') === 'true') {
        isValid = false;
      }
    });

    if (isValid) {
      // Show success message
      successMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
      successMessage.classList.add('show');
      
      // Reset form
      form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
    }
  }

  // Keyboard navigation for entire app
  document.addEventListener('keydown', (e) => {
    // Tab key navigation
    if (e.key === 'Tab') {
      document.documentElement.classList.add('keyboard-navigation');
    }
  });

  document.addEventListener('mousedown', () => {
    document.documentElement.classList.remove('keyboard-navigation');
  });
});