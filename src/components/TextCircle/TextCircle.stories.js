const TextCircleTemplate = args => {
  const { text } = args;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--blue">
	  <div class="tco-container" style="max-width:900px;height:80vh; text-align:center;">
      <div class="tco-text-only">
        <h3 class="tco-type-display--large">${text}</h3>
      </div>
    </div>
  </div>
  `;
};

export const TextCircle = TextCircleTemplate.bind({});

TextCircle.args = {
  text: 'Not just clients&#8212;</br><span class="tco-type-svg tco-type-treatment--circle">collaborators<svg viewbox="0 0 501 154" fill="none"><path d="M289.5 132c-151 27-283.433 2.741-287.015-34.718C-1.096 59.825 107.105 18.835 244.16 5.73c137.054-13.105 251.063 6.637 254.644 44.095 3.281 34.313-128.312 86.31-248.881 102.402" pathLength="1" /></svg></span>'
};

export default {
  title: 'Archive / Text Circle',
  parameters: {
    component: TextCircle
  }
};
