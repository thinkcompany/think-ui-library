document.addEventListener('DOMContentLoaded', () => {
  const Flickity = require('flickity');

  require('flickity-fade');
  const quoteContainer = document.querySelector('.tco-quote-carousel');

  const initQuoteCarousel = () => {
    const quoteTrack = document.querySelector('.tco-quote-wrapper--carousel');
    const fadeDuration = 4000;
    const prefersReduced =
      window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

    const quoteCarousel = new Flickity(quoteTrack, {
      draggable: false,
      fade: true,
      wrapAround: true,
      prevNextButtons: false,
      cellSelector: '.tco-quote--slide',
      autoPlay: fadeDuration
    });

    quoteCarousel.playPlayer();

    if (prefersReduced) {
      quoteCarousel.stopPlayer();
    }
  };

  const observerOptions = {
    rootMargin: '0px',
    threshold: 1
  };

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        initQuoteCarousel();
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (quoteContainer) {
    observer.observe(quoteContainer);
  }
});
