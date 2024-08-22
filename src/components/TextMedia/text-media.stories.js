const colors = ['default', 'glass'];
const alignments = ['left', 'center', 'right'];
const sizes = [
  'small-24',
  'small',
  'medium-36',
  'medium-42',
  'medium-48',
  'medium',
  'large-64',
  'large-80',
  'large',
  'extra-large'
];

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
    showTeaser
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
        <div class="tco-text-media--content tco-text-media--content-text tco-text-media--content-text--${textAlignment}">
          ${
            eyebrow
              ? `
            <p class="tco-text-media--eyebrow tco-type-eyebrow">${eyebrow}</p>
            `
              : ''
          }

          <h2 class="tco-text-media--heading tco-type-display--${headingSize}">${heading}</h2>
          <p class="tco-text-media--lede tco-type-body--medium">${lede}</p>
          ${
            showCta
              ? `
            <a href="#" class="tco-text-media--cta tco-btn tco-btn--primary">Learn More</a>
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
        <div class="tco-text-media--content tco-text-media--content-media tco-text-media--content-media--${mediaOrientation} ${
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
    alignment: alignments[0],
    bubbleBackground: true,
    textAlignment: alignments[0],
    showCta: true,
    showTeaser: false,
    eyebrow: 'Text and Image',
    heading: 'Technology Integration',
    headingSize: sizes[2],
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
