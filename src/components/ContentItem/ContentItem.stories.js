import { select, text } from '@storybook/addon-knobs';

const alignments = ['center', 'left', 'right'];

export const Default = () => {
  const alignment = select('Media Alignment', alignments, 'right');
  const textAlignment = select('Text Alignment', alignments, 'left');
  const tag = text('Tag', 'Workshop');
  const date = text('Date', 'June 2, 2020');
  const location = text('Location', 'Malvern, PA');
  const heading = text(
    'Title',
    'Become a Digital Disruptor in a Changing World (Pact Phorum)'
  );
  const excerpt = text(
    'Excerpt',
    'Learn more about best practices for acheiving internal alignment and framing conversations for the best possible outcome.'
  );
  const authors = text('Authors', 'Shawn Hickman, John Young, Dave Thomas');
  const authorHeading = text('Author Heading', 'Hosted by:');
  const action = text('CTA', 'Learn More');
  const image = text('Image', 'https://placekitten.com/960/694');

  return `
    <div class="tco-container-wrapper">
      <div class="tco-container tco-container--default">
        <article class="tco-content-item tco-text-media tco-text-media--align-${alignment} tco-content-item--align-${alignment}">
          <div class="tco-text-media-content tco-text-media-content-text tco-text-media-content-text--${textAlignment}">
            <div class="tco-content-item-meta">
              ${
                tag
                  ? `
                <span class="tco-tag">${tag}</span>
                `
                  : ''
              }
              <span class="tco-content-item-date">${date}</span>
              ${
                location
                  ? `
                <span class="tco-content-item-location">${location}</span>
              `
                  : ''
              }
            </div>
            <h1 class="tco-content-item-heading">
              <a href="#" class="tco-link">
                  ${heading}
              </a>
            </h1>
            ${
              excerpt
                ? `
              <p class="tco-text-media-lede">${excerpt}</p>
              `
                : ''
            }
            ${
              authors
                ? `
              <span class="tco-content-item-author-heading">${authorHeading}</span>
              <span class="tco-content-item-authors">${authors}</span>
              `
                : ''
            }
            <a href="#" class="tco-btn tco-btn--primary">${action}</a>
          </div>
          <div class="tco-text-media-content tco-text-media-content-media">
            <img class="tco-text-media-image" alt="An adorable kitten" src="${image}" />
          </div>
        </article>
      </div>
    </div>
  `;
};

export default {
  title: 'Components / Content Item'
};
