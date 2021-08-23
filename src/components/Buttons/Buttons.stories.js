const styles = ['primary', 'secondary'];
const states = ['active', 'disabled'];

const sizes = [
  'body--default',
  'body--large',
  'body--sans-small',
  'display--extra-large',
  'display--large',
  'display--medium',
  'display--small',
  'display--extra-small'
];

export const Button = args => {
  const { buttonText, buttonState, buttonStyle } = args;

  return `
    <button type="button" class="tco-btn tco-btn--${buttonStyle}" ${buttonState}>
      ${buttonText}
    </button>`;
};

Button.args = {
  buttonText: 'button',
  buttonStyle: styles[0],
  buttonState: states[0]
};

Button.argTypes = {
  buttonStyle: {
    name: 'button style',
    control: 'inline-radio',
    options: styles
  },
  buttonState: {
    name: 'button state',
    control: 'inline-radio',
    options: states
  }
};

export const TextLink = args => {
  const { linkText } = args;

  return `
    <p class="tco-type-body--default">Lorem ipsum dolor sit amet <a href="#" class="tco-text-link"> ${linkText}</a>.</p>
    <p class="tco-type-body--sans-small">Lorem ipsum <a href="#" class="tco-text-link"> ${linkText}</a> dolor sit amet.</p>`;
};

TextLink.args = {
  linkText: 'default text link'
};

TextLink.argTypes = {
  linkText: {
    name: 'link text'
  }
};

export const LinkWithArrow = args => {
  const { linkText, linkState, fontSize, containerColor } = args;

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container">
      <h3 class="tco-type-${fontSize}">
        <a href="#" class="tco-text-link tco-text-link--arrow" ${linkState}>
          ${linkText}
          <svg class="tco-text-link-icon" width="20" height="20" viewBox="0 0 20 20" role="presentation">
            <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </h3>
    </div>
  </div>`;
};

LinkWithArrow.args = {
  linkText: 'Text Link with Arrow',
  linkState: states[0],
  fontSize: sizes[0]
};

LinkWithArrow.argTypes = {
  linkText: {
    name: 'link text'
  },
  linkState: {
    name: 'state',
    control: 'inline-radio',
    options: states
  },
  fontSize: {
    name: 'font size',
    control: 'inline-radio',
    options: sizes
  }
};

export default {
  title: 'Controls & Inputs / Buttons'
};
