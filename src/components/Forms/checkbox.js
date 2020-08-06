import { text, select } from '@storybook/addon-knobs';
import { useEffect } from '@storybook/client-api';

const checkbox = () => {
  const stateOptions = {
    unchecked: '',
    checked: 'checked',
    indeterminate: 'indeterminate',
    disabled: 'disabled'
  };
  const label = text('Label', 'Checkbox');
  const state = select('State', stateOptions, stateOptions.unchecked);

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

export default checkbox;
