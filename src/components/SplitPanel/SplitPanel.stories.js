const SplitPanelTemplate = () => {
  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass">
	  <div class="tco-container tco-split-panel-container">
      <article class="tco-split-panel">
        <header class="tco-split-panel--header">
          <p class="tco-type-eyebrow tco-split-panel--eyebrow">Strategy</p>
          <h2 class="tco-split-panel--title tco-type-display--medium-48">Assessing and </br>roadmapping</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--extra-large">Our expertise and research combine to deliver rock-solid insights. We use these to build a roadmap for your product or service.</p>
          <ul class="tco-list">
            <li>Harnessing new and existing research</li>
            <li>Product & service diagnostics</li>
            <li>Proof of concept creation</li>
          </ul>
          <a href="/" class="tco-btn tco-btn--secondary">Schedule an evaluation</a>
        </div>
      </article>

      <article class="tco-split-panel">
        <header class="tco-split-panel--header">
          <p class="tco-type-eyebrow tco-split-panel--eyebrow">Creation</p>
          <h2 class="tco-split-panel--title tco-type-display--medium-48">Build your next </br>big thing</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--extra-large">Our cross-functional teams have over 15 years of experience driving projects from concept to launch. Let's build exactly what your users need.</p>
          <ul class="tco-list">
            <li>Build a new product</li>
            <li>Improve an existing product or service</li>
            <li>Launch successfully</li>
          </ul>
          <a href="/" class="tco-btn tco-btn--secondary">Tell us about your project</a>
        </div>
      </article>

      <article class="tco-split-panel">
        <header class="tco-split-panel--header">
          <p class="tco-type-eyebrow tco-split-panel--eyebrow">Growth</p>
          <h2 class="tco-split-panel--title tco-type-display--medium-48">Continual </br>improvement = </br>Sustainable </br>success</h2>
        </header>
        <div class="tco-split-panel-body tco-text-only">
          <p class="tco-type-body--extra-large">Be more than a one-hit wonder. We'll create the infrastructure that allows your product to improve over time, setting the stage for long-term success.</p>
          <ul class="tco-list">
            <li>Dedicated teams</li>
            <li>A project-by-project approach</li>
            <li>Design Sprints for feature development</li>
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
