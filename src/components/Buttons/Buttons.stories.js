import { select, text } from '@storybook/addon-knobs';

const styles = {
  Primary: 'tco-btn--primary',
  Secondary: 'tco-btn--secondary'
};

const linkStyles = {
  Primary: '',
  Secondary: 'tco-text-link--secondary'
};

const states = {
  Active: '',
  Disabled: 'disabled'
};

const sizes = {
  DisplayXLarge: 'display--extra-large',
  DisplayLarge: 'display--large',
  DisplayMedium: 'display--medium',
  DisplaySmall: 'display--small',
  DisplayXSmall: 'display--extra-small',
  BodyDefault: 'body--default',
  BodyLarge: 'body--large',
  BodySansSmall: 'body--sans-small'
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
  const linkText = text('Text', 'default text link');
  const linkState = select('State', states, states.Active);

  return `
    <p class="tco-type-body--default">Lorem ipsum dolor sit amet <a href="#" class="tco-text-link" ${linkState}> ${linkText}</a>.</p>
    <p class="tco-type-body--sans-small">Lorem ipsum <a href="#" class="tco-text-link" ${linkState}> ${linkText}</a> dolor sit amet.</p>`;
};

export const LinkWithArrow = () => {
  const linkText = text('Text', 'Text Link with Arrow');
  const linkStyle = select('Style', linkStyles, linkStyles.Primary);
  const linkState = select('State', states, states.Active);
  const fontSize = select('Font Size', sizes, sizes.BodyDefault);

  let containerColor;

  if (linkStyle === 'tco-text-link--secondary') {
    containerColor = 'tco-container-wrapper--navy';
  } else {
    containerColor = '';
  }

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container">
      <h3 class="tco-type-${fontSize}">
        <a href="#" class="tco-text-link tco-text-link--arrow ${linkStyle}" ${linkState}>
          ${linkText}
          <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
            <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </h3>
    </div>
  </div>`;
};

export default {
  title: 'Controls & Inputs / Buttons'
};
