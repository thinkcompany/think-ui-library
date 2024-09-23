const layouts = ['vertical', 'horizontal'];

export const IconSet = args => {
  const { layout } = args;
  const iconSet = [];
  const icons = [
    {
      name: 'Remote',
      icon: 'location-alt'
    },
    {
      name: 'Time',
      icon: 'clock'
    },
    {
      name: 'Salary',
      icon: 'dollar-bill'
    }
  ];

  icons.forEach(item => {
    iconSet.push(`
      <li class="tco-icon-meta">
        <svg class="tco-icon tco-icon--${item.icon.toLowerCase()}" title="${
          item.name
        }" viewBox="0 0 100 100">
          <use xlink:href="/img/icons.svg#icon-${item.icon.toLowerCase()}"></use>
        </svg>
        <span class="tco-type-body--small">${item.name}</span>
      </li>
    `);
  });

  return `
    <ul class="tco-icon-set tco-icon-set--${layout}">
      ${iconSet.join('')}
    </ul>
  `;
};

IconSet.parameters = {
  component: IconSet,
  componentSubtitle:
    'The Icon Set component was created for use throughout the Careers section of the site.'
};

IconSet.args = {
  layout: layouts[0]
};

IconSet.argTypes = {
  layout: {
    name: 'layout',
    control: 'inline-radio',
    options: layouts,
    table: {
      type: { summary: 'radio' },
      defaultValue: { summary: 'vertical' }
    }
  }
};

export default {
  title: 'Components / Icon Set'
};
