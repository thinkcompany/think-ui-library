import { number, select, text } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};
const sizes = ['extra-large', 'large', 'medium', 'small'];
const alignments = ['center', 'left', 'right'];

const imageItem = () => {
  const images = [
    '/img/logos/client-logo-nemours.svg',
    '/img/logos/client-logo-unitedway.svg',
    '/img/logos/client-logo-whyy.svg',
    '/img/logos/client-logo-andesa.svg',
    '/img/logos/client-logo-sanofi.svg'
  ];
  const image = images[Math.floor(Math.random() * images.length)];

  return `
    <div class="tco-image-grid-container">
      <img class="tco-image-grid-media" alt="Client image" src="${image}" />
    </div>`;
};

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const eyebrow = text('Eyebrow', 'Section for Logos');
  const heading = text('Heading', '');
  const headingSize = select('Heading Size', sizes, 'small');
  const textAlignment = select('Text alignment', alignments, 'center');
  const imageCount = number('Image count', 4);
  const imageItems = () => {
    let output = '';

    for (let index = 0; index < imageCount; index++) {
      output += imageItem();
    }

    return output;
  };

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container-image-grid-alignment-${textAlignment}">
    ${
      eyebrow
        ? `
      <span class="tco-text-media-eyebrow">${eyebrow}</span>
      `
        : ''
    }
    ${
      heading
        ? `
      <h1 class="tco-text-media-heading tco-type-display--${headingSize}">${heading}</h1>
      `
        : ''
    }
      <div class="tco-image-grid" style="--image-count: ${imageCount}">
        ${imageItems()}
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Image Grid'
};
