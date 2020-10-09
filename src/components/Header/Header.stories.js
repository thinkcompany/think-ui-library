import { select, text } from '@storybook/addon-knobs';

const backgrounds = ['white', 'tan', 'glass', 'blue', 'navy'];
const directions = ['default', 'left', 'right'];

export const withKnobs = () => {
  const background = select('Background', backgrounds, 'white');
  const direction = select('Text Position', directions, 'default');
  const eyebrow = text('Eyebrow', 'Eyebrow');
  const heading = text('Heading', 'Page Title');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod augue imperdiet luctus vestibulum. Nulla facilisi. Vivamus tincidunt, libero in ultricies aliquam, urna diam faucibus magna, sed bibendum lectus orci ac magna.'
  );
  const image = text('Image', 'https://placekitten.com/580/580');
  const linkText = text('Link Text', 'Button');

  return `
  <div class="tco-container-wrapper tco-container-wrapper--${background}">
  <div class="tco-container">
  <div class="tco-text-media tco-text-media--align-${direction}">
      <div class="tco-text-media-content">
        <span class="tco-text-media-eyebrow">${eyebrow}</span>
        <h1 class="tco-text-media-heading">${heading}</h1>
        <div class="tco-text-media-lede">
          <p>${lede}</p>
        </div>
        <a href="#" class="tco-btn tco-btn--primary tco-text-media-cta">${linkText}</a>
      </div>
      <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
    </div>
  </div>
  </div>`;
};

export const homepage = () => {
  const background = select('Background', backgrounds, 'navy');
  const heading = text('Heading', 'Welcome to Think Company');
  const lede = text(
    'Lede',
    "We're a team of business-minded designers, developers, and thinkers who help you create great products and services for your customers and employees."
  );
  const image = text(
    'Image',
    'https://3vwizk2qtr8l3diwrm3r2ba0-wpengine.netdna-ssl.com/wp-content/themes/tbiv3/img/home/homepage-hero.svg'
  );
  const linkText = text('Link Text', "Let's Think Together");

  return `
  <div class="tco-container-wrapper tco-container-wrapper--${background}" style="margin: -20px;">
  <div class="tco-container">
  <div class="tco-text-media tco-text-media--header tco-text-media--homepage">
    <div class="tco-text-media-container">
      <div class="tco-text-media-content">
        <h1 class="tco-text-media-heading">${heading}</h1>
        <div class="tco-text-media-lede">
          <p>${lede}</p>
        </div>
        <a href="#" class="tco-btn tco-btn--primary tco-text-media-cta">${linkText}</a>
      </div>
    </div>
    <div class="tco-text-media-image" style="background-image:url(${image})">
    </div>
  </div>
  </div>
  </div>
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
  <div class="tco-container-wrapper tco-container-wrapper--${background}">
  <div class="tco-container">
  <div class="tco-text-media tco-text-media--with-back-link">
      <div class="tco-text-media-content">
        <a class="tco-text-media-back-link" href="#">
          <svg class="tco-icon tco-icon--sm" width="16" height="16" viewBox="0 0 16 16">
            <use xlink:href="/img/icons.svg#icon-chevron-left"></use>
           </svg>
           ${breadcrumb}
        </a>
        <h1 class="tco-text-media-heading">${heading}</h1>
        <time class="tco-text-media-date">${date}</time>
      </div>
      <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
    </div>
  </div>
  </div>
  </div>
  </div>`;
};

export default {
  title: 'Components / Header'
};
