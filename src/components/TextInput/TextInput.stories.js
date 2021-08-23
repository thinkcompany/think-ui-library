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

export const TextInput = args => {
  const { label, placeholder, errorMessage, state, disabled } = args;

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
        class="tco-form-input ${state}"
        id="text-field-1"
        name="text-field-1" ${disabled ? '\n\tdisabled' : ''}
      >
      ${
        state === stateOptions.error
          ? `<p class="tco-form-input-error-msg">${errorMessage}</p>`
          : ''
      }
    </div>

    <div class="tco-form-row tco-input--expand tco-input--expand-jumbo">
      <label
        for="text-field-1"
        class="tco-form-label"
      >
        Multiline text field
      </label>
      <textarea
        placeholder="${placeholder}"
        class="tco-form-input ${state}"
        id="text-field-2"
        name="text-field-2" ${disabled ? '\n\tdisabled' : ''}
      ></textarea>
      ${
        state === stateOptions.error
          ? `<p class="tco-form-input-error-msg">${errorMessage}</p>`
          : ''
      }
    </div>
  `;
};

export default {
  title: 'Controls & Inputs / Text Input',
  args: {
    label: 'Text Input',
    placeholder: 'Enter text...',
    errorMessage: 'Please try again',
    state: stateOptions.default,
    disabled: false
  },
  argTypes: {
    state: {
      control: 'inline-radio',
      options: stateOptions
    },
    errorMessage: {
      name: 'error message'
    }
  }
};
