import { text, boolean } from '@storybook/addon-knobs';

const toggle = () => {
  const label = text('Label', 'Toggle');
  const state = boolean('State', false);
  const disabled = boolean('Disabled', false);

  return `
  <div class="form-group">
    <input 
        class="form-toggle"
        id="toggle-1"
        type="checkbox"
        name="toggle-default"
        value="1"
        ${state ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
    />
    <label class="form-label" for="toggle-1">${label}</label>
  </div>`;
};

export default toggle;
