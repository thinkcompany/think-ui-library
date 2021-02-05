import { number, text, select } from '@storybook/addon-knobs';

const baseCard = () => {
  const eyebrow = text('Eyebrow', 'Understand');
  const heading = 'Approaching digital transformation';
  const image = 'img/blog-hero-default-5x4.jpg';

  return `
    <div class="tco-card">
      <a href="#" class="tco-card-link">
        <div class="tco-card-image-container">
          <img class="tco-card-image" alt="A brilliant description of the image" src="${image}" />
        </div>
        <div class="tco-card-content-container">
        ${
          eyebrow
            ? `
          <span class="tco-card-eyebrow">${eyebrow}</span>
          `
            : ''
        }
          <h3 class="tco-card-content-heading">
            ${heading}
            <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
              <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
          </svg>
          </h3>
        </div>
      </a>
    </div>
  `;
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
    'Section heading container',
    containerSizes,
    'narrow'
  );
  const heading = text('Section heading', 'Card grid section');
  const headingSize = select('Section heading Size', sizes, 'small');
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
      '<div class="tco-card-grid-header tco-container--' +
      textAlignment +
      ' tco-container--' +
      headingContainer +
      '">';
    containerClose = '</div>';
  }

  return `
    <div class="tco-container-wrapper ${containerColor}">
      <div class="tco-container">
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
          ${baseCard()}
          ${baseCard()}
          ${baseCard()}
          ${baseCard()}
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Card Grid'
};
