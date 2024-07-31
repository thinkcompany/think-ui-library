document.addEventListener('DOMContentLoaded', () => {
  const textHighlight = document.querySelector('.tco-type-treatment--highlight');

  const observerOptions = {
    rootMargin: '0% 0% -40% 0%',
    threshold: 1
  };

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        textHighlight.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (textHighlight) {
    observer.observe(textHighlight);
  }
});
