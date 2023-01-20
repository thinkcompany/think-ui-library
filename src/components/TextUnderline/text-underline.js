document.addEventListener('DOMContentLoaded', () => {
  const textUnderline = document.querySelector('.tco-type-treatment--underline');

  const observerOptions = {
    rootMargin: '0px',
    threshold: 1
  };

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        textUnderline.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (textUnderline) {
    observer.observe(textUnderline);
  }
});
