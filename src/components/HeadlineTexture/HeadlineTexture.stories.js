const HeadlineTextureTemplate = args => {
  const { text } = args;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass">
	  <div class="tco-container" style="max-width:900px;height:80vh;">
      <div class="tco-text-only">
        <h2 class="tco-type-display--sans-large">${text}</h2>
      </div>
    </div>
  </div>
  `;
};

export const HeadlineTexture = HeadlineTextureTemplate.bind({});

HeadlineTexture.args = {
  text: 'Not just clients&#8212;</br><span class="tco-type-treatment--circle">partners<svg viewbox="0 0 501 154" fill="none"><path d="M289.5 132c-151 27-283.433 2.741-287.015-34.718C-1.096 59.825 107.105 18.835 244.16 5.73c137.054-13.105 251.063 6.637 254.644 44.095 3.281 34.313-128.312 86.31-248.881 102.402" pathLength="1" /></svg></span>'
};

export default {
  title: 'Type Treatments / Headline Texture',
  parameters: {
    component: HeadlineTexture
  }
};
