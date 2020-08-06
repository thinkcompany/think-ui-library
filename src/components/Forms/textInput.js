import { text, select, boolean } from '@storybook/addon-knobs';
import stateIcon from './stateIcon';

const sizeOptions = {
  large: 'tco-form-input--large',
  medium: 'tco-form-input--medium',
  small: 'tco-form-input--small'
};

const stateOptions = {
  default: '',
  success: 'is-success',
  error: 'is-error'
};

const textInput = () => {
  const label = text('Label', 'Text Input');
  const placeholder = text('Placeholder', 'Enter Text...');
  const errorMessage = text('Error Message', 'Error Message');
  const size = select('Size', sizeOptions, sizeOptions.medium);
  const state = select('State', stateOptions, stateOptions.default);
  const disabled = boolean('Disabled', false);

  return `
    <div class="tco-form-row">
      <label 
        for="text-field-1"
        class="tco-form-label"
      >
        ${label}
      </label>
      <input
        type="text" 
        placeholder="${placeholder}"
        class="tco-form-input ${size} ${state}"
        id="text-field-1"
        name="text-field-1" ${disabled ? '\n\tdisabled' : ''}
      >
      ${stateIcon(state)}${
    state === stateOptions.error
      ? `<p class="tco-form-input-error-msg">${errorMessage}</p>`
      : ''
  }
    </div>
  `;
};

export default textInput;
