document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.tco-observe-a');
  const arrowHL = document.querySelector('.tco-arrow--headline-left');
  const trigger = document.querySelector('.tco-animation-trigger');

  if (arrows) {
    const observerOptions = {
      rootMargin: '-20% 0% 0% 0%',
      threshold: 0.3
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
  }

  if (arrowHL) {
    const observerOptions = {
      rootMargin: '0% 0% -40% 0%',
      threshold: 0.7
    };

    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(arrowHL);
  }

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

      if (arrowHL) {
        arrowHL.getAnimations().forEach(anim => {
          anim.cancel();
          anim.play();
        });
      }
    });
  }
});
