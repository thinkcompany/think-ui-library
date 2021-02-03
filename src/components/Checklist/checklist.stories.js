import { select, text, object } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};

const groupId = 'checklist';

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const eyebrow = text('Heading', 'How we can help');
  const items = [
    'Launch a new product',
    'Transform an existing product',
    'Maintain and improve business systems',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere'
  ];
  const itemList = object('List Items', items, groupId);

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container tco-container--default">
      <div class="tco-checklist">
        ${
          eyebrow
            ? `
          <span class="tco-checklist-eyebrow">${eyebrow}</span>
          `
            : ''
        }
        <ul>
          ${itemList.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Checklist'
};
