document.addEventListener('DOMContentLoaded', () => {
  const fragments = document.querySelectorAll('.tco-headline-fragment');
  const blurbs = document.querySelectorAll('.tco-headline-statement');

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

  setTimeout(playHeadlineAnimation, 1000);
});
