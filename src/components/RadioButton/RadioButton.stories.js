const stateOptions = {
  unchecked: '',
  checked: 'checked',
  disabled: 'disabled'
};

export const RadioButton = args => {
  const { label, state } = args;

  return `
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <div class="tco-form-group">
        <input class="tco-form-radio" id="radio-1" type="radio" name="radio-default" value="1" ${state} />
        <label class="tco-form-label" for="radio-1">${label}</label>
      </div>
    </div>
  </div>
  `;
};

export default {
  title: 'Controls & Inputs / Radio Button',
  args: {
    label: 'Radio button',
    state: stateOptions.unchecked
  },
  argTypes: {
    state: {
      control: 'inline-radio',
      options: stateOptions
    }
  }
};
