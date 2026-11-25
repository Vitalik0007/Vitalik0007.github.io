// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Project category filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0) {
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach((card) => {
        const categories = (card.dataset.category || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Project detail page slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');

if (slides.length > 0) {
  let currentSlide = 0;
  let autoplayTimer = null;

  const updateSlider = (index) => {
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }
  };

  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        updateSlider(i);
        resetAutoplay();
      });
      dotsContainer.appendChild(dot);
    });
  }

  window.nextSlide = () => {
    updateSlider(currentSlide + 1);
    resetAutoplay();
  };

  window.prevSlide = () => {
    updateSlider(currentSlide - 1);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    clearInterval(autoplayTimer);
    if (slides.length > 1) {
      autoplayTimer = setInterval(() => updateSlider(currentSlide + 1), 4000);
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') window.nextSlide();
    if (e.key === 'ArrowLeft') window.prevSlide();
  });

  updateSlider(0);
  resetAutoplay();
}

