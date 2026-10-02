/**
 * [Store Name] Footwear Studio - Interactive Scripts
 * Handles mobile drawer navigation, active link highlighting, and automatic year updating.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileDrawer.classList.toggle('active');
    });

    // Close mobile menu on clicking any link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // 2. Dynamic Copyright Year
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Smooth Header Elevation on Scroll
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
      siteHeader.style.boxShadow = 'none';
    }
  });

  // 4. Console Verification Message
  console.log(
    "%c[Store Name] Footwear Studio Website loaded successfully.",
    "color: #D97706; font-weight: bold; font-size: 14px;"
  );
});
