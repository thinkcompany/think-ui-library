import { select, text } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};

export const Image2 = () => {
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

export const Image4 = () => {
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
  title: 'Components / Image Grid 2 - 4'
};
