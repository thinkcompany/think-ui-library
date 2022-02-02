const colors = ['default', 'glass'];
const alignments = ['left', 'center', 'right'];
const sizes = ['small', 'medium', 'large', 'extra-large'];

export const TextAndMedia = args => {
  const {
    containerColor,
    alignment,
    image,
    bubbleBackground,
    textAlignment,
    eyebrow,
    heading,
    headingSize,
    lede,
    showCta,
    showTeaser,
    numbered
  } = args;

  const url = new URL(image);
  const path = url.pathname;
  const size = path.split('/');
  const h = size.pop();
  const w = size.slice(-1);
  const aspectRatio = w / h;

  let mediaOrientation;

  if (aspectRatio > 1) {
    mediaOrientation = 'wide';
  } else {
    mediaOrientation = 'tall';
  }

  return `
  <div class="tco-container-wrapper tco-container-wrapper--${containerColor}">
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
          ${
            showTeaser
              ? `
            <div class="tco-post-teaser">
            <div class=" tco-post-teaser-content">
              <p class="tco-post-teaser-eyebrow">From our blog</p>
              <h4 class="tco-post-teaser-title"><a href="#" class="tco-post-teaser-link">3 Fundamentals of Successful Product Design Teams</a></h4>

            </div>
          </div>
          `
              : ''
          }
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
  title: 'Components / Text And Media',
  args: {
    containerColor: colors[0],
    alignment: alignments[1],
    bubbleBackground: true,
    textAlignment: alignments[1],
    showCta: true,
    showTeaser: false,
    numbered: false,
    eyebrow: 'Text and Image',
    heading: 'Technology Integration',
    headingSize: sizes[0],
    image: 'https://picsum.photos/id/1025/524/320',
    lede: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque nunc vel turpis tempor tincidunt. Maecenas in felis suscipit, ornare felis at, posuere eros.'
  },
  argTypes: {
    containerColor: {
      name: 'background color',
      control: 'inline-radio',
      options: colors
    },
    alignment: {
      name: 'media alignment',
      control: 'inline-radio',
      options: alignments
    },
    textAlignment: {
      name: 'text alignment',
      control: 'inline-radio',
      options: alignments
    },
    headingSize: {
      name: 'heading size',
      control: 'inline-radio',
      options: sizes
    },
    bubbleBackground: {
      name: 'bubble background'
    },
    showCta: {
      name: 'show cta'
    },
    showTeaser: {
      name: 'show teaser'
    }
  }
};
