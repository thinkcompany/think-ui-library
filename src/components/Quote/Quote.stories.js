const alignments = ['center', 'left', 'right'];

const QuoteTemplate = args => {
  const { quote, textAlignment, authorName, authorTitle } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--mid">
      <div class="tco-quote-wrapper tco-quote-wrapper-${textAlignment}">
        <div class="tco-background-blob tco-background-blob--quote">
          <svg class="tco-background-blob-content tco-background-blob-content--quote" width="18px" height="13px" viewBox="0 0 18 13" role="presentation">
            <use xlink:href="/img/icons.svg#icon-quotemark"></use>
          </svg>
          <svg class="tco-background-blob-icon" width="40" viewBox="0 0 40 40" role="presentation">
            <use xlink:href="/img/icons.svg#icon-blob-1"></use>
          </svg>
        </div>
        <blockquote class="tco-quote">
          <p class="tco-quote-text">${quote}</p>
          <div class="tco-quote-footer">
            <cite class="tco-quote-name">${authorName}</cite>
            ${
              authorTitle
                ? `
              <span class="tco-quote-title">${authorTitle}</span>
              `
                : ''
            }

          </div>
        </blockquote>
      </div>
    </div>
  </div>
  `;
};

export const Quote = QuoteTemplate.bind({});

const QuoteCarouselTemplate = args => {
  const { quote, authorName, authorTitle } = args;

  return `
    <div class="tco-container-wrapper tco-container-wrapper--glass">
      <div class="tco-container tco-container--narrow">
        <div class="tco-quote-wrapper tco-quote-wrapper--carousel tco-quote-wrapper-center">
          <blockquote class="tco-quote tco-quote--slide">
            <p class="tco-type-display--small">${quote}</p>
            <div class="tco-quote-footer">
              <cite class="tco-type-body--large">${authorName}</cite>
              ${
                authorTitle
                  ? `
                <span class="tco-type-eyebrow">${authorTitle}</span>
                `
                  : ''
              }

            </div>
          </blockquote>
          <svg class="tco-icon tco-icon--lquo" viewBox="0 0 197 154" role="presentation">
            <use xlink:href="/img/icons.svg#icon-lquo"></use>
          </svg>
        </div>
      </div>
    </div>
  `;
};

export const QuoteCarousel = QuoteCarouselTemplate.bind({});

QuoteCarousel.args = {
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  authorName: 'Author O. Quote',
  authorTitle: 'Person who said it'
};

export default {
  title: 'Components / Quote',
  args: {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    textAlignment: alignments[0],
    authorName: 'Fake Name',
    authorTitle: 'Acme Company'
  },
  argTypes: {
    quote: {
      name: 'quote'
    },
    authorName: {
      name: 'author name'
    },
    authorTitle: {
      name: 'author title'
    },
    textAlignment: {
      name: 'text alignment',
      control: 'inline-radio',
      options: alignments
    }
  }
};
