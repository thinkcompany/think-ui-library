import { select, text, boolean } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};
const alignments = ['center', 'left', 'right'];
const sizes = ['extra-large', 'large', 'medium', 'small'];

export const PageHeader = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const image = text('Image', 'https://placekitten.com/524/320');
  const bubbleBackground = boolean('Offset bubble background?', false);
  const textAlignment = select('Text Alignment', alignments, 'left');
  const eyebrow = text('Eyebrow', '');
  const heading = text(
    'Heading',
    'Adapting your digital experience is critical'
  );
  const headingSize = select('Heading Size', sizes, 'medium');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque nunc vel turpis tempor tincidunt at, posuere eros.'
  );
  const showCta = boolean('CTA', true);

  return `
  <div class="tco-container-wrapper ${containerColor} tco-text-media--page-header">
    <div class="tco-container tco-container--default">
      <div class="tco-text-media tco-text-media--align-left">
        <div class="tco-text-media-content tco-text-media-content-text tco-text-media-content-text--${textAlignment}">
          ${
            eyebrow
              ? `
            <p class="tco-text-media-eyebrow">${eyebrow}</p>
            `
              : ''
          }

          <h1 class="tco-text-media-heading tco-type-display--${headingSize}">${heading}</h1>
          <div class="tco-text-media-lede">
            <p>${lede}</p>
          </div>
          ${
            showCta
              ? `
            <a href="#" class="tco-btn tco-btn--primary">Learn More</a>
          `
              : ''
          }
        </div>

        <div class="tco-text-media-content tco-text-media-content-media ${
          bubbleBackground ? 'tco-text-media-content-media--background' : ''
        }">
          ${
            bubbleBackground
              ? `
            <div class="tco-text-media-container">
              <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
            </div>
          `
              : `
            <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
          `
          }

        </div>
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Page Header'
};
