const HeadlineTemplate = args => {
  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container tco-container--default tco-page-header-big-bubble">
      <div class="tco-text-only">
        <h1 class="tco-text-only-heading tco-motion-headline">
          <span class="tco-headline-fragment tco-headline-fragment--a">World-class</span>
          <span class="tco-headline-fragment tco-headline-fragment--b">digital experiences</span>
          <span class="tco-headline-fragment tco-headline-fragment--c">for every user</span>
        </h1>
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
