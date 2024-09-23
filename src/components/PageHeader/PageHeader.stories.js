const sizes = ['medium-36', 'medium', 'large-80', 'extra-large'];

const Template = args => {
  const { eyebrow, heading, headingSize, lede, showCta } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--default">
      <div class="tco-page-header tco-page-header--reduced tco-text-only tco-text-only--align-right ">
        <div class="tco-text-media-content tco-text-media-content-text">
          ${
            eyebrow
              ? `
            <p class="tco-page-header--eyebrow tco-type-eyebrow">${eyebrow}</p>
            `
              : ''
          }
          <h1 class="tco-type-display--${headingSize} tco-page-header--headline">${heading}</h1>
          <div class="tco-container--mid tco-container--left">
            <p class="tco-page-header--lede tco-type-body--extra-large">${lede}</p>
          </div>
          ${
            showCta
              ? `
            <div class="tco-page-header--reduced-cta-group">
              <a href="#career-posts" class="tco-text-only-cta tco-btn tco-btn--primary tco-text-only-cta tco-careers-posts--end">See open roles</a>
            </div>
          `
              : ''
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
    eyebrow: 'Careers at Think',
    heading: 'Think with us',
    headingSize: sizes[2],
    lede: "What's the best thing about working at Think Company? Easy: the people. Come join our curious, creative, and diverse team.",
    showCta: true
  },
  argTypes: {
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
