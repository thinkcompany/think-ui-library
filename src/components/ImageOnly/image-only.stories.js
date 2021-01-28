import { select, text, boolean } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};

const offsets = {
  Default: '',
  Top: 'tco-image-only--offset-top',
  Bottom: 'tco-image-only--offset-bottom'
};

export const imageOnly = () => {
  const containerColor = select('Background Color', colors, colors.Glass);
  const offset = select('Offset Image', offsets, offsets.Default);
  const imageSrc =
    'https://thinkstaging.wpengine.com/wp-content/uploads/2021/01/careers-header.jpg';

  return /*html*/ `
    <div class="tco-image-only ${offset}">
      <img class="tco-image-only-image" alt="Think Company employees working in office" src="${imageSrc}" />
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
