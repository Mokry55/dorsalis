(() => {
  const reviews = Array.from(document.querySelectorAll('.review'));
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (!reviews.length || !prevBtn || !nextBtn) return;

  let current = 0;

  const showReview = (index) => {
    reviews.forEach((review, i) => {
      review.classList.toggle('active', i === index);
    });
  };

  const goTo = (direction) => {
    current = (current + direction + reviews.length) % reviews.length;
    showReview(current);
  };

  prevBtn.addEventListener('click', () => goTo(-1));
  nextBtn.addEventListener('click', () => goTo(1));

  let autoSlide = setInterval(() => goTo(1), 6500);

  const resetTimer = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => goTo(1), 6500);
  };

  [prevBtn, nextBtn].forEach((button) => {
    button.addEventListener('click', resetTimer);
  });
})();
