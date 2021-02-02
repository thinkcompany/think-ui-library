import { select, text, boolean } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};
const alignments = ['center', 'left', 'right'];
const sizes = ['extra-large', 'large', 'medium', 'small'];
const ledeSizes = ['large', 'default', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const textAlignment = select('Text Alignment', alignments, 'center');
  const eyebrow = text('Eyebrow', 'Send us a postcard, drop us a line');
  const heading = text('Heading', 'Interested in working with us?');
  const headingSize = select('Heading Size', sizes, 'medium');
  const lede = text(
    'Lede',
    "We scope projects and build teams to meet your organization's unique design and development needs. Tell us about your project today to start the conversation."
  );
  const ledeSize = select('Lede Size', ledeSizes, 'default');
  const ledeContainer = select('Lede Container', containerSizes, 'narrow');
  const showCta = boolean('CTA', true);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default">
      <div class="tco-text-only tco-text-only-cta tco-text-only--${textAlignment}">
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
            <h1 class="tco-text-only-heading tco-text-only-cta-heading tco-type-display--${headingSize}">${heading}</h1>
          `
            : ''
        }
        <div class="tco-text-only-content tco-text-only-content--${textAlignment} tco-container--${ledeContainer}">
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
    </div>
  </div>`;
};

export default {
  title: 'Components / CTA Banner'
};
