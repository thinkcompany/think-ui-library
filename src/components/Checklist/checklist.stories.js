import { text, object } from '@storybook/addon-knobs';

const groupId = 'checklist';

export const checklist = () => {
  const eyebrow = text('Heading', 'How we can help');
  const items = [
    'Launch a new product',
    'Transform an existing product',
    'Maintain and improve business systems',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere'
  ];
  const itemList = object('List Items', items, groupId);

  return `
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
  `;
};

export const WithContainer = () => {
  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-columns tco-columns">
        ${checklist()}
      </div>
    </div>
  </div>`;
};

export default {
  title: 'Components / Checklist',
  // enables Chromatic for the component
  parameters: {
    chromatic: { disable: false }
  }
};
