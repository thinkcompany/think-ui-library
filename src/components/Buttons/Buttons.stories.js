import { select, text, boolean } from '@storybook/addon-knobs';
import { useEffect } from '@storybook/client-api';

// sets the background to $color-background-tertiary based on the function result
const toggleBackground = (equalityFunc, targetSelector) => {
  useEffect(() => {
    const storyBackground = document.querySelector(targetSelector);

    if (equalityFunc()) {
      storyBackground.style.background = '#173145';
    } else {
      storyBackground.style.background = '';
    }

    return () => {
      storyBackground.style.background = '';
    };
  });
};

// #region knob option objects
const styles = {
  Primary: 'tco-btn--primary',
  Secondary: 'tco-btn--secondary',
  Tertiary: 'tco-btn--tertiary'
};

const states = {
  Active: '',
  Disabled: 'disabled'
};

const linkSizes = {
  Default: '',
  Large: 'tco-btn-link--large',
  Small: 'tco-btn-link--small'
};

const linkColors = {
  Default: '',
  'On Tint': 'tco-btn-link--on-tint'
};

const icons = {
  Add: 'icon-add',
  Alert: 'icon-alert',
  Check: 'icon-check',
  ChevronDown: 'icon-chevron-down',
  ChevronLeft: 'icon-chevron-left',
  ChevronRight: 'icon-chevron-right',
  ChevronUp: 'icon-chevron-up',
  Close: 'icon-close',
  File: 'icon-file',
  Minus: 'icon-minus',
  Search: 'icon-search',
  Trash: 'icon-trash'
};
// #endregion

// #region individual button stories
export const Text = () => {
  const buttonText = text('Button Text', 'Button Text');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonState = select('State', states, states.Active);

  toggleBackground(() => buttonStyle === styles.Secondary, '.sb-show-main');

  return `
    <button type="button" class="tco-btn ${buttonStyle}" ${buttonState}>
      ${buttonText}
    </button>`;
};

export const Link = () => {
  const buttonText = text('Button Text', 'Button Text');
  const buttonSize = select('Size', linkSizes, linkSizes.Default);
  const buttonState = select('State', states, states.Active);
  const linkColor = select('Color', linkColors, linkColors.Default);

  toggleBackground(() => linkColor === linkColors['On Tint'], '.sb-show-main');

  return `
    <button type="button" class="tco-btn tco-btn-link${
      linkColor ? ` ${linkColor}` : ''
    }${buttonSize ? ` ${buttonSize}` : ''}" ${buttonState}>
      ${buttonText}
    </button>`;
};

export const Icon = () => {
  const iconId = select('Icon', icons, icons.Add);
  const buttonText = text('Button Title', 'Button Title');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonState = select('State', states, states.Active);

  toggleBackground(() => buttonStyle === styles.Secondary, '.sb-show-main');

  return `
    <button type="button" class="tco-btn tco-btn--icon ${buttonStyle}" ${buttonState}>
      <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
        <use xlink:href="img/icons.svg#${iconId}"></use>
      </svg>
      <span class="tco-accessibly-hidden">${buttonText}</span>
    </button>`;
};

export const IconWithText = () => {
  const iconId = select('Icon', icons, icons.Add);
  const buttonText = text('Button Text', 'Button Text');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonState = select('State', states, states.Active);

  toggleBackground(() => buttonStyle === styles.Secondary, '.sb-show-main');

  return `
    <button type="button" class="tco-btn tco-btn--icon-text ${buttonStyle}" ${buttonState}>
      <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
        <use xlink:href="img/icons.svg#${iconId}"></use>
      </svg>
      ${buttonText}
    </button>`;
};
// #endregion

// #region all buttons story
export const All = () => {
  // knobs
  const showInfo = boolean('Show Component Info', false); // shows or hides component info
  const buttonText = text('Button Text', 'Button');
  const iconId = select('Icon', icons, icons.Add);
  const backgroundColor = select(
    'Background Color',
    {
      Dark: 'dark',
      Light: 'light'
    },
    'light'
  );

  toggleBackground(() => backgroundColor === 'dark', '.sb-show-main');

  // wrapper div for each button example
  const itemWrapper = children => `
    <div
      class="documentation-grid--item ${showInfo ? 'documentation-block' : ''}"
      style="${showInfo ? '' : 'text-align:center; padding: 20px 0;'}"
    >
      ${children}
    </div>`;

  // iterate over style and size objects to get all button examples
  const textButtonExamples = Object.keys(styles)
    .map(styleKey =>
      itemWrapper(`
      <button type="button" class="tco-btn ${styles[styleKey]}">
        ${buttonText}
      </button>
      <footer style="${showInfo ? '' : 'display: none'}">
        <span class="type-style--bold">Text Button</span>
        <span>style: ${styleKey}</span>
      </footer>
    `)
    )
    .join('');

  const iconButtonExamples = Object.keys(styles)
    .map(styleKey =>
      itemWrapper(`
      <button type="button" class="tco-btn tco-btn--icon ${styles[styleKey]}">
        <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
          <use xlink:href="/img/icons.svg#${iconId}"></use>
        </svg>
        <span class="tco-accessibly-hidden">${buttonText}</span>
      </button>
      <footer style="${showInfo ? '' : 'display: none'}">
        <span class="type-style--bold">Icon Button</span>
        <span>style: ${styleKey}</span>
      </footer>
    `)
    )
    .join('');

  const iconTextButtonExamples = Object.keys(styles)
    .map(styleKey =>
      itemWrapper(`
      <button type="button" class="tco-btn tco-btn--icon-text ${
        styles[styleKey]
      }">
        <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
          <use xlink:href="/img/icons.svg#${iconId}"></use>
        </svg>
        ${buttonText}
      </button>
      <footer style="${showInfo ? '' : 'display: none'}">
        <span class="type-style--bold">Icon Button With Text</span>
        <span>style: ${styleKey}</span>
      </footer>
    `)
    )
    .join('');

  const linkButtonExamples = Object.keys(linkColors)
    .map(colorKey =>
      Object.keys(linkSizes)
        .map(sizeKey =>
          itemWrapper(`
          <button type="button" class="tco-btn tco-btn-link ${
            linkColors[colorKey]
          } ${sizeKey !== 'Default' ? linkSizes[sizeKey] : ''}">
            ${buttonText}
          </button>
          <footer style="${showInfo ? '' : 'display: none'}">
            <span class="type-style--bold">Link Button</span>
            <span>size: ${sizeKey}</span>
          </footer>
        `)
        )
        .join('')
    )
    .join('');

  const buttonExamples = [
    textButtonExamples,
    iconButtonExamples,
    iconTextButtonExamples,
    linkButtonExamples
  ];

  return `<div class="documentation-grid">${buttonExamples.join('')}</div>`;
};
// #endregion

export default {
  title: 'Controls & Inputs / Buttons'
};
