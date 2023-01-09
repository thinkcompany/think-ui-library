const ImagePanelTemplate = () => {
  const imageItem = i => {
    const images = [
      {
        source: 'https://dummyimage.com/489x326/0062c3',
        class: 'tco-panel-item--a',
        width: 489,
        height: 326
      },
      {
        source: 'https://dummyimage.com/489x326/0062c3',
        class: 'tco-panel-item--b',
        width: 489,
        height: 326
      },
      {
        source: 'https://dummyimage.com/178x386/0062c3',
        class: 'tco-panel-item--c',
        width: 178,
        height: 386
      },
      {
        source: 'https://dummyimage.com/489x326/0062c3',
        class: 'tco-panel-item--d',
        width: 489,
        height: 326
      },
      {
        source: 'https://dummyimage.com/489x326/0062c3',
        class: 'tco-panel-item--e',
        width: 489,
        height: 326
      },
      {
        source: 'https://dummyimage.com/489x326/0062c3',
        class: 'tco-panel-item--f',
        width: 489,
        height: 326
      },
      {
        source: 'https://dummyimage.com/489x326/0062c3',
        class: 'tco-panel-item--g',
        width: 489,
        height: 326
      },
      {
        source: 'https://dummyimage.com/178x386/0062c3',
        class: 'tco-panel-item--h',
        width: 178,
        height: 386
      }
    ];

    let image = images[i];

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
          'There are two image sizes / aspect ratios<br> 1) <strong>aspect ratio </strong>6:4 | <strong>max display size</strong> 489 x 326 | <strong>upload size</strong> 734 x 489 <br>2) <strong>aspect ratio </strong>89:193 | <strong>max display size</strong> 178 x 386 | <strong>upload size</strong> 267 x 579'
      }
    }
  }
};
