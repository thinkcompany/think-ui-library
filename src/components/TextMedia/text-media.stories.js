import { select, text, boolean } from '@storybook/addon-knobs';
import { teaser } from '../Teaser/teaser.stories';

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};
const alignments = ['center', 'left', 'right'];
const sizes = ['extra-large', 'large', 'medium', 'small'];

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Glass);
  const alignment = select('Media Alignment', alignments, 'left');
  const image = text('Image', 'https://placekitten.com/524/320');
  //const image = text('Image', 'https://placekitten.com/390/524');
  const imageBackground = boolean('Image background?', true);
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

  // get media aspect ratio for background bubble style
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

  return /*html*/ `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default">
      <div class="tco-text-media tco-text-media--align-${alignment}">
        <div class="tco-text-media-content tco-text-media-content-text tco-text-media-content-text-${textAlignment}">
          ${
            numbered
              ? `
            <span class="tco-text-media--numbered">1</span>
          `
              : ''
          }
          ${
            eyebrow
              ? `
            <span class="tco-text-media-eyebrow">${eyebrow}</span>
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
    imageBackground ? 'tco-text-media-content-media--background' : ''
  }">
          ${
            imageBackground
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

export const PageHeader = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const image = text('Image', 'https://placekitten.com/524/524');
  const circleBackground = boolean('Circle background?', false);
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

  // // get media aspect ratio for background bubble style
  // const url = new URL(image);
  // const path = url.pathname;
  // const size = path.split('/');
  // const aspectRatio = size[1] / size[2];
  // let mediaOrientation;
  //
  // if( aspectRatio > 1) {
  //   mediaOrientation = 'wide';
  // } else {
  //   mediaOrientation = 'tall';
  // }

  return /*html*/ `
  <div class="tco-container-wrapper ${containerColor} tco-text-media--page-header">
    <div class="tco-container tco-container--default">
      <div class="tco-text-media tco-text-media--align-left ${
        circleBackground ? 'tco-text-media-content--media-background' : ''
      }">
        <div class="tco-text-media-content tco-text-media-content--text tco-text-media-content--text-${textAlignment}">
          ${
            eyebrow
              ? `
            <span class="tco-text-media-eyebrow">${eyebrow}</span>
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

        <div class="tco-text-media-content tco-text-media-content--media">
          <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
        </div>
    </div>
  </div>
  </div>`;
};

export default {
  title: 'Components / Text & Media'
};
