const ImagePanelTemplate = () => {
  const imageItem = i => {
    const images = [
      {
        source: 'img/image-panel/aila.jpg',
        class: 'tco-panel-item--a',
        width: 489,
        height: 326
      },
      {
        source: 'img/image-panel/Penn-Mutual.jpg',
        class: 'tco-panel-item--b',
        width: 489,
        height: 326
      },
      {
        source: 'img/image-panel/chop.jpg',
        class: 'tco-panel-item--c',
        width: 178,
        height: 386
      },
      {
        source: 'img/image-panel/Projector.jpg',
        class: 'tco-panel-item--d',
        width: 489,
        height: 326
      },
      {
        source: 'img/image-panel/flex.jpg',
        class: 'tco-panel-item--e',
        width: 489,
        height: 326
      },
      {
        source: 'img/image-panel/barnes.jpg',
        class: 'tco-panel-item--f',
        width: 489,
        height: 326
      },
      {
        source: 'img/image-panel/Synergita.jpg',
        class: 'tco-panel-item--g',
        width: 489,
        height: 326
      },
      {
        source: 'img/image-panel/good-place.jpg',
        class: 'tco-panel-item--h',
        width: 178,
        height: 386
      }
    ];

    const image = images[i];

    return `
      <figure class="tco-panel-item ${image.class}" style="--width:${image.width} ">
        <img class="tco-panel-image" alt="A placeholder image" src="${image.source}" width="${image.width}" height="${image.height}" />
      </figure>
    `;
  };

  const imageItems = () => {
    let output = '';

    for (let index = 0; index < 8; index++) {
      output += imageItem(index);
    }

    return output;
  };

  return `<div class="tco-image-panel">${imageItems()}</div>`;
};

export const ImagePanel = ImagePanelTemplate.bind({});

export default {
  title: 'Components / Image Panel',
  parameters: {
    component: ImagePanel,
    componentSubtitle: 'The Image Panel is used on the homepage.',
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'There are two image sizes / aspect ratios<br> 1) <strong>upload </strong> 734 x 489 (<strong>aspect ratio </strong>6:4) <br>2) <strong>upload size</strong> 267 x 579 (<strong>aspect ratio </strong>89:193)'
      }
    }
  }
};
