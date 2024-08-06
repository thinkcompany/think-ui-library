const offsets = ['none', 'top', 'bottom'];
const mediaTypes = ['image', 'video'];

const ytLite = (videoId, videoTitle) => {
  return `
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/lite-youtube-embed/0.3.2/lite-yt-embed.js"></script>
      <lite-youtube videoid="${videoId}" params="&rel=0" style="background-image: url('https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp');">
        <a href="https://youtube.com/watch?v=${videoId}&rel=0" class="lty-playbtn" title="Play Video">
          <span class="tco-type-body--medium tco-video-ytlite--title">${videoTitle}</span>
        </a>
      </lite-youtube>
    `;
};

const Template = args => {
  const { offset, imgSrc, videoSrc, videoTitle, mediaType } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-image-only tco-image-only--offset-${offset} tco-image-only--${mediaType}">
        ${
          mediaType === 'image'
            ? `<img class="tco-image-only-image" alt="A brief description of the image" src="${imgSrc}" />`
            : `${ytLite(videoSrc, videoTitle)}`
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
    imgSrc: 'https://www.thinkcompany.com/wp-content/uploads/2021/01/careers-header.jpg',
    videoSrc: 'JogGfX6DTUk',
    videoTitle: 'Improving the donor journey | Chenora Burkett and Think Company | Client Stories'
  },
  argTypes: {
    imgSrc: {
      name: 'image source',
      control: 'text'
    },
    videoSrc: {
      name: 'video embed id'
    },
    videoTitle: {
      name: 'video title',
      control: 'text'
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
