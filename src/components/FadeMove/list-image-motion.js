document.addEventListener('DOMContentLoaded', () => {
  const listImageMotion = document.querySelector('.tco-list-image-motion');

  const observerOptions = {
    root: null,
    rootMargin: '0% 0% -40% 0%',
    threshold: 0.5,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        listImageMotion.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (listImageMotion) {
    observer.observe(listImageMotion);
  }
});
