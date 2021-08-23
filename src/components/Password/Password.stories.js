const stateOptions = {
  default: '',
  success: 'is-success',
  error: 'is-error'
};

export const Password = args => {
  const { label, placeholder, errorMessage, state, disabled } = args;

  return `
  <div class="tco-form-row">
    <label for="password-1" class="tco-form-label">${label}</label>
    <input
      type="password"
      placeholder="${placeholder}"
      class="tco-form-input ${state}"
      id="password-1"
      name="password-1" ${disabled ? '\n\tdisabled' : ''}
    >
    ${
      state === stateOptions.error
        ? `<p class="tco-form-input-error-msg">${errorMessage}</p>`
        : ''
    }
</div>`;
};

export default {
  title: 'Controls & Inputs / Password',
  args: {
    label: 'Password',
    placeholder: 'Enter password here..',
    errorMessage: 'Wrong!',
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
