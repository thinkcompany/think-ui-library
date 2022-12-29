/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */

document.addEventListener('DOMContentLoaded', () => {
  const quoteCarousel = () => {
    const quoteSlides = document.querySelectorAll('.tco-quote--slide');
    const controls = document.querySelector('.tco-quote-controls');
    const controlBullet = document.querySelectorAll('.tco-bullet');
    const activeClass = 'tco-bullet--active';
    const timeout = 4000;
    const slideCount = quoteSlides.length - 1;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    let current = 0;

    let slider = setTimeout(fadeNextSlide, timeout);

    function fadeNextSlide() {
      for (let i = 0; i < quoteSlides.length; i++) {
        quoteSlides[i].style.opacity = 0;
        controlBullet[i].classList.remove(activeClass);
      }

      clearTimeout(slider);

      if (Number(current) !== slideCount) {
        current++;
      } else {
        current = 0;
      }

      if (quoteSlides[current]) {
        quoteSlides[current].style.opacity = 1;
        controlBullet[current].classList.add(activeClass);
      }
      slider = setTimeout(fadeNextSlide, timeout);
    }

    if (controls) {
      controls.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        let liIndex = event.target.dataset.bullet;

        for (let i = 0; i < quoteSlides.length; i++) {
          quoteSlides[i].style.opacity = 0;
          controlBullet[i].classList.remove(activeClass);
        }
        clearTimeout(slider);

        current = liIndex - 1;
        if (quoteSlides[liIndex]) {
          quoteSlides[liIndex].style.opacity = 1;
          controlBullet[liIndex].classList.add(activeClass);
        }

        if (Number(current) < slideCount) {
          // current 0 1 2
          current++;
        } else {
          current = 0;
        }

        slider = setTimeout(fadeNextSlide, timeout);
      });
    }

    mediaQuery.addEventListener('change', () => {
      console.log(mediaQuery.media, mediaQuery.matches);
      //clearTimeout(slider);
    });
  };

  quoteCarousel();
});
