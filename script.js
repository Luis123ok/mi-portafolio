// Menú móvil
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Resalta el link activo según la sección visible
const sections = document.querySelectorAll('main section[id], header[id]');
const links = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));

// Animación de aparición al hacer scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// Botón volver arriba
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 600);
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Lightbox de galería (con navegación entre imágenes)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let galleryItems = [];
let currentIndex = 0;

function refreshGalleryItems() {
  galleryItems = Array.from(document.querySelectorAll('.gallery-item[data-full]'));
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });
}

function openLightbox(index) {
  currentIndex = index;
  const item = galleryItems[currentIndex];
  if (!item) return;
  lightboxImg.src = item.getAttribute('data-full');
  lightboxCaption.textContent = item.getAttribute('data-caption') || '';
  lightbox.classList.add('open');
}

function showRelative(step) {
  if (!galleryItems.length) return;
  currentIndex = (currentIndex + step + galleryItems.length) % galleryItems.length;
  openLightbox(currentIndex);
}

refreshGalleryItems();
lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
lightboxPrev.addEventListener('click', () => showRelative(-1));
lightboxNext.addEventListener('click', () => showRelative(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') lightbox.classList.remove('open');
  if (e.key === 'ArrowRight') showRelative(1);
  if (e.key === 'ArrowLeft') showRelative(-1);
});
