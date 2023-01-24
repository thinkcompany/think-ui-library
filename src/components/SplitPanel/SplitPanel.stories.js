const SplitPanelTemplate = args => {
  const { eyebrow, headline } = args;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass tco-container-wrapper--bleed-bottom">
	  <div class="tco-container">
      <article class="tco-split-panel">
        <header class="tco-split-panel-header tco-texture tco-texture--zig-zag">
          <p class="tco-type-eyebrow">${eyebrow}</p>
          <h2 class="tco-type-display--sans-large">${headline}</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--large">Our expertise and research combine to deliver rock-solid insights. We use these to build a roadmap for your product or service.</p>
          <ul class="tco-list-sans-large">
            <li class="tco-type-body--large-sans">Harnessing new and existing research</li>
            <li class="tco-type-body--large-sans">Product & service diagnostics</li>
            <li class="tco-type-body--large-sans">Proof of concept creation</li>
          </ul>
          <a href="/" class="tco-btn tco-btn--secondary">Schedule an evaluation</a>
        </div>
      </article>

      <article class="tco-split-panel">
        <header class="tco-split-panel-header tco-texture tco-texture--curl">
          <p class="tco-type-eyebrow">Build your next big thing</p>
          <h2 class="tco-type-display--sans-large">Creation</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--large">Our cross-functional teams have over 15 years of experience driving projects from concept to launch. Let’s build exactly what your users need.</p>
          <ul class="tco-list-sans-large">
            <li class="tco-type-body--large-sans">Build a new product</li>
            <li class="tco-type-body--large-sans">Improve an existing product or service</li>
            <li class="tco-type-body--large-sans">Launch successfully</li>
          </ul>
          <a href="/" class="tco-btn tco-btn--secondary">Tell us about your project</a>
        </div>
      </article>

      <article class="tco-split-panel">
        <header class="tco-split-panel-header tco-texture tco-texture--curve">
          <p class="tco-type-eyebrow">Continual improvement = Sustainable success</p>
          <h2 class="tco-type-display--sans-large">Growth</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--large">Be more than a one-hit wonder. We’ll create the infrastructure that allows your product to improve over time, setting the stage for long-term success.</p>
          <ul class="tco-list-sans-large">
            <li class="tco-type-body--large-sans">Dedicated teams</li>
            <li class="tco-type-body--large-sans">A project-by-project approach</li>
            <li class="tco-type-body--large-sans">Design Sprints for feature development</li>
          </ul>
          <a href="/" class="tco-btn tco-btn--secondary">Determine your approach</a>
        </div>
      </article>
    </div>
  </div>
  `;
};

export const SplitPanel = SplitPanelTemplate.bind({});

SplitPanel.args = {
  eyebrow: 'Assessing and Roadmapping',
  headline: 'Strategy'
};

export default {
  title: 'Components / Split Panel',
  parameters: {
    component: SplitPanel
  }
};
