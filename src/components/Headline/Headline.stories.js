const HeadlineTemplate = args => {
  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container tco-page-header-big-bubble">
      <div class="tco-text-only tco-headline-animation">
        <h1 class="tco-text-only-heading tco-motion-headline">
          <span class="tco-headline-fragment tco-headline-fragment--a">World-class</span>
          <span class="tco-headline-fragment tco-headline-fragment--b">digital experiences</span>
          <span class="tco-headline-fragment tco-headline-fragment--c">for every user</span>
        </h1>
        <div class="tco-headline-support">
          <p class="tco-headline-statement tco-headline-statement-a">Design and usability</br> Award winning</p>
          <p class="tco-headline-statement tco-headline-statement-b">Words go here</br> they will be good</p>
          <p class="tco-headline-statement tco-headline-statement-c">This is better than</br> lorem ipsum?</p>

        </div>
        <a href="/" class="tco-btn tco-btn--primary tco-btn--space-xl">Start a project</a>
      </div>
    </div>
  </div>
  `;
};

export const Headline = HeadlineTemplate.bind({});

export default {
  title: 'Motion / Headline',
  component: Headline,
  parameters: {
    component: Headline,
    controls: { hideNoControlsWarning: true }
  }
};
