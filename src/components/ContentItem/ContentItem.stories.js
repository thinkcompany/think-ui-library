import { text } from '@storybook/addon-knobs';

const contentItem = () => {
  const title = text('Title', 'Become a Digital Disruptor in a Changing World');
  const category = text('Category', 'Workshop');
  const imageSrc = text('Image Src', 'https://placekitten.com/800/400');
  const excerpt = text(
    'Excerpt',
    'Learn more about best practices for achieving internal alignment and framing conversations for the best possible outcome.'
  );
  const authors = [
    ' Kiefer William Frederick Dempsey George Rufus Sutherland',
    ' Benicio Monserrate Rafael del Toro Sánchez',
    ' Julia Scarlett Elizabeth Louis-Dreyfus'
  ];
  const displayAuthors = () =>
    authors.map(author => `<strong>${author}</strong>`);

  return `
  <article class="tco-content-item">
  <div class="tco-content-column">
    <div class="tco-content-item-image">
      <img class="tco-card-image" alt="Card image" src="${imageSrc}" />
    </div>
  </div>
    <div class="tco-content-column">
      <header class="tco-content-item-header">
        <div class="tco-content-item-meta">
          <span class="tco-tag"> ${category}</span>
          <div class="tco-content-item-date">
            <span>June 2, 2020</span> &bull; <span>Malvern, PA</span>
          </div>
        </div>
        <h3 class="tco-heading">
          <a href="#">
              ${title}
          </a>
        </h3>
        ${
          // If excerpt exists, display it
          excerpt
            ? `<div class="tco-content-item-excerpt">
                <p>${excerpt}</p>
              </div>`
            : ''
        }
        <div class="tco-content-item-authors">
          <p>Hosted by</p>
          <p>${displayAuthors()}</p>
        </div>
      </header>
      <footer class="tco-content-item-footer">
        <button class="tco-btn tco-btn--primary">Read more</button>
      </footer>
    </div>
  </article>`;
};

export { contentItem };

export default {
  title: 'Components / Content Item',
  parameters: {
    options: {
      showPanel: false
    }
  }
};
