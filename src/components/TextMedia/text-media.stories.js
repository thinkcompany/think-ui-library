import { select, text, boolean } from '@storybook/addon-knobs';

const backgrounds = ['white', 'tan', 'glass', 'blue', 'navy'];
const alignments = ['center', 'left', 'right'];

export const centered = () => {
  const background = select('Background', backgrounds, 'white');
  const alignment = select('Text Alignment', alignments, 'left');
  const eyebrow = text('Eyebrow', 'Text and Image');
  const heading = text('Heading', 'Technology Integration');
  const lede = text(
    'Lede',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque nunc vel turpis tempor tincidunt. Maecenas in felis suscipit, ornare felis at, posuere eros.'
  );
  const image = text('Image', 'https://placekitten.com/800/400');
  const cta = boolean('CTA', true);

  return /*html*/ `
  <div class="tco-container-wrapper tco-container-wrapper--${background}">
    <div class="tco-container tco-container--default">
      <div class="tco-text-media tco-text-media--align-${alignment}">
        <div class="tco-text-media-content tco-text-media-content--text">
          <span class="tco-text-media-eyebrow">${eyebrow}</span>
          <h1 class="tco-text-media-heading">${heading}</h1>
          <div class="tco-text-media-lede">
            <p>${lede}</p>
          </div>
          <a href="#" class="tco-btn tco-btn--primary">Learn More</a>
        </div>
        <div class="tco-text-media-content tco-text-media-content--media">
          <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
        </div>
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

  return /*html*/ `
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

  return /*html*/ `
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
