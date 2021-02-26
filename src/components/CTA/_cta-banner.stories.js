import { select, text, boolean } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};
const ledeSizes = ['large', 'default', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const eyebrow = text('Eyebrow', 'Send us a postcard, drop us a line');
  const heading = text('Heading', 'Interested in working with us?');
  const lede = text(
    'Lede',
    "We scope projects and build teams to meet your organization's unique design and development needs. Tell us about your project today to start the conversation."
  );
  const ledeSize = select('Lede Size', ledeSizes, 'default');
  const ledeContainer = select('Lede Container', containerSizes, 'narrow');
  const showCta = boolean('CTA', true);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default tco-container--cta">
      <div class="tco-text-only tco-text-only-cta tco-text-only--center">
        ${
          eyebrow
            ? `
          <span class="tco-text-only-eyebrow">${eyebrow}</span>
          `
            : ''
        }
        ${
          heading
            ? `
            <h1 class="tco-text-only-heading tco-text-only-cta-heading tco-type-display--medium">${heading}</h1>
          `
            : ''
        }
        <div class="tco-text-only-content tco-text-only-content--center tco-container--${ledeContainer}">
          <p class="tco-text-only-lede tco-type-body--${ledeSize}">${lede}</p>
        </div>
        ${
          showCta
            ? `
          <a href="#" class="tco-btn tco-btn--primary tco-text-only-cta">Learn More</a>
        `
            : ''
        }
      </div>
      <svg class="tco-speech-bubble tco-speech-bubble--left" role="presentation" viewBox="0 0 107 84">
        <use xlink:href="/img/icons.svg#icon-speech-bubble-l"></use>
      </svg>

      <svg class="tco-speech-bubble tco-speech-bubble--right" role="presentation" viewBox="0 0 159 129">
        <use xlink:href="/img/icons.svg#icon-speech-bubble-r"></use>
      </svg>

    </div>
  </div>`;
};

export default {
  title: 'Components / CTA Banner'
};
