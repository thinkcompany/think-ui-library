import { select, text, boolean, withKnobs } from '@storybook/addon-knobs';
import { useEffect } from '@storybook/client-api';

// #region knob option objects
const styles = {
  Primary: 'btn--primary',
  Secondary: 'btn--secondary',
  Tertiary: 'btn--tertiary'
};

const states = {
  Active: '',
  Disabled: 'disabled'
};

const sizes = {
  Large: 'btn--large',
  Medium: 'btn--medium',
  Small: 'btn--small'
};

const linkSizes = {
  Default: '',
  Large: 'btn-link--large',
  Small: 'btn-link--small'
};

const linkColors = {
  Default: '',
  'On Tint': 'on-tint'
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
  const buttonSize = select('Size', sizes, sizes.Large);

  return `
    <button type="button" class="btn ${buttonStyle} ${buttonSize}" ${buttonState}>
      ${buttonText}
    </button>`;
};

export const Link = () => {
  const buttonText = text('Button Text', 'Button Text');
  const buttonSize = select('Size', linkSizes, sizes.Default);
  const buttonState = select('State', states, states.Active);
  const linkColor = select('Color', linkColors, linkColors.Default);

  // set background color to $color-background-tertiary for white link
  useEffect(() => {
    const storyBackground = document.querySelector('.sb-show-main');

    if (linkColor === 'on-tint') {
      storyBackground.style.background = '#173145';
    } else {
      storyBackground.style.background = '';
    }
  });

  return `
    <button type="button" class="btn btn--link ${buttonSize} ${linkColor}" ${buttonState}>
      ${buttonText}
    </button>`;
};

export const Icon = () => {
  const iconId = select('Icon', icons, icons.Add);
  const buttonText = text('Button Title', 'Button Title');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonSize = select('Size', sizes, sizes.Large);
  const buttonState = select('State', states, states.Active);

  return `
    <button type="button" class="btn btn--icon ${buttonStyle} ${buttonSize}" ${buttonState}>
      <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
        <use xlink:href="img/icons.svg#${iconId}"></use>
      </svg>
      <span class="accessibly-hidden">${buttonText}</span>
    </button>`;
};

export const IconWithText = () => {
  const iconId = select('Icon', icons, icons.Add);
  const buttonText = text('Button Text', 'Button Text');
  const buttonStyle = select('Style', styles, styles.Primary);
  const buttonSize = select('Size', sizes, sizes.Large);
  const buttonState = select('State', states, states.Active);

  return `
    <button type="button" class="btn btn--icon-text ${buttonStyle} ${buttonSize}" ${buttonState}>
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
      Object.keys(sizes)
        .map(sizeKey =>
          itemWrapper(`
            <button type="button" class="btn ${styles[styleKey]} ${
            sizes[sizeKey]
          }">
              ${buttonText}
            </button>
            <footer style="${showInfo ? '' : 'display: none'}">
              <span class="type-style--bold">Text Button</span>
              <span>style: ${styleKey}</span>
              <span>size: ${sizeKey}</span>
            </footer>
          `)
        )
        .join('')
    )
    .join('');

  const iconButtonExamples = Object.keys(styles)
    .map(styleKey =>
      Object.keys(sizes)
        .map(sizeKey =>
          itemWrapper(`
            <button type="button" class="btn btn--icon ${styles[styleKey]} ${
            sizes[sizeKey]
          }">
              <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="/img/svg-sprite.svg#${iconId}"></use>
              </svg>
              <span class="accessibly-hidden">${buttonText}</span>
            </button>
            <footer style="${showInfo ? '' : 'display: none'}">
              <span class="type-style--bold">Icon Button</span>
              <span>style: ${styleKey}</span>
              <span>size: ${sizeKey}</span>
            </footer>
          `)
        )
        .join('')
    )
    .join('');

  const iconTextButtonExamples = Object.keys(styles)
    .map(styleKey =>
      Object.keys(sizes)
        .map(sizeKey =>
          itemWrapper(`
            <button type="button" class="btn btn--icon-text ${
              styles[styleKey]
            } ${sizes[sizeKey]}">
              <svg class="icon" width="16" height="16" viewBox="0 0 16 16">
                <use xlink:href="/img/svg-sprite.svg#${iconId}"></use>
              </svg>
              ${buttonText}
            </button>
            <footer style="${showInfo ? '' : 'display: none'}">
              <span class="type-style--bold">Icon Button With Text</span>
              <span>style: ${styleKey}</span>
              <span>size: ${sizeKey}</span>
            </footer>
          `)
        )
        .join('')
    )
    .join('');

  const linkButtonExamples = Object.keys(linkSizes)
    .map(sizeKey =>
      itemWrapper(`
        <button type="button" class="btn btn--link ${
          sizeKey !== 'Default' ? linkSizes[sizeKey] : ''
        }">
          ${buttonText}
        </button>
        <footer style="${showInfo ? '' : 'display: none'}">
          <span class="type-style--bold">Link Button</span>
          <span>size: ${sizeKey}</span>
        </footer>
      `)
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
  title: 'Controls & Inputs / Buttons',
  decorators: [withKnobs]
};
