const styles = ['primary', 'secondary', 'tertiary'];
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
  const containerClass = buttonStyle === 'tertiary' ? 'tco-container-wrapper--navy' : '';

  return `
  <div class="tco-container-wrapper ${containerClass}">
    <div class="tco-container">
      <button type="button" class="tco-btn tco-btn--${buttonStyle}" ${buttonState}>
        ${buttonText}
      </button>
    </div>
  </div>
  `;
};

Button.args = {
  buttonText: 'button',
  buttonStyle: styles[0],
  buttonState: states[0]
};

Button.argTypes = {
  buttonText: {
    name: 'text'
  },
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
  <div class="tco-container-wrapper">
    <div class="tco-container">
      <p class="tco-type-body--default">Lorem ipsum dolor sit amet <a href="#" class="tco-text-link"> ${linkText}</a>.</p>
      <p class="tco-type-body--sans-small">Lorem ipsum <a href="#" class="tco-text-link"> ${linkText}</a> dolor sit amet.</p>
    </div>
  </div>`;
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
        <a href="#" class="tco-text-link tco-text-link--arrow tco-link--dark-theme" ${linkState}>
          ${linkText}
          <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
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
  }
};

export const LinkWithBigArrow = args => {
  const { linkText, linkState, containerColor } = args;

  return `
  <div class="tco-container-wrapper ${containerColor}">
    <div class="tco-container">
      <a href="#" class="tco-text-link tco-text-link--big-arrow tco-link--dark-theme" ${linkState}>
        ${linkText}
        <svg class="tco-text-link-icon tco-text-link-icon--alt" width="20" height="20" viewBox="0 0 20 20" role="presentation">
          <use xlink:href="/img/icons.svg#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
  </div>`;
};

LinkWithBigArrow.args = {
  linkText: 'Text Link with Big Arrow',
  linkState: states[0]
};

LinkWithBigArrow.argTypes = {
  linkText: {
    name: 'link text'
  },
  linkState: {
    name: 'state',
    control: 'inline-radio',
    options: states
  }
};

export default {
  title: 'Controls & Inputs / Buttons'
};
