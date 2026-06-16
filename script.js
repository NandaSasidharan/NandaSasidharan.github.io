/* ============================================================
   NSR Website — Shared JavaScript
   ============================================================ */

// Mark JS as active immediately — enables scroll animations in CSS.
// Without this, .reveal elements default to fully visible (safe fallback).
document.documentElement.classList.add('js-ready');

document.addEventListener('DOMContentLoaded', () => {

  /* ── Theme Toggle ── */
  const root = document.documentElement;
  const stored = localStorage.getItem('nsr-theme') || 'light';
  root.setAttribute('data-theme', stored);
  updateThemeIcons(stored);

  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('nsr-theme', next);
      updateThemeIcons(next);
    });
  });

  function updateThemeIcons(theme) {
    document.querySelectorAll('.theme-icon').forEach(el => {
      el.innerHTML = theme === 'dark'
        ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    });
  }

  /* ── Navbar Scroll ── */
  const nav = document.querySelector('.nav');
  function handleScroll() {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ── Active Nav Link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Mobile Nav ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav?.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileNav?.classList.remove('open');
    });
  });

  /* ── Reveal on Scroll ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  // Fallback for browsers without IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  revealEls.forEach(el => io.observe(el));

  // Immediately reveal anything already in the viewport on page load
  // (observer can miss elements present before it's set up)
  requestAnimationFrame(() => {
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  });

});
