const TextHighlightTemplate = args => {
  const { text } = args;

  return `
  <p style="text-align:center">Scroll</p>
  <div class="tco-container-wrapper" style="margin-top:100vh;">
	  <div class="tco-container" style="max-width:900px;height:80vh;text-align:center;">
      <div class="tco-text-only">
        <h3 class="tco-type-display--medium">${text}</h3>
      </div>
    </div>
  </div>
  `;
};

export const TextHighlight = TextHighlightTemplate.bind({});

TextHighlight.args = {
  text: 'We drive value and engagement for billion-dollar companies.</br><mark class="tco-type-treatment--highlight">We can do it for you, too.</mark>'
};

export default {
  title: 'Motion / Text Highlight',
  parameters: {
    component: TextHighlight
  }
};
