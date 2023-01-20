const TextUnderlineTemplate = args => {
  const { text } = args;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass">
	  <div class="tco-container" style="max-width:900px;height:80vh;text-align:center;">
      <div class="tco-text-only">
        <h3 class="tco-type-display--sans">${text}</h3>
      </div>
    </div>
  </div>
  `;
};

export const TextUnderline = TextUnderlineTemplate.bind({});

TextUnderline.args = {
  text: 'We drive value and engagement for billion-dollar companies.</br><span class="tco-type-svg tco-type-treatment--underline">We can do it for you, too.<svg viewbox="0 0 584 24" fill="none"><path d="M1 21.5C58 16.333 200 5.4 312 3 424 .6 539.667 14.333 583.5 21.5" pathLength="1" /></svg></span>'
};

export default {
  title: 'Type Treatments / Text Underline',
  parameters: {
    component: TextUnderline
  }
};
