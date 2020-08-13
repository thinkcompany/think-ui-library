import { number } from '@storybook/addon-knobs';

const summaryCard = () => {
  const heading = 'Full Experience & Service Design';
  const summary =
    'The best experiences are consistent across all channels, so we always consider the entire ecosystem your users interact within—designing for people wherever they click, tap, talk, touch, work, or play.';
  const image =
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/themes/tbiv3/img/svgs/services-full-experience-service.svg';

  return `
  <div class="tco-card tco-card--summary">
    <a href="#" class="tco-card-link">
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="An adorable kitten" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        <h3 class="tco-card-content-heading">${heading}</h3>
        <p class="tco-card-content-description">${summary}</p>
      </div>
    </a>
  </div>`;
};

const postCard = size => {
  const image =
    'https://thinkcompany.com/wp-content/uploads/2015/12/ss-internetprovider-mobile-top.jpg';
  const eyebrow = 'Case Study';
  const heading = 'Mobile Product Strategy';
  const description =
    'We helped one of the world’s largest media companies design and launch a new product and service line.';

  return `
  <div class="tco-card tco-card--post tco-card--post--${size}">
    <a href="#" class="tco-card-link">
      <div class="tco-card-image-container">
        <img class="tco-card-image" alt="Card image" src="${image}" />
      </div>
      <div class="tco-card-content-container">
        ${
          eyebrow
            ? '<span class="tco-card-content-eyebrow">' + eyebrow + '</span>'
            : ''
        }
        <h3 class="tco-card-content-heading">${heading}</h3>
        <p class="tco-card-content-description">${description}</p>
      </div>
    </a>
  </div>`;
};

const personCard = () => {
  const name = 'Abby DePrimo';
  const title = 'Vice President, Design Operations';
  const image =
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AbbyDePrimo_Web.jpg';

  return `
  <div class="tco-card tco-card--person" style="background-image: url(${image})">
    <a href="#" class="tco-card-link">
      <div class="tco-card-content-container">
        <h3 class="tco-card-content-heading">${name}</h3>
        <p class="tco-card-content-description">${title}</p>
      </div>
    </a>
  </div>`;
};

export const oneColumn = () => {
  const columns = number('Column count', 1);

  return `
  <div class="tco-card-grid tco-card-grid--${columns}-column">
    ${postCard('xlarge')}
  </div>`;
};

export const twoColumn = () => {
  const columns = number('Column count', 2);

  return `
  <div class="tco-card-grid tco-card-grid--${columns}-column">
    ${postCard()}
    ${postCard()}
  </div>`;
};

export const threeColumn = () => {
  const columns = number('Column count', 3);

  return `
  <div class="tco-card-grid tco-card-grid--${columns}-column">
    ${summaryCard()}
    ${summaryCard()}
    ${summaryCard()}
  </div>`;
};

export const fourColumn = () => {
  const columns = number('Column count', 4);

  return `
  <div class="tco-card-grid tco-card-grid--${columns}-column">
    ${postCard('small')}
    ${postCard('small')}
    ${postCard('small')}
    ${postCard('small')}
  </div>`;
};

export const fiveColumn = () => {
  const columns = number('Column count', 5);

  return `
  <div class="tco-card-grid tco-card-grid--${columns}-column">
    ${personCard()}
    ${personCard()}
    ${personCard()}
    ${personCard()}
    ${personCard()}
  </div>`;
};

export default {
  title: 'Components / Card Grid'
};
