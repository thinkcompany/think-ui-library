document.addEventListener('DOMContentLoaded', () => {
  const fragments = document.querySelectorAll('.tco-headline-fragment');
  const blurbs = document.querySelectorAll('.tco-headline-statement');
  const blurbContainer = document.querySelector('.tco-headline-animation');
  const toggle = document.querySelector('.tco-theme-toggle');
  const prefersReduced =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  const playHeadlineAnimation = state => {
    if (state === 'play') {
      fragments.forEach(fragment => {
        fragment.getAnimations().forEach(animation => {
          animation.play();
        });
      });

      blurbs.forEach(blurb => {
        blurb.getAnimations().forEach(animation => {
          animation.play();
        });
      });
    } else {
      fragments.forEach(fragment => {
        fragment.getAnimations().forEach(animation => {
          animation.cancel();
          animation.play();
        });
      });

      blurbs.forEach(blurb => {
        blurb.getAnimations().forEach(animation => {
          animation.cancel();
          animation.play();
        });
      });
    }
  };

  if (!prefersReduced) {
    setTimeout(playHeadlineAnimation('play'), 1000);

    if (toggle) {
      toggle.addEventListener('click', () => {
        setTimeout(playHeadlineAnimation('restart'), 1000);
      });
    }
  } else {
    if (blurbContainer) {
      blurbContainer.classList.add('tco-prefers-reduced');
    }
  }
});
