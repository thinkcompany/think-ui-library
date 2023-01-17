const HeadlineTextureTemplate = args => {
  const { eyebrow, headline } = args;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass">
	  <div class="tco-container" style="max-width:900px;height:80vh;">
      <article class="tco-statement-block">
        <header class="tco-statement-block-header tco-texture tco-texture--zig-zag">
          <p class="tco-type-eyebrow">${eyebrow}</p>
          <h2 class="tco-type-display--sans-large">${headline}</h2>
        </header>
        <div class="tco-statement-block--body tco-text-only">
          <p class="tco-type-body--large">Our expertise and research combine to deliver rock-solid insights. We use these to build a roadmap for your product or service.</p>
          <ul class="">
            <li>Harnessing new and existing research</li>
            <li>Product & service diagnostics</li>
            <li>Proof of concept creation</li>
          </ul>
          <a href="/" class="tco-btn tco-btn--secondary">Schedule an evaluation</a>
        </div>
      </article>
    </div>
  </div>
  `;
};

export const HeadlineTexture = HeadlineTextureTemplate.bind({});

HeadlineTexture.args = {
  eyebrow: 'Assessing and Roadmapping',
  headline: 'Strategy'
};

export default {
  title: 'Type Treatments / Headline Texture',
  parameters: {
    component: HeadlineTexture
  }
};
