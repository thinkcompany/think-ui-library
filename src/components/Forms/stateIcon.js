/**
 * Returns SVG icon markup based on the provided `state`.
 * Expects `state` to follow the naming conventions of the state classes found in _forms.scss
 * @param {string} state
 */

const stateIcon = state => {
  switch (state) {
    case 'is-success':
      return '<svg class="form-state-icon form-state-icon--success"><use xlink:href="/img/icons.svg#icon-check"></use></svg>';
    case 'is-error':
      return '<svg class="form-state-icon form-state-icon--error"><use xlink:href="/img/icons.svg#icon-alert"></use></svg>';
    default:
      return '';
  }
};

export default stateIcon;
