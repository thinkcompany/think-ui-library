import { text, select, boolean } from '@storybook/addon-knobs';

const stateOptions = {
  default: '',
  success: 'is-success',
  error: 'is-error'
};

export const TextArea = () => {
  const label = text('Label', 'Textarea');
  const placeholder = text('Placeholder', 'Enter Text...');
  const errorMessage = text('Error Message', 'Error Message');
  const state = select('State', stateOptions, stateOptions.default);
  const disabled = boolean('Disabled', false);

  return `
    <div class="tco-form-row">
      <label
        for="textarea-1"
        class="tco-form-label"
      >
        ${label}
      </label>
      <textarea
        placeholder="${placeholder}"
        class="tco-form-textarea ${state}"
        id="textarea-1"
        name="textarea-1" ${disabled ? '\n\tdisabled' : ''}
      ></textarea>
      ${
        state === stateOptions.error
          ? `<p class="tco-form-input-error-msg">${errorMessage}</p>`
          : ''
      }
    </div>`;
};

export default {
  title: 'Controls & Inputs / Text Area'
};
