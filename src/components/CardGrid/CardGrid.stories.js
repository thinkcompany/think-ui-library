import { number, text, select } from '@storybook/addon-knobs';

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

const summaryCardSmall = () => {
  const heading = 'Full Experience & Service Design';
  const summary =
    'The your users interact within—designing for people wherever they click, tap, talk, touch, work, or play.';
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
  const columns = number('Column count', 3);
  const headingContainer = select(
    'Heading & lede container',
    containerSizes,
    'narrow'
  );
  const heading = text('Heading', 'Card grid section');
  const headingSize = select('Heading Size', sizes, 'small');
  const lede = text(
    'Lede',
    "This lede has an option for it's own container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque nunc vel turpis tempor tincidunt. Maecenas in felis suscipit, ornare felis at, posuere eros."
  );
  const ledeSize = select('Lede Size', ledeSizes, 'default');
  const ledeContainer = select('Lede Container', containerSizes, 'none');
  const textAlignment = select('Text Alignment', alignments, 'center');
  let containerOpen = '';
  let containerClose = '';

  if (heading || lede) {
    containerOpen =
      '<div class="tco-card-grid-header tco-card-grid-header--' +
      textAlignment +
      ' tco-container--' +
      headingContainer +
      '">';
    containerClose = '</div>';
  }

  return `
    <div class="tco-container-wrapper ${containerColor}">
      <div class="tco-container tco-container--${textAlignment}">
      ${containerOpen}
        ${
          heading
            ? `
            <h1 class="tco-card-grid-heading tco-type-display--${headingSize}">${heading}</h1>
          `
            : ''
        }
        ${
          lede
            ? `
            <div class="tco-card-grid-lede-container tco-container tco-container--${ledeContainer}">
              <p class="tco-card-grid-lede tco-type-body--${ledeSize}">${lede}</p>
            </div>
          `
            : ''
        }
      ${containerClose}
        <div class="tco-card-grid tco-card-grid--${columns}-column">
          ${summaryCard()}
          ${summaryCardSmall()}
          ${summaryCard()}
          ${summaryCardSmall()}
          ${summaryCard()}
          ${summaryCard()}
        </div>
      </div>
    </div>
  `;
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
