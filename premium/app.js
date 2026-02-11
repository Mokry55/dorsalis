const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"], .anchor-track a[href^="#"]');
const sections = document.querySelectorAll('main section[id], main [id="kontakt"], main [id="zespol"]');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1020 && mainNav) {
      mainNav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const setActiveLinks = (activeId) => {
  document.querySelectorAll('.main-nav > a:not(.btn), .anchor-track a').forEach((link) => {
    const linkId = link.getAttribute('href')?.slice(1);
    link.classList.toggle('is-active', linkId === activeId);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLinks(entry.target.id);
      }
    });
  },
  {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));

const testimonials = Array.from(document.querySelectorAll('.testimonial'));
const sliderButtons = document.querySelectorAll('.slider-btn');
let currentSlide = 0;
let autoplay;

const showSlide = (index) => {
  if (!testimonials.length) return;
  currentSlide = (index + testimonials.length) % testimonials.length;
  testimonials.forEach((item, i) => {
    item.classList.toggle('active', i === currentSlide);
  });
};

const nextSlide = () => showSlide(currentSlide + 1);

sliderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.dataset.dir;
    showSlide(direction === 'prev' ? currentSlide - 1 : currentSlide + 1);
    restartAutoplay();
  });
});

function startAutoplay() {
  autoplay = setInterval(nextSlide, 6000);
}

function restartAutoplay() {
  clearInterval(autoplay);
  startAutoplay();
}

showSlide(0);
startAutoplay();
