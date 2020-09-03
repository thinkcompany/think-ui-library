import { select, text } from '@storybook/addon-knobs';

const backgrounds = ['white', 'tan', 'glass', 'blue', 'navy'];

export const centered = () => {
  const background = select('Background', backgrounds, 'white');
  const eyebrow = text('Eyebrow', 'Eyebrow');
  const heading = text('Heading', 'Section Title');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod augue imperdiet luctus vestibulum. Nulla facilisi. Vivamus tincidunt, libero in ultricies aliquam, urna diam faucibus magna, sed bibendum lectus orci ac magna.'
  );
  const image = text('Image', 'https://placekitten.com/800/400');

  return `
  <div class="tco-container-wrapper tco-container-wrapper--${background}">
  <div class="tco-container">
  <div class="tco-text-media">
      <div class="tco-text-media-content">
        <span class="tco-text-media-eyebrow">${eyebrow}</span>
        <h1 class="tco-text-media-heading">${heading}</h1>
        <div class="tco-text-media-lede">
          <p>${lede}</p>
        </div>
      </div>
      <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
    </div>
  </div>
  </div>`;
};

export const textLeft = () => {
  const background = select('Background', backgrounds, 'white');
  const eyebrow = text('Eyebrow', 'Eyebrow');
  const heading = text('Heading', 'Section Title');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod augue imperdiet luctus vestibulum. Nulla facilisi. Vivamus tincidunt, libero in ultricies aliquam, urna diam faucibus magna, sed bibendum lectus orci ac magna.'
  );
  const image = text('Image', 'https://placekitten.com/580/580');
  const linkText = text('Link Text', 'Button');

  return `
  <div class="tco-container-wrapper tco-container-wrapper--${background}">
  <div class="tco-container">
  <div class="tco-text-media tco-text-media--align-left">
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

export const textRight = () => {
  const background = select('Background', backgrounds, 'white');
  const eyebrow = text('Eyebrow', 'Eyebrow');
  const heading = text('Heading', 'Section Title');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod augue imperdiet luctus vestibulum. Nulla facilisi. Vivamus tincidunt, libero in ultricies aliquam, urna diam faucibus magna, sed bibendum lectus orci ac magna.'
  );
  const image = text('Image', 'https://placekitten.com/580/580');
  const linkText = text('Link Text', 'Button');

  return `
  <div class="tco-container-wrapper tco-container-wrapper--${background}">
  <div class="tco-container">
  <div class="tco-text-media tco-text-media--align-right">
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

export default {
  title: 'Components / Text & Media'
};
