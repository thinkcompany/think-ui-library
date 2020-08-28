import { array, text, boolean } from '@storybook/addon-knobs';
import data from './content-item.json';

const { title, authors, category, imageSrc, excerpt } = data[0];

const template = item => {
  return `
  <article class="tco-content-item ${
    item.mediaLeft ? 'tco-content-item--media-left' : ''
  } ${item.featured ? 'tco-content-item--featured' : ''}">
  <div class="tco-content-column tco-content-column-media">
    <div class="tco-content-item-image">
      <img alt="Card image" src="${item.imageSrc}" />
    </div>
  </div>
    <div class="tco-content-column tco-content-column-body">
      <header class="tco-content-item-header">
        <div class="tco-content-item-meta">
          <p class="tco-content-category"><span class="tco-tag">${
            item.category
          }</span></p>
          <div class="tco-content-item-date">
            <span class="tco-type-body">June 2, 2020</span> &bull; <span class="tco-type-body">Malvern, PA</span>
          </div>
        </div>
        <h3 class="tco-heading">
          <a href="#" class="tco-link">
              ${item.title}
          </a>
        </h3>
        ${
          // If excerpt exists, display it
          item.excerpt
            ? `<div class="tco-content-item-excerpt">
                <p class="tco-type-body">${item.excerpt}</p>
              </div>`
            : ''
        }
        <div class="tco-content-byline">
          <p class="tco-type-body tco-content-hosts">Hosted by</p>
          <p class="tco-type-body tco-content-authors">${item.authors}</p>
        </div>
      </header>
      <footer class="tco-content-item-footer">
        <button class="tco-btn tco-btn--primary">Read more</button>
      </footer>
    </div>
  </article>`;
};

export const Default = () => {
  const categoryKnob = text('Category', category);
  const imageSrcKnob = text('Image Src', imageSrc);
  const excerptKnob = text('Excerpt', excerpt);
  const authorKnob = array('Authors', authors);
  const mediaLeft = boolean('Media on Left?', false);
  const displayAuthors = () => {
    const list = authorKnob.map(author => `<strong>${author}</strong>`);

    return list.join(', ');
  };

  return template({
    title: text('Title', title),
    category: categoryKnob,
    imageSrc: imageSrcKnob,
    excerpt: excerptKnob,
    mediaLeft: mediaLeft,
    authors: displayAuthors()
  });
};

export const Featured = () => {
  const categoryKnob = text('Category', category);
  const imageSrcKnob = text('Image Src', imageSrc);
  const excerptKnob = text('Excerpt', excerpt);
  const authorKnob = array('Authors', authors);
  const mediaLeft = boolean('Media on Left?', false);
  const displayAuthors = () => {
    const list = authorKnob.map(author => `<strong>${author}</strong>`);

    return list.join(', ');
  };

  return template({
    title: text('Title', title),
    category: categoryKnob,
    imageSrc: imageSrcKnob,
    excerpt: excerptKnob,
    mediaLeft: mediaLeft,
    featured: true,
    authors: displayAuthors()
  });
};

export const List = () => {
  const output = data.map(item => {
    const displayAuthors = () =>
      item.authors.map(author => `<strong>${author}</strong>`).join('');

    return template({
      title: item.title,
      category: item.category,
      imageSrc: item.imageSrc,
      excerpt: item.excerpt,
      mediaLeft: false,
      authors: displayAuthors()
    });
  });

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
