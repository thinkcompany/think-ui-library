const FullRightTemplate = args => {
  const { text } = args;

  return `
  <div class="tco-container-wrapper" style="position:relative;">
	  <div class="tco-container">
      <div class="tco-text-only tco-section-arrow tco-section-arrow--full-right">
        <p class="tco-type-eyebrow tco-type-eyebrow--space-xl">Capabilities</p>
        <h3 class="tco-type-display--64">We're experts in <strong>design</strong>, </br><strong>development</strong>, and <strong>product </br>management</strong>. Here's everything </br>we do to make your products </br>and services succeed.</h3>
        <a href="/" class="tco-btn tco-btn--primary tco-btn--space-xl">View all capabilities</a>
        <svg class="tco-arrow tco-arrow--full-right" fill="none" viewbox="0 0 327 819"><path d="M326.267 2.486C215.088 31.89 13.264 124.224 95.405 258.328c102.677 167.631 219.661 346.229 29.824 466.48-189.837 120.251 8.505-14.972-12.059-29.86C92.607 680.061-10.754 803.518 4.054 814.517c11.846 8.8 128.416-34.946 185.22-57.92" pathLength="1" /></svg>
      </div>

    </div>
  </div>
  `;
};

export const FullRight = FullRightTemplate.bind({});

FullRight.args = {
  text: 'We drive value and engagement for billion-dollar companies.</br><span class="tco-type-svg tco-type-treatment--underline">We can do it for you, too.<svg viewbox="0 0 588 25" fill="none"><path d="M3 21.7779C60 16.6113 202 5.67793 314 3.27793C426 0.87793 541.667 14.6113 585.5 21.7779" stroke-linecap="round" pathLength="1" /></svg></span>'
};

export default {
  title: 'Motion / Arrows',
  component: [FullRight],
  parameters: {
    component: FullRight
  }
};
