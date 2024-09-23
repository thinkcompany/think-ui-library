const AccordionTemplate = args => {
  const { titleA, titleB, titleC } = args;

  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container">
      <div class="tco-accordion" style="max-width:580px;">
        <div class="tco-accordion-item">
          <button class="tco-accordion-button tco-accordion-button--active" type="button" aria-expanded="true" aria-controls="accordion-panel-A">
            <h4 class="tco-accordion-title tco-type-display--medium-36">${titleA}</h4>
            <svg class="tco-icon tco-icon--accordion tco-icon--plus" width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <use xlink:href="/img/icons.svg#icon-plus"></use>
            </svg>
            <svg class="tco-icon tco-icon--accordion tco-icon--minus" width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <use xlink:href="/img/icons.svg#icon-minus-2"></use>
            </svg>
          </button>
          <div id="accordion-panel-A" class="tco-accordion-content">
            <p class="tco-type-body--medium">We'll dive into your business, uncovering any hidden issues that could affect your success. We'll know your business inside and out, and you'll have a clear strategy to meet your goals.</p>
            <a href="" class="tco-text-link tco-text-link--arrow">
              Check it out
              <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
                <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
              </svg>
            </a>
          </div>
        </div>

        <div class="tco-accordion-item">
          <button class="tco-accordion-button" type="button" aria-expanded="false" aria-controls="accordion-panel-B">
            <h4 class="tco-accordion-title tco-type-display--medium-36">${titleB}</h4>
            <svg class="tco-icon tco-icon--accordion tco-icon--plus" width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <use xlink:href="/img/icons.svg#icon-plus"></use>
            </svg>
            <svg class="tco-icon tco-icon--accordion tco-icon--minus" width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <use xlink:href="/img/icons.svg#icon-minus-2"></use>
            </svg>
          </button>
          <div id="accordion-panel-B" class="tco-accordion-content">
            <p class="tco-type-body--medium">We'll dive into your business, uncovering any hidden issues that could affect your success. We'll know your business inside and out, and you'll have a clear strategy to meet your goals.</p>
          </div>
        </div>

        <div class="tco-accordion-item">
          <button class="tco-accordion-button" type="button" aria-expanded="false" aria-controls="accordion-panel-C">
            <h4 class="tco-accordion-title tco-type-display--medium-36">${titleC}</h4>
            <svg class="tco-icon tco-icon--accordion tco-icon--plus" width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <use xlink:href="/img/icons.svg#icon-plus"></use>
            </svg>
            <svg class="tco-icon tco-icon--accordion tco-icon--minus" width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <use xlink:href="/img/icons.svg#icon-minus-2"></use>
            </svg>
          </button>
          <div id="accordion-panel-C" class="tco-accordion-content">
            <p class="tco-type-body--medium">We'll dive into your business, uncovering any hidden issues that could affect your success. We'll know your business inside and out, and you'll have a clear strategy to meet your goals.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};

export const Accordion = AccordionTemplate.bind({});

export default {
  title: 'Components / Accordion',
  parameters: {
    component: Accordion,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ct2FjvVgu901FLjKWzdFlP/Redlining?node-id=15-1239&m=dev'
    }
  },
  args: {
    titleA: 'Learn and strategize',
    titleB: 'Concept and iterate',
    titleC: 'Build and implement'
  }
};
