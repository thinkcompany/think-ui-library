const alignments = ['left', 'center', 'right'];
const sizes = ['small', 'medium', 'large', 'extra-large'];

const ledeSizes = ['large', 'default', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];

export const TextOnly = args => {
  const {
    textAlignment,
    eyebrow,
    heading,
    headingSize,
    lede,
    ledeSize,
    ledeContainer,
    showCta,
    bubble
  } = args;
  // const textAlignment = select('Text Alignment', alignments, 'left');
  // const eyebrow = text('Eyebrow', 'Text Only');
  // const heading = text('Heading', 'Technology Integration');
  // const headingSize = select('Heading Size', sizes, 'medium');
  // const lede = text(
  //   'Lede',
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam. Maecenas dapibus orci vitae accumsan lacinia. Praesent dapibus ac leo ut aliquam. Praesent commodo hendrerit est.'
  // );
  // const ledeSize = select('Lede Size', ledeSizes, 'default');
  // const ledeContainer = select('Lede Container', containerSizes, 'none');
  // const showCta = boolean('CTA', true);
  // const bubble = boolean('Bubble Background', false);

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-text-only tco-text-only--${textAlignment} ${
    bubble ? ` tco-text-only--bubble` : ''
  }">
        ${
          eyebrow
            ? `
          <span class="tco-text-only-eyebrow">${eyebrow}</span>
          `
            : ''
        }
        ${
          heading
            ? `
            <h1 class="tco-text-only-heading tco-type-display--${headingSize}">${heading}</h1>
          `
            : ''
        }
        <div class="tco-text-only-content tco-text-only-content--${textAlignment} tco-container--${ledeContainer}">
          <p class="tco-text-only-lede tco-type-body--${ledeSize}">${lede}</p>
        </div>
        ${
          showCta
            ? `
          <a href="#" class="tco-btn tco-btn--primary tco-text-only-cta">Learn More</a>
        `
            : ''
        }
      </div>
      </div>
    </div>

    `;
};

export default {
  title: 'Components / Text Only',
  args: {
    bubble: false,
    textAlignment: alignments[0],
    showCta: true,
    eyebrow: 'Text only',
    heading: 'Technology Integration',
    headingSize: sizes[1],
    lede:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam. Maecenas dapibus orci vitae accumsan lacinia. Praesent dapibus ac leo ut aliquam. Praesent commodo hendrerit est.',
    ledeSize: ledeSizes[1],
    ledeContainer: containerSizes[0]
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
    ledeContainer: {
      name: 'lede container',
      control: 'inline-radio',
      options: containerSizes
    },
    ledeSize: {
      name: 'lede size',
      control: 'inline-radio',
      options: ledeSizes
    },
    bubble: {
      name: 'bubble background'
    },
    showCta: {
      name: 'show cta'
    }
  }
};
