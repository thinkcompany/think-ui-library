import { select, text } from '@storybook/addon-knobs';

const styles = {
  Primary: 'tco-btn--primary',
  Secondary: 'tco-btn--secondary'
};

const states = {
  Active: '',
  Disabled: 'disabled'
};

export const Button = () => {
  const buttonText = text('Button Text', 'Button');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonState = select('State', states, states.Active);

  return `
    <button type="button" class="tco-btn ${buttonStyle}" ${buttonState}>
      ${buttonText}
    </button>`;
};

export const TextLink = () => {
  const buttonText = text('Text', 'Text Link');
  const buttonState = select('State', states, states.Active);

  return `
    <a href="#" class="tco-btn-link" ${buttonState}>
      ${buttonText}
      <svg class="tco-btn-link-icon" width="20" height="20" viewBox="0 0 20 20" role="img" aria-labelledby="arrow">
        <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>`;
};

export default {
  title: 'Controls & Inputs / Buttons'
};
