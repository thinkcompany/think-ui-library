const ImagePanelTemplate = () => {
  const imageItem = i => {
    const images = [
      {
        source: 'https://dummyimage.com/425x318/0062c3',
        class: 'tco-panel-item--a',
        width: 425,
        height: 318
      },
      {
        source: 'https://dummyimage.com/462x346/0062c3',
        class: 'tco-panel-item--b',
        width: 462,
        height: 346
      },
      {
        source: 'https://dummyimage.com/160x328/0062c3',
        class: 'tco-panel-item--c',
        width: 160,
        height: 328
      },
      {
        source: 'https://dummyimage.com/425x318/0062c3',
        class: 'tco-panel-item--d',
        width: 425,
        height: 318
      },
      {
        source: 'https://dummyimage.com/516x387/0062c3',
        class: 'tco-panel-item--e',
        width: 516,
        height: 387
      },
      {
        source: 'https://dummyimage.com/160x328/0062c3',
        class: 'tco-panel-item--f',
        width: 160,
        height: 328
      },
      {
        source: 'https://dummyimage.com/440x330/0062c3',
        class: 'tco-panel-item--g',
        width: 440,
        height: 330
      },
      {
        source: 'https://dummyimage.com/222x454/0062c3',
        class: 'tco-panel-item--h',
        width: 222,
        height: 454
      },
      {
        source: 'https://dummyimage.com/425x318/0062c3',
        class: 'tco-panel-item--i',
        width: 425,
        height: 318
      }
    ];

    let image = images[i];

    return `
      <figure class="tco-panel-item ${image.class}" style="--width:${image.width} ">
        <img class="tco-panel-image" alt="Hey now" src="${image.source}" width="${image.width}" height="${image.height}" />
      </figure>
    `;
  };

  const imageItems = () => {
    let output = '';

    for (let index = 0; index < 9; index++) {
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
          'This component is highly curated - uploaded images should be the same aspect ratio as the supplied dimensions.'
      }
    }
  }
};
