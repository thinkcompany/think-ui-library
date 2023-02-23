const HeadlineTemplate = () => {
  return `
  <div class="tco-container-wrapper">
	  <div class="tco-container tco-page-header-big-bubble">
      <div class="tco-text-only tco-headline-animation">
        <h1 class="tco-text-only-heading tco-motion-headline">
          <span class="tco-headline-fragment tco-headline-fragment--a">World-class</span>
          <span class="tco-headline-fragment tco-headline-fragment--b">digital experiences</span>
          <span class="tco-headline-fragment tco-headline-fragment--c">for every user</span>
        </h1>
        <p class="tco-headline-support">
          <span class="tco-headline-statement tco-headline-statement-a">High-performing</br> and award winning</span>
          <span class="tco-headline-statement tco-headline-statement-b">apps, websites,</br> systems and tools</span>
          <span class="tco-headline-statement tco-headline-statement-c">designed for real</br> people and their needs</span>
        </p>
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
