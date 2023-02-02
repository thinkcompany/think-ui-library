const SplitPanelTemplate = args => {
  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass">
	  <div class="tco-container">
      <article class="tco-split-panel">
        <header class="tco-split-panel-header tco-texture tco-texture--a">
          <p class="tco-type-eyebrow">Strategy</p>
          <h2 class="tco-split-panel-heading tco-type-display--sans-48">Assessing and Roadmapping</h2>
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
        <header class="tco-split-panel-header tco-texture tco-texture--b">
          <p class="tco-type-eyebrow">Creation</p>
          <h2 class="tco-split-panel-heading tco-type-display--sans-48">Build your next big thing</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--large">Our cross-functional teams have over 15 years of experience driving projects from concept to launch. Let's build exactly what your users need.</p>
          <ul class="tco-list-sans-large">
            <li class="tco-type-body--large-sans">Build a new product</li>
            <li class="tco-type-body--large-sans">Improve an existing product or service</li>
            <li class="tco-type-body--large-sans">Launch successfully</li>
          </ul>
          <a href="/" class="tco-btn tco-btn--secondary">Tell us about your project</a>
        </div>
      </article>

      <article class="tco-split-panel">
        <header class="tco-split-panel-header tco-texture tco-texture--c">
          <p class="tco-type-eyebrow">Growth</p>
          <h2 class="tco-split-panel-heading tco-type-display--sans-48">Continual improvement = Sustainable success</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--large">Be more than a one-hit wonder. We'll create the infrastructure that allows your product to improve over time, setting the stage for long-term success.</p>
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

export default {
  title: 'Components / Split Panel',
  parameters: {
    component: SplitPanel
  }
};
