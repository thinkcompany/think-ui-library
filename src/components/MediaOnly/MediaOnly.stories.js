const offsets = ['none', 'top', 'bottom'];
const mediaTypes = ['image', 'video'];

const Template = args => {
  const { offset, imgSrc, videoSrc, mediaType } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-image-only tco-image-only--offset-${offset} tco-image-only--${mediaType}">
        ${
          mediaType === 'image'
            ? `<img class="tco-image-only-image" alt="A brief description of the image" src="${imgSrc}" />`
            : `${videoSrc}`
        }
      </div>
    </div>
  </div>`;
};

export const MediaOnly = Template.bind({});

export default {
  title: 'Components / Media Only',
  args: {
    offset: offsets[0],
    mediaType: mediaTypes[0],
    imgSrc:
      'https://www.thinkcompany.com/wp-content/uploads/2021/01/careers-header.jpg',
    videoSrc:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/StKrqfrOkWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  argTypes: {
    imgSrc: {
      name: 'image source',
      control: 'text'
    },
    videoSrc: {
      name: 'video source'
    },
    mediaType: {
      name: 'media type',
      control: 'inline-radio',
      options: mediaTypes
    },
    offset: {
      name: 'vertical offset',
      control: 'inline-radio',
      options: offsets
    }
  }
};
