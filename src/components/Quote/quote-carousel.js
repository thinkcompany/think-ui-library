document.addEventListener('DOMContentLoaded', () => {
  const quoteCarousel = () => {
    const quoteSlides = document.querySelectorAll('.tco-quote--slide');
    const controls = document.querySelector('.tco-quote-controls');
    const controlBullet = document.querySelectorAll('.tco-bullet');
    const activeClass = 'tco-bullet--active';
    const timeout = 4000;
    let current = 1;

    let slider = setTimeout(fadeNextSlide, timeout);

    function fadeNextSlide() {
      for (let i = 0; i < quoteSlides.length; i++) {
        quoteSlides[i].style.opacity = 0;
        controlBullet[i].classList.remove(activeClass);
      }

      if (current != parseInt(quoteSlides.length) - 1) {
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

    function fadePrevSlide() {
      for (let i = 0; i < quoteSlides.length; i++) {
        quoteSlides[i].style.opacity = 0;
        controlBullet[i].classList.remove(activeClass);
      }
      if (current == 0) {
        current = quoteSlides.length - 1;
      } else {
        current--;
      }
      quoteSlides[current].style.opacity = 1;
      controlBullet[current].classList.add(activeClass);
      slider = setTimeout(fadeNextSlide, timeout);
    }

    if (controls) {
      controls.addEventListener('click', function (event) {
        event.preventDefault();
        let liIndex = event.target.dataset.bullet;
        for (let i = 0; i < quoteSlides.length; i++) {
          quoteSlides[i].style.opacity = 0;
          controlBullet[i].classList.remove(activeClass);
        }
        clearTimeout(slider);
        current = liIndex;
        if (quoteSlides[liIndex]) {
          quoteSlides[liIndex].style.opacity = 1;
          controlBullet[liIndex].classList.add(activeClass);
        }
        slider = setTimeout(fadeNextSlide, timeout);
      });
    }
  };

  quoteCarousel();
});
