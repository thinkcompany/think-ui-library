import { select, text } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};

export const Default = () => {
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

export default {
  title: 'Components / Image Grid 2'
};
