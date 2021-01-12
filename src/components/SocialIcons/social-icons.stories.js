import { select, boolean, text, number } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Tan: 'tco-container-wrapper--tan',
  Blue: 'tco-container-wrapper--blue',
  Navy: 'tco-container-wrapper--navy',
  Glass: 'tco-container-wrapper--glass'
};

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const iconSet = [];
  const icons = [
    {
      name: 'facebook',
      include: boolean('Facebook', true)
    },
    {
      name: 'twitter',
      include: boolean('Twitter', true)
    },
    {
      name: 'linkedin',
      include: boolean('Linkedin', true)
    },
    {
      name: 'instagram',
      include: boolean('Instagram', true)
    }
  ];

  icons.forEach(item => {
    if (item.include) {
      iconSet.push(`
        <li>
          <a class="tco-social-icons-link" href="#" target="_blank" rel="noopener noreferrer">
            <svg class="tco-icon" title="${item.name}" viewBox="0 0 100 100">
              <use xlink:href="/img/icons.svg#icon-${item.name}"></use>
            </svg>
            <span class="tco-accessibly-hidden">${item.name}</span>
          </a>
        </li>
      `);
    }
  });

  return `
    <div class="tco-container-wrapper ${containerColor}">
      <div class="tco-container">
      <div class="tco-social-icons">
          <ul class="tco-social-icons-list">
            ${iconSet.join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Social Icons',
  parameters: {
    options: {
      showPanel: true
    }
  }
};
