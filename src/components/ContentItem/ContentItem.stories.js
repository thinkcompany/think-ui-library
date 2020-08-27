import { array, text, boolean } from '@storybook/addon-knobs';

const authorSelection = [
  ' Kiefer William Frederick Dempsey George Rufus Sutherland',
  ' Benicio Monserrate Rafael del Toro Sánchez',
  ' Julia Scarlett Elizabeth Louis-Dreyfus'
];

export const Default = () => {
  const title = text('Title', 'Become a Digital Disruptor in a Changing World');
  const category = text('Category', 'Workshop');
  const imageSrc = text('Image Src', 'https://placekitten.com/325/245');
  const excerpt = text(
    'Excerpt',
    'Learn more about best practices for achieving internal alignment and framing conversations for the best possible outcome.'
  );
  const authors = array('Authors', authorSelection);

  const mediaLeft = boolean('Media on Left?', false);
  const displayAuthors = () => {
    const list = authors.map(author => `<strong>${author}</strong>`);

    return list.join(', ');
  };

  return `
  <article class="tco-content-item ${
    mediaLeft ? 'tco-content-item--media-left' : ''
  }">
  <div class="tco-content-column tco-content-column-media">
    <div class="tco-content-item-image">
      <img alt="Card image" src="${imageSrc}" />
    </div>
  </div>
    <div class="tco-content-column tco-content-column-body">
      <header class="tco-content-item-header">
        <div class="tco-content-item-meta">
          <p class="tco-content-category"><span class="tco-tag">${category}</span></p>
          <div class="tco-content-item-date">
            <span class="tco-type-body">June 2, 2020</span> &bull; <span class="tco-type-body">Malvern, PA</span>
          </div>
        </div>
        <h3 class="tco-heading">
          <a href="#" class="tco-link">
              ${title}
          </a>
        </h3>
        ${
          // If excerpt exists, display it
          excerpt
            ? `<div class="tco-content-item-excerpt">
                <p class="tco-type-body">${excerpt}</p>
              </div>`
            : ''
        }
        <div class="tco-content-byline">
          <p class="tco-type-body tco-content-hosts">Hosted by</p>
          <p class="tco-type-body tco-content-authors">${displayAuthors()}</p>
        </div>
      </header>
      <footer class="tco-content-item-footer">
        <button class="tco-btn tco-btn--primary">Read more</button>
      </footer>
    </div>
  </article>`;
};

export const Featured = () => {
  const title = text('Title', 'Become a Digital Disruptor in a Changing World');
  const category = text('Category', 'Workshop');
  const imageSrc = text('Image Src', 'https://placekitten.com/325/245');
  const excerpt = text(
    'Excerpt',
    'Learn more about best practices for achieving internal alignment and framing conversations for the best possible outcome.'
  );
  const mediaLeft = boolean('Media on Left?', false);
  const authors = array('Authors', authorSelection);
  const displayAuthors = () => {
    const list = authors.map(author => `<strong>${author}</strong>`);

    return list.join(', ');
  };

  return `
  <article class="tco-content-item tco-content-item--featured ${
    mediaLeft ? 'tco-content-item--media-left' : ''
  }">
  <div class="tco-content-column tco-content-column-media">
    <div class="tco-content-item-image">
      <img alt="Card image" src="${imageSrc}" />
    </div>
  </div>
    <div class="tco-content-column tco-content-column-body">
      <header class="tco-content-item-header">
        <div class="tco-content-item-meta">
          <p class="tco-content-category"><span class="tco-tag">${category}</span></p>
          <div class="tco-content-item-date">
            <span class="tco-type-body">June 2, 2020</span> &bull; <span class="tco-type-body">Malvern, PA</span>
          </div>
        </div>
        <h3 class="tco-heading">
          <a href="#" class="tco-link">
              ${title}
          </a>
        </h3>
        ${
          // If excerpt exists, display it
          excerpt
            ? `<div class="tco-content-item-excerpt">
                <p class="tco-type-body">${excerpt}</p>
              </div>`
            : ''
        }
        <div class="tco-content-byline">
          <p class="tco-type-body tco-content-hosts">Hosted by</p>
          <p class="tco-type-body tco-content-authors">${displayAuthors()}</p>
        </div>
      </header>
      <footer class="tco-content-item-footer">
        <button class="tco-btn tco-btn--primary">Read more</button>
      </footer>
    </div>
  </article>`;
};

export const List = () => {
  const title = 'Become a Digital Disruptor in a Changing World';
  const category = 'Workshop';
  const imageSrc = 'https://placekitten.com/325/245';
  const excerpt =
    'Learn more about best practices for achieving internal alignment and framing conversations for the best possible outcome.';
  const authors = array('Authors', authorSelection);
  const displayAuthors = () => {
    const list = authors.map(author => `<strong>${author}</strong>`);

    return list.join(', ');
  };

  const article = `
  <article class="tco-content-item">
  <div class="tco-content-column tco-content-column-media">
    <div class="tco-content-item-image">
      <img alt="Card image" src="${imageSrc}" />
    </div>
  </div>
    <div class="tco-content-column tco-content-column-body">
      <header class="tco-content-item-header">
        <div class="tco-content-item-meta">
          <p class="tco-content-category"><span class="tco-tag">${category}</span></p>
          <div class="tco-content-item-date">
            <span class="tco-type-body">June 2, 2020</span> &bull; <span class="tco-type-body">Malvern, PA</span>
          </div>
        </div>
        <h3 class="tco-heading">
          <a href="#" class="tco-link">
              ${title}
          </a>
        </h3>
        ${
          // If excerpt exists, display it
          excerpt
            ? `<div class="tco-content-item-excerpt">
                <p class="tco-type-body">${excerpt}</p>
              </div>`
            : ''
        }
        <div class="tco-content-byline">
          <p class="tco-type-body tco-content-hosts">Hosted by</p>
          <p class="tco-type-body tco-content-authors">${displayAuthors()}</p>
        </div>
      </header>
      <footer class="tco-content-item-footer">
        <button class="tco-btn tco-btn--primary">Read more</button>
      </footer>
    </div>
  </article>`;

  return `${article}${article}${article}`;
};

export default {
  title: 'Components / Content Item',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
