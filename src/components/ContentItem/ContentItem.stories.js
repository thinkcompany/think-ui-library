import { array, object, text, boolean } from '@storybook/addon-knobs';
import data from './content-item.json';

// Should be its own component
const tag = (item, groupId) => {
  return item.category
    ? `<p class="tco-content-category">
  <span class="tco-tag">    
  <svg class="icon icon-sm" width="16" height="16" viewBox="0 0 16 16">
  <use xlink:href="/img/icons.svg#${item.iconId}"></use>
  </svg>
  ${text('Category', item.category, groupId)}</span>
  </p>`
    : '';
};

const template = (item, groupId = 'Item 1') => {
  const {
    action,
    authors,
    date,
    excerpt,
    featured,
    imageSrc,
    location,
    mediaLeft,
    title
  } = item;

  // Bind knobs to stories
  const actionKnob = object('Action', action, groupId);
  const authorsKnob = array('Authors', authors, ', ', groupId);
  const dateKnob = text('Date', date, groupId);
  const excerptKnob = text('Excerpt', excerpt, groupId);
  const featuredKnob = boolean('Featured?', featured, groupId);
  const imageSrcKnob = text('Image Src', imageSrc, groupId);
  const locationKnob = text('Location', location, groupId);
  const mediaLeftKnob = boolean('Media on Left?', mediaLeft, groupId);
  const titleKnob = text('Title', title, groupId);

  return `
  <article class="tco-content-item ${
    mediaLeftKnob ? 'tco-content-item--media-left' : ''
  } ${featuredKnob ? 'tco-content-item--featured' : ''}">
  <div class="tco-content-column tco-content-column-media">
    <div class="tco-content-item-image">
      <img alt="Card image" src="${imageSrcKnob}" />
    </div>
  </div>
    <div class="tco-content-column tco-content-column-body">
      <header class="tco-content-item-header">
        <div class="tco-content-item-meta">
          ${tag(item, groupId)}
          <div class="tco-content-item-date">
            ${dateKnob ? `<span class="tco-type-body">${dateKnob}</span>` : ''}
            ${
              locationKnob
                ? `<span class="tco-type-body">${locationKnob}</span>`
                : ''
            }
          </div>
        </div>
        <h3 class="tco-heading">
          <a href="#" class="tco-link">
              ${titleKnob}
          </a>
        </h3>
        ${
          // If excerpt exists, display it
          excerptKnob
            ? `<div class="tco-content-item-excerpt">
                <p class="tco-type-body">${excerptKnob}</p>
              </div>`
            : ''
        }
        <div class="tco-content-byline">
          <p class="tco-type-body tco-content-hosts">Hosted by</p>
          <p class="tco-type-body tco-content-authors">${authorsKnob.join(
            ', '
          )}</p>
        </div>
      </header>
      <footer class="tco-content-item-footer">
      ${
        actionKnob
          ? `<button class="tco-btn tco-btn--primary">${actionKnob.text}</button>`
          : ''
      }
      </footer>
    </div>
  </article>`;
};

export const Default = () => {
  return template({ ...data[0], featured: false });
};

export const Featured = () => template({ ...data[1], featured: true });

export const List = () => {
  const output = data.map((item, index) =>
    template(
      {
        ...item,
        mediaLeft: false
      },
      `Item ${index + 1}`
    )
  );

  return output.join('');
};

export default {
  title: 'Components / Content Item',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
