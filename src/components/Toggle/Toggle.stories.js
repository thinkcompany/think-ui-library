export const Toggle = args => {
  const { label, toggled, disabled } = args;

  return `
  <div class="tco-form-group">
    <input
        class="tco-form-toggle"
        id="toggle-1"
        type="checkbox"
        name="toggle-default"
        value="1"
        ${toggled ? 'checked' : ''}
        ${disabled ? 'disabled' : ''}
    />
    <label class="tco-form-label" for="toggle-1">${label}</label>
  </div>`;
};

export default {
  title: 'Controls & Inputs / Toggle',
  args: {
    label: 'Toggle',
    toggled: false,
    disabled: false
  }
};
