import { select, text, boolean } from '@storybook/addon-knobs';
import { teaser } from '../Teaser/teaser.stories';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};
const alignments = ['center', 'left', 'right'];
const sizes = ['extra-large', 'large', 'medium', 'small'];

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Glass);
  const alignment = select('Media Alignment', alignments, 'left');
  const image = text('Image', 'https://placekitten.com/524/320');
  const bubbleBackground = boolean('Image background bubble?', true);
  const textAlignment = select('Text Alignment', alignments, 'left');
  const eyebrow = text('Eyebrow', 'Text and Image');
  const heading = text('Heading', 'Technology Integration');
  const headingSize = select('Heading Size', sizes, 'small');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque nunc vel turpis tempor tincidunt. Maecenas in felis suscipit, ornare felis at, posuere eros.'
  );
  const showCta = boolean('CTA', true);
  const showTeaser = boolean('Show Teaser', false);
  const numbered = boolean('Numbered', false);

  const url = new URL(image);
  const path = url.pathname;
  const size = path.split('/');
  const aspectRatio = size[1] / size[2];

  let mediaOrientation;

  if (aspectRatio > 1) {
    mediaOrientation = 'wide';
  } else {
    mediaOrientation = 'tall';
  }

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default">
      <div class="tco-text-media tco-text-media--align-${alignment}">
        <div class="tco-text-media-content tco-text-media-content-text tco-text-media-content-text--${textAlignment}">
          ${
            numbered
              ? `
            <div class="tco-background-blob">
              <span class="tco-background-blob-content">1</span>
              <svg class="tco-background-blob-icon" width="40" viewBox="0 0 40 40" role="img" aria-labelledby="1">
                <use xlink:href="/img/icons.svg#icon-blob-1"></use>
              </svg>
            </div>
          `
              : ''
          }
          ${
            eyebrow
              ? `
            <p class="tco-text-media-eyebrow">${eyebrow}</p>
            `
              : ''
          }

          <h1 class="tco-text-media-heading tco-type-display--${headingSize}">${heading}</h1>
          <p class="tco-text-media-lede">${lede}</p>
          ${
            showCta
              ? `
            <a href="#" class="tco-btn tco-btn--primary">Learn More</a>
          `
              : ''
          }
          ${showTeaser ? teaser() : ''}
        </div>
        <div class="tco-text-media-content tco-text-media-content-media tco-text-media-content-media--${mediaOrientation} ${
    bubbleBackground ? 'tco-text-media-content-media--background' : ''
  }">
          ${
            bubbleBackground
              ? `
            <div class="tco-text-media-container tco-text-media-container--${mediaOrientation}">
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
  title: 'Components / Text & Media'
};
