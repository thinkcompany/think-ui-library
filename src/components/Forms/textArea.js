import { text, select, boolean } from '@storybook/addon-knobs';
import stateIcon from './stateIcon';

const stateOptions = {
  default: '',
  success: 'is-success',
  error: 'is-error'
};

const textarea = () => {
  const label = text('Label', 'Textarea');
  const placeholder = text('Placeholder', 'Enter Text...');
  const errorMessage = text('Error Message', 'Error Message');
  const state = select('State', stateOptions, stateOptions.default);
  const disabled = boolean('Disabled', false);

  return `
    <div class="form-row">
      <label
        for="textarea-1"
        class="form-label"
      >
        ${label}
      </label>
      <textarea 
        placeholder="${placeholder}"
        class="form-textarea ${state}"
        id="textarea-1"
        name="textarea-1" ${disabled ? '\n\tdisabled' : ''}
      ></textarea>
      ${stateIcon(state)}${
    state === stateOptions.error
      ? `<p class="form-input-error-msg">${errorMessage}</p>`
      : ''
  }
    </div>`;
};

export default textarea;
