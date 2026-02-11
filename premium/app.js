(() => {
  const reviews = Array.from(document.querySelectorAll('.review'));
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('#main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (event) => {
      if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (!reviews.length || !prevBtn || !nextBtn) return;

  let current = 0;
  let autoSlide;

  const showReview = (index) => {
    reviews.forEach((review, i) => {
      review.classList.toggle('active', i === index);
    });
  };

  const goTo = (direction) => {
    current = (current + direction + reviews.length) % reviews.length;
    showReview(current);
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(() => goTo(1), 6500);
  };

  const resetTimer = () => {
    clearInterval(autoSlide);
    startAutoSlide();
  };

  prevBtn.addEventListener('click', () => {
    goTo(-1);
    resetTimer();
  });

  nextBtn.addEventListener('click', () => {
    goTo(1);
    resetTimer();
  });

  [prevBtn, nextBtn].forEach((button) => {
    button.addEventListener('mouseenter', () => clearInterval(autoSlide));
    button.addEventListener('mouseleave', startAutoSlide);
  });

  startAutoSlide();
})();
