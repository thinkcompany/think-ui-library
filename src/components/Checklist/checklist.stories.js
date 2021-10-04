const checkOptions = ['default', 'alt', 'none'];
const sizeOptions = ['default', 'large'];

const ChecklistTemplate = args => {
  const { eyebrow, checkType, checkSize } = args;
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

  let checklistSize = '';

  if (checkSize === 'large') {
    checklistSize = 'tco-checklist--large';
  }

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container tco-container--mid">
      <div class="tco-checklist ${checklistSize}">
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
    checkType: checkOptions[0],
    checkSize: sizeOptions[0]
  },
  argTypes: {
    checkType: {
      name: 'checkmark type',
      control: 'inline-radio',
      options: checkOptions
    },
    checkSize: {
      name: 'list size',
      control: 'inline-radio',
      options: sizeOptions
    }
  }
};
