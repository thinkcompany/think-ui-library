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

export const Logos = () => {
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
    <div class="tco-container tco-container--${textAlignment}">
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

export const Grid2 = () => {
  const containerColor = select('Background Color', colors, colors.Glass);
  const imageA = text('Image A', 'https://placekitten.com/600/624');
  const imageB = text('Image B', 'https://placekitten.com/600/624');

  return `
    <div class="tco-container-wrapper tco-container-wrapper--image-only ${containerColor}">
      <div class="tco-container">
        <div class="tco-image-grid-2">
          <div class="tco-image-grid-2-container">
            <img class="tco-image-only-image" alt="Description of image A" src="${imageA}" />
          </div>
          <div class="tco-image-grid-2-container">
            <img class="tco-image-only-image" alt="Description of image B" src="${imageB}" />
          </div>
        </div>
      </div>
    </div>`;
};

export const Grid4 = () => {
  const imageA = text(
    'Image A',
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/photo-studios-philly-feature.jpg'
  );
  const imageB = text(
    'Image B',
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg'
  );
  const imageC = text(
    'Image C',
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg'
  );
  const imageD = text(
    'Image D',
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/photo-studios-philly-feature.jpg'
  );

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-image-grid-4">
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image A" src="${imageA}" />
          </div>
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image B" src="${imageB}" />
          </div>
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image C" src="${imageC}" />
          </div>
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image D" src="${imageD}" />
          </div>
        </div>
      </div>
    </div>`;
};

export default {
  title: 'Components / Image Grids'
};
