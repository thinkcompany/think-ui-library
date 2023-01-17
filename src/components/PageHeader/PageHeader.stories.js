const alignments = ['left', 'center', 'right'];
const sizes = ['medium', 'extra-large', 'large', 'small'];

const Template = args => {
  const { image, bubbleBackground, textAlignment, eyebrow, heading, headingSize, lede, showCta } =
    args;

  return `
  <div class="tco-container-wrapper tco-text-media--page-header">
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

export const PageHeader = Template.bind({});

export default {
  title: 'Components / Page Header',
  args: {
    image: 'https://www.thinkcompany.com/wp-content/uploads/2020/12/events-illustration-1.png',
    bubbleBackground: false,
    textAlignment: alignments[0],
    eyebrow: '',
    heading: 'Adapting your digital experience is critical',
    headingSize: sizes[0],
    lede: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque nunc vel turpis tempor tincidunt at, posuere eros.',
    showCta: true
  },
  argTypes: {
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
    }
  }
};
