import { select, text, boolean } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};
const alignments = ['center', 'left', 'right'];
const sizes = ['extra-large', 'large', 'medium', 'small'];

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Glass);
  const textAlignment = select('Text Alignment', alignments, 'left');
  const eyebrow = text('Eyebrow', 'Text Only');
  const heading = text('Heading', 'Technology Integration');
  const headingSize = select('Heading Size', sizes, 'large');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam. Maecenas dapibus orci vitae accumsan lacinia. Praesent dapibus ac leo ut aliquam. Praesent commodo hendrerit est. Etiam aliquam imperdiet mi, at vulputate sem condimentum quis. Vivamus pellentesque sed velit et pulvinar. </br>Quisque semper erat vestibulum ex congue tempus. Morbi cursus efficitur nulla vitae pellentesque.'
  );
  const showCta = boolean('CTA', true);

  return /*html*/ `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default">
      <div class="tco-text-only tco-text-only--${textAlignment}">
        ${
          eyebrow
            ? `
          <span class="tco-text-only-eyebrow">${eyebrow}</span>
          `
            : ''
        }
        <h1 class="tco-text-only-heading tco-type-display--${headingSize}">${heading}</h1>
        <div class="tco-text-only-content">
          <p class="tco-text-only-lede">${lede}</p>
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
