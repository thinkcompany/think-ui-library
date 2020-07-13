import { text, select, boolean } from '@storybook/addon-knobs';
import stateIcon from './stateIcon';

const sizeOptions = {
  large: 'form-input--large',
  medium: 'form-input--medium',
  small: 'form-input--small'
};

const stateOptions = {
  default: '',
  success: 'is-success',
  error: 'is-error'
};

const password = () => {
  const label = text('Label', 'Password');
  const placeholder = text('Placeholder', 'Enter Text...');
  const errorMessage = text('Error Message', 'Error Message');
  const size = select('Size', sizeOptions, sizeOptions.medium);
  const state = select('State', stateOptions, stateOptions.default);
  const disabled = boolean('Disabled', false);

  return `
  <div class="form-row">
    <label for="password-1" class="form-label">${label}</label>
    <input 
      type="password"
      placeholder="${placeholder}"
      class="form-input ${size} ${state}"
      id="password-1"
      name="password-1" ${disabled ? '\n\tdisabled' : ''}
    >
    ${stateIcon(state)}${
    state === stateOptions.error
      ? `<p class="form-input-error-msg">${errorMessage}</p>`
      : ''
  }
</div>`;
};

export default password;
