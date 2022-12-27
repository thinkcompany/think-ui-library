document.addEventListener('DOMContentLoaded', () => {
  const carouselCard = document.querySelector('.tco-card--motion-carousel');
  const sliderCard = document.querySelector('.tco-card--motion-slider');

  const carouselControls = () => {
    const cardWidth = carouselCard.offsetWidth;
    const track = carouselCard.querySelector('.tco-motion-track');
    const minis = track.querySelectorAll('.tco-mini-card');
    const controlContainer = carouselCard.querySelector('.tco-motion-control-container');
    const control = controlContainer.querySelector('.tco-motion-control');
    const offsetContainer = carouselCard.querySelector('.tco-card-motion-container');
    const pauseClass = 'tco-motion-track--paused';
    const trackWidth = track.offsetWidth; // track width set in css and will always reflect inclusion of clones (css vars pass in accurate card count)
    const miniWidth = 240;
    const miniClass = 'tco-mini-card--in-view';
    const cardDuration = 1500;
    const cardCount = Math.round(trackWidth / miniWidth);
    const keyCount = cardCount / 2 + 1;
    //const bezierCurve = 'cubic-bezier(0.45,0.05,0.55,0.95)';
    const bezierCurve = 'linear';

    const carouselPrep = () => {
      // const offset = miniWidth - (cardWidth - miniWidth) / 2;
      const offset = miniWidth + cardWidth;
      // offset card container
      //offsetContainer.style.transform = 'translateX(' + cardWidth + 'px)';
      // controlContainer.style.transform = 'translateX(' + offset + 'px)';

      // clone the cards and add to the end
      minis.forEach(mini => {
        let clone = mini.cloneNode(true);
        clone.classList.add('tco-mini-card--clone');
        track.append(clone);
      });
    };

    const carouselAnimation = () => {
      let keyframes = [];

      //  build keyframes
      for (let i = 1; i < keyCount + 1; i++) {
        let miniW = miniWidth * i;

        keyframes.push({ transform: 'translateX(-' + miniW + 'px)' });
      }

      const trackTiming = {
        duration: cardDuration * cardCount,
        iterations: Infinity
      };
      const animateTrack = track.animate(keyframes, trackTiming);
      animateTrack.pause();

      const cards = track.querySelectorAll('.tco-mini-card'); // includes clones

      cards.forEach((card, i) => {
        const cardKeyframes = [
          { transform: 'scale(1)', opacity: 1 },
          { transform: 'scale(1.1)', opacity: 1 },
          { transform: 'scale(1)', opacity: 1 }
        ];

        const frameDuration = (animateTrack.effect.getComputedTiming().duration / cards.length) * 2;

        const cardTiming = {
          duration: frameDuration,
          delay: frameDuration * i,
          easing: bezierCurve,
          fill: 'forwards'
        };

        const cardAnimation = card.animate(cardKeyframes, cardTiming);
        cardAnimation.pause();

        if (animateTrack.playState === 'paused') {
          cardAnimation.pause();
          console.log('paused');
        } else {
          console.log('play');
          cardAnimation.play();
        }
      });

      const observerCallback = entries => {
        entries.forEach(entry => {
          //console.log('time ' + entry.time);
          // console.log(entry);
          //console.log('ratio ' + entry.intersectionRatio);
          const cardKeyframes = [
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(1.1)', opacity: 1 },
            { transform: 'scale(1)', opacity: 1 }
          ];

          const cardTiming = {
            //duration: cardDuration * 3,
            duration: (animateTrack.effect.getComputedTiming().duration / cards.length) * 2,
            easing: bezierCurve,
            fill: 'forwards'
          };

          //console.log('card duration ' + cardTiming.duration);

          const { target } = entry;
          const cardAnimation = target.animate(cardKeyframes, cardTiming);
          cardAnimation.pause();

          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            // checking for intersectionRatio value prevents card animation on initial load
            //console.log(entry);
            target.classList.add(miniClass);
            //cardAnimation.play();
          } else {
            target.classList.remove(miniClass);
          }
        });
      };

      const toggleAnimation = () => {
        if (animateTrack.playState === 'paused') {
          animateTrack.play();
          control.classList.remove(pauseClass);
        } else {
          animateTrack.pause();
          control.classList.add(pauseClass);
        }
      };
      control.addEventListener('click', toggleAnimation);
    };

    carouselPrep();
    carouselAnimation();
  };

  const sliderControls = () => {
    // const card = document.querySelector('.tco-card--motion-slider');
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
    carouselControls();
  }

  if (sliderCard) {
    sliderControls();
  }

  // window.addEventListener('resize', carouselControls);
  // window.addEventListener('resize', sliderControls);
});
