const sizes = ['large', 'extra-large', 'medium', 'small'];
const alignments = ['center', 'left', 'right'];
const output = ['shuffle'];

const LogoTemplate = args => {
  const { eyebrow, heading, headingSize, textAlignment, imageCount, randomize } = args;

  const imageItem = i => {
    const images = [
      {
        logo: 'adp',
        width: 250,
        height: 115
      },
      {
        logo: 'chop',
        width: 250,
        height: 170
      },
      {
        logo: 'amerisourcebergen',
        width: 250,
        height: 26
      },
      {
        logo: 'clarivate',
        width: 250,
        height: 86
      },
      {
        logo: 'comcast',
        width: 250,
        height: 88
      },
      {
        logo: 'eventbrite',
        width: 250,
        height: 45
      },
      {
        logo: 'johnsonandjohnson',
        width: 250,
        height: 46
      },
      {
        logo: 'templeuniversity',
        width: 250,
        height: 55
      },
      {
        logo: 'unitedway',
        width: 250,
        height: 106
      },
      {
        logo: 'vanguard',
        width: 250,
        height: 54
      },
      {
        logo: 'comcast',
        width: 250,
        height: 88
      },
      {
        logo: 'amerisourcebergen',
        width: 250,
        height: 26
      },
      {
        logo: 'johnsonandjohnson',
        width: 250,
        height: 46
      },
      {
        logo: 'templeuniversity',
        width: 250,
        height: 55
      },
      {
        logo: 'unitedway',
        width: 250,
        height: 106
      },
      {
        logo: 'vanguard',
        width: 250,
        height: 54
      },
      {
        logo: 'amerisourcebergen',
        width: 250,
        height: 26
      },
      {
        logo: 'johnsonandjohnson',
        width: 250,
        height: 46
      },
      {
        logo: 'templeuniversity',
        width: 250,
        height: 55
      },
      {
        logo: 'unitedway',
        width: 250,
        height: 106
      },
      {
        logo: 'vanguard',
        width: 250,
        height: 54
      }
    ];

    let image = images[i];

    if (randomize === 'shuffle') {
      image = images[Math.floor(Math.random() * images.length)];
    }

    return `
      <div class="tco-image-grid-container">
        <img src="/img/logos/client-logo-${image.logo}.png" width="${image.width}" height="${image.height}" alt="${image.logo} logo" />
      </div>`;
  };

  const imageItems = () => {
    let imageOutput = '';

    for (let index = 0; index < imageCount; index++) {
      imageOutput += imageItem(index);
    }

    return imageOutput;
  };

  return `
  <div class="tco-container-wrapper tco-container-wrapper--blue">
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
      <div class="tco-image-grid tco-image-grid--${imageCount}" >
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

Logos.parameters = {
  component: Logos,
  docs: {
    description: {
      component:
        'Guidelines: <strong>format </strong>transparent png | <strong>upload size</strong> 250px wide'
    }
  }
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
  imageB: 'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg'
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
  imageB: 'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg',
  imageC: 'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg'
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
  imageB: 'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg',
  imageC: 'https://www.thinkcompany.com/wp-content/uploads/2020/12/studios-conshy-header.jpg',
  imageD: 'https://www.thinkcompany.com/wp-content/uploads/2020/12/photo-studios-philly-feature.jpg'
};

export default {
  title: 'Components / Image Grids'
};
