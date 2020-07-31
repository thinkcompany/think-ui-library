import { select, text } from '@storybook/addon-knobs';

const backgrounds = ['white', 'tan', 'glass', 'primary-blue', 'midnight-blue'];

export const centered = () => {
  const background = select('Background', backgrounds, 'white');
  const eyebrow = text('Eyebrow', 'Eyebrow');
  const heading = text('Heading', 'Page Title');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod augue imperdiet luctus vestibulum. Nulla facilisi. Vivamus tincidunt, libero in ultricies aliquam, urna diam faucibus magna, sed bibendum lectus orci ac magna.'
  );
  const image = text('Image', 'https://placekitten.com/800/400');

  return `
  <div class="tco-header tco-background--${background}">
    <div class="tco-header-container">
      <div class="tco-header-content">
        <span class="tco-header-eyebrow">${eyebrow}</span>
        <h1 class="tco-header-heading">${heading}</h1>
        <div class="tco-header-lede">
          <p>${lede}</p>
        </div>
      </div>
      <img class="tco-header-image" alt="An adorable kitten" src="${image}" />
    </div>
  </div>`;
};

export const textLeft = () => {
  const background = select('Background', backgrounds, 'white');
  const eyebrow = text('Eyebrow', 'Eyebrow');
  const heading = text('Heading', 'Page Title');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod augue imperdiet luctus vestibulum. Nulla facilisi. Vivamus tincidunt, libero in ultricies aliquam, urna diam faucibus magna, sed bibendum lectus orci ac magna.'
  );
  const image = text('Image', 'https://placekitten.com/580/580');

  return `
  <div class="tco-header tco-background--${background}">
    <div class="tco-header-container tco-header-container--align-left">
      <div class="tco-header-content">
        <span class="tco-header-eyebrow">${eyebrow}</span>
        <h1 class="tco-header-heading">${heading}</h1>
        <div class="tco-header-lede">
          <p>${lede}</p>
        </div>
      </div>
      <img class="tco-header-image" alt="An adorable kitten" src="${image}" />
    </div>
  </div>`;
};

export const textRight = () => {
  const background = select('Background', backgrounds, 'white');
  const eyebrow = text('Eyebrow', 'Eyebrow');
  const heading = text('Heading', 'Page Title');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod augue imperdiet luctus vestibulum. Nulla facilisi. Vivamus tincidunt, libero in ultricies aliquam, urna diam faucibus magna, sed bibendum lectus orci ac magna.'
  );
  const image = text('Image', 'https://placekitten.com/580/580');

  return `
  <div class="tco-header tco-background--${background}">
    <div class="tco-header-container tco-header-container--align-right">
      <div class="tco-header-content">
        <span class="tco-header-eyebrow">${eyebrow}</span>
        <h1 class="tco-header-heading">${heading}</h1>
        <div class="tco-header-lede">
          <p>${lede}</p>
        </div>
      </div>
      <img class="tco-header-image" alt="An adorable kitten" src="${image}" />
    </div>
  </div>`;
};

export const withBreadcrumb = () => {
  const background = select('Background', backgrounds, 'white');
  const breadcrumb = text('Breadcrumb', 'Breadcrumb');
  const heading = text('Heading', 'Page Title');
  const date = text('Date', 'July 21, 2020');
  const image = text('Image', 'https://placekitten.com/1180/785');

  return `
  <div class="tco-header tco-header--with-back-link tco-background--${background}">
    <div class="tco-header-container">
      <div class="tco-header-content">
        <a class="tco-header-back-link" href="#">
          <svg class="icon icon--sm" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="/img/icons.svg#icon-chevron-left"></use>
           </svg>
           ${breadcrumb}
        </a>
        <h1 class="tco-header-heading">${heading}</h1>
        <time class="tco-header-date">${date}</time>
      </div>
      <img class="tco-header-image" alt="An adorable kitten" src="${image}" />
    </div>
  </div>`;
};

export default {
  title: 'Components / Header'
};
