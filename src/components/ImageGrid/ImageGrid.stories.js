import { number } from '@storybook/addon-knobs';

const imageItem = () => {
  const image =
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/themes/tbiv3/img/svgs/award-inc5000.svg';
  const caption = '7 YEARS ON THE LIST';

  return `
    <div class="tco-image-grid-container">
      <img class="tco-image-grid-media" alt="Client image" src="${image}" />
      ${
        caption
          ? '<span class="tco-image-grid-caption">' + caption + '</span>'
          : ''
      }
    </div>`;
};

export const Main = () => {
  const imageItems = () => {
    const imageCount = number('Image count', 4);

    let output = '';

    for (let index = 0; index < imageCount; index++) {
      output += imageItem();
    }

    return output;
  };

  return `
  <div class="tco-image-grid">
    ${imageItems()}
  </div>`;
};

export default {
  title: 'Components / Image Grid'
};
