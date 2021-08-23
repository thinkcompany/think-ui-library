const selectOptions = ['Red', 'Green', 'Blue'];

export const Select = args => {
  const { label, options, disabled } = args;

  return `
    <div class="tco-form-row">
      <label for="select-1" class="tco-form-label">${label}</label>
      <div class="tco-form-select">
        <select
          class="select tco-form-input"
          id="select-1"
          name="select-1"
          ${disabled ? 'disabled' : ''}
        >
        <option>Select...</option>
        ${options.map(option => `<option>${option}</option>`).join('\n\t')}
        </select>
      </div>
    </div>
  `;
};

export default {
  title: 'Controls & Inputs / Select',
  args: {
    label: 'Select a color',
    options: selectOptions,
    disabled: false
  }
};
