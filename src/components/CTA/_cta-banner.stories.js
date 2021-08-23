const ledeSizes = ['default', 'large', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];

const Template = args => {
  const { heading, eyebrow, lede, ledeSize, container, cta } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--default tco-container--cta">
      <div class="tco-text-only tco-text-only-cta tco-text-only--center">
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
            <h1 class="tco-text-only-heading tco-text-only-cta-heading tco-type-display--medium">${heading}</h1>
          `
            : ''
        }
        <div class="tco-text-only-content tco-text-only-content--center tco-container--${container}">
          <p class="tco-text-only-lede tco-type-body--${ledeSize}">${lede}</p>
        </div>
        ${
          cta
            ? `
          <a href="#" class="tco-btn tco-btn--primary tco-text-only-cta">Learn More</a>
        `
            : ''
        }
      </div>
      <svg class="tco-speech-bubble tco-speech-bubble--left" role="presentation" viewBox="0 0 107 84">
        <use xlink:href="/img/icons.svg#icon-speech-bubble-l"></use>
      </svg>

      <svg class="tco-speech-bubble tco-speech-bubble--right" role="presentation" viewBox="0 0 159 129">
        <use xlink:href="/img/icons.svg#icon-speech-bubble-r"></use>
      </svg>

    </div>
  </div>`;
};

export const CTABanner = Template.bind({});

export default {
  title: 'Components / CTA Banner',
  args: {
    eyebrow: 'Send us a postcard, drop us a line',
    heading: 'Interested in working with us?',
    lede:
      "We scope projects and build teams to meet your organization's unique design and development needs. Tell us about your project today to start the conversation.",
    ledeSize: ledeSizes[0],
    container: containerSizes[2],
    cta: true
  },
  argTypes: {
    ledeSize: {
      name: 'lede size',
      control: 'inline-radio',
      options: ledeSizes
    },
    container: {
      name: 'lede container',
      control: 'inline-radio',
      options: containerSizes
    }
  }
};
