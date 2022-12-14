document.addEventListener('DOMContentLoaded', () => {
  const motionCards = document.querySelectorAll('.tco-card--motion');

  const cardControls = card => {
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
        console.log(entry);
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
        console.log(animateTrack.effect.getComputedTiming().progress);
      } else {
        animateTrack.pause();
        track.classList.add(pauseClass);
        control.classList.add(pauseClass);
        console.log(animateTrack.effect.getComputedTiming().progress);
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

  motionCards.forEach(motionCard => {
    cardControls(motionCard);
  });
});
