const alignments = ['left', 'center', 'right'];
const displaySizes = [
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

const ledeSizes = ['extra-large', 'large', 'medium', 'default', 'small'];
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
          <p class="tco-type-eyebrow tco-text-only--eyebrow">${eyebrow}</p>
          `
            : ''
        }
        ${
          heading
            ? `
            <h1 class="tco-text-only--heading tco-type-display--${headingSize}">${heading}</h1>
          `
            : ''
        }
        <div class="tco-text-only-content tco-text-only-content--${textAlignment} tco-container--${ledeContainer}">
          <p class="tco-text-only--lede tco-type-body--${ledeSize}">${lede}</p>
        </div>
        ${
          showCta
            ? `
          <a href="#" class="tco-btn tco-btn--primary tco-text-only--cta">Learn More</a>
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
    headingSize: displaySizes[7],
    lede: 'The Think Company Design System includes styles, components, and patterns for various UI elements within the Think Company website. This library is intended to be used as a reference and guide for the design and development teams. Primitives are the foundational styles and components used throughout the Design System, including colors, typography, and spacing. Controls & Inputs enable users to take actions, typically within a form. Components are the higher level building blocks of the Think Company site.',
    ledeSize: ledeSizes[2],
    ledeContainer: containerSizes[2]
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
      options: displaySizes
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
