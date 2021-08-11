import { number, text, select } from '@storybook/addon-knobs';
import {
  summaryCard,
  personCard,
  postCard,
  calloutCard,
  mediaCard,
  jobCard
} from '../Card/Card.stories';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};

const cards = ['base', 'summary', 'person', 'post', 'callout', 'media', 'job'];
const alignments = ['center', 'left', 'right'];
const sizes = ['extra-large', 'large', 'medium', 'small'];
const ledeSizes = ['large', 'default', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const columns = number('Column count', 3);
  const cardCount = number('Card count', 6);
  const cardType = select('Card type', cards, 'post');
  const cardItems = () => {
    let output = '';

    let card = '';

    if (cardType === 'post') {
      card = postCard();
    } else if (cardType === 'summary') {
      card = summaryCard();
    } else if (cardType === 'person') {
      card = personCard();
    } else if (cardType === 'callout') {
      card = calloutCard();
    } else if (cardType === 'media') {
      card = mediaCard();
    } else if (cardType === 'job') {
      card = jobCard();
    }

    for (let i = 0; i < cardCount; i++) {
      output += card;
    }

    return output;
  };

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
          ${cardItems()}
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Card Grid'
};
