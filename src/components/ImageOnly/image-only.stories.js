import { select, text } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};

const offsets = {
  Default: '',
  Top: 'tco-image-only--offset-top',
  Bottom: 'tco-image-only--offset-bottom'
};

export const imageOnly = () => {
  const offset = select('Offset Image', offsets, offsets.Default);
  const imageSrc = text(
    'Image',
    'https://www.thinkcompany.com/wp-content/uploads/2021/01/careers-header.jpg'
  );

  return `
    <div class="tco-image-only ${offset}">
      <img class="tco-image-only-image" alt="A brief description of the image" src="${imageSrc}" />
    </div>`;
};

export const WithContainer = () => {
  const containerColor = select('Background Color', colors, colors.Default);

  return `
    <div class="tco-container-wrapper tco-container-wrapper--image-only ${containerColor}">
      <div class="tco-container">
        ${imageOnly()}
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Image Only'
};
