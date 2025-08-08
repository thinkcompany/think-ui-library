document.addEventListener('DOMContentLoaded', () => {
  const fadeMove = document.querySelector('.tco-fade-move');

  const observerOptions = {
    root: null,
    rootMargin: '0% 0% -40% 0%',
    threshold: 0.5,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fadeMove.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (fadeMove) {
    observer.observe(fadeMove);
  }
});
