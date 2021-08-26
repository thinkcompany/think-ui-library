const checkOptions = ['default', 'alt', 'none'];

const ChecklistTemplate = args => {
  const { eyebrow, checkType } = args;
  const items = [
    'Launch a new product',
    'Transform an existing product',
    'Maintain and improve business systems',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae dui posuere'
  ];

  let checkMarkClass = '';

  if (checkType === 'alt') {
    checkMarkClass = 'tco-checklist--alt-checkmark';
  } else if (checkType === 'none') {
    checkMarkClass = 'tco-checklist--no-checkmark';
  }

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-checklist">
        ${
          eyebrow
            ? `
          <span class="tco-checklist-eyebrow">${eyebrow}</span>
          `
            : ''
        }
        <ul class="${checkMarkClass}">
          ${items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
  `;
};

export const Checklist = ChecklistTemplate.bind({});

export default {
  title: 'Components / Checklist',
  args: {
    eyebrow: 'How we can help',
    checkType: checkOptions[0]
  },
  argTypes: {
    checkType: {
      name: 'checkmark type',
      control: 'inline-radio',
      options: checkOptions
    }
  }
};
