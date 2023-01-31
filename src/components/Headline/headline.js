document.addEventListener('DOMContentLoaded', () => {
  const fragments = document.querySelectorAll('.tco-headline-fragment');
  const blurbs = document.querySelectorAll('.tco-headline-statement');
  const trigger = document.querySelector('.tco-headline-animation-trigger');

  const playHeadlineAnimation = () => {
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
  };

  if (trigger) {
    trigger.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      playHeadlineAnimation();
    });
  }
});
