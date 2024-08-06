const FullSectionRightTemplate = () => {
  return `
  <div class="tco-container-wrapper" style="position:relative;margin:20vh 0;">
	  <div class="tco-container">
      <div class="tco-text-only tco-section-arrow tco-section-arrow--full-right tco-text-only--capabilities">
        <p class="tco-type-eyebrow tco-type-eyebrow--space-xl">Capabilities</p>
        <h3 class="tco-type-display--64 tco-type-display--has-br">We're experts in <strong>design</strong>, </br><strong>development</strong>, and <strong>product </br>management</strong>. Here's everything </br>we do to make your products </br>and services succeed.</h3>
        <a href="/" class="tco-btn tco-btn--primary tco-btn--space-xl tco-animation-trigger">Replay animation</a>
        <svg class="tco-arrow tco-observe-a tco-arrow--full-right" fill="none" viewbox="0 0 327 819"><path d="M326.267 2.486C215.088 31.89 13.264 124.224 95.405 258.328c102.677 167.631 219.661 346.229 29.824 466.48-189.837 120.251 8.505-14.972-12.059-29.86C92.607 680.061-10.754 803.518 4.054 814.517c11.846 8.8 128.416-34.946 185.22-57.92" pathLength="1" /></svg>
      </div>

    </div>
  </div>
  `;
};

export const FullSectionRight = FullSectionRightTemplate.bind({});

const ConnectorLeftTemplate = () => {
  return `
  <div class="tco-container-wrapper tco-container-wrapper--glass tco-container-wrapper--bleed-bottom">
    <div class="tco-container">
      <div class="tco-image-only tco-image-only--offset-none tco-image-only--image">
        <img
          class="tco-image-only-image"
          alt="A brief description of the image"
          src="https://www.thinkcompany.com/wp-content/uploads/2021/01/careers-header.jpg"
        />
        <svg class="tco-arrow tco-observe-a tco-arrow--connector-left active" viewbox="0 0 230 335" fill="none"><path d="M119.997 2.497C-53.501 71.997-2.003 186 71.998 197.5c62.515 9.715 114 15.999 147.43 126.071-10.29-7.4-28.95-20.139-21.26-11.894 9.612 10.306 24.024 22.706 28 19.65 3.181-2.445-1.965-32.412-4.935-47.09" pathLength="1" /></svg>
      </div>
    </div>
  </div>
  <div class="tco-container-wrapper tco-container-wrapper--glass">
    <div class="tco-container tco-container--center tco-container--mid" style="padding-top:min(34vw, 290px);">
      <div class="tco-text-only tco-text-only--center  ">
        <h2 class="tco-text-only-heading tco-type-display--sans">Our growing team of over 150 Thinkers can tackle some of your greatest challenges.</h2>
        <div class="tco-text-only-content tco-text-only-content--center tco-container-- tco-type-body--large">Chances are, you'll really like working with us.</div>
        <a href="/" class="tco-btn tco-btn--primary tco-btn--space-xl tco-animation-trigger">Replay animation</a>
      </div>
    </div>
  </div>
  `;
};

export const ConnectorLeft = ConnectorLeftTemplate.bind({});

const HeadlineLeftTemplate = () => {
  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--center tco-container--mid">
      <div class="tco-text-only tco-headline-left-container">
        <h2 class="tco-type-display--medium tco-headline--arrow">What makes our </br>process unique</h2>
        <svg class="tco-arrow tco-arrow--headline-left" viewbox="0 0 296 236" fill="none"><path d="M-2.147 66.281c25.829-32.906 88.724-89.107 133.68-50.66 56.195 48.057-34.322 159.375 2.63 191.849 36.951 32.474 172.16-19.921 123.283-15.824-48.878 4.096-33.423-1.684 19.279-10.116 42.162-6.745-4.998 32.05-33.847 52.29" pathLength="1" /></svg>
      </div>
    </div>
    <div class="tco-text-only tco-text-only--center">
      <a href="/" class="tco-btn tco-btn--primary tco-btn--space-xl tco-animation-trigger">Replay animation</a>
    </div>
  </div>
  `;
};

export const HeadlineLeft = HeadlineLeftTemplate.bind({});

export default {
  title: 'Archive / Arrows',
  component: [FullSectionRight, ConnectorLeft, HeadlineLeft],
  parameters: {
    component: FullSectionRight,
    controls: { hideNoControlsWarning: true }
  }
};
