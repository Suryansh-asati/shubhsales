// NAVIGATION
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navToggle.classList.toggle('active');
  navList?.classList.toggle('open');
});
navList?.addEventListener('click', e => {
  if (e.target.closest('a')) {
    navToggle?.classList.remove('active');
    navList.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

// SCROLL TOP
const scrollBtn = document.querySelector('.scroll-top');
const toggleScrollBtn = () => {
  if (window.scrollY > 600) scrollBtn?.classList.add('visible');
  else scrollBtn?.classList.remove('visible');
};
window.addEventListener('scroll', toggleScrollBtn);
scrollBtn?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
toggleScrollBtn();

// HERO SLIDER (simple manual slider with auto play)
const slider = document.querySelector('[data-slider]');
if (slider) {
  const slides = Array.from(slider.children);
  const dotsWrap = document.querySelector('[data-dots]');
  let current = 0;
  const createDots = () => {
    slides.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', `Go to slide ${i+1}`);
      if (i === 0) btn.setAttribute('aria-current', 'true');
      btn.addEventListener('click', () => goTo(i, true));
      dotsWrap?.appendChild(btn);
    });
  };
  const updateDots = () => {
    dotsWrap?.querySelectorAll('button').forEach((b,i)=>{
      if (i===current) b.setAttribute('aria-current','true'); else b.removeAttribute('aria-current');
    });
  };
  const goTo = (index, user=false) => {
    slides[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    updateDots();
    if (user) lastInteraction = Date.now();
  };
  createDots();
  let lastInteraction = Date.now();
  let auto = setInterval(()=>{ if (Date.now()-lastInteraction>4000) goTo(current+1); }, 3800);
  // Pause on hover
  slider.addEventListener('mouseenter', ()=> lastInteraction = Date.now());
}

// INTERSECTION OBSERVER for fade-in
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
},{ threshold:0.15 });
document.querySelectorAll('.section, .product, .tile, .insta__item, .collection-card').forEach(el => {
  el.classList.add('fade-in');
  io.observe(el);
});

// NEWSLETTER (simple demo handler)
document.querySelector('.newsletter__form')?.addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target.querySelector('input[type=email]');
  if (input?.value) {
    alert('Thank you for subscribing, ' + input.value + '!');
    input.value='';
  }
});

// YEAR
document.getElementById('year')?.append(new Date().getFullYear());
