const ledeSizes = ['default', 'large', 'sans-small'];
const containerSizes = ['default', 'mid', 'narrow', 'none'];

const Template = args => {
  const { heading, eyebrow, lede, container, cta } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--default tco-container--cta">
      <div class="tco-cta-banner">
        ${
          eyebrow
            ? `
          <p class="tco-cta-banner--eyebrow tco-type-eyebrow">${eyebrow}</p>
          `
            : ''
        }
        ${
          heading
            ? `
            <h3 class="tco-cta-banner--headline tco-type-display--large-80">${heading}</h3>
          `
            : ''
        }
        <div class="tco-cta-banner--lede tco-container--${container}">
          <p class="tco-type-body--medium">${lede}</p>
        </div>
        ${
          cta
            ? `
          <a href="#" class="tco-btn tco-btn--primary">Start a conversation</a>
        `
            : ''
        }
      </div>
    </div>
  </div>`;
};

export const CTABanner = Template.bind({});

export default {
  title: 'Components / CTA Banner',
  parameters: {
    component: CTABanner,
    componentSubtitle: 'The CTA block is displayed above the footer on all pages and posts.',
    docs: {
      description: {
        component:
          'Multiple CTAs can be created (CTA is a post type) in the CMS. Any CTA can be selected, or removed entirely, on a page by page basis.'
      }
    }
  },
  args: {
    eyebrow: 'Drop us a line',
    heading: 'Let&CloseCurlyQuote;s talk about your project',
    lede: 'We scope projects and build teams to meet your organization&CloseCurlyQuote;s unique design and development needs. ',
    ledeSize: ledeSizes[0],
    container: containerSizes[3],
    cta: true
  },
  argTypes: {
    eyebrow: {
      table: {
        type: { summary: 'text field' }
      }
    },
    heading: {
      description: 'Optionally select heading level in CMS',
      table: {
        type: { summary: 'text field' },
        defaultValue: { summary: '<h3>' }
      }
    },
    lede: {
      table: {
        type: { summary: 'wysiwyg' }
      }
    },
    cta: {
      description: 'URL field in CMS. Displays if url is entered.',
      table: {
        type: {
          summary: 'url',
          detail: 'Configurable link text, target= behavior',
          defaultValue: 'null'
        }
      }
    },
    container: {
      name: 'lede container',
      control: 'inline-radio',
      options: containerSizes,
      table: {
        type: { summary: 'radio' },
        defaultValue: { summary: 'mid' }
      }
    }
  }
};
