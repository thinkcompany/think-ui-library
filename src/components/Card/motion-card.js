document.addEventListener('DOMContentLoaded', () => {
  const Flickity = require('flickity');
  const carouselCard = document.querySelector('.tco-card--motion-carousel');
  const sliderCard = document.querySelector('.tco-card--motion-slider');

  const initCarousel = () => {
    const track = document.querySelector('.tco-motion-track--carousel');
    const control = document.querySelector('.tco-motion-control');
    const pauseClass = 'tco-motion-track--paused';
    const duration = 2000;

    const carousel = new Flickity(track, {
      freeScroll: true,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      cellSelector: '.tco-mini-card',
      autoPlay: duration
    });

    carousel.stopPlayer();

    const toggleCarousel = () => {
      if (carousel.player.state === 'playing') {
        carousel.stopPlayer();
        control.classList.add(pauseClass);
      } else {
        carousel.playPlayer();
        control.classList.remove(pauseClass);
      }
    };

    control.addEventListener('click', toggleCarousel);
  };

  const sliderControls = () => {
    const card = sliderCard;
    const track = card.querySelector('.tco-motion-track');
    const slideRows = track.querySelectorAll('.tco-motion-row');
    const controlContainer = card.querySelector('.tco-motion-control-container');
    const control = controlContainer.querySelector('.tco-motion-control');
    const miniWidth = 174;
    const pauseClass = 'tco-motion-track--paused';
    let rowWidths = [];
    let widestRow = '100%';

    slideRows.forEach((row, i) => {
      let keyframes = [];
      let ogSlides = row.querySelectorAll('.tco-mini-slide');
      let rowWidth = miniWidth * (ogSlides.length * 2) + (ogSlides.length - 1) * 8; // accounts for gap
      rowWidths.push(rowWidth); // will be used to set width of parent container

      // clone the images in each row
      ogSlides.forEach(ogSlide => {
        let clone = ogSlide.cloneNode(true);
        clone.classList.add('tco-mini-slide--clone');
        row.append(clone);
      });

      // now get all the slides
      const slides = row.querySelectorAll('.tco-mini-slide');
      const slideCount = slides.length / 2 + 1;
      // we only need to build keyframes for 1/2 (+1) of all slides (og and clones) for a seamless loop
      for (let i = 0; i < slideCount; i++) {
        let miniW = miniWidth + 8;
        miniW = miniW * i;

        keyframes.push({ transform: 'translateX(-' + miniW + 'px)' });
      }

      // set up the timing object
      let trackTiming = {
        duration: 4000 * slides.length,
        iterations: Infinity
      };

      if (i != 0) {
        trackTiming = {
          duration: 3000 * slides.length,
          iterations: Infinity
        };
      }

      const animateRow = row.animate(keyframes, trackTiming);
      animateRow.pause();

      const toggleAnimation = () => {
        if (animateRow.playState === 'paused') {
          animateRow.play();
          control.classList.remove(pauseClass);
        } else {
          animateRow.pause();
          control.classList.add(pauseClass);
        }
      };

      control.addEventListener('click', toggleAnimation);
    });

    widestRow = rowWidths.reduce((a, b) => Math.max(a, b), -Infinity) + 'px'; // use widest row to set parent width
    track.style.width = widestRow;
  };

  if (carouselCard) {
    initCarousel();
  }

  if (sliderCard) {
    sliderControls();
  }
});
