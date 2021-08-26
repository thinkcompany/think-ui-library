const alignments = ['left', 'center', 'right'];
const sizes = ['small', 'medium', 'large', 'extra-large'];

const ledeSizes = ['large', 'default', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];

const Template = args => {
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

export const TextOnly = Template.bind({});

export default {
  title: 'Components / Text Only',
  component: TextOnly,
  args: {
    bubble: true,
    textAlignment: alignments[0],
    showCta: false,
    eyebrow: 'Welcome',
    heading: 'Think Company Design System',
    headingSize: sizes[1],
    lede: "The Think Company Design System includes styles, components, and patterns for various UI elements within the Think Company website. This library is intended to be used as a reference and guide for the design and development teams. What's included:</br><strong>Primitives</strong> are the foundational styles and components used throughout the Design System, including colors, typograhpy, and spacing. <strong>Controls & Inputs </strong> enable users to take actions, typically within a form. <strong>Components</strong> are the higher level building blocks of the Think Company site.",
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
