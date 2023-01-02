document.addEventListener('DOMContentLoaded', () => {
  const textCircle = document.querySelector('.tco-type-treatment--circle');

  const observerOptions = {
    rootMargin: '0px',
    threshold: 1
  };

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        textCircle.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (textCircle) {
    observer.observe(textCircle);
  }
});
