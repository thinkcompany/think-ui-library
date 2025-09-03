document.addEventListener('DOMContentLoaded', () => {
  const listImageMotion = document.querySelector('.tco-list-image-motion');

  if (!listImageMotion) {
    return;
  }

  const lastAnimatedItem = listImageMotion.querySelector(
    '.tco-list-image-motion-list-item:nth-of-type(5)'
  );

  const runAnimationSequence = () => {
    listImageMotion.classList.remove('active');

    // Force a browser reflow
    // void to prevent the value from being stored
    void listImageMotion.offsetHeight;

    listImageMotion.classList.add('active');

    lastAnimatedItem.addEventListener(
      'animationend',
      () => {
        listImageMotion.classList.remove('active');
        setTimeout(runAnimationSequence, 500);
      },
      { once: true }
    );
  };

  const observerOptions = {
    root: null,
    rootMargin: '0% 0% -40% 0%',
    threshold: 0.5,
  };

  // eslint-disable-next-line prefer-const
  let observer;

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runAnimationSequence();
      }

      observer.unobserve(listImageMotion);
    });
  };

  observer = new IntersectionObserver(observerCallback, observerOptions);

  observer.observe(listImageMotion);
});
