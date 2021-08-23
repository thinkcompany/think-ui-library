import { useEffect } from '@storybook/client-api';

const stateOptions = {
  unchecked: '',
  checked: 'checked',
  indeterminate: 'indeterminate',
  disabled: 'disabled'
};

export const Checkbox = args => {
  const { label, state } = args;

  useEffect(() => {
    if (state === stateOptions.indeterminate) {
      document.getElementById('checkbox-1').indeterminate = true;
    }
  });

  return `
  <div class="tco-form-group">
      <input class="tco-form-checkbox" id="checkbox-1" type="checkbox" name="checkbox-1" value="1" ${state} />
      <label class="tco-form-label" for="checkbox-1">${label}</label>
  </div>`;
};

export default {
  title: 'Controls & Inputs / Checkbox',
  args: {
    label: 'Checkbox',
    state: stateOptions.unchecked
  },
  argTypes: {
    state: {
      control: 'inline-radio',
      options: stateOptions
    }
  }
};
