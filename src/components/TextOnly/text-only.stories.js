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
  const textAlignment = select('Text Alignment', alignments, 'left');
  const eyebrow = text('Eyebrow', 'Text Only');
  const heading = text('Heading', 'Technology Integration');
  const headingSize = select('Heading Size', sizes, 'medium');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam. Maecenas dapibus orci vitae accumsan lacinia. Praesent dapibus ac leo ut aliquam. Praesent commodo hendrerit est.'
  );
  const ledeSize = select('Lede Size', ledeSizes, 'default');
  const ledeContainer = select('Lede Container', containerSizes, 'none');
  const showCta = boolean('CTA', true);
  const bubble = boolean('Bubble Background', false);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default">
      <div class="tco-text-only tco-text-only--${textAlignment} ${
    bubble ? ` tco-text-only--bubble` : ''
  }">
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
            <h1 class="tco-text-only-heading tco-type-display--${headingSize}">${heading}</h1>
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
  title: 'Components / Text Only'
};
