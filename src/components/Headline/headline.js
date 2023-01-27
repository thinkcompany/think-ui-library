document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.tco-arrow');
  const trigger = document.querySelector('.tco-animation-trigger');

  const observerOptions = {
    rootMargin: '-20% 0% 0% 0%',
    threshold: 1
  };

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  arrows.forEach(arrow => {
    observer.observe(arrow);
  });

  if (trigger) {
    trigger.addEventListener('click', event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      arrows.forEach(arrow => {
        arrow.getAnimations().forEach(anim => {
          anim.cancel();
          anim.play();
        });
      });
    });
  }
});
