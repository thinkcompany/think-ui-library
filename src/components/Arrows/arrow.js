document.addEventListener('DOMContentLoaded', () => {
  const arrows = document.querySelectorAll('.tco-arrow');

  const observerOptions = {
    rootMargin: '0% 0% -20% 0%',
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

  arrows.forEach(
    (arrow = arrow => {
      if (arrow) {
        observer.observe(arrow);
      }
    })
  );
});
