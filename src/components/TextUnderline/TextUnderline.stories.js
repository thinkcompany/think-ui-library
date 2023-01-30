const TextUnderlineTemplate = args => {
  const { text } = args;

  return `
  <div class="tco-container-wrapper">
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
  text: 'We drive value and engagement for billion-dollar companies.</br><span class="tco-type-svg tco-type-treatment--underline">We can do it for you, too.<svg viewbox="0 0 588 25" fill="none"><path d="M3 21.7779C60 16.6113 202 5.67793 314 3.27793C426 0.87793 541.667 14.6113 585.5 21.7779" stroke-linecap="round" pathLength="1" /></svg></span>'
};

export default {
  title: 'Motion / Text Underline',
  parameters: {
    component: TextUnderline
  }
};
