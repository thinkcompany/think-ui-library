document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.tco-accordion-button');

  const toggleAccordion = () => {
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const toggleState = button.getAttribute('aria-expanded');

        if (toggleState === 'true') {
          button.setAttribute('aria-expanded', 'false');
          button.classList.remove('tco-accordion-button--active');
        } else if (toggleState === 'false') {
          button.setAttribute('aria-expanded', 'true');
          button.classList.add('tco-accordion-button--active');
        }
      });
    });
  };

  if (accordionButtons) {
    toggleAccordion();
  }
});
