// ── CURSOR ──
const cursor = document.getElementById('cursor');
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = -100, my = -100, rx = -100, ry = -100;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animCursor() {
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a,button,[class*="card"],[class*="pill"],[class*="btn"]').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// ── NAV SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── TYPING ANIMATION ──
const phrases = ['clean interfaces.', 'responsive websites.', 'UI/UX experiences.', 'modern web apps.', 'pixel-perfect layouts.'];
let pi = 0, ci = 0, deleting = false;
const typingEl = document.getElementById('typingEl');
function type() {
  const phrase = phrases[pi];
  typingEl.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
  if (!deleting && ci > phrase.length) { deleting = true; return setTimeout(type, 1400); }
  if (deleting && ci < 0) { deleting = false; pi = (pi + 1) % phrases.length; ci = 0; return setTimeout(type, 500); }
  setTimeout(type, deleting ? 50 : 80);
}
setTimeout(type, 1200);

// ── SKILL BARS ──
function animateBars() {
  document.querySelectorAll('.skill-fill').forEach(bar => {
    const rect = bar.closest('.skill-bar-item').getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && !bar.dataset.animated) {
      bar.dataset.animated = '1';
      bar.style.width = bar.dataset.width + '%';
    }
  });
}
window.addEventListener('scroll', animateBars);
animateBars();

// ── SMOOTH ANCHOR SCROLLING ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── PARALLAX BLOBS ──
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelector('.blob-1').style.transform = `translate(${y*0.04}px,${y*-0.02}px) scale(1)`;
  document.querySelector('.blob-2').style.transform = `translate(${y*-0.03}px,${y*0.02}px) scale(1)`;
});

// ── FORM SUBMIT ──
function handleSubmit(e, btn) {

  e.preventDefault();

  const orig = btn.querySelector('span').textContent;

  btn.querySelector('span').textContent = 'Sending...';

  btn.style.opacity = '0.7';

  setTimeout(() => {

    btn.querySelector('span').textContent = '✓ Message Sent!';

    btn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';

    setTimeout(() => {

      btn.closest("form").submit();

    }, 2000);

  }, 1000);
}

// ── COUNTER ANIMATION ──
function animCounter(el, target) {
  let current = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + (el.dataset.suffix || '');
    if (current >= target) clearInterval(timer);
  }, 40);
}

// Observe stat numbers
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(el => {
        const match = el.textContent.match(/\d+/);
        if (match) {
          const suffix = el.textContent.replace(match[0], '').trim();
          el.dataset.suffix = suffix;
          animCounter(el, parseInt(match[0]));
        }
      });
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
const statsEl = document.querySelector('.about-stats');
if (statsEl) observer.observe(statsEl);