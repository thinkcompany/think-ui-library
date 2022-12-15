document.addEventListener('DOMContentLoaded', () => {
  const carouselCard = document.querySelector('.tco-card--motion-carousel');
  const sliderCard = document.querySelector('.tco-card--motion-slider');

  const carouselControls = card => {
    const cardWidth = card.offsetWidth;
    const track = card.querySelector('.tco-motion-track');
    const minis = track.querySelectorAll('.tco-mini-card');
    const controlContainer = card.querySelector(
      '.tco-motion-control-container'
    );
    const control = controlContainer.querySelector('.tco-motion-control');
    const offsetContainer = card.querySelector('.tco-card-motion-container');
    const pauseClass = 'tco-motion-track--paused';
    const trackWidth = track.offsetWidth;
    const miniWidth = 280;
    const miniClass = 'tco-mini-card--in-view';
    const cardDuration = 1000;
    const cardCount = Math.round(trackWidth / miniWidth);
    const keyCount = cardCount / 2 + 1;
    let keyframes = [];

    const trackTiming = {
      duration: cardDuration * cardCount,
      iterations: Infinity
    };
    const observerOptions = {
      root: card,
      rootMargin: '0px 0px 0px -20%',
      threshold: 0.2
    };

    const initialOffset = () => {
      const offset = miniWidth - (cardWidth - miniWidth) / 2;
      offsetContainer.style.transform = 'translateX(-' + offset + 'px)';
      controlContainer.style.transform = 'translateX(' + offset + 'px)';
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        const { target } = entry;
        // if ( entry.intersectionRatio >= observerOptions.threshold ) {
        if (entry.isIntersecting) {
          target.classList.add(miniClass);
        } else {
          target.classList.remove(miniClass);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const doClones = () => {
      minis.forEach(mini => {
        let clone = mini.cloneNode(true);
        clone.classList.add('tco-mini-card--clone');
        track.append(clone);
      });
    };

    const observeSubjects = () => {
      let subjects = [...track.querySelectorAll('.tco-mini-card')];

      subjects.forEach(subject => {
        observer.observe(subject);
      });
    };

    const buildKeyframes = () => {
      for (let i = 0; i < keyCount; i++) {
        let miniW = miniWidth * i;

        keyframes.push(
          { transform: 'translateX(-' + miniW + 'px)' },
          { transform: 'translateX(-' + miniW + 'px)' }
        );
      }
    };

    const toggleAnimation = () => {
      if (animateTrack.playState === 'paused') {
        animateTrack.play();
        track.classList.remove(pauseClass);
        control.classList.remove(pauseClass);
      } else {
        animateTrack.pause();
        track.classList.add(pauseClass);
        control.classList.add(pauseClass);
      }
    };

    const doAnimation = () => {
      if (animateTrack.effect.getComputedTiming().progress > 0.3) {
        console.log('now');
      }
    };

    initialOffset();
    doClones();
    buildKeyframes();
    observeSubjects();

    const animateTrack = track.animate(keyframes, trackTiming);

    animateTrack.pause();

    doAnimation();

    control.addEventListener('click', toggleAnimation);
  };

  const sliderControls = card => {
    const track = card.querySelector('.tco-motion-track');
    const slideRows = track.querySelectorAll('.tco-motion-row');
    const controlContainer = card.querySelector(
      '.tco-motion-control-container'
    );
    const control = controlContainer.querySelector('.tco-motion-control');
    const miniWidth = 174;
    const pauseClass = 'tco-motion-track--paused';

    const animateRows = () => {
      let rowWidths = [];
      let widestRow = '100%';

      slideRows.forEach((row, i) => {
        let keyframes = [];
        let ogSlides = row.querySelectorAll('.tco-mini-slide');
        let rowWidth =
          miniWidth * (ogSlides.length * 2) + (ogSlides.length - 1) * 8; // accounts for gap
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

    animateRows();
  };

  carouselControls(carouselCard);
  sliderControls(sliderCard);
});
