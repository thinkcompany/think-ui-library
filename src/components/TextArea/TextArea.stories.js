const stateOptions = {
  default: '',
  success: 'is-success',
  error: 'is-error'
};

export const TextArea = args => {
  const { label, placeholder, errorMessage, state, disabled } = args;

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
  title: 'Controls & Inputs / Text Area',
  args: {
    label: 'Text Area',
    placeholder: 'Enter text...',
    errorMessage: 'Please try again',
    state: stateOptions.default,
    disabled: false
  },
  argTypes: {
    state: {
      control: 'inline-radio',
      options: stateOptions
    }
  }
};
