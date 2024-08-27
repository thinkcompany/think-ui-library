document.addEventListener('DOMContentLoaded', () => {
  const textHighlight = document.querySelector('.tco-type-treatment--highlight');
  // const textHighlightWords = textHighlight.querySelectorAll('span');

  const observerOptions = {
    rootMargin: '0% 0% -40% 0%',
    threshold: 1
  };

  if (textHighlight) {
    const text = textHighlight.textContent;
    const wrappedText = text
      .split(' ')
      .map(word => `<span>${word}</span>`)
      .join(' ');

    textHighlight.innerHTML = wrappedText; // Update innerHTML here
  }

  const observerCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        textHighlight.classList.add('active');
        const spans = textHighlight.querySelectorAll('span');

        spans.forEach((span, index) => {
          setTimeout(() => {
            span.classList.add('active');
          }, index * 40);
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (textHighlight) {
    observer.observe(textHighlight);
  }
});
