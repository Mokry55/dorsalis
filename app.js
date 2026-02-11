const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id], header[id]');
const yearNode = document.querySelector('#current-year');

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

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
  document.querySelectorAll('.main-nav > a:not(.btn)').forEach((link) => {
    const linkId = link.getAttribute('href')?.replace('#', '') || 'top';
    link.classList.toggle('is-active', linkId === activeId);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLinks(entry.target.id || 'top');
      }
    });
  },
  {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));
