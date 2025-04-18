const sizes = ['default', 'mid', 'narrow', 'max'];
const verticalSpaces = ['default', 'slim', 'slim-top', 'slim-bottom'];
const colors = ['default', 'navy', 'blue', 'glass', 'tan', 'soft-white', 'purple', 'yellow'];

const Template = args => {
  const { color, containerSize, verticalSpace } = args;

  return `
  <div class="tco-container-wrapper tco-container-wrapper--${verticalSpace} tco-container-wrapper--${color}">
    <div class="tco-container tco-container--${containerSize}">
      <div class="tco-text-only tco-text-only--left ">
        <span class="tco-text-only-eyebrow">Text Only</span>
        <h1 class="tco-text-only-heading tco-type-display--medium">Technology Integration</h1>
        <div class="tco-text-only-content tco-text-only-content--left tco-container--none">
          <p class="tco-text-only-lede tco-type-body--default">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere, porta nunc lacinia, pharetra diam. Maecenas dapibus orci vitae accumsan lacinia. Praesent dapibus ac leo ut aliquam. Praesent commodo hendrerit est.</p>
        </div>
        <a href="#" class="tco-btn tco-btn--primary tco-text-only-cta">Learn More</a>
      </div>
    </div>
  </div>`;
};

export const Container = Template.bind({});

export default {
  title: 'Components / Container',
  args: {
    containerSize: sizes[0]
  },
  argTypes: {
    color: {
      name: 'colors',
      control: 'inline-radio',
      options: colors
    },
    containerSize: {
      name: 'container size',
      control: 'inline-radio',
      options: sizes
    },
    verticalSpace: {
      name: 'vertical spacing',
      control: 'inline-radio',
      options: verticalSpaces
    }
  }
};
