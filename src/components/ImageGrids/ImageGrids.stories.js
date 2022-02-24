const sizes = ['large', 'extra-large', 'medium', 'small'];
const alignments = ['center', 'left', 'right'];
const output = ['shuffle'];

const LogoTemplate = args => {
  const {
    eyebrow,
    heading,
    headingSize,
    textAlignment,
    imageCount,
    randomize
  } = args;

  const imageItem = i => {
    const images = [
      {
        logo: 'nemours',
        width: 335,
        height: 113
      },
      {
        logo: 'unitedway',
        width: 312,
        height: 133
      },
      {
        logo: 'whyy',
        width: 335,
        height: 112
      },
      {
        logo: 'andesa',
        width: 270,
        height: 159
      },
      {
        logo: 'sanofi',
        width: 249,
        height: 199
      },
      {
        logo: 'aws',
        width: 1080,
        height: 405
      },
      {
        logo: 'angularJS',
        width: 2500,
        height: 679
      },
      {
        logo: 'react',
        width: 1080,
        height: 363
      },
      {
        logo: 'salesforce',
        width: 1080,
        height: 754
      },
      {
        logo: 'veeva',
        width: 1080,
        height: 251
      }
    ];

    let image = images[i];

    if (randomize == 'shuffle') {
      image = images[Math.floor(Math.random() * images.length)];
    }

    return `
      <div class="tco-image-grid-container">
        <div class="tco-image-grid-media" style="--logo-w:${image.width}; --logo-h:${image.height};">
          <svg class="tco-image-grid-media tco-image-grid-media--svg" role="presentation">
            <use xlink:href="/img/logos.svg#icon-logo-${image.logo}"></use>
          </svg>
        </div>
      </div>`;
  };

  const imageItems = () => {
    let output = '';

    for (let index = 0; index < imageCount; index++) {
      output += imageItem(index);
    }

    return output;
  };

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--${textAlignment}">
    ${
      eyebrow
        ? `
      <span class="tco-text-media-eyebrow">${eyebrow}</span>
      `
        : ''
    }
    ${
      heading
        ? `
      <h1 class="tco-text-media-heading tco-type-display--${headingSize}">${heading}</h1>
      `
        : ''
    }
      <div class="tco-image-grid" style="--image-count: ${imageCount}">
        ${imageItems()}
      </div>
    </div>
  </div>`;
};

export const Logos = LogoTemplate.bind({});

Logos.args = {
  eyebrow: 'Section for Logos',
  heading: '',
  headingSize: sizes[0],
  textAlignment: alignments[0],
  imageCount: 10
};

Logos.argTypes = {
  headingSize: {
    name: 'heading size',
    control: 'inline-radio',
    options: sizes
  },
  textAlignment: {
    name: 'text alignment',
    control: 'inline-radio',
    options: alignments
  },
  imageCount: {
    name: 'image count',
    control: 'number'
  },
  randomize: {
    name: 'shuffle logos',
    control: 'inline-check',
    options: output
  }
};

const Grid2Template = args => {
  const { imageA, imageB } = args;

  return `
    <div class="tco-container-wrapper tco-container-wrapper--image-only">
      <div class="tco-container">
        <div class="tco-image-grid-2">
          <div class="tco-image-grid-2-container">
            <img class="tco-image-only-image" alt="Description of image A" src="${imageA}" />
          </div>
          <div class="tco-image-grid-2-container">
            <img class="tco-image-only-image" alt="Description of image B" src="${imageB}" />
          </div>
        </div>
      </div>
    </div>`;
};

export const Grid2 = Grid2Template.bind({});

Grid2.args = {
  imageA:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/photo-studios-philly-feature.jpg',
  imageB:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg'
};

const Grid3Template = args => {
  const { imageA, imageB, imageC } = args;

  return `
    <div class="tco-container-wrapper tco-container-wrapper--image-only">
      <div class="tco-container">
        <div class="tco-image-grid-3">
          <div class="tco-image-grid-3-container">
            <img class="tco-image-only-image" alt="Description of image A" src="${imageA}" />
          </div>
          <div class="tco-image-grid-3-container">
            <img class="tco-image-only-image" alt="Description of image B" src="${imageB}" />
          </div>
          <div class="tco-image-grid-3-container">
            <img class="tco-image-only-image" alt="Description of image C" src="${imageC}" />
          </div>
        </div>
      </div>
    </div>`;
};

export const Grid3 = Grid3Template.bind({});

Grid3.args = {
  imageA:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/photo-studios-philly-feature.jpg',
  imageB:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg',
  imageC:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg'
};

const Grid4Template = args => {
  const { imageA, imageB, imageC, imageD } = args;

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container">
        <div class="tco-image-grid-4">
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image A" src="${imageA}" />
          </div>
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image B" src="${imageB}" />
          </div>
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image C" src="${imageC}" />
          </div>
          <div class="tco-image-grid-4-container">
            <img class="tco-image-only-image" alt="Description of image D" src="${imageD}" />
          </div>
        </div>
      </div>
    </div>`;
};

export const Grid4 = Grid4Template.bind({});

Grid4.args = {
  imageA:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/photo-studios-philly-feature.jpg',
  imageB:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg',
  imageC:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg',
  imageD:
    'https://www.thinkcompany.com/wp-content/uploads/2020/12/photo-studios-philly-feature.jpg'
};

export default {
  title: 'Components / Image Grids'
};
