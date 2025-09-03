// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  document.body.classList.toggle('nav-open');
});

// Close nav when clicking a link (mobile)
navLinks?.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    navToggle?.classList.remove('active');
    navLinks.classList.remove('open');
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

// Scroll top button
const scrollBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn?.classList.add('visible');
  } else {
    scrollBtn?.classList.remove('visible');
  }
});
scrollBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .product-card, .reason').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Accessible keyboard card hover mimic
function attachCardListeners(selector) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('focus', () => card.classList.add('hover'));
    card.addEventListener('blur', () => card.classList.remove('hover'));
  });
}
attachCardListeners('.product-card');
attachCardListeners('.reason');
