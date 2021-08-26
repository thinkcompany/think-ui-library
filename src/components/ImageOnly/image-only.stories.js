const offsets = ['none', 'top', 'bottom'];

const Template = args => {
  const { offset, src } = args;

  return `
    <div class="tco-image-only tco-image-only--offset-${offset}">
      <img class="tco-image-only-image" alt="A brief description of the image" src="${src}" />
    </div>`;
};

export const ImageOnly = Template.bind({});

ImageOnly.args = {
  src: 'https://www.thinkcompany.com/wp-content/uploads/2021/01/careers-header.jpg'
};

export default {
  title: 'Components / Image Only',
  args: {
    offset: offsets[0]
  },
  argTypes: {
    offset: {
      name: 'vertical offset',
      control: 'inline-radio',
      options: offsets
    }
  }
};
