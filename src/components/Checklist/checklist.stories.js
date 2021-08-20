const ChecklistTemplate = args => {
  const { eyebrow } = args;
  const items = [
    'Launch a new product',
    'Transform an existing product',
    'Maintain and improve business systems',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere'
  ];

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
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
};

export const Checklist = ChecklistTemplate.bind({});

export default {
  title: 'Components / Checklist',
  args: {
    eyebrow: 'How we can help'
  }
};
