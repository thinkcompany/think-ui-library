import { text, select, boolean, array } from '@storybook/addon-knobs';

const selectOptions = ['Red', 'Green', 'Blue'];
const sizeOptions = {
  large: 'tco-form-input--large',
  medium: 'tco-form-input--medium',
  small: 'tco-form-input--small'
};

const selectInput = () => {
  const label = text('Label', 'Select A Color');
  const options = array(label, selectOptions, ',');
  const size = select('Size', sizeOptions, sizeOptions.medium);
  const disabled = boolean('Disabled', false);

  return `
    <div class="tco-form-row">
      <label for="select-1" class="tco-form-label">${label}</label>
      <div class="tco-form-select">
        <select
          class="select tco-form-input ${size}"
          id="select-1"
          name="select-1"
          ${disabled ? 'disabled' : ''}
        >
        <option>Select...</option>
        ${options.map(option => `<option>${option}</option>`).join('\n\t')}
        </select>
      </div>
    </div>
  `;
};

export default selectInput;
