import { text, select } from '@storybook/addon-knobs';

const radioButton = () => {
  const stateOptions = {
    unchecked: '',
    checked: 'checked',
    disabled: 'disabled'
  };
  const label = text('Label', 'Radio');
  const state = select('State', stateOptions, stateOptions.unchecked);

  return `
  <div class="form-group">
    <input class="form-radio" id="radio-1" type="radio" name="radio-default" value="1" ${state} />
    <label class="form-label" for="radio-1">${label}</label>
  </div>`;
};

export default radioButton;
