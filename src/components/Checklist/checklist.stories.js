import { select, text, boolean, object } from '@storybook/addon-knobs';

const colors = {
  Default: '',
  Glass: 'tco-container-wrapper--glass'
};
const alignments = ['center', 'left', 'right'];

const groupId = 'checklist';

export const Default = () => {
  const containerColor = select('Background Color', colors, colors.Default);
  const eyebrow = text('Heading', 'How we can help');
  const list = [];
  const items = [
    'Launch a new product',
    'Transform an existing product',
    'Maintain and improve business systems',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere'
  ];

  items.forEach(item => {
    list.push(`
      <li>${item}</li>
    `);
  });
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
          ${list.join('')}
        </ul>
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Checklist'
};
